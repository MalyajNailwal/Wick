import { Metadata } from 'next';
import { homeMetadata } from './metadata';
import Home from './HomeClient';

export const metadata: Metadata = {
  ...homeMetadata,
  title: {
    absolute: homeMetadata.title as string,
  },
};

export default function HomePage() {
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Wick - India’s First Automatic Tyre Inflation System Company',
    url: 'https://wick.co.in',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable'],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Wick TyreRakhshak ATES?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wick TyreRakhshak ATES is an Automatic Tyre Equalisation System for commercial trucks and trailers. It monitors tyre pressure and automatically inflates, deflates, or equalises pressure while the vehicle is moving.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is ATES different from TPMS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TPMS only monitors tyre pressure and sends alerts. Wick ATES actively maintains optimal tyre pressure by automatically adjusting pressure based on load, road, and temperature conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Wick ATES made for Indian roads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. TyreRakhshak ATES is designed for Indian highway conditions, including heavy loads, high temperatures, dust, rough roads, and long-haul truck and trailer operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Wick based?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wick is headquartered at House Of Wick, 33B, NIT, Faridabad, Haryana, India, and serves fleet operators across India.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Home />
    </>
  );
}
