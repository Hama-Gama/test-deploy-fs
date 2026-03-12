# ---------- 1. Dependencies ----------
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# ---------- 2. Build ----------
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Prisma generate (создаёт Prisma Client)
RUN npx prisma generate

# Build Nest
RUN npm run build

# ---------- 3. Production ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Prisma config MUST be in /app so Prisma CLI can load it
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

# Копируем node_modules (для простоты и надёжности на первом проекте)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json

EXPOSE 8000

CMD ["node", "dist/main.js"]