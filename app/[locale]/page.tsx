import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { AboutUsSection } from '@/components/about-us-section';
import { ServicesSection } from '@/components/services-section';
import { IndustriesSection } from '@/components/industries-section';
import { PipelineQualitySection } from '@/components/pipeline-quality-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';
import { buildLocalizedPageMetadata } from '@/lib/seo';
import { buildHomeSchemaGraph } from '@/lib/schema';
import { getPageSeo, pagePaths } from '@/lib/page-metadata';
import { resolveLocale, type Locale, locales } from '@/lib/routing';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const seo = getPageSeo(locale, 'home');

  return buildLocalizedPageMetadata(locale, seo.title, seo.description, pagePaths.home);
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUsSection />
        <ServicesSection />
        <IndustriesSection />
        <PipelineQualitySection />
        <ContactSection />
      </main>
      <Footer />
      <JsonLd data={buildHomeSchemaGraph(locale)} />
    </>
  );
}
