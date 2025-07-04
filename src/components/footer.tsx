import { NewsletterForm } from '@/components/newsletter-form'
import { Rss } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-8 md:h-24 md:flex-row">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ben Newton. All rights reserved.
          </p>
          <Link
            href="/rss.xml"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="RSS Feed"
          >
            <Rss className="h-4 w-4" />
          </Link>
        </div>
        <NewsletterForm />
      </div>
    </footer>
  );
} 