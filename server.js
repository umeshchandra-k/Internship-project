const express = require('express');
require('dotenv').config();
const { Pool } = require('pg');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1:5432/sahrudaya';

// Show masked DB host/database for debugging (never print credentials)
function mask(str) {
  if (!str) return '';
  if (str.length <= 6) return str.replace(/.(?=.{1})/g, '*');
  return str.slice(0, 2) + '*'.repeat(Math.max(0, str.length - 4)) + str.slice(-2);
}

try {
  let host = '';
  let db = '';
  try {
    const u = new URL(DATABASE_URL);
    host = u.hostname || '';
    db = (u.pathname || '').replace(/^\//, '');
  } catch (e) {
    const m = DATABASE_URL.match(/@([^/]+)\/([^?]+)/);
    if (m) {
      host = m[1].split(':')[0];
      db = m[2];
    }
  }
  console.log('Using DB:', `${mask(host)}/${mask(db)}`);
} catch (e) {
  console.log('Using DB: (unable to parse connection string)');
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// PostgreSQL (Neon) pool
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: DATABASE_URL.includes('neon') ? { rejectUnauthorized: false } : false,
});

async function initDB() {
  // create contacts table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `;
  await pool.query(createTableQuery);
  console.log('Postgres initialized / contacts table ready');
}

initDB().catch((err) => console.error('Init DB error:', err));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, captchaAnswer } = req.body;
    if (!name || !email || !message || !captchaAnswer) {
      return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    // Simple server-side fallback validation for captcha answer format
    if (!/^[0-9]+$/.test(captchaAnswer)) {
      return res.status(400).json({ status: 'error', message: 'Invalid captcha answer' });
    }

    const insertQuery = 'INSERT INTO contacts(name, email, message) VALUES($1, $2, $3) RETURNING id, created_at';
    const result = await pool.query(insertQuery, [name, email, message]);
    return res.json({ status: 'ok', id: result.rows[0].id });
  } catch (error) {
    console.error('Contact submit error:', error);
    return res.status(500).json({ status: 'error', message: 'Server error' });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const q = 'SELECT id, name, email, message, created_at FROM contacts ORDER BY created_at DESC';
    const { rows } = await pool.query(q);
    return res.json(rows);
  } catch (error) {
    console.error('Fetch contacts error:', error);
    return res.status(500).json({ status: 'error', message: 'Server error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
