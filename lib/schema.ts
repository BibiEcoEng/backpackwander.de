import { footerInfo, siteConfig } from '@/lib/site';
import { getLocalizedUrl, type Locale } from '@/lib/routing';

type JsonLd = Record<string, unknown>;

export function serializeJsonLd(data: JsonLd | JsonLd[]) {
  return JSON.stringify(data);
}

export function buildOrganizationSchema(locale: Locale): JsonLd {
  const url = getLocalizedUrl(locale, '/');

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url,
    logo: `${siteConfig.domains.en}/images/logo.png`,
    description: siteConfig.description,
    email: footerInfo.email,
    sameAs: footerInfo.socialLinks.map((link) => link.url)
  };
}

export function buildWebSiteSchema(locale: Locale): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: getLocalizedUrl(locale, '/'),
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name
    }
  };
}

export function buildContactPageSchema(locale: Locale): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `${siteConfig.name} Contact`,
    url: getLocalizedUrl(locale, '/contact'),
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      email: footerInfo.email,
      url: getLocalizedUrl(locale, '/')
    }
  };
}

export function buildWebPageSchema(locale: Locale, path: string, name: string, description: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: getLocalizedUrl(locale, path),
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: getLocalizedUrl(locale, '/')
    }
  };
}

export function buildBreadcrumbSchema(
  locale: Locale,
  items: ReadonlyArray<{ name: string; path: string }>
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getLocalizedUrl(locale, item.path)
    }))
  };
}

function withoutContext(schema: JsonLd): JsonLd {
  const rest = { ...schema };
  delete rest['@context'];
  return rest;
}

export function buildHomeSchemaGraph(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@graph': [withoutContext(buildOrganizationSchema(locale)), withoutContext(buildWebSiteSchema(locale))]
  };
}
