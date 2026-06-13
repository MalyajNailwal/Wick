import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System India | Best Automatic Tyre Pressure Monitoring | Wick ATES',
  description: 'India\'s leading tyre inflation system manufacturer. Automatic tyre pressure monitoring for trucks & trailers. 20% longer tyre life, 2%+ fuel savings. Trusted by 50+ fleet operators across India.',
  keywords: 'tyre inflation system India, tire inflation system India, automatic tyre inflation India, truck tyre pressure monitoring India, commercial vehicle tyre safety India, best tyre inflation system India, tyre pressure monitoring system India, fleet tyre management India, truck tyre blowout prevention, automatic tyre equalisation India, commercial vehicle maintenance India, tyre inflation technology India',
  openGraph: {
    title: 'Tyre Inflation System India | Best Automatic Tyre Pressure Monitoring',
    description: 'India\'s leading tyre inflation system. Automatic tyre pressure monitoring for trucks & trailers. 20% longer tyre life, 2%+ fuel savings.',
    url: 'https://wick.co.in/tyre-inflation-system-india',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System India - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System India | Best Automatic Tyre Pressure Monitoring',
    description: 'India\'s leading tyre inflation system. 20% longer tyre life, 2%+ fuel savings.',
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
                name: 'What is the best tyre inflation system in India?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wick TyreRakhshak ATES is India\'s leading automatic tyre inflation system. It automatically maintains optimal tyre pressure for trucks and trailers, delivering 20% longer tyre life and 2%+ fuel savings. Trusted by 50+ fleet operators across India.'
                }
              },
              {
                '@type': 'Question',
                name: 'How much does a tyre inflation system cost in India?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tyre inflation system pricing in India varies based on fleet size and requirements. Wick ATES typically pays for itself within 6-8 months through tyre and fuel savings of Rs 2-3 lakhs per vehicle annually. Contact +91-9721601500 for a custom quote.'
                }
              },
              {
                '@type': 'Question',
                name: 'Which trucks are compatible with tyre inflation systems in India?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wick ATES is compatible with YORK RB15 Axles and Pneumatic Samrat Series Suspension systems, which are widely used in Indian commercial vehicles. The system runs on 24V DC power standard in trucks and trailers.'
                }
              },
              {
                '@type': 'Question',
                name: 'How does automatic tyre inflation improve safety on Indian highways?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Automatic tyre inflation maintains optimal pressure at all times, preventing 95% of tyre blowouts caused by underinflation. This is critical on Indian highways where poor road conditions and extreme weather increase tyre failure risks.'
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
