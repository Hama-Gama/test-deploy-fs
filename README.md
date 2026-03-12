# Fullstack Starter Template (Dev)

Next.js + NestJS + Prisma + PostgreSQL + Docker

> In development the project uses `127.0.0.1` instead of `localhost` to avoid IPv6 / localhost issues on Windows.

---

# Requirements

* Node.js **20+**
* Docker Desktop

---

# Project structure

```
frontend/               Next.js application
backend/                NestJS API + Prisma
docker-compose.dev.yml  Development environment
docker-compose.prod.yml Production environment
.env.example            Environment variables example
nginx.conf              Nginx config for production
```

---

# First start (Development)

## 1️⃣ Create `.env`

Run **from project root directory**:

```bash
cp .env.example .env
```

---

## 2️⃣ Install dependencies

### Backend

Run **from project root directory**:

```bash
cd backend
npm install
cd ..
```

### Frontend

Run **from project root directory**:

```bash
cd frontend
npm install
cd ..
```

---

## 3️⃣ Start development environment

Run **from project root directory**:

```bash
docker compose -f docker-compose.dev.yml up --build
```

First run may take **1–3 minutes** because Docker installs dependencies.

---

# URLs

Frontend

```
http://127.0.0.1:3000
```

Backend API

```
http://127.0.0.1:8000/api
```

---

# Prisma

## Run migrations

Run **from project root directory**:

```bash
docker compose -f docker-compose.dev.yml exec backend npx prisma migrate dev --name init
```

---

## Open Prisma Studio

Run **from project root directory**:

```bash
docker compose -f docker-compose.dev.yml exec backend npx prisma studio --host 0.0.0.0 --port 5555
```

Then open:

```
http://127.0.0.1:5555
```

---

# Docker commands

## Check containers status

Run **from project root directory**:

```bash
docker compose -f docker-compose.dev.yml ps
```

---

## View logs

All services:

```bash
docker compose -f docker-compose.dev.yml logs -f
```

Frontend logs:

```bash
docker compose -f docker-compose.dev.yml logs -f frontend
```

Backend logs:

```bash
docker compose -f docker-compose.dev.yml logs -f backend
```

Database logs:

```bash
docker compose -f docker-compose.dev.yml logs -f db
```

---

# Stop project

Run **from project root directory**:

```bash
docker compose -f docker-compose.dev.yml down
```

---

# Stop and remove database volume

This resets the database.

```bash
docker compose -f docker-compose.dev.yml down -v
```

---

# Typical workflow

```
git clone <repo>
cd <repo>
cp .env.example .env

cd backend && npm install
cd ../frontend && npm install
cd ..

docker compose -f docker-compose.dev.yml up --build
```
