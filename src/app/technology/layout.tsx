import { Metadata } from 'next';
import WickAI from '@/components/ui/WickAI';

export const metadata: Metadata = {
  title: 'ATES Technology | How Automatic Tyre Equalisation Works',
  description: 'Discover the science behind Wick\'s ATES technology. Advanced sensors, IoT connectivity, and precision engineering for intelligent tyre management. Learn how automatic tyre equalisation improves safety and efficiency.',
  keywords: 'ATES technology, automatic tyre equalisation, tyre pressure sensors, IoT fleet management, commercial vehicle technology, tyre monitoring system, YORK technology',
  openGraph: {
    title: 'ATES Technology | How Automatic Tyre Equalisation Works',
    description: 'Explore the cutting-edge technology behind India\'s first advanced ATES. Advanced sensors, IoT connectivity, and precision engineering.',
    url: 'https://wick.co.in/technology',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'ATES Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATES Technology | How Automatic Tyre Equalisation Works',
    description: 'Cutting-edge technology: Advanced sensors, IoT connectivity, precision engineering for intelligent tyre management.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/technology',
  },
};

export default function TechnologyLayout({
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
            '@type': 'TechArticle',
            headline: 'ATES Technology - Automatic Tyre Equalisation System',
            description: 'Advanced technology behind automatic tyre equalisation for commercial vehicles',
            author: {
              '@type': 'Organization',
              name: 'Wick'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Wick',
              logo: {
                '@type': 'ImageObject',
                url: 'https://wick.co.in/logo.svg'
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
