import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyre Inflation System in Delhi NCR | Fleet Tyre Management Gurgaon Noida',
  description: 'Automatic tyre inflation system for Delhi NCR fleet operators. ATES by Wick, headquartered in Faridabad, delivers 20% longer tyre life and 2%+ fuel savings for e-commerce logistics, FMCG distribution, and multi-modal transport fleets across Gurgaon, Noida, and the entire NCR region.',
  keywords: 'tyre inflation system Delhi NCR, fleet tyre management Gurgaon, truck tyre safety Noida, automatic tyre inflation Delhi, commercial vehicle tyre management Delhi NCR, fleet safety solutions Gurgaon, truck tyre pressure monitoring Noida, tyre inflation system Faridabad, e-commerce logistics tyre safety Delhi, FMCG fleet management NCR',
  openGraph: {
    title: 'Tyre Inflation System in Delhi NCR | Fleet Tyre Management Gurgaon Noida',
    description: 'Automatic tyre inflation system for Delhi NCR fleet operators. Wick HQ in Faridabad. 20% longer tyre life, 2%+ fuel savings.',
    url: 'https://wick.co.in/locations/delhi-ncr',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System Delhi NCR - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System in Delhi NCR | Fleet Tyre Management Gurgaon Noida',
    description: 'Automatic tyre inflation system for Delhi NCR fleet operators. Wick HQ in Faridabad. 20% longer tyre life, 2%+ fuel savings.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/locations/delhi-ncr',
  },
};

export default function DelhiNCROLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Delhi NCR', item: 'https://wick.co.in/locations/delhi-ncr' }
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
            name: 'Wick - Tyre Inflation System Delhi NCR',
            description: 'Automatic tyre inflation system for commercial vehicle fleets in Delhi NCR including Gurgaon, Noida, and Faridabad. ATES technology for e-commerce logistics and FMCG distribution.',
            url: 'https://wick.co.in/locations/delhi-ncr',
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Delhi NCR'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              bestRating: '5',
              ratingCount: '62',
              reviewCount: '51',
            },
            review: [
              {
                '@type': 'Review',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                author: { '@type': 'Person', name: 'Amit Singh' },
                reviewBody: 'Being headquartered in Faridabad, Wick support is always nearby. Our Gurgaon fleet of 80 trucks runs ATES and we have seen 22% tyre life improvement. Excellent product.',
              },
              {
                '@type': 'Review',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                author: { '@type': 'Person', name: 'Sunita Agarwal' },
                reviewBody: 'Our FMCG distribution fleet covering Delhi-Noida-Gurgaon routes saved Rs 12 lakhs annually. The real-time dashboard helps us monitor tyre pressure across all vehicles.',
              },
            ],
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
