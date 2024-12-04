'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { useMemo } from 'react'

interface MDXContentProps {
  code: string
}

const components = {
  // Add any custom components here
  pre: ({ children, ...props }: { children: React.ReactNode }) => (
    <pre {...props} className="overflow-auto p-4">
      {children}
    </pre>
  ),
  code: ({ children, ...props }: { children: React.ReactNode }) => (
    <code {...props} className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-medium">
      {children}
    </code>
  ),
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMemo(() => {
    try {
      return useMDXComponent(code)
    } catch (error) {
      console.error('Error compiling MDX:', error)
      return () => <div>Error rendering content</div>
    }
  }, [code])

  try {
    return <Component components={components} />
  } catch (error) {
    console.error('Error rendering MDX:', error)
    return <div>Error rendering content</div>
  }
} 