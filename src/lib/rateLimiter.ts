// Simple server-side rate limiter
// In production, consider using Redis or a dedicated rate limiting service

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
}

export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = { windowMs: 60 * 60 * 1000, maxRequests: 5 } // 5 requests per hour by default
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // Clean up expired entries
  if (entry && now > entry.resetTime) {
    rateLimitStore.delete(identifier);
  }

  const currentEntry = rateLimitStore.get(identifier);

  if (!currentEntry) {
    // First request
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return { allowed: true, remaining: config.maxRequests - 1, resetTime: now + config.windowMs };
  }

  if (currentEntry.count >= config.maxRequests) {
    // Rate limit exceeded
    return { allowed: false, remaining: 0, resetTime: currentEntry.resetTime };
  }

  // Increment count
  currentEntry.count++;
  return { allowed: true, remaining: config.maxRequests - currentEntry.count, resetTime: currentEntry.resetTime };
}

// Get client identifier from request
export function getClientIdentifier(request: Request): string {
  // Try to get IP from various headers
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  
  const ip = forwarded?.split(',')[0] || realIp || cfConnectingIp || 'unknown';
  
  // Add user agent to make it more specific
  const userAgent = request.headers.get('user-agent') || 'unknown';
  
  // Create a hash-like identifier
  return `${ip}-${userAgent.slice(0, 50)}`;
}

// Clean up old entries periodically (call this from a cron job or similar in production)
export function cleanupOldEntries(): void {
  const now = Date.now();
  const keysToDelete: string[] = [];
  
  rateLimitStore.forEach((entry, key) => {
    if (now > entry.resetTime) {
      keysToDelete.push(key);
    }
  });
  
  keysToDelete.forEach(key => rateLimitStore.delete(key));
}

// Clean up every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupOldEntries, 5 * 60 * 1000);
}
