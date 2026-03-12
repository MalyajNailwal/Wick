import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Tire Inflation System | Tire Pressure Monitoring | Commercial Vehicle Questions',
  description: 'Frequently asked questions about tire inflation systems, tire pressure monitoring, ATES vs TPMS, and commercial vehicle tire management. Get expert answers.',
  keywords: 'tire inflation system FAQ, tire pressure monitoring questions, ATES FAQ, TPMS questions, commercial vehicle tire FAQ, truck tire management questions, tire inflation system benefits, automatic tire pressure FAQ',
  openGraph: {
    title: 'FAQ - Tire Inflation System | Tire Pressure Monitoring Questions',
    description: 'Get answers to frequently asked questions about tire inflation systems, tire pressure monitoring, and commercial vehicle tire management.',
    url: 'https://wick.co.in/faq',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tire Inflation System FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Tire Inflation System | Tire Pressure Monitoring Questions',
    description: 'Get expert answers about tire inflation systems and commercial vehicle tire management.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/faq',
  },
};

export default function FAQLayout({
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
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is an automatic tire inflation system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An automatic tire inflation system (ATES) continuously monitors and maintains optimal tire pressure in commercial vehicles. It automatically inflates tires when pressure drops, preventing blowouts and extending tire life by up to 20%.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the difference between TPMS and ATES?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'TPMS (Tire Pressure Monitoring System) only monitors and alerts about pressure changes. ATES (Automatic Tire Equalization System) monitors AND automatically corrects tire pressure, providing complete tire management without manual intervention.'
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}