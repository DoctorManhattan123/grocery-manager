# Grocery manager

## Requirements:

1. Node 18
2. pnpm

## Frontend/Server

```bash
pnpm i
pnpm dev
```

## Database

Use your own database or use the docker container

```bash
docker compose up
```

To apply database schema changes run:

```
npx prisma db push
npx prisma generate
```

To see your database in the browser, run:

```bash
npx prisma studio
```
