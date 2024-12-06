'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const hasSubscribed = localStorage.getItem('newsletter-subscribed')
    const hasDismissed = sessionStorage.getItem('newsletter-dismissed')
    
    if (!hasSubscribed && !hasDismissed) {
      // Show modal after 20 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 20000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsOpen(false)
    sessionStorage.setItem('newsletter-dismissed', 'true')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // First show success state
    setIsSubmitted(true)
    localStorage.setItem('newsletter-subscribed', 'true')
    
    // Then open Buttondown in a popup
    const form = e.target as HTMLFormElement
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const width = 500
    const height = 600
    const left = (window.innerWidth - width) / 2
    const top = (window.innerHeight - height) / 2

    window.open(
      `https://buttondown.com/BenENewton?email=${encodeURIComponent(email)}`,
      'popupwindow',
      `width=${width},height=${height},left=${left},top=${top}`
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg">
        <div className="bg-card border rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-2">Subscribe to my newsletter</h2>
                  <p className="text-muted-foreground">Get the latest posts delivered right to your inbox.</p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-2">Almost there!</h2>
                  <p className="text-muted-foreground">Please complete your subscription in the popup window.</p>
                </>
              )}
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleDismiss}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
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
              <p className="text-xs text-muted-foreground">
                <a 
                  href="https://buttondown.com/refer/BenENewton" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Powered by Buttondown
                </a>
              </p>
            </form>
          ) : (
            <div className="flex justify-end mt-4">
              <Button 
                variant="outline" 
                onClick={handleDismiss}
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 