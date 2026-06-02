import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Tamil Nadu | Fleet Tyre Management Tamil Nadu',
  description: 'Automatic tyre inflation system for Tamil Nadu fleet operators. ATES by Wick delivers 20% longer tyre life, 2%+ fuel savings for trucks on Chennai-Bangalore corridor, Ennore port logistics, and Coimbatore textile routes. Trusted by auto manufacturing, textile, and port logistics fleets in Chennai, Coimbatore, Madurai, and Salem.',
  keywords: 'tyre inflation system Tamil Nadu, fleet tyre management Tamil Nadu, truck tyre safety Tamil Nadu, automatic tyre inflation Tamil Nadu, commercial vehicle tyre management Tamil Nadu, fleet safety solutions Tamil Nadu, truck tyre pressure monitoring Tamil Nadu, tyre inflation system Chennai, tyre inflation system Coimbatore, Chennai port fleet management, Chennai-Bangalore corridor fleet, Tamil Nadu industrial fleet solutions',
  openGraph: {
    title: 'Tyre Inflation System in Tamil Nadu | Fleet Tyre Management Tamil Nadu',
    description: 'Automatic tyre inflation system for Tamil Nadu fleet operators. 20% longer tyre life, 2%+ fuel savings across Chennai, Coimbatore, and port corridors.',
    url: 'https://wick.co.in/locations/tamil-nadu',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Tamil Nadu - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Tamil Nadu | Fleet Tyre Management Tamil Nadu',
    description: 'Automatic tyre inflation system for Tamil Nadu fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/tamil-nadu',
  },
};

export default function TamilNaduLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 3, name: 'Tamil Nadu', item: 'https://wick.co.in/locations/tamil-nadu' }
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
            name: 'Wick - Tyre Inflation System Tamil Nadu',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Tamil Nadu. ATES technology for auto manufacturing transport, port logistics, textile freight, and industrial corridor trucking.',
            url: 'https://wick.co.in/locations/tamil-nadu',
            areaServed: {
              '@type': 'State',
              name: 'Tamil Nadu'
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
