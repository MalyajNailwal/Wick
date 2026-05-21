import Script from 'next/script';

interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string;
  brand?: string;
}

export default function ProductSchema({ 
  name, 
  description, 
  image = '/media/productimghd-removebg-preview.png',
  brand = 'Wick'
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": `https://wick.co.in${image}`,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Wick",
      "url": "https://wick.co.in"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "url": "https://wick.co.in/products"
    },
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
