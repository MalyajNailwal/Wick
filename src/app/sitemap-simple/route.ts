export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://wick.co.in/</loc><priority>1.0</priority></url>
<url><loc>https://wick.co.in/products</loc><priority>0.9</priority></url>
<url><loc>https://wick.co.in/technology</loc><priority>0.8</priority></url>
<url><loc>https://wick.co.in/contact</loc><priority>0.7</priority></url>
<url><loc>https://wick.co.in/about</loc><priority>0.6</priority></url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}