import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbProps {
  pageName: string
}

export function Breadcrumb({ pageName }: BreadcrumbProps) {
  return (
    <nav className="mb-6 flex items-center space-x-1 text-sm text-muted-foreground">
      <Link
        href="/"
        className="transition-colors hover:text-foreground"
      >
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground">{pageName}</span>
    </nav>
  )
} 