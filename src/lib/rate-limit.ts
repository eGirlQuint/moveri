// In-memory per-IP rate limiter. Fine for a single self-hosted Node process;
// counts reset on restart and aren't shared across instances, which is an
// acceptable trade-off for a low-traffic contact form (no Redis needed).

const WINDOW_MS = 60_000
const MAX_REQUESTS = 3

const hits = new Map<string, number[]>()

// Survive Next.js dev-mode hot reloads (which would otherwise re-run this
// module and spawn a duplicate interval on every edit).
const globalForRateLimit = globalThis as unknown as { __moveriRateLimitSweep?: ReturnType<typeof setInterval> }
if (!globalForRateLimit.__moveriRateLimitSweep) {
  globalForRateLimit.__moveriRateLimitSweep = setInterval(() => {
    const now = Date.now()
    for (const [key, timestamps] of hits) {
      const recent = timestamps.filter((t) => now - t < WINDOW_MS)
      if (recent.length === 0) hits.delete(key)
      else hits.set(key, recent)
    }
  }, WINDOW_MS)
  globalForRateLimit.__moveriRateLimitSweep.unref?.()
}

export interface RateLimitResult {
  allowed: boolean
  retryAfterSeconds: number
}

export function checkRateLimit(key: string): RateLimitResult {
  const now = Date.now()
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS)

  if (timestamps.length >= MAX_REQUESTS) {
    const oldestInWindow = Math.min(...timestamps)
    const retryAfterSeconds = Math.ceil((oldestInWindow + WINDOW_MS - now) / 1000)
    hits.set(key, timestamps)
    return { allowed: false, retryAfterSeconds }
  }

  timestamps.push(now)
  hits.set(key, timestamps)
  return { allowed: true, retryAfterSeconds: 0 }
}
