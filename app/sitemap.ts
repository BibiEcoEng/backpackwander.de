import type { MetadataRoute } from 'next';
import { getLocalizedUrl } from '@/lib/routing';
import { pagePaths, type PageKey } from '@/lib/page-metadata';

const sitemapPages = Object.keys(pagePaths) as PageKey[];

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPages.flatMap((page) => {
    const path = pagePaths[page];

    return [
      {
        url: getLocalizedUrl('en', path),
        lastModified: new Date(),
        changeFrequency: (path === '/' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: path === '/' ? 1 : 0.7
      },
      {
        url: getLocalizedUrl('de', path),
        lastModified: new Date(),
        changeFrequency: (path === '/' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: path === '/' ? 1 : 0.7
      }
    ];
  });
}
