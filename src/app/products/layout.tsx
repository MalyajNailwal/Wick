import { Metadata } from 'next';
import WickAI from '@/components/ui/WickAI';

export const metadata: Metadata = {
  title: 'TyreRakhshak ATES | Automatic Tyre Equalisation System',
  description: 'Explore TyreRakhshak ATES products for trucks & trailers. Base ATES or premium ATES + CPMS with real-time monitoring. 20% longer tyre life, 2%+ fuel efficiency.',
  keywords: 'TyreRakhshak, ATES products, CPMS, tyre pressure monitoring, commercial vehicle products, fleet management system, YORK ATES, automatic tyre inflation, buy tyre inflation system, tyre inflation system price India, fleet tyre management system, truck tyre safety products, trailer tyre inflation system buy, best ATES system India, commercial vehicle tyre products, tyre pressure system dealer, Wick ATES quote',
  openGraph: {
    title: 'TyreRakhshak ATES | Automatic Tyre Equalisation System',
    description: 'Choose the right ATES solution for your fleet. Base ATES or Premium ATES + CPMS with real-time monitoring and predictive maintenance.',
    url: 'https://wick.co.in/products',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'TyreRakhshak ATES Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TyreRakhshak ATES | Automatic Tyre Equalisation System',
    description: 'Choose the right ATES solution for your fleet. 20% longer tyre life, 2%+ fuel efficiency.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/products',
  },
};

export default function ProductsLayout({
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
              { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://wick.co.in/products' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'TyreRakhshak ATES - Automatic Tyre Equalisation System',
            description: 'India\'s first advanced Automatic Tyre Equalisation System for commercial vehicles',
            brand: {
              '@type': 'Brand',
              name: 'Wick'
            },
            manufacturer: {
              '@type': 'Organization',
              name: 'Wick',
              url: 'https://wick.co.in'
            },
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
              url: 'https://wick.co.in/products'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '50'
            }
          })
        }}
      />
      {children}
      <WickAI />
    </>
  );
}
