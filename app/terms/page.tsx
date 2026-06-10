import { redirect } from 'next/navigation';
import { getLocalizedPath } from '@/lib/routing';
import { getRequestLocale } from '@/lib/routing-server';

export default async function TermsPage() {
  const locale = await getRequestLocale();
  redirect(getLocalizedPath(locale, '/terms'));
}
