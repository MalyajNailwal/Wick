import { Metadata } from 'next';
import WickAI from '@/components/ui/WickAI';

export const metadata: Metadata = {
  title: 'About Wick | Commercial Vehicle Safety India',
  description: 'Learn about Wick, pioneers of India\'s first Automatic Tyre Equalisation System. Founded in 2021, revolutionizing commercial vehicle safety with ATES technology for trucks & trailers.',
  keywords: 'Wick, ATES company, commercial vehicle safety India, automotive innovation, fleet safety solutions, YORK partnership, SAF-HOLLAND, Wick ATES Faridabad, tyre safety company India, commercial vehicle safety company, fleet tyre safety provider, truck tyre safety India, trailer safety solutions company, best tyre safety company India',
  openGraph: {
    title: 'About Wick | Commercial Vehicle Safety India',
    description: 'Founded in 2021, Wick is revolutionizing commercial vehicle safety with India\'s first advanced ATES technology.',
    url: 'https://wick.co.in/about',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'About Wick',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Wick | Commercial Vehicle Safety India',
    description: 'Founded in 2021, revolutionizing commercial vehicle safety with India\'s first advanced ATES.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://wick.co.in/about' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'Wick',
              foundingDate: '2021',
              description: 'Pioneers of India\'s first Automatic Tyre Equalisation System for commercial vehicles',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'House Of Wick, 33B, NIT',
                addressLocality: 'Faridabad',
                addressRegion: 'Haryana',
                postalCode: '121001',
                addressCountry: 'IN'
              },
              sameAs: [
                'https://www.linkedin.com/company/wick-in/',
              ],
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Vinamra Bajaj',
            jobTitle: 'Founder & CEO',
            worksFor: {
              '@type': 'Organization',
              name: 'Wick',
              url: 'https://wick.co.in',
            },
            url: 'https://wick.co.in/about',
            sameAs: [
              'https://www.linkedin.com/in/vinamra-bajaj/',
            ],
            description: 'Founder of Wick, pioneering India\'s first Automatic Tyre Equalisation System for commercial vehicle safety.',
          })
        }}
      />
      {children}
      <WickAI />
    </>
  );
}
