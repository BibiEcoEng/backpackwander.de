import { headers } from 'next/headers';
import { getLocaleFromHost, isLocale } from '@/lib/routing';
import type { LanguageCode } from '@/lib/translations';

export async function getRequestLocale(): Promise<LanguageCode> {
  const requestHeaders = await headers();
  const headerLocale = requestHeaders.get('x-locale');

  if (isLocale(headerLocale)) {
    return headerLocale;
  }

  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? '';
  return getLocaleFromHost(host);
}