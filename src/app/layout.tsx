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
    default: 'Wick - Automatic Tyre Equalisation System (ATES) | Commercial Vehicle Safety',
    template: '%s | Wick ATES'
  },
  description: "India's first advanced Automatic Tyre Equalisation System (ATES) for commercial vehicles. Improve safety by 100%, extend tyre life by 20%, save 2%+ fuel. By YORK & SAF-HOLLAND Group.",
  keywords: [
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
    'Wick Automation'
  ],
  authors: [{ name: 'Wick Automation LLP' }],
  creator: 'Wick Automation LLP',
  publisher: 'Wick Automation LLP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://wick.co.in',
    siteName: 'Wick ATES',
    title: 'Wick - Automatic Tyre Equalisation System | Commercial Vehicle Safety',
    description: "India's first advanced ATES for commercial vehicles. 100% safety improvement, 20% longer tyre life, 2%+ fuel savings.",
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
    title: 'Wick - Automatic Tyre Equalisation System | Commercial Vehicle Safety',
    description: "India's first advanced ATES for commercial vehicles. 100% safety improvement, 20% longer tyre life.",
    images: ['/media/productimghd-removebg-preview.png'],
    creator: '@WickATES',
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
      { url: '/favicon.ico', sizes: 'any' },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning={true}>
      <head>
        <GoogleAnalytics />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Wick Automation LLP',
              alternateName: 'Wick ATES',
              url: 'https://wick.co.in',
              logo: 'https://wick.co.in/logo.svg',
              description: "India's first advanced Automatic Tyre Equalisation System (ATES) for commercial vehicles",
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
                'https://twitter.com/WickATES'
              ],
              founder: {
                '@type': 'Organization',
                name: 'Wick Automation LLP'
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${leagueSpartan.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
