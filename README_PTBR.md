# gcm-template

[![Monorepo](https://img.shields.io/badge/architecture-monorepo-0f172a?style=for-the-badge)](./)
[![Frontend](https://img.shields.io/badge/frontend-React%20%2B%20TypeScript%20%2B%20Vite-2563eb?style=for-the-badge)](./frontend)
[![Backend](https://img.shields.io/badge/backend-Node.js%20%2B%20Express%20%2B%20Prisma-16a34a?style=for-the-badge)](./backend)
[![Tailwind](https://img.shields.io/badge/styling-Tailwind%20v4-06b6d4?style=for-the-badge)](./frontend)
[![Database](https://img.shields.io/badge/database-PostgreSQL-334155?style=for-the-badge)](./backend)
[![Auth](https://img.shields.io/badge/auth-JWT-f59e0b?style=for-the-badge)](./backend)

[README in English](./README.md)

Um template fullstack reutilizavel para dashboards administrativos, produtos SaaS e projetos freelance modernos.

Ele combina uma landing page publica com um painel interno autenticado, tudo dentro de uma arquitetura monorepo organizada.

## Visao Geral

O `gcm-template` foi pensado como uma base pratica para projetos que precisam de:

- Um site publico ou landing page
- Autenticacao e rotas protegidas
- Controle de acesso por perfil
- Uma API backend com autenticacao JWT
- Suporte a upload de arquivos
- Prisma + PostgreSQL como camada de dados pronta para producao

## Funcionalidades

### Frontend
- Landing page publica em `/` e `/noticias`
- Fluxo de autenticacao com login e cadastro
- Rotas protegidas com `PrivateRoute`
- Protecao por perfil com `ADMIN` e `USER`
- `AuthContext` com persistencia de JWT
- Axios configurado via variaveis de ambiente
- Layouts publicos e privados
- React + TypeScript + Vite + Tailwind CSS v4

### Backend
- API REST com Express
- Autenticacao com JWT
- Sistema de perfis com `ADMIN` e `USER`
- Fluxo de verificacao de e-mail
- Suporte a upload de avatar
- Prisma ORM com PostgreSQL
- CORS configurado via variaveis de ambiente

## Stack Tecnologica

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

## Estrutura do Projeto

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
├── README.md
└── README_PTBR.md
```

## Autenticacao

O projeto ja inclui uma base completa de autenticacao.

### Autenticacao no frontend
- Telas de login e cadastro
- JWT armazenado e gerenciado via `AuthContext`
- Configuracao automatica do header de autorizacao nas requisicoes
- `PrivateRoute` para paginas autenticadas
- `RequireRole` para paginas restritas por perfil
- Separacao entre rotas publicas e privadas no mesmo app

### Autenticacao no backend
- Autenticacao baseada em JWT
- Autorizacao por perfil
- Fluxo de verificacao de e-mail
- Endpoints protegidos
- Perfis suportados:
  - `ADMIN`
  - `USER`

## Visao Geral das Rotas

### Rotas publicas
- `/`
- `/noticias`
- `/login`
- `/register`
- `/check-email`

### Rotas privadas
- `/home`
- `/home/users`
- `/home/reports`
- `/home/settings`
- `/dashboard/admin/users`
- `/settings/profile`
- `/settings/security`

## Configuracao de Ambiente

### Frontend
Crie `frontend/.env`:

```env
VITE_API_URL=http://localhost:3333
```

Arquivo de exemplo:

```env
VITE_API_URL=
```

### Backend
Crie `backend/.env`:

```env
PORT=3333
CORS_ORIGIN=http://localhost:5173
```

Arquivo de exemplo:

```env
PORT=
CORS_ORIGIN=
```

## Como Rodar

### 1. Clonar o repositorio

```bash
git clone <url-do-repositorio>
cd gcm-template
```

### 2. Instalar dependencias

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

### 3. Configurar variaveis de ambiente

Crie os arquivos `.env` em ambos os apps usando os exemplos acima.

### 4. Rodar o backend

```bash
cd backend
npm run dev
```

URL padrao do backend:

```bash
http://localhost:3333
```

### 5. Rodar o frontend

```bash
cd frontend
npm run dev
```

URL padrao do frontend:

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
Se futuramente voce adicionar um script de build para producao, ele pode ser documentado aqui. No estado atual, o fluxo principal e o modo de desenvolvimento.

## Casos de Uso

Este template foi pensado para servir como:

- Um template fullstack reutilizavel
- Uma base para dashboards administrativos
- Um starter para aplicacoes SaaS
- Uma fundacao para projetos freelance

## Melhorias Futuras

- Fluxo de recuperacao de senha
- Suporte a refresh token
- Integracao com provedor de e-mail
- Logs de auditoria
- Suporte multi-tenant
- Configuracao com Docker
- Pipeline de CI/CD
- Testes automatizados
- Presets de deploy para provedores cloud

## Licenca

MIT
