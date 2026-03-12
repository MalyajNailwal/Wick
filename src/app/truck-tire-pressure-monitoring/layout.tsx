import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Truck Tire Pressure Monitoring System | Real-Time TPMS | Commercial Vehicle Safety',
  description: 'Advanced truck tire pressure monitoring system with real-time alerts. TPMS for commercial vehicles, trailers & fleets. Prevent tire blowouts, improve safety & reduce costs.',
  keywords: 'truck tire pressure monitoring, TPMS truck, commercial vehicle tire monitoring, truck tire pressure sensor, trailer tire monitoring system, fleet tire pressure monitoring, truck tire safety system, commercial TPMS, tire pressure monitoring system truck, real time tire monitoring',
  openGraph: {
    title: 'Truck Tire Pressure Monitoring System | Real-Time TPMS',
    description: 'Advanced truck tire pressure monitoring with real-time alerts. Prevent tire blowouts, improve safety & reduce costs.',
    url: 'https://wick.co.in/truck-tire-pressure-monitoring',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Truck Tire Pressure Monitoring System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truck Tire Pressure Monitoring System | Real-Time TPMS',
    description: 'Advanced truck tire pressure monitoring with real-time alerts. Prevent tire blowouts & improve safety.',
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
            '@type': 'Product',
            name: 'Truck Tire Pressure Monitoring System',
            description: 'Advanced tire pressure monitoring system for commercial trucks and trailers with real-time alerts and predictive maintenance.',
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