<!-- This section is maintained by the coding agent via lore (https://github.com/BYK/opencode-lore) -->
## Long-term Knowledge

### Architecture

<!-- lore:019d4e73-d31b-761c-bacd-530218406f8b -->
* **Blog SEO: server component with dynamic metadata**: Blog posts are static data in \`src/lib/blog-data.ts\`. Adding a post requires editing this file only; \`getAllPosts()\` auto-feeds the listing page, sitemap, and dynamic metadata generation in \`blog/\[slug]/page.tsx\`. Each post auto-generates title, description, OG tags, canonical, BlogPosting schema, and BreadcrumbList schema.

<!-- lore:019d51f2-8192-7300-8f7c-3a824300a433 -->
* **Hreflang for language alternates**: Add hreflang in root layout metadata \`alternates: { languages: { 'en-IN': 'https://wick.co.in/', 'en': 'https://wick.co.in/' } }\` to help Google serve the correct language version. Important caveat: Next.js \`alternates.languages\` does not auto-include a self-referencing \`\<xhtml:link>\` for the current page, which Google requires for valid hreflang. Add the current locale explicitly in the languages map alongside other variants.

### Gotcha

<!-- lore:019dd28c-69cb-7cad-98f1-fcce36a65984 -->
* **FAQ page missing structured data schema**: \`/faq/page.tsx\` is a client component containing structured Q\&A data but exports no \`FAQPage\` JSON-LD schema. This misses rich snippet opportunities in search results. Since the page is a client component, schema cannot be injected in the same file. Fix: create a \`layout.tsx\` for \`/faq\` that exports the \`FAQPage\` schema alongside metadata.

<!-- lore:019dd28c-69cb-7cad-98f1-fccf3cd53806 -->
* **Hardcoded stale lastmod dates in sitemap**: The sitemap route hardcodes \`lastModified\` dates like \`2026-03-11\` for most pages and \`2026-04-02\` for the blog listing. Stale or inaccurate lastmod dates reduce Google's trust in the sitemap and may cause it to ignore freshness signals. Fix: use \`new Date()\` for current dates, or omit \`lastModified\` entirely if it cannot be accurately maintained.

<!-- lore:019d51eb-20a6-73c5-9f3a-6ef77c4f6c49 -->
* **Hero images need priority prop**: Hero images need priority loading. LCP images must use loading="eager" not loading='lazy'. For Framer Motion's motion.img, priority prop doesn't exist — use loading="eager" instead (src/app/page.tsx:362). This directly impacts Core Web Vitals ranking.

<!-- lore:019dd28c-69ca-7968-8ce0-723c3b55202d -->
* **Metadata uses inconsistent tire/tyre spelling**: Standardize on Indian spelling 'tyre' throughout. Scope includes metadata, layout.tsx JSON-LD schemas, page content, and blog markdown. Paths \`/tire-inflation-system\` and \`/truck-tire-pressure-monitoring\` intentionally keep 'tire' for URL keyword diversity, but all visible copy must use 'tyre'.

<!-- lore:019dd28c-69cb-7cad-98f1-fccd62739e8b -->
* **OG images use relative paths in root layout**: The root \`layout.tsx\` exports Open Graph image metadata using a relative path \`/media/productimghd-removebg-preview.png\`. Social platforms may fail to resolve relative OG image URLs correctly. The blog layout already uses absolute URLs \`https://wick.co.in/media/...\`. Fix: make all OG image URLs absolute by prefixing the base domain in root metadata.

<!-- lore:019d51eb-20a3-74dd-a958-4cf7384b8cbe -->
* **Private pages in sitemap**: Private pages /wickkaampealt and /mavas-survey export \`robots: { index: false, follow: false }\` in their \`layout.tsx\` metadata. However, /auth/page.tsx is a client component with no layout and no metadata, yet all three routes remain in the sitemap. Including noindex URLs in the sitemap wastes crawl budget and sends conflicting signals. Fix: create \`auth/layout.tsx\` with noindex metadata, and remove all three routes from sitemap generation.

<!-- lore:019d4e73-d31a-7121-8427-ddc8bdc9310c -->
* **Product is ATES, not ATDIS**: The official product acronym is \*\*ATES\*\* (Automatic Tyre Equalisation System). The acronym ATDIS (Automatic Tyre Inflation and Deflation System) does not exist anywhere in the codebase and should never be used. Brand name is TyreRakhshak. All blog content, metadata, and schemas must use ATES.

<!-- lore:019dd28c-69c9-7a36-8c04-4e62f4cb90ee -->
* **Sitemap at non-standard /sitemap-test URL**: Sitemap uses Next.js native \`app/sitemap.ts\` exporting \`MetadataRoute.Sitemap\`, auto-served at \`/sitemap.xml\`. Private routes (\`/auth\`, \`/wickkaampealt\`, \`/mavas-survey\`) are excluded and \`lastModified\` uses \`new Date()\` dynamically. Do not create custom route handlers for sitemaps. Reference \`robots.ts\` which points to the standard URL.

### Pattern

<!-- lore:019d4e73-d317-74a0-aed5-eb39c6bb6aef -->
* **Blog posts as static data with dynamic routes**: Blog posts are defined in \`src/lib/blog-data.ts\` as a typed array (BlogPost interface with slug, title, excerpt, date, readTime, category, tags, content string). The listing page (\`blog/page.tsx\`) imports \`getAllPosts()\`. Individual posts render via \`blog/\[slug]/page.tsx\` which calls \`getPostBySlug()\`. The sitemap at \`sitemap-test/route.ts\` imports the same data to programmatically generate blog URLs. Content uses a simple markdown subset rendered by a custom \`BlogPostClient\` component — no external markdown library.

<!-- lore:019d51f2-8191-7d62-8a74-4c37908694c5 -->
* **H1 hierarchy for SEO accessibility**: Use single H1 for SEO: add sr-only H1 at top of page for screen readers + search engines, use visible H2/H3 for section hierarchy. Page.tsx uses this pattern with hidden H1 + visible H2.

<!-- lore:019d51eb-2090-7df3-bd2d-3ddfe3fbb1c7 -->
* **Next.js App Router SEO Pattern**: App Router SEO uses metadata API. Root layout exports static Metadata; dynamic pages use generateMetadata() (see blog/\[slug]/page.tsx). The project centralizes page metadata in src/app/metadata.ts as named exports (e.g., whyWickATESMetadata) that pages import and re-export. SEO utilities and 130+ keywords live in src/lib/seo-utils.ts. Reusable schema components (OrganizationSchema, ProductSchema, LocalBusinessSchema, FAQSchema, Breadcrumbs) are in src/components/seo/. JSON-LD is injected via components in layout.tsx files. Reference SEO\_OPTIMIZATION\_SUMMARY.md for keyword strategy.

<!-- lore:019d51f2-8191-7d62-8a74-4c387c52696b -->
* **Skip navigation link pattern**: Add skip link in root layout body: \<a href="#main-content" className="sr-only focus:not-sr-only">Skip to content\</a>. Add id="main-content" to main content wrapper. Improves accessibility and SEO.

### Preference

<!-- lore:019d4e73-d31a-7121-8427-ddc98c7f16c8 -->
* **No horizontal rules or em dashes in blog content**: User explicitly dislikes \`---\` horizontal rule dividers in blog content and em dashes (\`—\`) in body text. Keep blog content clean with natural paragraph breaks instead of visual separators.
<!-- End lore-managed section -->
