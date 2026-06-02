import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Kolkata | Fleet Tyre Management West Bengal',
  description: 'Automatic tyre inflation system for Kolkata fleet operators. ATES delivers 20% longer tyre life, 2%+ fuel savings for trucks on Kolkata-Chennai and Kolkata-Delhi routes. Trusted by port logistics, jute, and steel transport fleets across West Bengal and Eastern India.',
  keywords: 'tyre inflation system Kolkata, fleet tyre management Kolkata, truck tyre safety West Bengal, automatic tyre inflation Kolkata, commercial vehicle tyre management Kolkata, fleet safety solutions Kolkata, truck tyre pressure monitoring Kolkata, tyre inflation system West Bengal, port logistics fleet Kolkata, eastern India tyre management, Kolkata Chennai route tyre safety',
  openGraph: {
    title: 'Tyre Inflation System in Kolkata | Fleet Tyre Management West Bengal',
    description: 'Automatic tyre inflation system for Kolkata fleet operators. 20% longer tyre life, 2%+ fuel savings for trucks on Kolkata-Chennai and Kolkata-Delhi routes.',
    url: 'https://wick.co.in/locations/kolkata',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Kolkata - ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Kolkata | Fleet Tyre Management West Bengal',
    description: 'Automatic tyre inflation system for Kolkata fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/kolkata',
  },
};

export default function KolkataLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 3, name: 'Kolkata', item: 'https://wick.co.in/locations/kolkata' }
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
            name: 'Tyre Inflation System Kolkata',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Kolkata and Eastern India. ATES technology for port logistics, steel transport, and inter-state trucking.',
            url: 'https://wick.co.in/locations/kolkata',
            areaServed: {
              '@type': 'City',
              name: 'Kolkata'
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
