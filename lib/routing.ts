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

export function getLocaleFromHost(_hostname: string): LanguageCode {
  return defaultLocale;
}

export function getLocaleFromPath(pathname: string): LanguageCode | null {
  const match = pathname.match(/^\/(en|de)(?:\/|$)/);
  return isLocale(match?.[1]) ? match[1] : null;
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|de)(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

export function getLocalizedPath(locale: LanguageCode, pathname: string): string {
  const strippedPath = stripLocalePrefix(pathname);
  return strippedPath === '/' ? `/${locale}` : `/${locale}${strippedPath}`;
}

export function getLocalizedUrl(locale: LanguageCode, pathname: string): string {
  return `${siteConfig.domains[locale]}${getLocalizedPath(locale, pathname)}`;
}
