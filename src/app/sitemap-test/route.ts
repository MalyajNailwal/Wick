import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://wick.co.in';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- Homepage - Truck Maintenance System & Tyre Maintenance System -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Products - Truck Inflation System & Trailer Inflation System -->
  <url>
    <loc>${baseUrl}/products</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <!-- Technology - ATES Technology & Tyre Maintenance App -->
  <url>
    <loc>${baseUrl}/technology</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Contact - Get Quote for Truck Tyre & Trailer Tyre -->
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <!-- About - Wick ATES Company Information -->
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Why Choose Wick ATES - Competitive Advantage -->
  <url>
    <loc>${baseUrl}/why-wick-ates</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <!-- Wick vs Competitors - Comparison Guide -->
  <url>
    <loc>${baseUrl}/wick-vs-competitors</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <!-- Tire Inflation System Guide - Generic Industry Keywords -->
  <url>
    <loc>${baseUrl}/tire-inflation-system</loc>
    <lastmod>2026-03-12T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Truck Tire Pressure Monitoring - TPMS Solutions -->
  <url>
    <loc>${baseUrl}/truck-tire-pressure-monitoring</loc>
    <lastmod>2026-03-12T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- FAQ - Tire Inflation System Questions -->
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>2026-03-12T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Blog - Fleet Management & Tyre Technology Insights -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- Special Page -->
  <url>
    <loc>${baseUrl}/wickkaampealt</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <!-- Survey Page -->
  <url>
    <loc>${baseUrl}/mavas-survey</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <!-- Auth Page -->
  <url>
    <loc>${baseUrl}/auth</loc>
    <lastmod>2026-03-11T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
}