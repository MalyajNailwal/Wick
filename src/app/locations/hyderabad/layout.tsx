import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Hyderabad | Fleet Tyre Management Telangana',
  description: 'Automatic tyre inflation system for Hyderabad fleet operators. ATES delivers 20% longer tyre life, 2%+ fuel savings for trucks on Hyderabad-Chennai and Hyderabad-Bangalore routes. Trusted by pharma logistics and IT corridor fleets across Telangana.',
  keywords: 'tyre inflation system Hyderabad, fleet tyre management Hyderabad, truck tyre safety Telangana, automatic tyre inflation Hyderabad, commercial vehicle tyre management Hyderabad, fleet safety solutions Hyderabad, truck tyre pressure monitoring Hyderabad, tyre inflation system Telangana, pharma logistics tyre Hyderabad, Hyderabad Chennai route tyre safety',
  openGraph: {
    title: 'Tyre Inflation System in Hyderabad | Fleet Tyre Management Telangana',
    description: 'Automatic tyre inflation system for Hyderabad fleet operators. 20% longer tyre life, 2%+ fuel savings for trucks on Hyderabad-Chennai and Hyderabad-Bangalore routes.',
    url: 'https://wick.co.in/locations/hyderabad',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Hyderabad - ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Hyderabad | Fleet Tyre Management Telangana',
    description: 'Automatic tyre inflation system for Hyderabad fleet operators. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/hyderabad',
  },
};

export default function HyderabadLayout({ children }: { children: React.ReactNode }) {
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
            name: 'Tyre Inflation System Hyderabad',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Hyderabad and Telangana. ATES technology for pharma logistics, IT corridor transport, and inter-state trucking.',
            url: 'https://wick.co.in/locations/hyderabad',
            areaServed: {
              '@type': 'City',
              name: 'Hyderabad'
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
