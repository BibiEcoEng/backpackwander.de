import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { AboutUsSection } from '@/components/about-us-section';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';
import { buildLocalizedPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@/lib/schema';
import { getPageSeo, pagePaths } from '@/lib/page-metadata';
import { isLocale, type Locale, locales } from '@/lib/routing';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  const seo = getPageSeo(locale, 'about');

  return buildLocalizedPageMetadata(locale, seo.title, seo.description, pagePaths.about);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  const seo = getPageSeo(locale, 'about');

  return (
    <>
      <Navbar />
      <main>
        <AboutUsSection headingLevel="h1" />
      </main>
      <Footer />
      <JsonLd
        data={[
          buildWebPageSchema(locale, pagePaths.about, seo.title, seo.description),
          buildBreadcrumbSchema(locale, [
            { name: locale === 'de' ? 'Startseite' : 'Home', path: '/' },
            { name: locale === 'de' ? 'Über uns' : 'About', path: pagePaths.about }
          ])
        ]}
      />
    </>
  );
}
