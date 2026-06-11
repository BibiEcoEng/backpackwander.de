import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { siteConfig, seoKeywords } from '@/lib/site';
import { defaultLocale, getLocalizedPath, getLocaleFromHost, resolveLocale, type Locale } from '@/lib/routing';

export async function getRequestLanguage(): Promise<Locale> {
  const requestHeaders = await headers();
  const headerLocale = requestHeaders.get('x-locale');

  if (headerLocale) {
    return resolveLocale(headerLocale);
  }

  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? '';
  return getLocaleFromHost(host);
}

export async function getRequestBaseUrl() {
  return (await getRequestLanguage()) === 'de' ? siteConfig.domains.de : siteConfig.domains.en;
}

export async function getRequestLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  return resolveLocale(requestHeaders.get('x-locale'));
}

function buildLanguageAlternates(path: string) {
  return {
    'x-default': `${siteConfig.domains.de}${getLocalizedPath(defaultLocale, path)}`,
    de: `${siteConfig.domains.de}${getLocalizedPath('de', path)}`,
    en: `${siteConfig.domains.en}${getLocalizedPath('en', path)}`
  };
}

function buildSharedSocialMetadata(
  locale: Locale,
  title: string,
  description: string,
  canonicalUrl: string
): Pick<Metadata, 'openGraph' | 'twitter'> {
  const ogImage = siteConfig.seo.defaultOgImage;

  return {
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

export async function buildPageMetadata(title: string, description: string, path: string): Promise<Metadata> {
  const locale = await getRequestLanguage();
  const baseUrl = locale === 'de' ? siteConfig.domains.de : siteConfig.domains.en;
  const localizedPath = getLocalizedPath(locale, path);
  const canonicalUrl = `${baseUrl}${localizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: buildLanguageAlternates(path)
    },
    ...buildSharedSocialMetadata(locale, title, description, canonicalUrl)
  };
}

export function buildLocalizedPageMetadata(locale: Locale, title: string, description: string, path: string): Metadata {
  const baseUrl = locale === 'de' ? siteConfig.domains.de : siteConfig.domains.en;
  const localizedPath = getLocalizedPath(locale, path);
  const canonicalUrl = `${baseUrl}${localizedPath}`;
  const keywords: string[] = [...seoKeywords.primary, ...seoKeywords.secondary];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: buildLanguageAlternates(path)
    },
    ...buildSharedSocialMetadata(locale, title, description, canonicalUrl)
  };
}
