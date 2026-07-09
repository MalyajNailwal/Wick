import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trailer Inflation System India | Automatic Tyre Inflation for Trailers | Wick ATES',
  description: 'Automatic trailer inflation system by Wick TyreRakhshak. Maintains tyre pressure on multi-axle trailers automatically. Prevents blowouts, extends tyre life by 20%, saves fuel. Trusted by 50+ fleet operators across India.',
  keywords: 'trailer inflation system, inflation trailer, automatic trailer tyre inflation, trailer tyre pressure system, trailer tyre inflation system India, multi-axle trailer tyre pressure, trailer blowout prevention, automatic trailer tyre pressure control, trailer fleet tyre management, trailer tyre maintenance system, trailer tyre pressure monitoring, heavy trailer tyre inflation, commercial trailer tyre safety, how to inflate trailer tyres automatically, trailer tyre pressure management India, best trailer inflation system India, trailer tyre life extension, truck trailer tyre inflation, long haul trailer tyre pressure, trailer tyre pressure equalisation',
  openGraph: {
    title: 'Trailer Inflation System India | Automatic Tyre Inflation for Trailers',
    description: 'Wick TyreRakhshak ATES — automatic trailer inflation system for multi-axle trailers. Prevents blowouts, extends tyre life, saves fuel.',
    url: 'https://wick.co.in/inflation-trailer',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Trailer Inflation System - Automatic Tyre Pressure for Trailers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trailer Inflation System India | Wick ATES',
    description: 'Automatic trailer inflation system. Prevents blowouts, extends tyre life by 20%, saves fuel.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/inflation-trailer',
  },
};

export default function InflationTrailerLayout({
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
              { '@type': 'ListItem', position: 2, name: 'Trailer Inflation System', item: 'https://wick.co.in/inflation-trailer' }
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
            name: 'Wick TyreRakhshak ATES - Trailer Inflation System',
            description: 'Automatic tyre inflation and equalisation system designed for multi-axle commercial trailers. Maintains optimal tyre pressure during operation, prevents blowouts, extends tyre life.',
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
                name: 'What is a trailer inflation system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A trailer inflation system automatically maintains optimal tyre pressure on commercial trailers while they are in operation. Wick TyreRakhshak ATES monitors pressure across all trailer axles and equalises air automatically, preventing underinflation and blowouts without driver intervention.'
                }
              },
              {
                '@type': 'Question',
                name: 'Why do trailers need automatic tyre inflation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Trailers are more vulnerable to tyre pressure issues than trucks because they have more axles, carry heavy loads, and often lack direct driver monitoring. Underinflated trailer tyres cause blowouts, uneven wear, higher fuel consumption, and costly downtime. An automatic system maintains pressure continuously without stopping the vehicle.'
                }
              },
              {
                '@type': 'Question',
                name: 'How does an automatic trailer inflation system work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The system connects to the trailer air supply and uses manifolds, control valves, and rotary unions to distribute air to each tyre. It continuously monitors pressure and automatically inflates or deflates tyres to maintain optimal levels based on load and road conditions. The rotary union is the only moving component.'
                }
              },
              {
                '@type': 'Question',
                name: 'How much can a trailer inflation system save?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fleet operators using Wick TyreRakhshak on trailers typically report 20% longer tyre life, over 2% fuel savings, and 144 hours of avoided downtime per trailer annually. For a 20-trailer fleet, total annual savings can exceed Rs 20 lakhs.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is Wick ATES compatible with all trailer types?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wick TyreRakhshak ATES is compatible with commercial trailers using YORK RB15 axles and Pneumatic Samrat Series suspension systems. It supports multi-axle configurations and runs on standard 24V DC power available in commercial vehicles.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can trailer tyre inflation prevent blowouts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Blowouts are primarily caused by underinflation leading to heat build-up. By maintaining correct pressure at all times, the system prevents the conditions that cause blowouts. Fleet operators report significantly fewer tyre-related incidents after installation.'
                }
              }
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
