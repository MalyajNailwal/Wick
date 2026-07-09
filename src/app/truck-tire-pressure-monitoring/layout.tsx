import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Truck Tyre Pressure Monitoring System | Real-Time Fleet Tyre Safety India',
  description: 'Monitor truck tyre pressure in real time with Wick TyreRakhshak ATES. Automatic pressure correction, blowout prevention, 20% longer tyre life. Trusted by 50+ Indian fleet operators.',
  keywords: 'truck tyre pressure monitoring, truck tire pressure monitoring system, truck tyre pressure system, real-time tyre pressure monitoring, fleet tyre pressure monitoring India, truck tyre safety system, commercial vehicle tyre pressure monitoring, automatic tyre pressure correction, truck tyre blowout prevention, trailer tyre pressure monitoring, truck tyre pressure sensor, truck tyre pressure alert, how to monitor truck tyre pressure, best tyre pressure monitoring system India, truck tyre pressure management',
  openGraph: {
    title: 'Truck Tyre Pressure Monitoring System | Real-Time Fleet Safety',
    description: 'Real-time truck tyre pressure monitoring with automatic correction. Prevent blowouts, extend tyre life, save fuel.',
    url: 'https://wick.co.in/truck-tire-pressure-monitoring',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Truck Tyre Pressure Monitoring System - Wick ATES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truck Tyre Pressure Monitoring | Wick ATES',
    description: 'Real-time truck tyre pressure monitoring with automatic correction. Prevent blowouts, extend tyre life.',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/truck-tire-pressure-monitoring',
  },
};

export default function TruckTirePressureMonitoringLayout({
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
              { '@type': 'ListItem', position: 2, name: 'Truck Tyre Pressure Monitoring', item: 'https://wick.co.in/truck-tire-pressure-monitoring' }
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
                name: 'What is truck tyre pressure monitoring?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Truck tyre pressure monitoring is the continuous tracking of tyre pressure across all wheels of a commercial vehicle. Wick TyreRakhshak goes beyond monitoring by automatically correcting pressure in real time while the vehicle is running.'
                }
              },
              {
                '@type': 'Question',
                name: 'Why is tyre pressure monitoring important for trucks?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Incorrect tyre pressure causes uneven wear, higher fuel consumption, blowout risk, and premature tyre replacement. Monitoring helps fleet operators detect issues early and maintain optimal pressure for safety and cost savings.'
                }
              },
              {
                '@type': 'Question',
                name: 'How does Wick ATES differ from a standard TPMS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A standard TPMS only monitors and alerts. Wick TyreRakhshak ATES monitors AND automatically corrects tyre pressure without stopping the vehicle or requiring driver intervention.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can truck tyre pressure monitoring reduce blowouts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. By maintaining correct tyre pressure at all times, the system prevents the underinflation that causes heat build-up and blowouts. Fleet operators using Wick ATES report significantly fewer tyre-related incidents.'
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
