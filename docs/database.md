# Database

PostgreSQL via Prisma. Schema: `prisma/schema.prisma`.

## Live models

- `ContactSubmission`, `ProjectInquiry`, `Application` — one per form on the site. Each has a unique `reference`, a `status` (NEW/REVIEWED/CONTACTED/CLOSED) for manual triage, and `emailedAt` to confirm whether the notification email actually sent.

## Forward-looking models (not yet wired to any UI)

- `Partner`, `Lead`, `Commission` — data model for the future partner/referral tracking platform described in the project brief. Included now so future migrations are additive rather than requiring a schema rewrite. Do not build UI against these until the partner platform is actually scoped.

## Migrations

```bash
npm run prisma:migrate   # create + apply a migration in development
npx prisma migrate deploy  # apply pending migrations in production
npm run prisma:studio    # browse data visually
```
