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
frontend/   → Next.js application
backend/    → NestJS API + Prisma
docker-compose.dev.yml
.env.example
```

---

# First start (Development)

## 1️⃣ Create `.env`

Run **from project root directory**:

```bash
cp .env.example .env
```

---

## 2️⃣ Start development environment

Run **from project root directory**:

```bash
docker compose -f docker-compose.dev.yml up --build
```

---

## URLs

Frontend

```
http://127.0.0.1:3000
```

API

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

# Stop project

Run **from project root directory**:

```bash
docker compose -f docker-compose.dev.yml down
```

---

# Stop and remove database volume

Run **from project root directory**:

```bash
docker compose -f docker-compose.dev.yml down -v
```
