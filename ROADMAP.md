# ROADMAP.md

This document tracks planned improvements, features, and maintenance tasks for Ben Newton's personal blog site.

## Progress Tracking Convention
- Use markdown checkboxes to indicate status:
  - `[ ]` = Todo (no timestamp needed)
  - `[-]` = In Progress (add 🚧 YYYY/MM/DD when started)
  - `[x]` = Completed (add ✅ YYYY/MM/DD when finished)
- Example: `- [x] **Task Name** - Description ✅ 2025/06/27`

## High Priority

### Content Updates
- [-] **X.com Commenting Implementation** - Create X.com posts for 12 blog articles and update their twitterThreadUrl fields 🏗️ 2025/06/27
- [x] **Update Now Page** - Updated with current Claude Code research focus and July 2025 date ✅ 2025/07/07
- [ ] **New Blog Posts** - Continue writing technical content and career insights
- [ ] **Review and Update About Page** - Ensure client list and bio remain current
- [ ] **Refresh Uses Page** - Update tools, hardware, and software recommendations

### Technical Improvements
- [ ] **Performance Optimization** - Analyze and improve Core Web Vitals
- [ ] **SEO Enhancements** - Improve meta descriptions and structured data
- [ ] **Accessibility Audit** - Ensure WCAG 2.1 AA compliance
- [ ] **Mobile Optimization** - Test and improve mobile experience

## Medium Priority

### New Features
- [ ] **Hero Image Generation Utility** - Create utility using OpenAI's image generation API to automatically generate blog post hero images
- [ ] **Blog Search Functionality** - Add search capability for blog posts
- [ ] **Newsletter Signup** - Implement email list collection (currently has form component)
- [ ] **Blog Post Pagination** - Add pagination to blog listing pages
- [ ] **Related Posts** - Show related content at bottom of blog posts
- [ ] **RSS Feed** - Generate RSS feed for blog subscribers

### Content Enhancements
- [ ] **Tags System Improvement** - Better tag navigation and filtering
- [ ] **Author Bio Component** - Enhanced author information display
- [ ] **Social Media Integration** - Better social sharing and Twitter thread integration
- [ ] **Image Optimization** - Implement next/image optimization for all images

### User Experience
- [ ] **Dark Mode Improvements** - Refine dark theme styling
- [ ] **Font Loading Optimization** - Ensure smooth font rendering
- [ ] **Error Pages** - Custom 404 and 500 error pages
- [ ] **Loading States** - Add loading indicators where appropriate

## Low Priority

### Nice-to-Have Features
- [x] **Comment System** - Blog post comments via X.com thread integration (infrastructure complete) ✅ 2025/06/27
- [ ] **View Counter** - Track and display blog post views
- [ ] **Bookmark Feature** - Allow users to bookmark posts
- [ ] **Print Stylesheets** - Optimize content for printing
- [ ] **Offline Support** - Progressive Web App features

### Content Ideas
- [ ] **More Career Guidance Posts** - Expand on "Navigating Your Career Path"
- [ ] **Development Tool Reviews** - More posts like the VS Code extensions article
- [ ] **Travel Tech Setup** - Posts about remote work and travel setups
- [ ] **Productivity Workflows** - More Obsidian and productivity content
- [ ] **Defined Tags** - Create a defined list of tags that can be used on posts so we do not create them every time we create a post.

## Technical Maintenance

### Regular Updates
- [ ] **Dependency Updates** - Keep npm packages current and secure
- [ ] **Next.js Updates** - Stay current with Next.js releases
- [ ] **Security Audits** - Regular security dependency checks
- [ ] **Performance Monitoring** - Regular Core Web Vitals monitoring

### Code Quality
- [ ] **TypeScript Strict Mode** - Enable stricter TypeScript checking
- [ ] **ESLint Rules** - Add more comprehensive linting rules
- [ ] **Testing Setup** - Add unit and integration testing
- [ ] **CI/CD Pipeline** - Automated testing and deployment

## Recently Completed

### ✅ Done
- [x] **Contact Modal with Multiple Options** - Implemented comprehensive contact modal with Email, WhatsApp, X.com DM, and LinkedIn options ✅ 2025/07/07
- [x] **CLAUDE.md Creation** - Added AI development assistant documentation ✅ 2025/06/27
- [x] **VitalWall Integration** - Successfully integrated VitalWall.com project
- [x] **Basic Blog Structure** - Complete Next.js 15 + Contentlayer setup
- [x] **Responsive Design** - Mobile-friendly layout implementation
- [x] **Dark Mode Support** - Full dark/light theme switching
- [x] **shadcn/ui Integration** - Modern component library setup
- [x] **Reading Time Estimates** - Added estimated reading time to blog posts and cards ✅ 2025/06/27

## Notes

### Content Update Reminders
- **Now Page**: Should be updated every 2-3 months to reflect current focus
- **Uses Page**: Review quarterly for new tools and equipment
- **About Page**: Update when working with new clients or changing focus areas

### Technical Considerations
- Current tech stack: Next.js 15, TypeScript, Tailwind CSS, Contentlayer, shadcn/ui
- Hosting: Likely Vercel (based on @vercel/analytics integration)
- Content: MDX files with frontmatter in `/content` directory

### Personal Branding Goals
- Establish thought leadership in frontend architecture
- Share knowledge from 20+ years of development experience
- Build professional network and opportunities
- Document and share productivity workflows

---

**Last Updated**: 2025/07/07  
**Next Review**: 2025/08/07