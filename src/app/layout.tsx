import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header-new';
import { Footer } from '@/components/footer';
import { VitalWallScript } from '@/components/vital-wall-script';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@/components/google-analytics';
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
    default: 'Ben Newton | Frontend Architect & Engineering Leader',
    template: '%s | Ben Newton'
  },
  description:
    'Frontend Architect and Engineering Leader sharing insights on web development, productivity, and technology.',
  keywords: [
    'frontend development',
    'engineering leadership',
    'web development',
    'productivity',
    'Obsidian',
    'tech insights'
  ],
  authors: [{ name: 'Ben Newton' }],
  creator: 'Ben Newton',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://benenewton.com',
    siteName: 'Ben Newton',
    title: 'Ben Newton | Frontend Architect & Engineering Leader',
    description:
      'Frontend Architect and Engineering Leader sharing insights on web development, productivity, and technology.',
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
    title: 'Ben Newton | Frontend Architect & Engineering Leader',
    description:
      'Frontend Architect and Engineering Leader sharing insights on web development, productivity, and technology.',
    creator: '@benenewton', // Update this with your actual Twitter handle
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
