# Deployment

Recommended: [Vercel](https://vercel.com), which has first-class Next.js support.

## Steps

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Import the repo into Vercel.
3. Add every variable from `.env.example` to the Vercel project's Environment Variables settings, with real production values.
4. Point your domain (`kuluwa.digital`) at the Vercel project (Vercel's dashboard walks through the DNS records needed).
5. Trigger a deploy. Vercel runs `npm run build` automatically.
6. After the first successful deploy with `DATABASE_URL` set, run the Prisma migration against production:
   ```bash
   npx prisma migrate deploy
   ```

## Post-deploy checklist

- [ ] Verify the domain in Google Search Console and add the verification value to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- [ ] Create a Google Tag Manager container and add its ID to `NEXT_PUBLIC_GTM_ID`.
- [ ] Confirm `https://kuluwa.digital/sitemap.xml` and `/robots.txt` resolve correctly.
- [ ] Submit a real test enquiry through each of the three forms and confirm the email arrives at the configured `ADMIN_EMAIL`.
