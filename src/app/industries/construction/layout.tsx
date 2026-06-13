import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Pressure Monitoring for Construction Vehicles India | Wick ATES',
  description:
    'Automatic tyre pressure monitoring for construction vehicles in India. Maintain optimal pressure for excavators, dump trucks, and heavy equipment.',
  keywords:
    'tyre pressure monitoring construction vehicles India, construction fleet tyre management, heavy equipment tyre inflation India, construction vehicle safety India',
  openGraph: {
    title: 'Tyre Pressure Monitoring for Construction Vehicles India | Wick ATES',
    description:
      'Automatic tyre pressure monitoring for construction vehicles in India. Maintain optimal pressure for excavators, dump trucks, and heavy equipment.',
    url: 'https://wick.co.in/industries/construction',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Pressure Monitoring for Construction Vehicles - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Pressure Monitoring for Construction Vehicles India | Wick ATES',
    description:
      'Automatic tyre pressure monitoring for construction vehicles. Maintain optimal pressure for excavators and dump trucks.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/industries/construction',
  },
};

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 3, name: 'Construction', item: 'https://wick.co.in/industries/construction' },
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
                name: 'How does ATES help construction vehicles with uneven tyre wear?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ATES automatically equalises tyre pressure across all wheels, preventing the uneven wear patterns caused by heavy loads, rough terrain, and stop-start operations common on construction sites. This extends tyre life by 20%.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is ATES compatible with excavators and backhoes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. ATES is compatible with a wide range of construction equipment including excavators, backhoes, dump trucks, wheel loaders, graders, and cranes. Installation takes under 4 hours per vehicle.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can ATES handle the vibration and dust on construction sites?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. ATES is designed for harsh construction site conditions. The system is sealed against dust and debris, and tested to withstand the vibration and impact common in construction environments.',
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
