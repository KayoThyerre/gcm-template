# gcm-template

[![Monorepo](https://img.shields.io/badge/architecture-monorepo-0f172a?style=for-the-badge)](./)
[![Frontend](https://img.shields.io/badge/frontend-React%20%2B%20TypeScript%20%2B%20Vite-2563eb?style=for-the-badge)](./frontend)
[![Backend](https://img.shields.io/badge/backend-Node.js%20%2B%20Express%20%2B%20Prisma-16a34a?style=for-the-badge)](./backend)
[![Tailwind](https://img.shields.io/badge/styling-Tailwind%20v4-06b6d4?style=for-the-badge)](./frontend)
[![Database](https://img.shields.io/badge/database-PostgreSQL-334155?style=for-the-badge)](./backend)
[![Auth](https://img.shields.io/badge/auth-JWT-f59e0b?style=for-the-badge)](./backend)

[README in Brazilian Portuguese](./README_PTBR.md)

A reusable fullstack template built for modern admin dashboards, SaaS products, and freelance projects.

It combines a public-facing landing page with an authenticated internal panel, all inside a clean monorepo architecture.

## Overview

`gcm-template` is designed as a practical starting point for projects that need:

- A public website or landing page
- Authentication and protected application routes
- Role-based access control
- A backend API with JWT authentication
- File upload support
- Prisma + PostgreSQL as a production-friendly data layer

## Features

### Frontend
- Public landing pages at `/` and `/noticias`
- Authentication flow with login and registration
- Protected routes using `PrivateRoute`
- Role-based route protection with `ADMIN` and `USER`
- `AuthContext` with JWT persistence
- Axios configured through environment variables
- Public and private layouts
- React + TypeScript + Vite + Tailwind CSS v4

### Backend
- REST API with Express
- JWT authentication
- Role system with `ADMIN` and `USER`
- Email verification flow
- Avatar upload support
- Prisma ORM with PostgreSQL
- CORS configured through environment variables

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Axios

### Backend
- Node.js
- Express
- Prisma
- PostgreSQL
- JWT
- bcrypt
- Multer

## Project Structure

```bash
gcm-template/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   │   └── public/
│   │   ├── routes/
│   │   ├── services/
│   │   └── types/
│   ├── .env
│   ├── .env.example
│   └── package.json
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── middlewares/
│   │   ├── prisma/
│   │   ├── routes/
│   │   └── server.ts
│   ├── uploads/
│   ├── .env
│   ├── .env.example
│   └── package.json
└── README.md
```

## Authentication

The project ships with a complete authentication foundation.

### Frontend authentication
- Login and registration screens
- JWT stored and managed through `AuthContext`
- Automatic authorization header configuration for API requests
- `PrivateRoute` for authenticated pages
- `RequireRole` for role-restricted pages
- Public and private route separation inside the same app

### Backend authentication
- JWT-based authentication
- Role-based authorization
- Email verification flow
- Protected API endpoints
- User roles supported:
  - `ADMIN`
  - `USER`

## Routes Overview

### Public routes
- `/`
- `/noticias`
- `/login`
- `/register`
- `/check-email`

### Private routes
- `/home`
- `/home/users`
- `/home/reports`
- `/home/settings`
- `/dashboard/admin/users`
- `/settings/profile`
- `/settings/security`

## Environment Setup

### Frontend
Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:3333
```

Example file:

```env
VITE_API_URL=
```

### Backend
Create `backend/.env`:

```env
PORT=3333
CORS_ORIGIN=http://localhost:5173
```

Example file:

```env
PORT=
CORS_ORIGIN=
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd gcm-template
```

### 2. Install dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd backend
npm install
```

### 3. Configure environment variables

Create the `.env` files in both apps using the examples above.

### 4. Run the backend

```bash
cd backend
npm run dev
```

Backend default URL:

```bash
http://localhost:3333
```

### 5. Run the frontend

```bash
cd frontend
npm run dev
```

Frontend default URL:

```bash
http://localhost:5173
```

## Build

### Frontend
```bash
cd frontend
npm run build
```

### Backend
If you add a production build script later, it can live here. For now, development mode is the primary workflow.

## Use Cases

This template is intended to be used as:

- A reusable fullstack template
- A base for admin dashboards
- A starter for SaaS applications
- A foundation for freelance projects

## Future Improvements

- Password recovery flow
- Refresh token support
- Email provider integration
- Audit logs
- Multi-tenant support
- Docker setup
- CI/CD pipeline
- Automated tests
- Deployment presets for cloud providers

## License

MIT
