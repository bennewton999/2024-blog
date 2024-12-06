'use client'

import { Button } from '@/components/ui/button'

export function NewsletterForm() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <label htmlFor="bd-email" className="text-sm font-medium">
        Sign up for my newsletter
      </label>
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/BenENewton"
        method="post"
        target="popupwindow"
        onSubmit={() => {
          window.open('https://buttondown.com/BenENewton', 'popupwindow', 'width=500,height=600')
          return true
        }}
        className="flex flex-col space-y-2"
      >
        <div className="flex gap-2">
          <input
            type="email"
            id="bd-email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button type="submit">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  )
} 