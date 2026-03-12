import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tire Inflation System Guide | Automatic Tire Pressure Monitoring | Commercial Vehicle Solutions',
  description: 'Complete guide to tire inflation systems for trucks & trailers. Compare ATES vs TPMS vs manual monitoring. Learn how to save 20% on tire costs and improve fleet safety.',
  keywords: 'tire inflation system, automatic tire pressure monitoring, truck tire management, commercial vehicle tire solutions, tire pressure control system, fleet tire management, ATES system, TPMS comparison, tire inflation guide, truck tire safety, trailer tire inflation, tire pressure automation, commercial tire monitoring',
  openGraph: {
    title: 'Tire Inflation System Guide | Automatic Tire Pressure Monitoring',
    description: 'Complete guide to tire inflation systems for trucks & trailers. Learn how to save 20% on tire costs and improve fleet safety.',
    url: 'https://wick.co.in/tire-inflation-system',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tire Inflation System Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tire Inflation System Guide | Automatic Tire Pressure Monitoring',
    description: 'Complete guide to tire inflation systems. Learn how to save 20% on tire costs and improve fleet safety.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/tire-inflation-system',
  },
};

export default function TireInflationSystemLayout({
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
            '@type': 'Article',
            headline: 'Complete Guide to Tire Inflation Systems for Commercial Vehicles',
            description: 'Learn about automatic tire inflation systems, ATES vs TPMS comparison, and how to improve fleet tire management.',
            author: {
              '@type': 'Organization',
              name: 'Wick',
              url: 'https://wick.co.in'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Wick',
              logo: {
                '@type': 'ImageObject',
                url: 'https://wick.co.in/logo.svg'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://wick.co.in/tire-inflation-system'
            },
            datePublished: '2024-01-01',
            dateModified: '2024-01-01'
          })
        }}
      />
      {children}
    </>
  );
}