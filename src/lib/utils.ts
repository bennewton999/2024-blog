import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateReadingTime(content: string): number {
  // Average reading speed is 200-250 words per minute
  // Using 225 as a middle ground
  const wordsPerMinute = 225;
  
  // Remove HTML/MDX tags, JSX components, and code blocks
  const plainText = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/jsx?[\s\S]*?```/g, '') // Remove JSX code blocks
    .replace(/\{[^}]*\}/g, '') // Remove JSX expressions
    .replace(/function\s+\w+\([\s\S]*?\}/g, '') // Remove function definitions
    .replace(/const\s+\w+\s*=[\s\S]*?;/g, '') // Remove const declarations
    .replace(/import[\s\S]*?from[\s\S]*?;/g, '') // Remove import statements
    .replace(/export[\s\S]*?;/g, '') // Remove export statements
    .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  const wordCount = plainText.split(' ').filter(word => word.length > 0).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  // Minimum 1 minute reading time
  return Math.max(1, readingTime);
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
