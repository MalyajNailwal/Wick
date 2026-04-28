import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Tyre Inflation & Pressure Monitoring',
  description: 'Frequently asked questions about tyre inflation systems, tyre pressure monitoring, ATES vs TPMS, and commercial vehicle tyre management. Get expert answers.',
  keywords: 'tyre inflation system FAQ, tyre pressure monitoring questions, ATES FAQ, TPMS questions, commercial vehicle tyre FAQ, truck tyre management questions, tyre inflation system benefits, automatic tyre pressure FAQ, why do truck tyres burst, how to prevent tyre blowouts, what is ATES system, how does tyre pressure monitoring work, best tyre pressure for trucks, how to improve truck tyre life, trailer tyre maintenance tips, fleet tyre management FAQ',
  openGraph: {
    title: 'FAQ - Tyre Inflation System | Tyre Pressure Monitoring Questions',
    description: 'Get answers to frequently asked questions about tyre inflation systems, tyre pressure monitoring, and commercial vehicle tyre management.',
    url: 'https://wick.co.in/faq',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tyre Inflation System FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Tyre Inflation System | Tyre Pressure Monitoring Questions',
    description: 'Get expert answers about tyre inflation systems and commercial vehicle tyre management.',
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
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wick.co.in' },
              { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://wick.co.in/faq' }
            ]
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
                name: 'What is an automatic tyre inflation system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An automatic tyre inflation system (ATES) continuously monitors and maintains optimal tyre pressure in commercial vehicles. It automatically inflates tyres when pressure drops, preventing blowouts and extending tyre life by up to 20%.'
                }
              },
              {
                '@type': 'Question',
                name: 'How does tyre pressure monitoring work in trucks?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tyre pressure monitoring systems use sensors to track real-time tyre pressure across all wheels. Advanced systems like ATES not only monitor but also automatically correct pressure deviations, ensuring optimal performance and safety.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the difference between TPMS and ATES?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'TPMS (Tyre Pressure Monitoring System) only monitors and alerts about pressure changes. ATES (Automatic Tyre Equalisation System) monitors AND automatically corrects tyre pressure, providing complete tyre management without manual intervention.'
                }
              },
              {
                '@type': 'Question',
                name: 'What are the benefits of tyre inflation systems for fleets?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tyre inflation systems provide 20% longer tyre life, 2%+ fuel savings, reduced vehicle downtime, improved safety, and lower maintenance costs. They prevent tyre blowouts and ensure consistent optimal performance across the fleet.'
                }
              },
              {
                '@type': 'Question',
                name: 'How much can fleets save with automatic tyre pressure systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fleets typically save Rs 2-3 lakhs annually per vehicle through extended tyre life, Rs 50,000+ in fuel savings, and reduced downtime. The system typically pays for itself within 6-8 months.'
                }
              },
              {
                '@type': 'Question',
                name: 'Are tyre inflation systems suitable for Indian commercial vehicles?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, modern tyre inflation systems are specifically designed for Indian road conditions, handling dust, heat, and challenging terrains while maintaining consistent tyre pressure for trucks and trailers.'
                }
              },
              {
                '@type': 'Question',
                name: 'What maintenance is required for tyre inflation systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Quality tyre inflation systems require minimal maintenance - typically annual inspections and component checks. Advanced systems are designed for harsh Indian conditions with robust, low-maintenance components.'
                }
              },
              {
                '@type': 'Question',
                name: 'How to choose the best tyre management system for trucks?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Consider factors like automatic pressure correction, real-time monitoring, India-specific design, proven ROI, local support, and compatibility with your fleet. Look for systems offering 20%+ tyre life extension and measurable fuel savings.'
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
