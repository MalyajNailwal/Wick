import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Management for Logistics Fleets India | Wick ATES',
  description:
    'Automatic tyre management for logistics fleets in India. Reduce tyre costs, improve fuel efficiency, and ensure timely deliveries with ATES technology.',
  keywords:
    'tyre management logistics fleets India, logistics fleet tyre pressure monitoring, commercial logistics tyre safety India, fleet tyre management solutions India',
  openGraph: {
    title: 'Tyre Management for Logistics Fleets India | Wick ATES',
    description:
      'Automatic tyre management for logistics fleets in India. Reduce tyre costs and improve fuel efficiency.',
    url: 'https://wick.co.in/industries/logistics',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Management for Logistics Fleets - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Management for Logistics Fleets India | Wick ATES',
    description:
      'Automatic tyre management for logistics fleets. Reduce tyre costs and improve fuel efficiency.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/industries/logistics',
  },
};

export default function LogisticsLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://wick.co.in/industries' },
              { '@type': 'ListItem', position: 3, name: 'Logistics', item: 'https://wick.co.in/industries/logistics' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How does ATES reduce tyre costs for logistics fleets?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ATES automatically maintains optimal tyre pressure across your entire logistics fleet, extending tyre life by 20% and reducing fuel consumption by 2%+. For a 50-truck fleet, this translates to Rs 1-1.5 crore in annual savings on tyres and fuel combined.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can ATES help logistics fleets meet delivery deadlines?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. By eliminating roadside tyre checks and reducing breakdowns by up to 80%, ATES ensures your trucks stay on schedule. Drivers no longer lose hours at petrol stations checking pressure manually.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does ATES installation take on a logistics truck?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ATES installation takes under 4 hours per vehicle with zero downtime. Our technicians install at your depot or warehouse, so trucks are back on the road the same day.',
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
