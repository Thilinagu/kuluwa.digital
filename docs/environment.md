# Environment Variables

All variables are documented in `.env.example` at the project root. Summary:

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL, used in metadata/sitemap |
| `RESEND_API_KEY` | Yes (for real email) | Enables automatic email notifications; without it, submissions are stored but not emailed, and a warning is logged |
| `EMAIL_FROM` | Yes (for real email) | The "from" address Resend sends as (must be on a domain verified with Resend) |
| `ADMIN_EMAIL` | Yes | Where every form submission is sent — currently `gtmgunasekara@gmail.com` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Recommended | Spam protection on public forms (not yet wired into the form UI — see Known Limitations in the README) |
| `NEXT_PUBLIC_GTM_ID` | Optional | Enables the Google Tag Manager snippet once you have a real container |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console ownership verification |

Never commit a real `.env` file — it's already excluded in `.gitignore`.
