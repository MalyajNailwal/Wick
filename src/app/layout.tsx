import type { Metadata } from "next";
import { Geist, Geist_Mono, League_Spartan } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import Footer from "@/components/layout/Footer";

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
    default: 'Wick | Truck & Tyre Maintenance System India',
    template: '%s | Wick'
  },
  description: "Wick - India's #1 truck & tyre maintenance system. Tyre maintenance app for commercial vehicles. 20% longer tyre life, 2%+ fuel savings. ATES technology.",
  keywords: [
    'Wick',
    'truck maintenance system',
    'tyre maintenance system',
    'tyre maintenance app',
    'truck tyre',
    'trailer tyre',
    'truck inflation system',
    'truck inflation system india',
    'trailer inflation system',
    'trailer inflation system india',
    'better tyre life for truck trailers',
    'Wick ATES',
    'Wick India',
    'Wick TyreRakhshak',
    'automatic truck tyre inflation',
    'automatic trailer tyre inflation',
    'truck tyre inflation system',
    'trailer tyre inflation system',
    'truck tyre maintenance',
    'trailer tyre maintenance',
    'fleet tyre maintenance',
    'commercial vehicle maintenance system',
    'truck tyre pressure system',
    'trailer tyre pressure system',
    'increase truck tyre life',
    'extend trailer tyre life',
    'ATES',
    'Automatic Tyre Equalisation System',
    'TyreRakhshak',
    'commercial vehicle safety',
    'tyre pressure monitoring',
    'fleet management India',
    'YORK ATES',
    'truck tyre safety',
    'commercial trailer safety',
    'heavy commercial vehicle',
    'HCV safety',
    'fuel efficiency',
    'tyre management',
    'SAF-HOLLAND',
    'reduce tyre wear trucks',
    'truck tyre longevity',
    'trailer tyre durability',
    'tyre maintenance software',
    'fleet maintenance app',
    'buy tyre inflation system India',
    'tyre inflation system price',
    'best tyre inflation system India',
    'prevent truck tyre blowout',
    'why do truck tyres burst',
    'how to improve truck tyre life',
    'tyre inflation system Faridabad',
    'fleet tyre management Delhi NCR',
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
    title: 'Wick | Truck Maintenance System | Tyre Maintenance System & App',
    description: "India's #1 truck maintenance system & tyre maintenance system. Tyre maintenance app for truck tyre & trailer tyre. 20% longer tyre life, 2%+ fuel savings.",
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'TyreRakhshak ATES - Automatic Tyre Equalisation System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wick | Truck Maintenance System | Tyre Maintenance App',
    description: "India's #1 truck maintenance system & tyre maintenance app. Truck tyre & trailer tyre management. 20% longer tyre life, 2%+ fuel savings.",
    images: ['https://wick.co.in/media/productimghd-removebg-preview.png'],
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
    languages: {
      'en-IN': 'https://wick.co.in/',
      'en': 'https://wick.co.in/',
    },
    types: {
      'application/rss+xml': 'https://wick.co.in/feed.xml',
    },
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:rounded-md focus:font-medium"
        >
          Skip to main content
        </a>
        <GoogleAnalytics />
        <LocalBusinessSchema />
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
              description: "India's leading truck inflation system and trailer inflation system provider. Automatic tyre equalisation for better tyre life for truck trailers.",
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
                '@type': 'Person',
                name: 'Vinamra Bajaj'
              },
              knowsAbout: [
                'Automatic Tyre Equalisation System',
                'Tyre Pressure Monitoring System',
                'Commercial Vehicle Safety',
                'Fleet Tyre Management',
                'Truck Tyre Inflation',
                'Trailer Tyre Maintenance',
                'Fuel Efficiency for Trucks',
                'Tyre Blowout Prevention',
                'Commercial Vehicle Maintenance',
                'Pneumatic Systems for Trucks'
              ],
              parentOrganization: {
                '@type': 'Organization',
                name: 'SAF-HOLLAND Group',
                url: 'https://www.safholland.com'
              }
            })
          }}
        />
        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Wick',
              url: 'https://wick.co.in',
              description: "India's leading truck & tyre maintenance system. ATES technology for commercial vehicle fleets.",
              publisher: {
                '@type': 'Organization',
                name: 'Wick',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://wick.co.in/logo.svg',
                },
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://wick.co.in/blog?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            })
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
