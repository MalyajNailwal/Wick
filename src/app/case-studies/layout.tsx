import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Fleet Tyre Management Results',
  description: 'Real results from Indian fleet operators using Wick ATES tyre inflation system. See how fleets saved 20% on tyre costs, 2%+ fuel savings, and 144 hours downtime reduction per vehicle.',
  keywords: 'fleet case studies, tyre management results, ATES success stories, fleet ROI India, tyre inflation system results, commercial vehicle savings, fleet cost reduction India',
  openGraph: {
    title: 'Case Studies | Fleet Tyre Management Results',
    description: 'Real results from Indian fleet operators using Wick ATES tyre inflation system.',
    url: 'https://wick.co.in/case-studies',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Wick ATES Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Fleet Tyre Management Results',
    description: 'Real results from Indian fleet operators using Wick ATES tyre inflation system.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/case-studies',
  },
};

export default function CaseStudiesLayout({
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
              { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://wick.co.in/case-studies' }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
