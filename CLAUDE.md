# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About This Site

This site is my personal site.  You can read the about me to learn about me.  I use this for self promotion to promote my personal brand as well as projects I am working on.  Most of the articles wee originally on Medium.  They did well there.  We should keep the about me section up to date and the uses up to date and especially the now page.  Always ask me for updates before committing.

## Development Commands

- **Development server**: `npm run dev` - Starts Next.js development server on http://localhost:3000
- **Build**: `npm run build` - Builds the production application
- **Production server**: `npm run start` - Starts production server (requires build first)
- **Lint**: `npm run lint` - Runs ESLint to check code quality

## Architecture Overview

This is a Next.js 15 blog application with the following key architectural components:

### Content Management
- **Contentlayer**: Processes MDX files from `content/` directory for type-safe content
- **Blog posts**: Located in `content/posts/` as MDX files with frontmatter fields (title, date, description, author, image, tags, twitterThreadUrl)
- **Authors**: Located in `content/authors/` as MDX files with name, avatar, and bio fields
- **Content types**: Defined in `contentlayer.config.ts` with computed slug and URL fields

### Project Structure
- **App Router**: Uses Next.js 13+ app directory structure in `src/app/`
- **Components**: 
  - UI components in `src/components/ui/` (shadcn/ui components)
  - Blog-specific components in `src/components/blog/`
  - Custom components in `src/components/`
- **Styling**: Tailwind CSS with custom configuration and shadcn/ui integration
- **Theme**: Dark/light mode support via `next-themes`

### Key Technical Details
- **TypeScript**: Full TypeScript support with strict configuration
- **Styling**: Uses `cn()` utility function from `src/lib/utils.ts` for conditional classes (clsx + tailwind-merge)
- **MDX Processing**: rehype-pretty-code for syntax highlighting with GitHub Dark theme
- **Analytics**: Vercel Analytics and Google Analytics integration
- **SEO**: Comprehensive metadata setup in layout.tsx with robots.txt and sitemap generation

### shadcn/ui Configuration
- Uses "new-york" style variant
- Components configured in `components.json` with path aliases
- Custom CSS variables for theming in `src/app/globals.css`

### Content Structure
Blog posts require these frontmatter fields:
- `title` (required)
- `date` (required) 
- `description` (required)
- `author` (required)
- `image` (optional)
- `tags` (optional array)
- `twitterThreadUrl` (optional)

### Routes
- `/` - Home page
- `/blog/[slug]` - Individual blog posts
- `/blog` - Blog listing (if implemented)
- `/about` - About page
- `/now` - Now page
- `/uses` - Uses page
- `/tags/[tag]` - Tag-based filtering

When working with this codebase:
- Follow existing TypeScript patterns and component structure
- Use the `cn()` utility for conditional styling
- Maintain MDX frontmatter consistency for new blog posts
- Test locally with `npm run dev` before building
- Run `npm run lint` to check code quality before committing