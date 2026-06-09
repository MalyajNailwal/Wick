import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Ahmedabad | Fleet Tyre Management Gujarat',
  description: 'Automatic tyre inflation system for Ahmedabad fleet operators. ATES delivers 20% longer tyre life, 2%+ fuel savings for trucks on Ahmedabad-Mumbai and Delhi-Ahmedabad corridors. Trusted by textile, chemical, and manufacturing fleets across Gujarat.',
  keywords: 'tyre inflation system Ahmedabad, fleet tyre management Ahmedabad, truck tyre safety Gujarat, automatic tyre inflation Ahmedabad, commercial vehicle tyre management Ahmedabad, fleet safety solutions Ahmedabad, truck tyre pressure monitoring Ahmedabad, tyre inflation system Gujarat, textile transport tyre Ahmedabad, chemical logistics fleet Gujarat, Ahmedabad Mumbai corridor tyre',
  openGraph: {
    title: 'Tyre Inflation System in Ahmedabad | Fleet Tyre Management Gujarat',
    description: 'Automatic tyre inflation system for Ahmedabad fleet operators. 20% longer tyre life, 2%+ fuel savings for trucks on Ahmedabad-Mumbai and Delhi-Ahmedabad corridors.',
    url: 'https://wick.co.in/locations/ahmedabad',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Ahmedabad - ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Ahmedabad | Fleet Tyre Management Gujarat',
    description: 'Automatic tyre inflation system for Ahmedabad fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/ahmedabad',
  },
};

export default function AhmedabadLayout({ children }: { children: React.ReactNode }) {
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
            name: 'Tyre Inflation System Ahmedabad',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Ahmedabad and Gujarat. ATES technology for textile transport, chemical logistics, and manufacturing fleets.',
            url: 'https://wick.co.in/locations/ahmedabad',
            areaServed: {
              '@type': 'City',
              name: 'Ahmedabad'
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
