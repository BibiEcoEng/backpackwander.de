import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { siteConfig } from '@/lib/site';
import { getLocalizedPath } from '@/lib/routing';
import { getPageSeo } from '@/lib/page-metadata';
import { getRequestLocale } from '@/lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400'] });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: ['600'] });

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const seo = getPageSeo(locale, 'home');
  const baseUrl = locale === 'de' ? siteConfig.domains.de : siteConfig.domains.en;
  const localizedPath = getLocalizedPath(locale, '/');
  const canonicalUrl = `${baseUrl}${localizedPath}`;

  return {
    metadataBase: new URL(siteConfig.domains.de),
    title: {
      default: seo.title,
      template: '%s | Backpack Wander GmbH'
    },
    description: seo.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'x-default': `${siteConfig.domains.de}/de`,
        de: `${siteConfig.domains.de}/de`,
        en: `${siteConfig.domains.en}/en`
      }
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      images: [
        {
          url: siteConfig.seo.defaultOgImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [siteConfig.seo.defaultOgImage]
    },
    icons: {
      icon: '/images/logo.png',
      shortcut: '/images/logo.png',
      apple: '/images/logo.png'
    }
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getRequestLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} bg-background text-offwhite antialiased`}>
        {children}
      </body>
    </html>
  );
}
