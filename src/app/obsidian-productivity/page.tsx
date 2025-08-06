import { Metadata } from 'next';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { BlogCard } from '@/components/blog/blog-card';
import { ArrowRight, Brain, Clock, Workflow, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Obsidian & Productivity Systems | Developer Knowledge Management',
  description: 'Master Obsidian for developer productivity. Daily notes, automation workflows, and knowledge management systems that scale with your career.',
  keywords: [
    'Obsidian',
    'productivity',
    'daily notes',
    'knowledge management',
    'developer productivity',
    'automation',
    'note-taking'
  ],
  openGraph: {
    title: 'Obsidian Productivity Systems for Developers',
    description: 'Build a second brain with Obsidian. Proven workflows, automation strategies, and templates from 30 years of development experience.',
    type: 'website',
    url: 'https://benenewton.com/obsidian-productivity'
  }
};

export default function ObsidianProductivityPage() {
  // Filter Obsidian and productivity posts
  const productivityPosts = allPosts
    .filter(post => 
      (post.published === true || post.published === undefined) &&
      post.tags?.some(tag => 
        ['obsidian', 'productivity', 'automation', 'note-taking'].includes(tag.toLowerCase())
      )
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const obsidianPosts = productivityPosts.filter(post => 
    post.tags?.includes('obsidian')
  );
  
  const automationPosts = productivityPosts.filter(post => 
    post.tags?.includes('automation')
  );

  return (
    <div className="container py-6 lg:py-10">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl space-y-8 pb-16">
        <div className="text-center space-y-4">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Obsidian & Productivity
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Build a knowledge management system that grows with your career. From daily notes to automated workflows.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Second Brain</h3>
            <p className="text-sm text-muted-foreground">
              Never lose an idea or insight
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Daily Tracking</h3>
            <p className="text-sm text-muted-foreground">
              Structured daily notes that work
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Workflow className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Automation</h3>
            <p className="text-sm text-muted-foreground">
              iOS Shortcuts and integrations
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Templates</h3>
            <p className="text-sm text-muted-foreground">
              Battle-tested productivity systems
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto w-full max-w-4xl prose prose-neutral dark:prose-invert pb-16">
        <h2>Your Knowledge, Organized and Accessible</h2>
        <p>
          After decades in software development, I've learned that your ability to capture, 
          organize, and retrieve knowledge is just as important as your coding skills.
        </p>
        <p>
          Obsidian has transformed how I manage everything from daily standup notes to 
          complex technical documentation. Combined with automation tools like iOS Shortcuts, 
          it becomes a productivity powerhouse.
        </p>
        <p>
          Whether you're tracking your daily work, building a personal knowledge base, or 
          creating a system that scales with your career, these guides will show you how.
        </p>
      </section>

      {/* Obsidian Guides */}
      {obsidianPosts.length > 0 && (
        <section className="mx-auto w-full max-w-6xl space-y-8 pb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center">
            Core Obsidian Workflows
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {obsidianPosts.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Complete System */}
      <section className="mx-auto w-full max-w-6xl pb-16">
        <div className="bg-gradient-to-br from-primary/5 to-background rounded-2xl border border-primary/20 p-8 lg:p-12">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-8">
            The Complete Productivity System
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-semibold text-xl">Daily Workflow</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Automated daily note creation with weather and calendar</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Meeting notes imported from Outlook/Calendar</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Task tracking with priorities and contexts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>End-of-day reflection and planning</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold text-xl">Knowledge Management</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Readwise integration for book highlights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Technical documentation templates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Project knowledge bases</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Searchable meeting archives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Posts */}
      {automationPosts.length > 0 && (
        <section className="mx-auto w-full max-w-6xl space-y-8 pb-16">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold">
            Automation & Integration
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {automationPosts.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Templates Section */}
      <section className="mx-auto w-full max-w-6xl pb-16">
        <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
          <h2 className="font-heading text-2xl font-bold">
            Free Templates & Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Daily Note Template</h3>
              <p className="text-muted-foreground text-sm">
                My complete daily note template with sections for weather, meetings, 
                tasks, and reflections. Optimized for developer workflows.
              </p>
              <Link
                href="/blog/my-obsidian-daily-note-template"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Get the template
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">iOS Shortcuts Collection</h3>
              <p className="text-muted-foreground text-sm">
                Pre-built shortcuts for weather integration, meeting imports, and 
                automated note creation. Works with iPhone and iPad.
              </p>
              <Link
                href="/blog/automating-obsidian-daily-note"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Download shortcuts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl pb-16">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 text-center space-y-6">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold">
            Start Building Your Second Brain Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who use Obsidian to capture ideas, track progress, 
            and build knowledge that compounds over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/blog/my-obsidian-daily-note-template"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              Start with Daily Notes
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://obsidian.md/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background hover:bg-muted/50 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Download Obsidian
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}