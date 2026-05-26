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
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Amazonbot', 'anthropic-ai', 'cohere-ai'],
        allow: '/',
      },
      {
        userAgent: ['Bytespider', 'CCBot', 'Omigili'],
        disallow: '/',
      },
    ],
    sitemap: 'https://wick.co.in/sitemap.xml',
  };
}
