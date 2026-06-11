import { siteConfig } from '@/lib/site';
import type { LanguageCode } from '@/lib/translations';

export const locales = ['de', 'en'] as const;
export type Locale = LanguageCode;
export const defaultLocale: Locale = 'de';

export function isLocale(value: string | null | undefined): value is LanguageCode {
  return value === 'en' || value === 'de';
}

export function resolveLocale(value: string | null | undefined): LanguageCode {
  return isLocale(value) ? value : defaultLocale;
}

export function getLocaleFromHost(hostname: string): LanguageCode {
  if (hostname.endsWith('.com')) return 'en';
  return defaultLocale;
}

export function getLocaleFromPath(pathname: string): LanguageCode | null {
  if (pathname.match(/^\/en(?:\/|$)/)) return 'en';
  if (pathname.match(/^\/de(?:\/|$)/)) return 'de';
  return null;
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|de)(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Public URL shown in the browser. Default locale (de) has no prefix. */
export function getLocalizedPath(locale: LanguageCode, pathname: string): string {
  const strippedPath = stripLocalePrefix(pathname);

  if (locale === defaultLocale) {
    return strippedPath;
  }

  return strippedPath === '/' ? `/${locale}` : `/${locale}${strippedPath}`;
}

/** Internal Next.js route always includes the locale segment. */
export function getInternalLocalePath(locale: LanguageCode, pathname: string): string {
  const strippedPath = stripLocalePrefix(pathname);
  return strippedPath === '/' ? `/${locale}` : `/${locale}${strippedPath}`;
}

export function getLocalizedUrl(locale: LanguageCode, pathname: string): string {
  return `${siteConfig.domains[locale]}${getLocalizedPath(locale, pathname)}`;
}
