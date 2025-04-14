import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header-new';
import { Footer } from '@/components/footer';
import { VitalWallScript } from '@/components/vital-wall-script';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';

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
    icon: '/images/avatar.png',
    shortcut: '/images/avatar.png',
    apple: '/images/avatar.png'
  },
  verification: {
    google: 'google-site-verification-code' // Add your Google verification code here
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/'
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
        className="antialiased min-h-screen flex flex-col"
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <VitalWallScript />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
