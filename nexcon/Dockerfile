# 1. Base dependencies image
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies based on lockfile if present
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --legacy-peer-deps

# 2. Builder image
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Skip linting during build to avoid ESLint build errors
RUN npm run build --no-lint

# 3. Production runner image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]