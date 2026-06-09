import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Haryana | Fleet Tyre Management Haryana',
  description: 'Automatic tyre inflation system for Haryana fleet operators. ATES by Wick delivers 20% longer tyre life, 2%+ fuel savings for trucks operating across Faridabad, Gurgaon, Panipat, and the NH-44/NH-48 heavy corridors. Trusted by auto manufacturing, IT logistics, and industrial transport fleets across Haryana.',
  keywords: 'tyre inflation system Haryana, fleet tyre management Haryana, truck tyre safety Haryana, automatic tyre inflation Haryana, commercial vehicle tyre management Haryana, fleet safety solutions Haryana, truck tyre pressure monitoring Haryana, tyre inflation system Faridabad, tyre inflation system Gurgaon, tyre inflation system Panipat, NH-44 fleet management, Haryana industrial fleet solutions',
  openGraph: {
    title: 'Tyre Inflation System in Haryana | Fleet Tyre Management Haryana',
    description: 'Automatic tyre inflation system for Haryana fleet operators. 20% longer tyre life, 2%+ fuel savings for trucks on NH-44 and NH-48 corridors.',
    url: 'https://wick.co.in/locations/haryana',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Haryana - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Haryana | Fleet Tyre Management Haryana',
    description: 'Automatic tyre inflation system for Haryana fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/haryana',
  },
};

export default function HaryanaLayout({ children }: { children: React.ReactNode }) {
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
            name: 'Wick - Tyre Inflation System Haryana',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Haryana. ATES technology for auto manufacturing transport, IT logistics, industrial freight, and highway corridor trucking.',
            url: 'https://wick.co.in/locations/haryana',
            areaServed: {
              '@type': 'State',
              name: 'Haryana'
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
