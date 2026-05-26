import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot'],
        allow: '/',
      },
      {
        userAgent: ['Bytespider', 'CCBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://wick.co.in/sitemap.xml',
  };
}
