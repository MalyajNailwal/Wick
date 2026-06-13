import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System for Mining Trucks India | Wick ATES',
  description:
    'Automatic tyre inflation system for mining trucks in India. Maintain optimal tyre pressure in extreme mining conditions. 20% longer tyre life, reduced blowouts.',
  keywords:
    'tyre inflation system mining trucks India, mining tyre pressure monitoring, mining fleet tyre management India, heavy equipment tyre maintenance India',
  openGraph: {
    title: 'Tyre Inflation System for Mining Trucks India | Wick ATES',
    description:
      'Automatic tyre inflation system for mining trucks in India. Maintain optimal tyre pressure in extreme mining conditions.',
    url: 'https://wick.co.in/industries/mining',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System for Mining Trucks - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System for Mining Trucks India | Wick ATES',
    description:
      'Automatic tyre inflation system for mining trucks. Maintain optimal pressure in extreme conditions.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/industries/mining',
  },
};

export default function MiningLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 3, name: 'Mining', item: 'https://wick.co.in/industries/mining' },
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
                name: 'How does ATES help mining trucks with tyre blowouts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ATES automatically equalises tyre pressure in real time, preventing underinflation and overinflation - the two primary causes of tyre blowouts in mining trucks. This reduces blowout incidents by up to 80% in harsh mining environments.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can ATES withstand extreme temperatures in open-pit mines?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. ATES is designed for extreme conditions. Open-pit mines can reach surface temperatures above 60C. ATES maintains consistent tyre pressure despite temperature fluctuations, preventing heat-induced blowouts and tread separation.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the ROI of ATES for a mining fleet?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Mining fleets typically save Rs 2-3 lakhs per vehicle annually through extended tyre life (20%+ longer), reduced downtime, and fewer emergency tyre replacements. Most mining operators recover the ATES investment within 6-8 months.',
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
