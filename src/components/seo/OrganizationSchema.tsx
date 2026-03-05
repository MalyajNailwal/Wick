import Script from 'next/script';

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wick",
    "alternateName": "Wick India",
    "url": "https://wick.co.in",
    "logo": "https://wick.co.in/logo.svg",
    "description": "India's leading truck inflation system and trailer inflation system provider. Automatic tyre equalisation for better tyre life for truck trailers.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House Of Wick, 33B, NIT",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9721601500",
      "contactType": "sales",
      "email": "office@wick.co.in",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://twitter.com/WickATES",
      "https://www.linkedin.com/company/wick-india"
    ],
    "keywords": "truck inflation system, trailer inflation system, truck inflation system india, trailer inflation system india, better tyre life for truck trailers, ATES, automatic truck tire inflation"
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
