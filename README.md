# Kuluwa.digital

Production-ready starting point for the Kuluwa.digital website — a technology brand operated by Kuluwa Pvt Ltd, serving clients in Sri Lanka and Australia.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Prisma + PostgreSQL · Zod · Resend

## Quick start

```bash
npm install
cp .env.example .env      # then fill in real values — see docs/environment.md
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Open http://localhost:3000.

## Documentation

See `docs/` for architecture, setup, development workflow, deployment, environment variables, database, API routes, the design system, SEO, security, and content management — one file per topic.

## What's implemented

- All pages from the project brief: home, services (+ 8 detail pages), portfolio (+ 4 concept detail pages), about, why choose us, how we work, join the network, opportunities (+ 10 detail pages), apply, start-project, contact, FAQ, privacy, terms, cookies, thank-you, 404.
- Three working forms (Contact, Project Enquiry, multi-step Application), each validated with Zod on both client and server, persisted to PostgreSQL via Prisma, and emailed automatically to `ADMIN_EMAIL` via Resend once `RESEND_API_KEY` is configured.
- Per-IP rate limiting on all three API routes.
- Full brand design-token system in `tailwind.config.ts`, sourced from the supplied brand identity document.
- SEO: per-page metadata, Organization/Service/FAQPage JSON-LD, native Next.js `sitemap.xml`/`robots.txt`, GTM/Search Console env-var hooks.
- Unit tests for validation schemas and utility functions (Vitest); a starter Playwright e2e spec (not wired into `npm test` — see `tests/e2e/home.spec.ts` for setup).

## Known limitations / next development steps

1. **Spam protection (CAPTCHA) is not yet wired in.** `.env.example` has Cloudflare Turnstile keys reserved; add verification in the three API routes before public launch (see `docs/security.md`).
2. **No admin UI.** Submissions are stored in the database and can be browsed with `npm run prisma:studio`, but there's no authenticated dashboard yet. The `Partner`/`Lead`/`Commission` models in `prisma/schema.prisma` are forward-looking architecture for a future partner platform — not wired to any page.
3. **General Sans** (the brand's specified heading font) isn't licensed/hosted here — Sora is used as a close placeholder; swap in `src/app/layout.tsx` once licensed.
4. **Portfolio content is illustrative**, clearly flagged `isConcept: true` in `src/content/portfolio.ts`. Replace with real, approved case studies as they become available.
5. **GTM container ID and Google Search Console verification code** are read from env vars but need real values once those accounts are created post-deployment.

## Company registration number

Per an explicit content decision for this project, `Kuluwa Pvt Ltd`'s registration number is stored in `src/config/company.ts` for internal/legal reference only and is intentionally not displayed anywhere in the public site. If that decision changes, update `COMPANY.registrationNumber` usage — currently zero pages render it.
