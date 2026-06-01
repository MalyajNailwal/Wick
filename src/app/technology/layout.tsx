import { Metadata } from 'next';
import WickAI from '@/components/ui/WickAI';

export const metadata: Metadata = {
  title: 'ATES Technology | Automatic Tyre Equalisation',
  description: 'Discover Wick ATES technology. Advanced sensors, IoT connectivity, and precision engineering for intelligent tyre management. Learn how automatic tyre equalisation improves safety and efficiency for commercial vehicles.',
  keywords: 'ATES technology, automatic tyre equalisation, tyre pressure sensors, IoT fleet management, commercial vehicle technology, tyre monitoring system, YORK technology, how does ATES work, what is automatic tyre equalisation, truck tyre pressure monitoring technology, trailer tyre inflation technology, fleet tyre management technology, commercial vehicle tyre safety technology, tyre blowout prevention system, how to prevent truck tyre blowouts',
  openGraph: {
    title: 'ATES Technology | Automatic Tyre Equalisation',
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
    title: 'ATES Technology | Automatic Tyre Equalisation',
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
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wick.co.in' },
              { '@type': 'ListItem', position: 2, name: 'Technology', item: 'https://wick.co.in/technology' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: 'ATES Technology - Automatic Tyre Equalisation System',
            description: 'Advanced technology behind automatic tyre equalisation for commercial vehicles',
            url: 'https://wick.co.in/technology',
            datePublished: '2024-01-01',
            dateModified: new Date().toISOString().split('T')[0],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: 'ATES Technology - Automatic Tyre Equalisation System in Action',
            description: 'Watch how the Automatic Tyre Equalisation System (ATES) works on commercial vehicles. See real-time tyre pressure management in action.',
            thumbnailUrl: 'https://wick.co.in/media/productimghd-removebg-preview.png',
            uploadDate: '2024-06-01',
            duration: 'PT2M',
            contentUrl: 'https://res.cloudinary.com/dctzpvbvq/video/upload/tecpagevdo_bf4nji.mp4',
            embedUrl: 'https://wick.co.in/technology',
            publisher: {
              '@type': 'Organization',
              name: 'Wick',
              logo: {
                '@type': 'ImageObject',
                url: 'https://wick.co.in/logo.svg',
              },
            },
          }),
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
                name: 'How does ATES automatic tyre inflation work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ATES connects to the vehicle air compressor and uses manifolds, control valves, and rotary joints to automatically inflate or deflate tyres while driving. It maintains optimal pressure based on real-time load and road conditions. The only moving component is the rotary union.',
                },
              },
              {
                '@type': 'Question',
                name: 'What components are in the ATES system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ATES consists of manifolds, control valves, rotary unions, pressure regulator, and a front-mounted driver indicator. The rotary union is the only moving component, which minimizes wear and maintenance requirements.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does ATES work on all types of trucks and trailers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ATES is compatible with YORK RB15 Axles and Pneumatic Samrat Series Suspension systems. It runs on 24V DC power standard in commercial vehicles. Contact Wick to verify compatibility with your specific vehicle configuration.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How ATES Automatic Tyre Equalisation System Works',
            description: 'Step-by-step guide to how the ATES system maintains optimal tyre pressure on commercial vehicles',
            totalTime: 'PT30M',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'INR',
              value: 'Contact for quote'
            },
            supply: [
              {
                '@type': 'HowToSupply',
                name: 'ATES System Components'
              },
              {
                '@type': 'HowToSupply',
                name: 'Vehicle Air Compressor'
              }
            ],
            tool: [
              {
                '@type': 'HowToTool',
                name: 'Manifolds'
              },
              {
                '@type': 'HowToTool',
                name: 'Control Valves'
              },
              {
                '@type': 'HowToTool',
                name: 'Rotary Unions'
              }
            ],
            step: [
              {
                '@type': 'HowToStep',
                name: 'Air Compression',
                text: 'The vehicle air compressor produces compressed air which is stored in the ATES tank reserve. This reserve allows the system to adjust tyre pressure swiftly in real time.',
                position: 1
              },
              {
                '@type': 'HowToStep',
                name: 'Pressure Regulation',
                text: 'The Pressure Protection Valve (PPV) opens when the air pressure threshold is reached, regulating compressed air delivery to the tyres. The Filter Regulator Lubricator (FRL) unit cleans, regulates, and lubricates the air supply.',
                position: 2
              },
              {
                '@type': 'HowToStep',
                name: 'Air Distribution',
                text: 'The manifold distributes air evenly to all tyres across every axle. There are 5-port and 7-port manifold configurations to match different vehicle setups.',
                position: 3
              },
              {
                '@type': 'HowToStep',
                name: 'Tyre Pressure Correction',
                text: 'The rotary union transfers air from the stationary axle to the rotating wheels, allowing continuous pressure adjustment while the vehicle is running. The system automatically inflates low-pressure tyres and deflates high-pressure tyres.',
                position: 4
              }
            ]
          }),
        }}
      />
      {children}
      <WickAI />
    </>
  );
}
