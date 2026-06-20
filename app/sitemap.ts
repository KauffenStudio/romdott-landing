import type { MetadataRoute } from 'next';
import { cities } from './_data/cities';
import { audiences } from './_data/audiences';
import { guides } from './_data/guides';

const BASE_URL = 'https://roomdott.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/roommates`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/for`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/roommates/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const audienceRoutes: MetadataRoute.Sitemap = audiences.map((a) => ({
    url: `${BASE_URL}/for/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.dateModified),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...cityRoutes, ...audienceRoutes, ...guideRoutes];
}
