import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Pune | Fleet Tyre Management Maharashtra',
  description: 'Automatic tyre inflation system for Pune fleet operators. ATES delivers 20% longer tyre life, 2%+ fuel savings for trucks on Mumbai-Pune Expressway and Pune-Bangalore corridor. Trusted by manufacturing and logistics fleets across Maharashtra.',
  keywords: 'tyre inflation system Pune, fleet tyre management Pune, truck tyre safety Maharashtra, automatic tyre inflation Pune, commercial vehicle tyre management Pune, fleet safety solutions Pune, truck tyre pressure monitoring Pune, tyre inflation system Maharashtra, manufacturing fleet tyre Pune, logistics tyre management Pune, Mumbai Pune Expressway tyre safety',
  openGraph: {
    title: 'Tyre Inflation System in Pune | Fleet Tyre Management Maharashtra',
    description: 'Automatic tyre inflation system for Pune fleet operators. 20% longer tyre life, 2%+ fuel savings for trucks on Mumbai-Pune Expressway and Pune-Bangalore corridor.',
    url: 'https://wick.co.in/locations/pune',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Pune - ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Pune | Fleet Tyre Management Maharashtra',
    description: 'Automatic tyre inflation system for Pune fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/pune',
  },
};

export default function PuneLayout({ children }: { children: React.ReactNode }) {
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
            name: 'Tyre Inflation System Pune',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Pune and Maharashtra. ATES technology for manufacturing logistics, Mumbai-Pune corridor, and long-haul trucking.',
            url: 'https://wick.co.in/locations/pune',
            areaServed: {
              '@type': 'City',
              name: 'Pune'
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
