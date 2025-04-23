# FROM node:lts-alpine3.19 AS base
# WORKDIR /app
# COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# RUN \
#   if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#   elif [ -f package-lock.json ]; then npm ci; \
#   elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
#   else echo "Lockfile not found." && exit 1; \
#   fi
# # FROM base AS builder
# ENV NEXT_TELEMETRY_DISABLED 1

# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# EXPOSE 3000
# CMD ["npm", "run", "start"]



# FROM node:current-alpine3.21 AS builder
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# # RUN npx next build --no-lint
# FROM node:current-alpine3.21 AS runner
# WORKDIR /app
# COPY --from=builder .next ./.next
# CMD ["npm", "run", "start"]
# EXPOSE 3000

FROM node:current-alpine3.21 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install --production=false
COPY . .
# RUN npx next build
RUN npm run build

FROM node:current-alpine3.21 AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Usunięcie cache i niepotrzebnych danych
RUN rm -rf .next/cache

EXPOSE 3000
CMD ["npm", "run", "start"]
