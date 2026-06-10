import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';
import { Navbar } from '@/components/navbar';
import { PrivacyPolicySection } from '@/components/privacy-policy-section';
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
  const seo = getPageSeo(locale, 'privacy');

  return buildLocalizedPageMetadata(locale, seo.title, seo.description, pagePaths.privacy);
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  const seo = getPageSeo(locale, 'privacy');

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-background" />
        <PrivacyPolicySection />
      </main>
      <Footer />
      <JsonLd
        data={[
          buildWebPageSchema(locale, pagePaths.privacy, seo.title, seo.description),
          buildBreadcrumbSchema(locale, [
            { name: locale === 'de' ? 'Startseite' : 'Home', path: '/' },
            { name: locale === 'de' ? 'Datenschutz' : 'Privacy Policy', path: pagePaths.privacy }
          ])
        ]}
      />
    </>
  );
}
