import { redirect } from 'next/navigation';
import { getLocalizedPath } from '@/lib/routing';
import { getRequestLocale } from '@/lib/routing-server';

export default async function ImpressumPage() {
  const locale = await getRequestLocale();
  redirect(getLocalizedPath(locale, '/impressum'));
}
