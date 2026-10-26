# SAHRUDAYA – Professional Community Organization Website

A modern, responsive community organization website built using **Node.js, Express.js, and MongoDB** to showcase SAHRUDAYA's mission, leadership, services, and community initiatives.

---

## 🚀 Features

- Modern glass morphism UI with premium blue and purple theme
- Fully responsive design for desktop, tablet, and mobile
- Home, Who We Are, Services, Gallery, Executive Board, and Contact sections
- Contact form with arithmetic CAPTCHA verification
- MongoDB integration for storing contact messages
- Gallery with Previous/Next navigation
- Admin image upload and gallery management
- Sticky navigation with smooth scrolling
- Clean and scalable project structure

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📁 Project Structure

```
sahrudaya/
│── index.html          # Homepage
│── admin.html          # Admin Dashboard
│── server.js           # Express Server
│── styles.css          # Website Styling
│── package.json        # Project Dependencies
│── SWAN_LOGO.jpg       # Organization Logo
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sahrudaya.git
cd sahrudaya
```

### 2. Install dependencies

```bash
npm install
```

### Admin login configuration

Add these variables to `.env` before starting the server. Use a long random value for `SESSION_SECRET` and do not commit `.env`.

```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=replace-with-a-bcrypt-hash
SESSION_SECRET=replace-with-a-long-random-secret
APP_BASE_URL=http://localhost:3000

# SMTP for registration, event, verification, and password reset emails
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASSWORD=your-smtp-password
SMTP_FROM=SAHRUDAYA <your-sender@example.com>
```

Generate a hash for a new password with `node -e "require('bcrypt').hash('your-password', 12).then(console.log)"`, then put the result in `ADMIN_PASSWORD_HASH`. Login attempts are limited to five failed attempts per IP address every 15 minutes.

### Member email setup

The server sends registration confirmations with verification links, password reset links, and new event announcements to verified members. For Gmail, set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_SECURE=true`, `SMTP_USER` to the Gmail address, and `SMTP_PASSWORD` to a Google App Password. The older `GMAIL_USER` and `GMAIL_APP_PASSWORD` variables remain supported as a Gmail-only fallback. Do not use a normal Gmail password or commit `.env`.

If SMTP variables are not configured, the server prints verification and reset links in the terminal for local development instead. Event notifications require SMTP to be configured.

Open `http://localhost:3000/admin` to sign in. The admin dashboard and the `GET /api/contacts` endpoint require an authenticated session.

### Gallery image uploads

After signing in, admins can upload JPEG, PNG, WebP, or GIF images up to 5 MB from the dashboard. Images are stored in the PostgreSQL `gallery_images` table and appear in the public gallery automatically.

### 3. Start MongoDB

Ensure MongoDB is running locally.

Default connection:

```
mongodb://127.0.0.1:27017/sahrudaya
```

### 4. Run the application

```bash
node server.js
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/contact` | Submit contact form with CAPTCHA verification |
| GET | `/api/contacts` | Retrieve all submitted contact messages |

---

## 📸 Gallery

The gallery is empty by default and supports Previous/Next navigation for uploaded images.

---

## 📞 Contact Form

The contact section includes:

- Name
- Email
- Subject
- Message
- Arithmetic CAPTCHA
- MongoDB message storage

---

## 🎨 UI Features

- Glass Morphism Design
- Gradient Backgrounds
- Smooth Animations
- Responsive Layout
- Sticky Navigation
- Professional Color Palette

---

## 📈 Future Enhancements

- Admin Login
- Image Upload System
- Event Management
- Member Registration
- Newsletter Subscription
- Email Notifications
- Admin Dashboard Analytics

---

## 👨‍💻 Author

Developed by **R V S P C Murari**

---

## 📄 License

This project is licensed under the MIT License.
