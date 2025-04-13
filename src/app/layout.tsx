import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header-new';
import { Footer } from '@/components/footer';
import { VitalWallScript } from '@/components/vital-wall-script';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Ben Newton',
  description:
    'Frontend Architect and Engineering Leader sharing insights on web development, productivity, and technology.'
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
        </ThemeProvider>
      </body>
    </html>
  );
}
