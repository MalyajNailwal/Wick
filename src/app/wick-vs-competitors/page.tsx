import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import WickVsCompetitorsClient from '@/components/WickVsCompetitorsClient';
import { wickVsCompetitorsMetadata } from '@/app/metadata';

export const metadata = wickVsCompetitorsMetadata;

export default function WickVsCompetitorsPage() {
  return (
    <main id="main-content" className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wick.co.in' },
              { '@type': 'ListItem', position: 2, name: 'Wick vs Competitors', item: 'https://wick.co.in/wick-vs-competitors' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Table',
            about: {
              '@type': 'Thing',
              name: 'Wick ATES vs TPMS vs Manual Monitoring Comparison',
            },
            description: 'Feature-by-feature comparison of Wick ATES TyreRakhshak, generic TPMS systems, international ATES, and manual tyre monitoring for commercial vehicles.',
            mainEntity: {
              '@type': 'Dataset',
              name: 'Tyre Management System Comparison Data',
              description: 'Comparative data across 4 tyre management approaches: Wick ATES, Generic TPMS, International ATES, and Manual Monitoring',
              distribution: {
                '@type': 'DataDownload',
                encodingFormat: 'application/json',
                contentUrl: 'https://wick.co.in/wick-vs-competitors',
              },
            },
          })
        }}
      />
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs 
            items={[{ name: 'Wick vs Competitors', url: '/wick-vs-competitors' }]}
            className="mb-8"
          />
        </div>
      </div>
      <WickVsCompetitorsClient />
    </main>
  );
}