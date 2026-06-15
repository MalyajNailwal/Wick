import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System India | Automatic Tyre Equalisation System | Wick ATES',
  description: 'Wick TyreRakhshak ATES is India\'s first advanced automatic tyre equalisation system for trucks and trailers. Maintain tyre pressure automatically, reduce blowout risk, extend tyre life, and save fuel across India.',
  keywords: 'tyre inflation system India, India’s first tyre inflation system company, automatic tyre inflation system India, automatic tyre equalisation system India, best tyre inflation system India, TyreRakhshak ATES, truck tyre pressure monitoring India, trailer tyre pressure monitoring, commercial vehicle tyre safety India, fleet tyre management India, tyre blowout prevention India, automatic tyre pressure control India',
  openGraph: {
    title: 'Tyre Inflation System India | Automatic Tyre Equalisation System | Wick ATES',
    description: 'Wick TyreRakhshak ATES is India\'s first advanced automatic tyre equalisation system for commercial trucks and trailers.',
    url: 'https://wick.co.in/tyre-inflation-system-india',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Wick TyreRakhshak ATES - Automatic Tyre Equalisation System India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System India | Automatic Tyre Equalisation System | Wick ATES',
    description: 'Wick TyreRakhshak ATES helps Indian fleets maintain tyre pressure automatically for safer, more efficient operations.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/tyre-inflation-system-india',
  },
};

export default function TyreInflationSystemIndiaLayout({
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
              { '@type': 'ListItem', position: 2, name: 'Tyre Inflation System India', item: 'https://wick.co.in/tyre-inflation-system-india' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Wick TyreRakhshak ATES - Tyre Inflation System India',
            description: 'India\'s first advanced Automatic Tyre Equalisation System for commercial vehicles. Maintains optimal tyre pressure automatically.',
            brand: {
              '@type': 'Brand',
              name: 'Wick'
            },
            manufacturer: {
              '@type': 'Organization',
              name: 'Wick',
              url: 'https://wick.co.in'
            },
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
              url: 'https://wick.co.in/products'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '50',
              bestRating: '5',
              worstRating: '1'
            },
          })
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
                name: 'What is a tyre inflation system in India?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A tyre inflation system automatically maintains optimal tyre pressure in commercial vehicles. Wick TyreRakhshak ATES is designed for Indian trucks and trailers to improve safety, tyre life, fuel efficiency, and uptime.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is Wick ATES suitable for Indian roads?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Wick TyreRakhshak ATES is designed for Indian highway conditions, heavy loads, high temperatures, poor road surfaces, and long-distance commercial vehicle operations.'
                }
              },
              {
                '@type': 'Question',
                name: 'Which vehicles can use TyreRakhshak ATES?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wick ATES is compatible with commercial trucks and trailers using YORK RB15 axles and Pneumatic Samrat Series suspension systems. It is commonly used by fleet operators across India.'
                }
              },
              {
                '@type': 'Question',
                name: 'How does ATES help fleet operators save money?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Automatic tyre pressure maintenance can help extend tyre life, reduce fuel consumption, prevent avoidable downtime, and lower maintenance labour costs across the fleet.'
                }
              },
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.speakable']
            }
          })
        }}
      />
      {children}
    </>
  );
}
