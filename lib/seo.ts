import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { siteConfig, seoKeywords } from '@/lib/site';
import { getLocaleFromHost, getLocalizedPath, isLocale, type Locale } from '@/lib/routing';

export function getRequestLanguage() {
  return headers().then((requestHeaders) => {
    const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? '';
    return getLocaleFromHost(host);
  });
}

export async function getRequestBaseUrl() {
  return (await getRequestLanguage()) === 'de' ? siteConfig.domains.de : siteConfig.domains.en;
}

export async function getRequestLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const headerLocale = requestHeaders.get('x-locale');

  if (isLocale(headerLocale)) {
    return headerLocale;
  }

  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? '';
  return getLocaleFromHost(host);
}

function buildSharedSocialMetadata(title: string, description: string, canonicalUrl: string): Pick<Metadata, 'openGraph' | 'twitter'> {
  const ogImage = siteConfig.seo.defaultOgImage;

  return {
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: 'website',
      locale: canonicalUrl.includes('/de') ? 'de_DE' : 'en_US',
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
  const baseUrl = await getRequestBaseUrl();
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteConfig.domains.en}${path}`,
        de: `${siteConfig.domains.de}${path}`
      }
    },
    ...buildSharedSocialMetadata(title, description, canonicalUrl)
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
      languages: {
        en: `${siteConfig.domains.en}${getLocalizedPath('en', path)}`,
        de: `${siteConfig.domains.de}${getLocalizedPath('de', path)}`
      }
    },
    ...buildSharedSocialMetadata(title, description, canonicalUrl)
  };
}
