# Architecture

Kuluwa.digital is a Next.js 14 App Router project (TypeScript + Tailwind CSS).

## Layers

- `src/app/` — routes (pages + API routes), one folder per URL segment.
- `src/components/` — reusable UI, grouped by domain (`ui`, `navigation`, `footer`, `sections`, `services`, `portfolio`, `opportunities`, `forms`, `shared`).
- `src/content/` — the site's typed data layer (services, portfolio, opportunities, FAQs). Editing these files updates the site with no other code changes.
- `src/config/` — canonical brand/company/nav/site facts, imported everywhere else instead of hardcoded strings.
- `src/lib/` — server-side helpers: Prisma client, email sending, rate limiting, Zod validation schemas.
- `prisma/` — database schema and seed script.

## Data flow for a form submission

1. A client component (`src/components/forms/*.tsx`) collects input and does light client-side checks.
2. On submit, it `fetch()`s the matching API route (`src/app/api/*/route.ts`).
3. The API route re-validates with the same Zod schema (`src/lib/validation/*.ts`) — never trust client-side validation alone.
4. On success, it writes a row via Prisma, then calls `sendNotificationEmail()` (`src/lib/email.ts`), then marks the row as emailed.
5. The client redirects to `/thank-you` with a reference number.

## Why this is a real multi-page app, not a single-page app

Every route above is a separate server-rendered Next.js page, so each is independently crawlable, has its own metadata, and works with `generateStaticParams` for the dynamic `[slug]` routes. This matters directly for SEO — a client-only single-page app is materially harder for search engines to index well.
