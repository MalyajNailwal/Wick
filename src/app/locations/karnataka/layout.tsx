import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Karnataka | Fleet Tyre Management Karnataka',
  description: 'Automatic tyre inflation system for Karnataka fleet operators. ATES by Wick delivers 20% longer tyre life, 2%+ fuel savings for trucks on Bangalore-Chennai-Mumbai highway, IT corridor traffic, and Mangalore port logistics. Trusted by fleet operators in Bangalore, Mysore, Hubli-Dharwad, and Mangalore.',
  keywords: 'tyre inflation system Karnataka, fleet tyre management Karnataka, truck tyre safety Karnataka, automatic tyre inflation Karnataka, commercial vehicle tyre management Karnataka, fleet safety solutions Karnataka, truck tyre pressure monitoring Karnataka, tyre inflation system Bangalore, tyre inflation system Mysore, tyre inflation system Mangalore, Bangalore IT corridor fleet management, Karnataka highway fleet solutions',
  openGraph: {
    title: 'Tyre Inflation System in Karnataka | Fleet Tyre Management Karnataka',
    description: 'Automatic tyre inflation system for Karnataka fleet operators. 20% longer tyre life, 2%+ fuel savings across Bangalore, Mysore, and Mangalore corridors.',
    url: 'https://wick.co.in/locations/karnataka',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Karnataka - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Karnataka | Fleet Tyre Management Karnataka',
    description: 'Automatic tyre inflation system for Karnataka fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/karnataka',
  },
};

export default function KarnatakaLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: '', item: '' }
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
            name: 'Wick - Tyre Inflation System Karnataka',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Karnataka. ATES technology for IT corridor transport, mining logistics, port freight, and interstate highway trucking.',
            url: 'https://wick.co.in/locations/karnataka',
            areaServed: {
              '@type': 'State',
              name: 'Karnataka'
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
