# Setup

## Prerequisites

- Node.js 18.18 or later
- A PostgreSQL database (local, or a hosted instance like Supabase/Neon/Railway)

## Steps

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment template and fill in real values:
   ```bash
   cp .env.example .env
   ```
   See `docs/environment.md` for what each variable does.
3. Generate the Prisma client and run the first migration:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
4. Run the dev server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000
