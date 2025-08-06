import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        {/* Large 404 visual */}
        <div className="space-y-4">
          <h1 className="font-heading text-8xl lg:text-9xl font-bold text-primary/20">
            404
          </h1>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold">
            Page Not Found
          </h2>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-base text-muted-foreground">
            Don't worry, let's get you back on track.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background hover:bg-muted/50 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            View Articles
          </Link>
        </div>

        {/* Suggestion links */}
        <div className="border-t border-border pt-8 mt-12">
          <h3 className="font-semibold text-lg mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About Me
            </Link>
            <Link
              href="/now"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              What I'm Doing Now
            </Link>
            <Link
              href="/uses"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Tools & Setup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}