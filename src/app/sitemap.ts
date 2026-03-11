import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wick.co.in';
  
  // Use ISO string format for better compatibility
  const lastModified = '2026-03-11T00:00:00.000Z';
  const recentUpdate = '2026-03-11T00:00:00.000Z';

  return [
    // Homepage - Highest priority
    {
      url: baseUrl,
      lastModified: new Date(recentUpdate),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Products page - Very high priority (commercial intent)
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(recentUpdate),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Technology page - High priority (informational)
    {
      url: `${baseUrl}/technology`,
      lastModified: new Date(recentUpdate),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Contact page - Important for conversions
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(lastModified),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // About page - Important for brand
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(lastModified),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog page - Content marketing
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(recentUpdate),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Special page
    {
      url: `${baseUrl}/wickkaampealt`,
      lastModified: new Date(lastModified),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Survey page - Specific functionality
    {
      url: `${baseUrl}/mavas-survey`,
      lastModified: new Date(lastModified),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    // Auth page - Lower priority
    {
      url: `${baseUrl}/auth`,
      lastModified: new Date(lastModified),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
