import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

// Security middleware for bot protection
const securityMiddleware = (request: NextRequest) => {
  const userAgent = request.headers.get('user-agent') || '';
  const botPatterns = [
    /bot/i, /crawler/i, /spider/i, /scraper/i,
    /curl/i, /wget/i, /python/i, /java/i
  ];

  if (botPatterns.some(pattern => pattern.test(userAgent))) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 });
  }

  return null;
};

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'ar'
});

export default function middleware(request: NextRequest) {
  // Handle root URL redirection to default locale (ar)
  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    const defaultLocale = 'ar';
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    );
  }

  // Apply security middleware
  const securityResponse = securityMiddleware(request);
  if (securityResponse) return securityResponse;

  // Apply internationalization middleware
  return intlMiddleware(request);
}

export const config = {
  // Match all paths including root and locale prefixed paths
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico).*)']
};
