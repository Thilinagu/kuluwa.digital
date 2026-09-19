# SEO

- Every page exports Next.js `Metadata` (title, description) via the `metadata` or `generateMetadata` export — see any `page.tsx`.
- `src/app/sitemap.ts` and `src/app/robots.ts` use Next.js's native metadata route handlers, generated from the same content files as the pages themselves (`src/content/*.ts`), so they can't drift out of sync.
- JSON-LD: Organization schema is emitted site-wide from `src/app/layout.tsx`; Service schema per service page (`src/app/services/[slug]/page.tsx`); FAQPage schema on `/faq`.
- Google Search Console verification and Google Tag Manager are wired to read from `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_GTM_ID` env vars — add real values once those accounts exist (see `docs/environment.md`).
- Because pages are server-rendered (not a client-only SPA), each route is independently crawlable without needing prerendering workarounds.

## Not yet done

- Image alt text: audit once real photography/screenshots replace the current icon placeholders.
- BreadcrumbList structured data (visual breadcrumbs exist; JSON-LD for them does not yet).
