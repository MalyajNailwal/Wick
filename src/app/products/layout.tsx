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
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the price of Wick TyreRakhshak ATES?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wick TyreRakhshak ATES pricing is customized based on fleet size and requirements. The system typically pays for itself within 6-8 months through tyre and fuel savings of ₹2-3 lakhs per vehicle annually. Contact +91-9721601500 or office@wick.co.in for a custom quote.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between ATES Base and ATES + CPMS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ATES Base provides automatic tyre inflation and deflation with pressure regulation and driver indicator. ATES + CPMS adds real-time tyre pressure monitoring, GPS integration for trailers, predictive maintenance alerts, remote monitoring dashboard, and historical data analytics.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is TyreRakhshak compatible with my truck/trailer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'TyreRakhshak ATES is compatible with YORK RB15 Axles and Pneumatic Samrat Series Suspension systems. It runs on 24V DC power from the vehicle electrical system. Contact Wick to verify compatibility with your specific vehicle configuration.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does ATES installation take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ATES installation is quick and performed by trained Wick technicians. The system connects to the existing air compressor and uses standard mounting points. Minimal vehicle downtime is required.',
                },
              },
            ],
          }),
        }}
      />
      {children}
      <WickAI />
    </>
  );
}
