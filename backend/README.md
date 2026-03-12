# Fullstack Starter Template

Next.js + NestJS + Prisma 7 + PostgreSQL + Docker + Nginx

---

## 🔧 Development

1. Copy env file:

cp .env.example .env

2. Start dev environment:

docker compose -f docker-compose.dev.yml up

Frontend: http://localhost:3000  
Backend: http://localhost:8000/api  

3. Create migration (if needed):

docker compose -f docker-compose.dev.yml exec backend npx prisma migrate dev --name init

---

## 🚀 Production

1. Set real values in `.env`

2. Build & start:

docker compose -f docker-compose.prod.yml up -d --build

3. Run migrations:

docker compose -f docker-compose.prod.yml exec backend npx prisma migrate deploy

---

## 🧠 Stack

- Next.js 16
- NestJS 11
- Prisma 7
- PostgreSQL 16
- Docker multi-stage
- Nginx reverse proxy

---

## 📁 Structure

frontend/   → Next.js app  
backend/    → NestJS API  
docker-compose.dev.yml  
docker-compose.prod.yml  
nginx.conf  

---

## 🔐 Environment Variables

DATABASE_URL=
JWT_SECRET=
POSTGRES_PASSWORD=
WEB_BASE_URL=
SMTP_*

---

## 📌 Notes

- Dev uses volumes + hot reload
- Prod uses optimized multi-stage builds
- Prisma 7 config via prisma.config.ts