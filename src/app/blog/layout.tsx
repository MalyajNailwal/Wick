import { Metadata } from 'next';
import WickAI from '@/components/ui/WickAI';

export const metadata: Metadata = {
  title: 'Wick Insights | Fleet Management & Tyre Technology Blog',
  description: 'Expert insights on fleet management, tyre technology, and commercial vehicle safety. Subscribe to Wick Insights for industry news and ATES technology updates.',
  keywords: 'fleet management blog, tyre technology, commercial vehicle insights, ATES updates, automotive safety news, truck fleet tips, tyre inflation system blog, how to improve truck tyre life, prevent tyre blowouts, fleet tyre management tips, commercial vehicle safety blog, truck tyre maintenance guide, trailer tyre care tips, tyre pressure best practices',
  openGraph: {
    title: 'Wick Insights | Fleet Management & Tyre Technology Blog',
    description: 'Expert insights on fleet management, tyre technology, and commercial vehicle safety.',
    url: 'https://wick.co.in/blog',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Wick Insights Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wick Insights | Fleet Management & Tyre Technology Blog',
    description: 'Expert insights on fleet management, tyre technology, and commercial vehicle safety.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/blog',
  },
};

export default function BlogLayout({
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
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://wick.co.in/blog' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Wick Insights',
            description: 'Expert insights on fleet management, tyre technology, and commercial vehicle safety',
            publisher: {
              '@type': 'Organization',
              name: 'Wick',
              logo: {
                '@type': 'ImageObject',
                url: 'https://wick.co.in/logo.svg'
              }
            },
            url: 'https://wick.co.in/blog'
          })
        }}
      />
      {children}
      <WickAI />
    </>
  );
}
