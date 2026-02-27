import { Metadata } from 'next';
import WickAI from '@/components/ui/WickAI';

export const metadata: Metadata = {
  title: 'About Wick | Pioneering Commercial Vehicle Safety in India',
  description: 'Learn about Wick, pioneers of India\'s first Automatic Tyre Equalisation System. Founded in 2021, we\'re revolutionizing commercial vehicle safety with innovative ATES technology.',
  keywords: 'Wick, ATES company, commercial vehicle safety India, automotive innovation, fleet safety solutions, YORK partnership, SAF-HOLLAND',
  openGraph: {
    title: 'About Wick | Pioneering Commercial Vehicle Safety in India',
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
    title: 'About Wick | Pioneering Commercial Vehicle Safety in India',
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
              }
            }
          })
        }}
      />
      {children}
      <WickAI />
    </>
  );
}
