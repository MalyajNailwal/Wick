import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Truck Tyre Pressure Monitoring | TPMS India',
  description: 'Advanced truck tyre pressure monitoring with real-time alerts. TPMS for commercial vehicles, trailers & fleets. Prevent blowouts, improve safety & reduce costs.',
  keywords: 'truck tyre pressure monitoring, TPMS truck, commercial vehicle tyre monitoring, truck tyre pressure sensor, trailer tyre monitoring system, fleet tyre pressure monitoring, truck tyre safety system, commercial TPMS, tyre pressure monitoring system truck, real time tyre monitoring, why is my truck tyre pressure low, how to monitor truck tyre pressure, best TPMS for trucks India, truck tyre pressure monitoring price, trailer tyre pressure sensor, fleet tyre monitoring system',
  openGraph: {
    title: 'Truck Tyre Pressure Monitoring System | Real-Time TPMS',
    description: 'Advanced truck tyre pressure monitoring with real-time alerts. Prevent tyre blowouts, improve safety & reduce costs.',
    url: 'https://wick.co.in/truck-tire-pressure-monitoring',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Truck Tyre Pressure Monitoring System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truck Tyre Pressure Monitoring System | Real-Time TPMS',
    description: 'Advanced truck tyre pressure monitoring with real-time alerts. Prevent tyre blowouts & improve safety.',
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
            '@type': 'Product',
            name: 'Truck Tyre Pressure Monitoring System',
            description: 'Advanced tyre pressure monitoring system for commercial trucks and trailers with real-time alerts and predictive maintenance.',
            category: 'Commercial Vehicle Safety Equipment',
            brand: {
              '@type': 'Brand',
              name: 'Wick'
            },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'INR'
            }
          })
        }}
      />
      {children}
    </>
  );
}