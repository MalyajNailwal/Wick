import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wick.co.in';
  
  // Use specific dates instead of dynamic currentDate to avoid caching issues
  const lastModified = new Date('2026-03-11T00:00:00.000Z');
  const recentUpdate = new Date('2026-03-11T00:00:00.000Z');

  return [
    // Homepage - Highest priority
    {
      url: baseUrl,
      lastModified: recentUpdate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Products page - Very high priority (commercial intent)
    {
      url: `${baseUrl}/products`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Technology page - High priority (informational)
    {
      url: `${baseUrl}/technology`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // About page - Important for brand
    {
      url: `${baseUrl}/about`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Contact page - Important for conversions
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Blog page - Content marketing
    {
      url: `${baseUrl}/blog`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Auth page - Lower priority
    {
      url: `${baseUrl}/auth`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    // Survey page - Specific functionality
    {
      url: `${baseUrl}/mavas-survey`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    // Special page
    {
      url: `${baseUrl}/wickkaampealt`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
