import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/lib/site';
import { getLocaleFromHost, getLocaleFromPath, getLocalizedPath, isLocale } from '@/lib/routing';

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
  const hostLocale = getLocaleFromHost(host);
  const pathLocale = getLocaleFromPath(pathname);
  const currentLocale = pathLocale ?? hostLocale;

  if (pathLocale) {
    const targetDomain = pathLocale === 'de' ? siteConfig.domains.de : siteConfig.domains.en;
    const pathMatchesDomain = (host.endsWith('.de') && pathLocale === 'de') || (host.endsWith('.com') && pathLocale === 'en');

    if (!pathMatchesDomain && (host.endsWith('.de') || host.endsWith('.com'))) {
      const targetUrl = new URL(`${getLocalizedPath(pathLocale, pathname)}${search}`, targetDomain);
      return NextResponse.redirect(targetUrl);
    }

    const response = NextResponse.next({ request: { headers: withLocaleHeader(request, currentLocale) } });
    return response;
  }

  const targetPath = getLocalizedPath(currentLocale, pathname);
  const targetUrl = new URL(`${targetPath}${search}`, request.url);

  const response = NextResponse.redirect(targetUrl);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)']
};
