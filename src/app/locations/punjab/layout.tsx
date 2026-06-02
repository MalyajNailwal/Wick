import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Punjab | Fleet Tyre Management Punjab',
  description: 'Automatic tyre inflation system for Punjab fleet operators. ATES by Wick delivers 20% longer tyre life, 2%+ fuel savings for agricultural transport, Ludhiana industrial freight, and Amritsar-Delhi highway operations. Trusted by fleet operators in Ludhiana, Amritsar, Jalandhar, Patiala, and across Punjab.',
  keywords: 'tyre inflation system Punjab, fleet tyre management Punjab, truck tyre safety Punjab, automatic tyre inflation Punjab, commercial vehicle tyre management Punjab, fleet safety solutions Punjab, truck tyre pressure monitoring Punjab, tyre inflation system Ludhiana, tyre inflation system Amritsar, agricultural transport tyre safety Punjab, Punjab industrial fleet solutions, Amritsar-Delhi highway fleet management',
  openGraph: {
    title: 'Tyre Inflation System in Punjab | Fleet Tyre Management Punjab',
    description: 'Automatic tyre inflation system for Punjab fleet operators. 20% longer tyre life, 2%+ fuel savings for agricultural and industrial transport.',
    url: 'https://wick.co.in/locations/punjab',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Punjab - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Punjab | Fleet Tyre Management Punjab',
    description: 'Automatic tyre inflation system for Punjab fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/punjab',
  },
};

export default function PunjabLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://wick.co.in/locations' },
              { '@type': 'ListItem', position: 3, name: 'Punjab', item: 'https://wick.co.in/locations/punjab' }
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
            name: 'Wick - Tyre Inflation System Punjab',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Punjab. ATES technology for agricultural harvest transport, industrial freight, bicycle and auto parts manufacturing logistics, and interstate highway trucking.',
            url: 'https://wick.co.in/locations/punjab',
            areaServed: {
              '@type': 'State',
              name: 'Punjab'
            },
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
