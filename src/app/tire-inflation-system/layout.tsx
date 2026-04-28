import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System Guide | Trucks & Trailers',
  description: 'Complete guide to tyre inflation systems for trucks & trailers. Compare ATES vs TPMS vs manual. Learn how to save 20% on tyre costs and improve fleet safety.',
  keywords: 'tyre inflation system, automatic tyre pressure monitoring, truck tyre management, commercial vehicle tyre solutions, tyre pressure control system, fleet tyre management, ATES system, TPMS comparison, tyre inflation guide, truck tyre safety, trailer tyre inflation, tyre pressure automation, commercial tyre monitoring, how to prevent truck tyre blowouts, truck tyre wear causes, best tyre inflation system India, tyre inflation system vs TPMS, automatic vs manual tyre monitoring, commercial vehicle tyre maintenance guide',
  openGraph: {
    title: 'Tyre Inflation System Guide | Automatic Tyre Pressure Monitoring',
    description: 'Complete guide to tyre inflation systems for trucks & trailers. Learn how to save 20% on tyre costs and improve fleet safety.',
    url: 'https://wick.co.in/tire-inflation-system',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System Guide | Automatic Tyre Pressure Monitoring',
    description: 'Complete guide to tyre inflation systems. Learn how to save 20% on tyre costs and improve fleet safety.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/tire-inflation-system',
  },
};

export default function TireInflationSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wick.co.in' },
              { '@type': 'ListItem', position: 2, name: 'Tyre Inflation System Guide', item: 'https://wick.co.in/tire-inflation-system' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Complete Guide to Tire Inflation Systems for Commercial Vehicles',
            description: 'Learn about automatic tire inflation systems, ATES vs TPMS comparison, and how to improve fleet tire management.',
            author: {
              '@type': 'Organization',
              name: 'Wick',
              url: 'https://wick.co.in'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Wick',
              logo: {
                '@type': 'ImageObject',
                url: 'https://wick.co.in/logo.svg'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://wick.co.in/tire-inflation-system'
            },
            datePublished: '2024-01-01',
            dateModified: '2024-01-01'
          })
        }}
      />
      {children}
    </>
  );
}