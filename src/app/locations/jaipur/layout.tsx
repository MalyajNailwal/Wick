import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Jaipur | Fleet Tyre Management Rajasthan',
  description: 'Automatic tyre inflation system for Jaipur fleet operators. ATES delivers 20% longer tyre life, 2%+ fuel savings for trucks on Delhi-Jaipur highway and Rajasthan desert routes. Trusted by mining, marble transport, and tourism fleets across Rajasthan.',
  keywords: 'tyre inflation system Jaipur, fleet tyre management Jaipur, truck tyre safety Rajasthan, automatic tyre inflation Jaipur, commercial vehicle tyre management Jaipur, fleet safety solutions Jaipur, truck tyre pressure monitoring Jaipur, tyre inflation system Rajasthan, mining fleet tyre Jaipur, desert road tyre safety, Delhi Jaipur highway tyre management',
  openGraph: {
    title: 'Tyre Inflation System in Jaipur | Fleet Tyre Management Rajasthan',
    description: 'Automatic tyre inflation system for Jaipur fleet operators. 20% longer tyre life, 2%+ fuel savings for trucks on Delhi-Jaipur highway and Rajasthan desert routes.',
    url: 'https://wick.co.in/locations/jaipur',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Jaipur - ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Jaipur | Fleet Tyre Management Rajasthan',
    description: 'Automatic tyre inflation system for Jaipur fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/jaipur',
  },
};

export default function JaipurLayout({ children }: { children: React.ReactNode }) {
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
            name: 'Tyre Inflation System Jaipur',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Jaipur and Rajasthan. ATES technology for mining transport, marble logistics, and desert highway trucking.',
            url: 'https://wick.co.in/locations/jaipur',
            areaServed: {
              '@type': 'City',
              name: 'Jaipur'
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
