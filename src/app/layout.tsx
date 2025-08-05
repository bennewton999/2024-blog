import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header-new';
import { Footer } from '@/components/footer';
import { VitalWallScript } from '@/components/vital-wall-script';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@/components/google-analytics';
import { OrganizationJsonLd } from '@/components/json-ld';
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-audiowide'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://benenewton.com'),
  title: {
    default: 'Ben Newton | Commerce Frontend Specialist & Engineering Leader',
    template: '%s | Ben Newton'
  },
  description:
    'Commerce Frontend Specialist with 30 years of e-commerce experience. AI-driven development expert building next-generation commerce solutions.',
  keywords: [
    'commerce frontend specialist',
    'e-commerce development',
    'AI-driven development',
    'commerce platform expert',
    'frontend architecture',
    'enterprise commerce',
    'engineering leadership',
    'SAP Commerce',
    'headless commerce'
  ],
  authors: [{ name: 'Ben Newton' }],
  creator: 'Ben Newton',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://benenewton.com',
    siteName: 'Ben Newton',
    title: 'Ben Newton | Commerce Frontend Specialist & Engineering Leader',
    description:
      'Commerce Frontend Specialist with 30 years of e-commerce experience. AI-driven development expert building next-generation commerce solutions.',
    images: [
      {
        url: '/images/avatar.png',
        width: 400,
        height: 400,
        alt: 'Ben Newton'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ben Newton | Commerce Frontend Specialist & Engineering Leader',
    description:
      'Commerce Frontend Specialist with 30 years of e-commerce experience. AI-driven development expert building next-generation commerce solutions.',
    creator: '@benenewton',
    images: ['/images/avatar.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png'
  },
  verification: {
    google: 'google-site-verification-code' // Add your Google verification code here
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/'
    },
    types: {
      'application/rss+xml': '/rss.xml'
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`antialiased min-h-screen flex flex-col ${audiowide.variable}`}
      >
        <OrganizationJsonLd />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <VitalWallScript />
          <Analytics />
          <GoogleAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
