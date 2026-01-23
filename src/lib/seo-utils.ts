/**
 * SEO Utility Functions for Wick Website
 */

export const SITE_CONFIG = {
  name: 'Wick',
  fullName: 'Wick',
  url: 'https://wick.co.in',
  description: "Wick is India's leading Automatic Tyre Equalisation System (ATES) provider for commercial vehicles",
  locale: 'en_IN',
  twitter: '@WickATES',
  email: 'office@wick.co.in',
  phone: '+91-9721601500',
  address: {
    street: 'House Of Wick, 33B, NIT',
    city: 'Faridabad',
    state: 'Haryana',
    zip: '121001',
    country: 'India',
  },
};

export const PRIMARY_KEYWORDS = [
  // Wick Brand Keywords (HIGHEST PRIORITY)
  'Wick',
  'Wick ATES',
  'Wick India',
  'Wick TyreRakhshak',
  'Wick technology',
  'Wick commercial vehicle',
  'Wick tyre safety',
  'Wick fleet solutions',
  'Wick automotive',
  'Wick safety systems',
  'Wick Faridabad',
  'Wick tyre management',
  'Wick CPMS',
  'Wick monitoring system',
  // Product Keywords
  'ATES',
  'Automatic Tyre Equalisation System',
  'TyreRakhshak',
  'Commercial vehicle safety India',
  'Tyre pressure monitoring system',
  'Fleet management India',
  'YORK ATES',
  'Truck tyre safety',
  'Commercial trailer safety',
];

export const SECONDARY_KEYWORDS = [
  // Wick Brand Variations
  'Wick company',
  'Wick products',
  'Wick solutions',
  'Wick innovation',
  'Wick safety',
  'Wick system',
  'about Wick',
  'contact Wick',
  'Wick team',
  'Wick story',
  // Product & Technology Keywords
  'Wick ATES technology',
  'Wick fleet management',
  'Wick tyre monitoring',
  'tyre inflation system',
  'heavy commercial vehicle',
  'HCV safety',
  'fuel efficiency',
  'tyre management',
  'SAF-HOLLAND',
  'automatic tyre inflation',
  'tire pressure monitoring system',
  'fleet safety solutions',
  'Heavy commercial vehicle safety',
  'Fuel efficiency trucks',
  'Tyre management system India',
  'ATES India',
  'ATES technology India',
  'commercial vehicle technology India',
];

/**
 * Generate page title with proper formatting
 */
export function generatePageTitle(pageTitle: string, includeSiteName = true): string {
  if (includeSiteName) {
    return `${pageTitle} | Wick`;
  }
  return pageTitle;
}

/**
 * Truncate description to SEO-friendly length
 */
export function truncateDescription(description: string, maxLength = 160): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
}

/**
 * Generate keywords string from array
 */
export function generateKeywords(customKeywords: string[] = []): string {
  return [...PRIMARY_KEYWORDS, ...customKeywords, ...SECONDARY_KEYWORDS].join(', ');
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * Generate Open Graph image URL
 */
export function generateOgImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http')) return imagePath;
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.fullName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'sales',
      email: SITE_CONFIG.email,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  };
}

/**
 * Generate product schema
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    ...(product.image && { image: generateOgImageUrl(product.image) }),
    brand: {
      '@type': 'Brand',
      name: product.brand || SITE_CONFIG.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: SITE_CONFIG.fullName,
      url: SITE_CONFIG.url,
    },
    ...(product.offers && {
      offers: {
        '@type': 'Offer',
        priceCurrency: product.offers.priceCurrency || 'INR',
        ...(product.offers.price && { price: product.offers.price }),
        availability: product.offers.availability || 'https://schema.org/InStock',
        url: SITE_CONFIG.url,
      },
    }),
  };
}

/**
 * Generate local business schema
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.fullName,
    image: `${SITE_CONFIG.url}/logo.svg`,
    '@id': SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
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
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
  };
}
