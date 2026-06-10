import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { DeploymentModelSection } from '@/components/deployment-model-section';
import { ClosingCTASection } from '@/components/closing-cta-section';
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
  const seo = getPageSeo(locale, 'deployment-model');

  return buildLocalizedPageMetadata(locale, seo.title, seo.description, pagePaths['deployment-model']);
}

export default async function DeploymentModelPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  const seo = getPageSeo(locale, 'deployment-model');

  return (
    <>
      <Navbar />
      <main className="pt-28">
        <DeploymentModelSection showPageTitle />
        <ClosingCTASection />
      </main>
      <Footer />
      <JsonLd
        data={[
          buildWebPageSchema(locale, pagePaths['deployment-model'], seo.title, seo.description),
          buildBreadcrumbSchema(locale, [
            { name: locale === 'de' ? 'Startseite' : 'Home', path: '/' },
            { name: locale === 'de' ? 'Einsatzmodell' : 'Deployment Model', path: pagePaths['deployment-model'] }
          ])
        ]}
      />
    </>
  );
}
