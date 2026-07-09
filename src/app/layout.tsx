import type { Metadata } from "next";
import { Geist, Geist_Mono, League_Spartan } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AnalyticsEventListeners from "@/components/AnalyticsEventListeners";
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
    default: 'Tyre Inflation System India | Wick TyreRakhshak ATES',
    template: '%s | Wick'
  },
  description: "Wick TyreRakhshak ATES - India’s first advanced Automatic Tyre Equalisation System for commercial trucks and trailers. Maintains tyre pressure automatically, extends tyre life, saves fuel, and reduces blowout risk across Indian highways.",
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
    'tyre inflation system India',
    'tire inflation system India',
    'commercial vehicle tyre safety India',
    'best tyre pressure monitoring system India',
    'truck tyre blowout prevention India',
    'fleet tyre management India',
    'automatic tyre inflation system for trucks',
    'tyre pressure monitoring system for trailers',
    'commercial vehicle maintenance India',
    'tyre inflation system worldwide',
    'automatic tyre pressure control',
    'truck tyre management system',
    'commercial vehicle tyre monitoring',
    'tyre inflation system manufacturer India',
    'tyre pressure monitoring system India',
    'truck tyre safety system India',
    'fleet tyre management solutions India',
    'commercial vehicle tyre management India',
    'tyre inflation technology India',
    'truck tyre monitoring system',
    'trailer tyre monitoring system',
    'tyre pressure control system India',
    'automatic tyre equalisation India',
    'truck tyre blowout prevention',
    'fleet tyre safety India',
    'commercial vehicle tyre pressure monitoring',
    'inflation trailer',
    'trailer inflation system',
    'automatic trailer tyre inflation',
    'trailer tyre pressure system',
    'multi-axle trailer tyre management',
    'trailer blowout prevention India',
    'best trailer inflation system India',
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
    title: 'Tyre Inflation System India | Wick TyreRakhshak ATES',
    description: "Wick TyreRakhshak ATES - India’s first advanced Automatic Tyre Equalisation System for commercial trucks and trailers. Maintains tyre pressure automatically, extends tyre life, saves fuel, and reduces blowout risk across Indian highways.",
    images: [
      {
        url: 'https://wick.co.in/media/productimghd-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'TyreRakhshak ATES - Automatic Tyre Equalisation System for Trucks and Trailers',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyre Inflation System India | Wick TyreRakhshak ATES',
    description: "TyreRakhshak ATES by Wick automatically maintains tyre pressure for commercial trucks and trailers across Indian highways.",
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
    'theme-color': '#1e293b',
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
        <AnalyticsEventListeners />
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
              description: "India’s first advanced Automatic Tyre Equalisation System (ATES) company for commercial trucks and trailers. Wick TyreRakhshak automatically maintains tyre pressure, extends tyre life, saves fuel, and reduces blowout risk across Indian highways.",
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
                'India’s First Tyre Inflation System Company',
                'Automatic Tyre Equalisation System',
                'TyreRakhshak ATES',
                'Truck Tyre Inflation System',
                'Trailer Tyre Inflation System',
                'Tyre Pressure Monitoring System',
                'Commercial Vehicle Safety',
                'Fleet Tyre Management',
                'Truck Tyre Maintenance',
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
        {/* WebSite Schema with SearchAction + sameAs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Wick - TyreRakhshak ATES',
              url: 'https://wick.co.in',
              description: "India's first advanced Automatic Tyre Equalisation System (ATES) company for commercial trucks and trailers. TyreRakhshak by Wick maintains tyre pressure automatically across Indian highways.",
              publisher: {
                '@type': 'Organization',
                name: 'Wick',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://wick.co.in/favicon.svg',
                },
              },
              sameAs: [
                'https://www.linkedin.com/company/wick-in/',
                'https://twitter.com/WickATES',
                'https://www.facebook.com/wickates',
                'https://www.instagram.com/wickates',
              ],
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
