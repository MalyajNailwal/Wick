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
    name: 'Wick - Automatic Tyre Equalisation System',
    url: 'https://wick.co.in',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable'],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <Home />
    </>
  );
}
