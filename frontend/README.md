
# 🚀 Auth Template SaaS

<p align="center">
  <a href="https://github.com/KayoThyerre">
    <img src="https://img.shields.io/badge/GitHub-KayoThyerre-181717?style=for-the-badge&logo=github" />
  </a>
  <a href="https://www.linkedin.com/in/kayothyerre/">
    <img src="https://img.shields.io/badge/LinkedIn-KayoThyerre-0A66C2?style=for-the-badge&logo=linkedin" />
  </a>
  <a href="https://www.instagram.com/kayoalarcon/?hl=pt_BR">
    <img src="https://img.shields.io/badge/Instagram-@kayoalarcon-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
  </a>
</p>

<p align="center">
  <img src="./public/login-private.gif" alt="App Preview" width="800"/>
</p>
<p align="center">
  <img src="./public/login-public.gif" alt="App Preview" width="800"/>
</p>

<p align="center">
  <b>A production-ready authentication and admin template built for modern SaaS applications.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
</p>

---

## 📦 Overview

This project is a **full-stack SaaS starter template** designed to accelerate development for freelancers and product builders.

It provides a complete authentication system, admin panel, and a modern UI foundation with theme support — allowing you to skip boilerplate and focus on building real features.

---

## ✨ Features

### 🔐 Authentication

* User registration with email verification
* Secure login using JWT
* Password hashing with bcrypt
* Password update functionality

### 👤 User Management

* Role-based access control (ADMIN / USER)
* Admin approval system
* User listing and management panel

### 🛠 Admin Panel

* Dashboard interface
* User approval / rejection
* Profile management

### 🎨 UI & Experience

* Light / Dark mode with smooth transitions
* Custom background system with visual identity
* Glassmorphism-inspired layout
* Sidebar with interactive hover effects
* Fully responsive design

---

## 🧱 Tech Stack

### Frontend

* React
* TypeScript
* Vite
* TailwindCSS
* React Router

### Backend

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* JWT Authentication
* bcrypt

---

## 📁 Project Structure

```
auth-template-clean-v1
│
├── auth-template-api
│   ├── prisma
│   └── src
│       ├── middlewares
│       ├── routes
│       └── server.ts
│
└── auth-template-front
    └── src
        ├── api
        ├── contexts
        ├── hooks
        ├── layouts
        ├── pages
        ├── routes
        └── App.tsx
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KayoThyerre/auth-template-saas.git
```

---

### 2. Setup Backend

```bash
cd auth-template-api
npm install
```

Create a `.env` file:

```env
DATABASE_URL=
JWT_SECRET=
```

Run migrations:

```bash
npx prisma migrate dev
```

Start server:

```bash
npm run dev
```

---

### 3. Setup Frontend

```bash
cd auth-template-front
npm install
npm run dev
```

---

## 🌗 Theme System

* TailwindCSS with `darkMode: "class"`
* Custom `useTheme` hook
* Persisted via `localStorage`
* Smooth animated transitions between themes

---

## 🔒 Security Features

* JWT-based authentication
* Password hashing with bcrypt
* Rate limiting for email verification
* Protected routes (frontend & backend)

---

## 🎯 Use Cases

* SaaS starter projects
* Admin dashboards
* Internal tools
* MVP development
* Freelance projects

---

## 🚀 Future Improvements

* Multi-tenant architecture
* Billing integration (Stripe)
* Audit logs
* Feature flags system

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Developed by **Kayo Thyerre**

* GitHub: https://github.com/KayoThyerre
* LinkedIn: https://www.linkedin.com/in/kayothyerre/
* Instagram: https://www.instagram.com/kayoalarcon/

---

## 💡 Final Note

This template was built with scalability, performance, and developer experience in mind.

If you're building a SaaS product, this gives you a solid foundation so you can focus on what really matters: your business logic.
