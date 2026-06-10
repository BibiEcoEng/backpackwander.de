import { redirect } from 'next/navigation';
import { getLocalizedPath } from '@/lib/routing';
import { getRequestLocale } from '@/lib/routing-server';

export default async function HomePage() {
  const locale = await getRequestLocale();
  redirect(getLocalizedPath(locale, '/'));
}
