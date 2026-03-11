import React from 'react';

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Wick',
    alternateName: ['Wick ATES', 'Wick India', 'Wick TyreRakhshak'],
    image: 'https://wick.co.in/logo.svg',
    '@id': 'https://wick.co.in',
    url: 'https://wick.co.in',
    telephone: '+91-9721601500',
    email: 'office@wick.co.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House Of Wick, 33B, NIT',
      addressLocality: 'Faridabad',
      addressRegion: 'Haryana',
      postalCode: '121001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.3764,
      longitude: 77.3144,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday', 
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    description: 'India\'s leading truck inflation system and trailer inflation system provider. Automatic tyre equalisation for better tyre life for truck trailers.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Wick ATES Products',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'TyreRakhshak ATES',
            description: 'Automatic Tyre Equalisation System for trucks and trailers',
          },
        },
      ],
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 28.3764,
        longitude: 77.3144,
      },
      geoRadius: '1000000', // 1000km radius
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}