import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Maharashtra | Fleet Tyre Management Maharashtra',
  description: 'Automatic tyre inflation system for Maharashtra fleet operators. ATES by Wick delivers 20% longer tyre life, 2%+ fuel savings for trucks on Mumbai-Pune corridor, JNPA port logistics, and Western Ghat routes. Trusted by fleet operators in Mumbai, Pune, Nagpur, Nashik, and Aurangabad.',
  keywords: 'tyre inflation system Maharashtra, fleet tyre management Maharashtra, truck tyre safety Maharashtra, automatic tyre inflation Maharashtra, commercial vehicle tyre management Maharashtra, fleet safety solutions Maharashtra, truck tyre pressure monitoring Maharashtra, tyre inflation system Pune, tyre inflation system Nagpur, tyre inflation system Nashik, JNPA port fleet management, Maharashtra highway fleet solutions',
  openGraph: {
    title: 'Tyre Inflation System in Maharashtra | Fleet Tyre Management Maharashtra',
    description: 'Automatic tyre inflation system for Maharashtra fleet operators. 20% longer tyre life, 2%+ fuel savings across Mumbai-Pune, Nagpur, and JNPA corridors.',
    url: 'https://wick.co.in/locations/maharashtra',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Maharashtra - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Maharashtra | Fleet Tyre Management Maharashtra',
    description: 'Automatic tyre inflation system for Maharashtra fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/maharashtra',
  },
};

export default function MaharashtraLayout({ children }: { children: React.ReactNode }) {
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
            name: 'Wick - Tyre Inflation System Maharashtra',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Maharashtra. ATES technology for port logistics, expressway transport, agricultural freight, and industrial trucking.',
            url: 'https://wick.co.in/locations/maharashtra',
            areaServed: {
              '@type': 'State',
              name: 'Maharashtra'
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
