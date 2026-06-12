import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';
import { Navbar } from '@/components/navbar';
import { TermsSection } from '@/components/terms-section';
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
  const seo = getPageSeo(locale, 'terms');

  return buildLocalizedPageMetadata(locale, seo.title, seo.description, pagePaths.terms);
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const seo = getPageSeo(locale, 'terms');

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-background" />
        <TermsSection />
      </main>
      <Footer />
      <JsonLd
        data={[
          buildWebPageSchema(locale, pagePaths.terms, seo.title, seo.description),
          buildBreadcrumbSchema(locale, [
            { name: locale === 'de' ? 'Startseite' : 'Home', path: '/' },
            { name: locale === 'de' ? 'Nutzungsbedingungen' : 'Terms & Conditions', path: pagePaths.terms }
          ])
        ]}
      />
    </>
  );
}
