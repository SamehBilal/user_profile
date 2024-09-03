import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import rateLimit from 'express-rate-limit';

const redis = new Redis({ url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL, token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN });

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(1, "5s"), // 1 reqs per 5 seconds
});

export async function GET(req, res) {
  const identifier = "api"; // Use a constant string or other identifiers
  const result = await ratelimit.limit(identifier);

  const reqHeaders = new Headers(req.headers)
  reqHeaders.set('X-RateLimit-Limit', result.limit);
  reqHeaders.set('X-RateLimit-Remaining', result.remaining);

  if (!result.success) {
    return NextResponse.json({ status: 'fail', message: 'The req has been rate limited.', rateLimitState: result }, 
        { status: 500, headers: reqHeaders }); 
  }

  return NextResponse.json({ status: 'success', rateLimitState: result }, 
    { status: 200, headers: reqHeaders }); 
}
