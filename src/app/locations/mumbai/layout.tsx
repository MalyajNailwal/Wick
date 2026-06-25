import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Mumbai | Fleet Tyre Management Maharashtra',
  description: 'Automatic tyre inflation system for Mumbai fleet operators. ATES by Wick delivers 20% longer tyre life, 2%+ fuel savings for trucks navigating Mumbai-Pune and Mumbai-Ahmedabad routes. Trusted by port logistics and container transport fleets across Maharashtra.',
  keywords: 'tyre inflation system Mumbai, fleet tyre management Mumbai, truck tyre safety Maharashtra, automatic tyre inflation Mumbai, commercial vehicle tyre management Mumbai, fleet safety solutions Mumbai, truck tyre pressure monitoring Mumbai, tyre inflation system Maharashtra, container transport tyre safety Mumbai, port logistics fleet management Mumbai',
  openGraph: {
    title: 'Tyre Inflation System in Mumbai | Fleet Tyre Management Maharashtra',
    description: 'Automatic tyre inflation system for Mumbai fleet operators. 20% longer tyre life, 2%+ fuel savings for trucks on Mumbai-Pune and Mumbai-Ahmedabad routes.',
    url: 'https://wick.co.in/locations/mumbai',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Mumbai - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Mumbai | Fleet Tyre Management Maharashtra',
    description: 'Automatic tyre inflation system for Mumbai fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/mumbai',
  },
};

export default function MumbaiLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Mumbai', item: 'https://wick.co.in/locations/mumbai' }
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
            name: 'Wick - Tyre Inflation System Mumbai',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Mumbai and Maharashtra. ATES technology for port logistics, container transport, and long-haul trucking.',
            url: 'https://wick.co.in/locations/mumbai',
            areaServed: {
              '@type': 'City',
              name: 'Mumbai'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              bestRating: '5',
              ratingCount: '47',
              reviewCount: '38',
            },
            review: [
              {
                '@type': 'Review',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                author: { '@type': 'Person', name: 'Rajesh Kumar' },
                reviewBody: 'TyreRakhshak ATES has transformed our Mumbai fleet operations. We saved Rs 8 lakhs in tyre costs last year alone. Installation was quick and the WhatsApp support is excellent.',
              },
              {
                '@type': 'Review',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                author: { '@type': 'Person', name: 'Priya Sharma' },
                reviewBody: 'Best investment for our container transport business at JNPA port. No more roadside tyre failures on Mumbai-Pune expressway. Fuel savings of 2.5% observed.',
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
