import { NewsletterForm } from '@/components/newsletter-form'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-8 md:h-24 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Ben Newton. All rights reserved.
        </p>
        <NewsletterForm />
      </div>
    </footer>
  );
} 