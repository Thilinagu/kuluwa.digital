# Security

- All form input is validated server-side with Zod, even though the client also validates — never trust client input alone.
- Rate limiting is applied per-IP on all three API routes (see `src/lib/ratelimit.ts` and its scaling caveat).
- Secrets live only in environment variables (`.env`, excluded from git); `.env.example` documents names with no real values.
- Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) are set globally in `next.config.mjs`.
- No authentication/authorization system exists yet because there is no admin UI in this scaffold (see README "Next development steps").

## Not yet done (flagged, not silently skipped)

- **Spam protection (CAPTCHA):** `TURNSTILE_SECRET_KEY` / `NEXT_PUBLIC_TURNSTILE_SITE_KEY` are in `.env.example` but not yet wired into the form components or API routes. Add Cloudflare Turnstile (or hCaptcha) verification server-side before public launch — rate limiting alone is not sufficient spam protection.
- **CSRF:** Next.js Route Handlers called via same-origin `fetch` from the client have a lower CSRF surface than traditional form posts, but if these routes are ever called cross-origin, add explicit origin checking.
