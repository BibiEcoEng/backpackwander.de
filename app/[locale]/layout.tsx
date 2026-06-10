import { notFound } from 'next/navigation';
import { LanguageProvider } from '@/components/language-provider';
import { isLocale, locales, type Locale } from '@/lib/routing';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LanguageProvider initialLanguage={locale as Locale}>{children}</LanguageProvider>;
}
