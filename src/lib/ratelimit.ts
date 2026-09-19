/**
 * Minimal in-memory rate limiter — good enough for a single Node.js
 * server instance / low-traffic launch. Because it stores state in
 * process memory, it resets on redeploy and does NOT work correctly
 * across multiple serverless instances or edge regions.
 *
 * Before scaling past a single always-on server, replace this with a
 * shared store such as Upstash Redis (`@upstash/ratelimit`) so limits
 * are enforced consistently across all instances.
 */
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, limit = 5, windowMs = 60_000): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (bucket.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  bucket.count += 1;
  return { allowed: true, remaining: limit - bucket.count };
}

export function getClientIp(headers: Headers): string {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}
