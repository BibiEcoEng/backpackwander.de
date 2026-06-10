import type { Metadata } from 'next';
import ContactCards from '@/components/contact-cards';
import { ContactHeader } from '@/components/contact-header';
import ContactSidebar from '@/components/contact-sidebar';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';
import { Navbar } from '@/components/navbar';
import { buildLocalizedPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildContactPageSchema } from '@/lib/schema';
import { getPageSeo, pagePaths } from '@/lib/page-metadata';
import { isLocale, type Locale, locales } from '@/lib/routing';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  const seo = getPageSeo(locale, 'contact');

  return buildLocalizedPageMetadata(locale, seo.title, seo.description, pagePaths.contact);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-background" />
        <div className="pointer-events-none absolute inset-0 -z-10 about-grid-overlay opacity-20" aria-hidden />

        <div className="section-shell section-padding">
          <ContactHeader />

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10">
            <ContactCards />
            <ContactSidebar />
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd
        data={[
          buildContactPageSchema(locale),
          buildBreadcrumbSchema(locale, [
            { name: locale === 'de' ? 'Startseite' : 'Home', path: '/' },
            { name: locale === 'de' ? 'Kontakt' : 'Contact', path: pagePaths.contact }
          ])
        ]}
      />
    </>
  );
}
