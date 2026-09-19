# API Routes

All three routes follow the same pattern: rate limit → Zod validation → Prisma write → email notification → JSON response.

## `POST /api/contact`
Body matches `contactSchema` in `src/lib/validation/contact.ts`. Returns `{ reference }` on success (201), `{ error, issues }` on validation failure (400), or 429 if rate-limited.

## `POST /api/project-enquiry`
Body matches `projectEnquirySchema` in `src/lib/validation/projectEnquiry.ts`. Same response shape as above.

## `POST /api/apply`
Body matches `applicationSchema` in `src/lib/validation/application.ts`. Same response shape as above.

## Rate limiting

`src/lib/ratelimit.ts` is an in-memory limiter — fine for a single server instance, but resets on redeploy and won't coordinate across multiple serverless instances. Replace with `@upstash/ratelimit` (or similar shared-store limiter) before scaling past one always-on instance.
