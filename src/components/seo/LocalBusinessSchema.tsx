import React from 'react';

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://wick.co.in/#business',
    name: 'Wick',
    alternateName: ['Wick ATES', 'Wick India', 'Wick TyreRakhshak'],
    image: 'https://wick.co.in/logo.svg',
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
    description: "India's leading truck inflation system and trailer inflation system provider. Automatic tyre equalisation for better tyre life for truck trailers.",
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
      geoRadius: '1000000',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: [
      'https://www.linkedin.com/company/wick-ates',
      'https://twitter.com/WickATES',
      'https://www.facebook.com/wickates',
      'https://www.instagram.com/wickates'
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}