import type { Metadata } from "next";
import { Geist, Geist_Mono, League_Spartan } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wick.co.in'),
  title: {
    default: 'Wick | India\'s #1 ATES Technology | Automatic Tyre Equalisation System',
    template: '%s | Wick'
  },
  description: "Wick is India's leading ATES provider. Wick's advanced Automatic Tyre Equalisation System transforms commercial vehicle safety. 100% safety improvement, 20% longer tyre life, 2%+ fuel savings. Wick - By YORK & SAF-HOLLAND Group.",
  keywords: [
    'Wick',
    'Wick ATES',
    'Wick India',
    'Wick TyreRakhshak',
    'Wick commercial vehicle',
    'Wick tyre safety',
    'Wick technology',
    'Wick fleet solutions',
    'Wick automotive',
    'Wick safety systems',
    'Wick Faridabad',
    'Wick tyre management',
    'ATES',
    'Automatic Tyre Equalisation System',
    'TyreRakhshak',
    'commercial vehicle safety',
    'tyre pressure monitoring',
    'fleet management India',
    'YORK ATES',
    'truck tyre safety',
    'commercial trailer safety',
    'tyre inflation system',
    'heavy commercial vehicle',
    'HCV safety',
    'fuel efficiency',
    'tyre management',
    'SAF-HOLLAND',
  ],
  authors: [{ name: 'Wick' }],
  creator: 'Wick',
  publisher: 'Wick',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://wick.co.in',
    siteName: 'Wick',
    title: 'Wick | India\'s #1 ATES Technology | Automatic Tyre Equalisation System',
    description: "Wick is India's leading ATES provider. Wick's advanced ATES technology transforms commercial vehicle safety. 100% safety improvement, 20% longer tyre life, 2%+ fuel savings.",
    images: [
      {
        url: '/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'TyreRakhshak ATES - Automatic Tyre Equalisation System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wick | India\'s #1 ATES Technology',
    description: "Wick is India's leading ATES provider. 100% safety improvement, 20% longer tyre life with Wick ATES.",
    images: ['/media/productimghd-removebg-preview.png'],
    creator: '@WickATES',
    site: '@WickATES',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'U5wQqy8SHoSJryzJ_QuPhVvdazbzRtTuxGo_mOJGPXw',
  },
  alternates: {
    canonical: 'https://wick.co.in',
  },
  other: {
    'preconnect': 'https://res.cloudinary.com',
    'dns-prefetch': 'https://res.cloudinary.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${leagueSpartan.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <GoogleAnalytics />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Wick',
              alternateName: ['Wick ATES', 'Wick India', 'Wick TyreRakhshak'],
              url: 'https://wick.co.in',
              logo: 'https://wick.co.in/logo.svg',
              description: "Wick is India's leading Automatic Tyre Equalisation System (ATES) provider for commercial vehicles",
              slogan: 'Revolutionizing Commercial Vehicle Safety',
              foundingDate: '2021',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'House Of Wick, 33B, NIT',
                addressLocality: 'Faridabad',
                addressRegion: 'Haryana',
                postalCode: '121001',
                addressCountry: 'IN'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9721601500',
                contactType: 'sales',
                email: 'office@wick.co.in',
                areaServed: 'IN',
                availableLanguage: ['en', 'hi']
              },
              sameAs: [
                'https://www.linkedin.com/company/wick-ates',
                'https://twitter.com/WickATES',
                'https://www.facebook.com/wickates',
                'https://www.instagram.com/wickates'
              ],
              founder: {
                '@type': 'Organization',
                name: 'Wick'
              }
            })
          }}
        />
        {/* Brand Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Brand',
              name: 'Wick',
              alternateName: ['Wick ATES', 'Wick India', 'Wick TyreRakhshak'],
              url: 'https://wick.co.in',
              logo: 'https://wick.co.in/logo.svg',
              description: "India's leading Automatic Tyre Equalisation System provider",
              slogan: 'Revolutionizing Commercial Vehicle Safety',
              foundingDate: '2021',
              foundingLocation: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Faridabad',
                  addressRegion: 'Haryana',
                  addressCountry: 'IN'
                }
              }
            })
          }}
        />
        {/* WebSite Schema with Search Action */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Wick',
              alternateName: 'Wick ATES',
              url: 'https://wick.co.in',
              description: "Wick is India's leading ATES technology provider",
              publisher: {
                '@type': 'Organization',
                name: 'Wick',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://wick.co.in/logo.svg'
                }
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
