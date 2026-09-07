# SAHRUDAYA – Professional Community Organization Website

A modern, responsive community organization website built using Node.js, Express.js, and Neon (PostgreSQL) to showcase SAHRUDAYA's mission, leadership, services, and community initiatives.

---

## 🚀 Features

- Modern glass morphism UI with premium blue and purple theme
- Fully responsive design for desktop, tablet, and mobile
- Home, Who We Are, Services, Gallery, Executive Board, and Contact sections
- Contact form with arithmetic CAPTCHA verification
- Neon PostgreSQL database integration for storing contact messages securely
- Gallery with Previous/Next navigation
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
- Neon PostgreSQL (pg)

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

### 3. Database Setup (Neon PostgreSQL)

Ensure your Neon database is active online and configure your local environment variable.

Default environment variable setup in `.env`:

DATABASE_URL=postgresql://user:password@ep-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require

### 4. Run the application

```bash
npm start
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
