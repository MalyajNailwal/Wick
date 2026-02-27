import { Metadata } from 'next';
import WickAI from '@/components/ui/WickAI';

export const metadata: Metadata = {
  title: 'Contact Wick | Get ATES Quote & Technical Support',
  description: 'Contact Wick for ATES product inquiries, technical support, and fleet safety consultations. Located in Faridabad, India. Call +91 9721601500 or email office@wick.co.in',
  keywords: 'contact Wick, ATES quote, technical support, fleet consultation, commercial vehicle safety, Faridabad India, ATES inquiry',
  openGraph: {
    title: 'Contact Wick | Get ATES Quote & Technical Support',
    description: 'Get in touch for ATES product inquiries, technical support, and fleet safety consultations. Call +91 9721601500',
    url: 'https://wick.co.in/contact',
    type: 'website',
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Contact Wick',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Wick | Get ATES Quote & Technical Support',
    description: 'Get in touch for ATES inquiries and technical support. Call +91 9721601500',
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
  },
  alternates: {
    canonical: 'https://wick.co.in/contact',
  },
};

export default function ContactLayout({
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
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'Wick',
              url: 'https://wick.co.in',
              telephone: '+91-9721601500',
              email: 'office@wick.co.in',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'House Of Wick, 33B, NIT',
                addressLocality: 'Faridabad',
                addressRegion: 'Haryana',
                postalCode: '121001',
                addressCountry: 'IN'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.3764',
                longitude: '77.3144'
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '10:00',
                  closes: '18:00'
                }
              ]
            }
          })
        }}
      />
      {children}
      <WickAI />
    </>
  );
}
