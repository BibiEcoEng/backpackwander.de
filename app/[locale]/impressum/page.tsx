import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { ImpressumSection } from '@/components/impressum-section';
import { JsonLd } from '@/components/json-ld';
import { Navbar } from '@/components/navbar';
import { buildLocalizedPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@/lib/schema';
import { getPageSeo, pagePaths } from '@/lib/page-metadata';
import { resolveLocale, type Locale, locales } from '@/lib/routing';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const seo = getPageSeo(locale, 'impressum');

  return buildLocalizedPageMetadata(locale, seo.title, seo.description, pagePaths.impressum);
}

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const seo = getPageSeo(locale, 'impressum');

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-background" />
        <ImpressumSection />
      </main>
      <Footer />
      <JsonLd
        data={[
          buildWebPageSchema(locale, pagePaths.impressum, seo.title, seo.description),
          buildBreadcrumbSchema(locale, [
            { name: locale === 'de' ? 'Startseite' : 'Home', path: '/' },
            { name: 'Impressum', path: pagePaths.impressum }
          ])
        ]}
      />
    </>
  );
}
