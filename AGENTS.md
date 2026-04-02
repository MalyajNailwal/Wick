<!-- This section is maintained by the coding agent via lore (https://github.com/BYK/opencode-lore) -->
## Long-term Knowledge

### Architecture

<!-- lore:019d4e73-d31b-761c-bacd-530218406f8b -->
* **Blog SEO: server component with dynamic metadata**: Blog post pages (\`blog/\[slug]/page.tsx\`) are server components that call \`generateMetadata()\` to produce per-post title, description, OG tags, and canonical URL. Each post includes BlogPosting JSON-LD schema and BreadcrumbList schema injected via \`dangerouslySetInnerHTML\`. The blog layout (\`blog/layout.tsx\`) provides a shared Blog schema. This mirrors the pattern used across all pages — each section has a \`layout.tsx\` with page-specific structured data.

### Gotcha

<!-- lore:019d4e73-d31a-7121-8427-ddc8bdc9310c -->
* **Product is ATES, not ATDIS**: The official product acronym is \*\*ATES\*\* (Automatic Tyre Equalisation System). The acronym ATDIS (Automatic Tyre Inflation and Deflation System) does not exist anywhere in the codebase and should never be used. Brand name is TyreRakhshak. All blog content, metadata, and schemas must use ATES.

### Pattern

<!-- lore:019d4e73-d317-74a0-aed5-eb39c6bb6aef -->
* **Blog posts as static data with dynamic routes**: Blog posts are defined in \`src/lib/blog-data.ts\` as a typed array (BlogPost interface with slug, title, excerpt, date, readTime, category, tags, content string). The listing page (\`blog/page.tsx\`) imports \`getAllPosts()\`. Individual posts render via \`blog/\[slug]/page.tsx\` which calls \`getPostBySlug()\`. The sitemap at \`sitemap-test/route.ts\` imports the same data to programmatically generate blog URLs. Content uses a simple markdown subset rendered by a custom \`BlogPostClient\` component — no external markdown library.

### Preference

<!-- lore:019d4e73-d31a-7121-8427-ddc98c7f16c8 -->
* **No horizontal rules or em dashes in blog content**: User explicitly dislikes \`---\` horizontal rule dividers in blog content and em dashes (\`—\`) in body text. Keep blog content clean with natural paragraph breaks instead of visual separators.
<!-- End lore-managed section -->
