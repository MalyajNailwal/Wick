import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Bangalore | Fleet Tyre Management Karnataka',
  description: 'Automatic tyre inflation system for Bangalore fleet operators. ATES by Wick delivers 20% longer tyre life and 2%+ fuel savings for IT logistics, e-commerce fulfillment, and cold chain transport fleets navigating Karnataka roads and Western Ghats routes.',
  keywords: 'tyre inflation system Bangalore, fleet tyre management Karnataka, truck tyre safety Bangalore, automatic tyre inflation Bangalore, commercial vehicle tyre management Bangalore, fleet safety solutions Karnataka, truck tyre pressure monitoring Bangalore, cold chain transport tyre safety, e-commerce fleet management Bangalore, IT logistics tyre safety Karnataka',
  openGraph: {
    title: 'Tyre Inflation System in Bangalore | Fleet Tyre Management Karnataka',
    description: 'Automatic tyre inflation system for Bangalore fleet operators. 20% longer tyre life, 2%+ fuel savings for IT logistics and cold chain transport.',
    url: 'https://wick.co.in/locations/bangalore',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Bangalore - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Bangalore | Fleet Tyre Management Karnataka',
    description: 'Automatic tyre inflation system for Bangalore fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/bangalore',
  },
};

export default function BangaloreLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 3, name: 'Bangalore', item: 'https://wick.co.in/locations/bangalore' }
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
            name: 'Wick - Tyre Inflation System Bangalore',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Bangalore and Karnataka. ATES technology for IT logistics, e-commerce fulfillment, and cold chain transport.',
            url: 'https://wick.co.in/locations/bangalore',
            areaServed: {
              '@type': 'City',
              name: 'Bangalore'
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
