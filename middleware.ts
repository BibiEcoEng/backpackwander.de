import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/lib/site';
import {
  defaultLocale,
  getInternalLocalePath,
  getLocalizedPath,
  getLocaleFromPath,
  stripLocalePrefix
} from '@/lib/routing';

const PUBLIC_FILE = /\.(.*)$/;

function isBypassedPath(pathname: string) {
  return (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/Images/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    PUBLIC_FILE.test(pathname)
  );
}

function getHost(request: NextRequest) {
  return request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '';
}

function withLocaleHeader(request: NextRequest, locale: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', locale);
  return requestHeaders;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (isBypassedPath(pathname)) {
    return NextResponse.next();
  }

  const host = getHost(request);
  const pathLocale = getLocaleFromPath(pathname);

  if (pathLocale === defaultLocale) {
    const cleanPath = stripLocalePrefix(pathname);
    const targetUrl = new URL(`${cleanPath}${search}`, request.url);
    return NextResponse.redirect(targetUrl);
  }

  if (pathLocale === 'en') {
    const pathMatchesDomain = host.endsWith('.com');

    if (!pathMatchesDomain && (host.endsWith('.de') || host.endsWith('.com'))) {
      const targetUrl = new URL(`${getLocalizedPath('en', pathname)}${search}`, siteConfig.domains.en);
      return NextResponse.redirect(targetUrl);
    }

    return NextResponse.next({ request: { headers: withLocaleHeader(request, 'en') } });
  }

  const internalPath = getInternalLocalePath(defaultLocale, pathname);
  const rewriteUrl = new URL(`${internalPath}${search}`, request.url);

  return NextResponse.rewrite(rewriteUrl, {
    request: { headers: withLocaleHeader(request, defaultLocale) }
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)']
};
