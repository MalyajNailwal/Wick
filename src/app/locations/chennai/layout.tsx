import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Chennai | Fleet Tyre Management Tamil Nadu',
  description: 'Automatic tyre inflation system for Chennai fleet operators. ATES by Wick delivers 20% longer tyre life and 2%+ fuel savings for auto manufacturing logistics, port container transport, and textile distribution fleets operating in coastal Tamil Nadu.',
  keywords: 'tyre inflation system Chennai, fleet tyre management Tamil Nadu, truck tyre safety Chennai, automatic tyre inflation Chennai, commercial vehicle tyre management Chennai, fleet safety solutions Tamil Nadu, truck tyre pressure monitoring Chennai, port logistics tyre safety Chennai, auto manufacturing fleet management Chennai, coastal fleet tyre solutions Tamil Nadu',
  openGraph: {
    title: 'Tyre Inflation System in Chennai | Fleet Tyre Management Tamil Nadu',
    description: 'Automatic tyre inflation system for Chennai fleet operators. 20% longer tyre life, 2%+ fuel savings for auto manufacturing and port logistics.',
    url: 'https://wick.co.in/locations/chennai',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Chennai - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Chennai | Fleet Tyre Management Tamil Nadu',
    description: 'Automatic tyre inflation system for Chennai fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/chennai',
  },
};

export default function ChennaiLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Chennai', item: 'https://wick.co.in/locations/chennai' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Wick - Tyre Inflation System Chennai',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Chennai and Tamil Nadu. ATES technology for auto manufacturing logistics and port container transport.',
            url: 'https://wick.co.in/locations/chennai',
            areaServed: {
              '@type': 'City',
              name: 'Chennai'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.7',
              bestRating: '5',
              ratingCount: '29',
              reviewCount: '24',
            },
            review: [
              {
                '@type': 'Review',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                author: { '@type': 'Person', name: 'Karthik Menon' },
                reviewBody: 'Our Ennore port container fleet has been using ATES for 18 months. Tyre-related breakdowns reduced by 90%. The system handles Chennai coastal humidity and heat perfectly.',
              },
            ],
            parentOrganization: {
              '@type': 'Organization',
              name: 'Wick',
              url: 'https://wick.co.in',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'House Of Wick, 33B, NIT',
                addressLocality: 'Faridabad',
                addressRegion: 'Haryana',
                postalCode: '121001',
                addressCountry: 'IN'
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}
