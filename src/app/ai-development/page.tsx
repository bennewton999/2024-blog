import { Metadata } from 'next';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { BlogCard } from '@/components/blog/blog-card';
import { ArrowRight, Zap, Code, Users, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Driven Development | Commerce Frontend Innovation',
  description: 'Explore how AI is transforming commerce development. Learn about Claude Code, systematic project management, and team adoption strategies from 30 years of experience.',
  keywords: [
    'AI development',
    'Claude Code',
    'AI-driven commerce',
    'developer productivity',
    'AI project management',
    'commerce automation'
  ],
  openGraph: {
    title: 'AI-Driven Development for Commerce Teams',
    description: 'Practical strategies for integrating AI into commerce development workflows. Real-world examples and proven approaches.',
    type: 'website',
    url: 'https://benenewton.com/ai-development'
  }
};

export default function AIDevelopmentPage() {
  // Filter AI-related posts
  const aiPosts = allPosts
    .filter(post => 
      (post.published === true || post.published === undefined) &&
      post.tags?.some(tag => 
        ['claude-code', 'ai-development', 'ai', 'mcp'].includes(tag.toLowerCase())
      )
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredPosts = aiPosts.slice(0, 3);
  const additionalPosts = aiPosts.slice(3);

  return (
    <div className="container py-6 lg:py-10">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl space-y-8 pb-16">
        <div className="text-center space-y-4">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            AI-Driven Development
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Transform your commerce development workflow with AI. Real strategies, proven results, and practical implementation guides.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">10x Productivity</h3>
            <p className="text-sm text-muted-foreground">
              Complete in hours what used to take weeks
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Systematic Approach</h3>
            <p className="text-sm text-muted-foreground">
              From chaos to structured AI workflows
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Team Ready</h3>
            <p className="text-sm text-muted-foreground">
              Scale AI adoption across your organization
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto w-full max-w-4xl prose prose-neutral dark:prose-invert pb-16">
        <h2>The Future of Commerce Development is Here</h2>
        <p>
          After 30 years in commerce development, I've seen many technological shifts. 
          But nothing compares to the transformation AI brings to our daily workflow.
        </p>
        <p>
          This isn't about replacing developers—it's about amplifying what we can achieve. 
          From managing complex e-commerce projects to building developer tools, AI has 
          fundamentally changed how I approach every aspect of development.
        </p>
        <p>
          Here, you'll find practical guides, real-world examples, and strategies for 
          integrating AI into your commerce development workflow. No hype, just proven 
          approaches that deliver results.
        </p>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mx-auto w-full max-w-6xl space-y-8 pb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center">
            Essential AI Development Guides
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Learning Path */}
      <section className="mx-auto w-full max-w-6xl pb-16">
        <div className="bg-gradient-to-br from-primary/5 to-background rounded-2xl border border-primary/20 p-8 lg:p-12">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-8">
            Your AI Development Journey
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Start with Claude Code</h3>
                <p className="text-muted-foreground">
                  Learn how to use AI as a development partner, not just a code generator. 
                  Master systematic project management with ROADMAP.md.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Build Your Workflows</h3>
                <p className="text-muted-foreground">
                  Implement command-driven development, visual progress tracking, and 
                  structured AI interactions for consistent results.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Scale to Your Team</h3>
                <p className="text-muted-foreground">
                  Transform individual productivity gains into team-wide advantages. 
                  Learn strategies for AI adoption across commerce development teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      {additionalPosts.length > 0 && (
        <section className="mx-auto w-full max-w-6xl space-y-8 pb-16">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold">
            More AI Development Resources
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {additionalPosts.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl pb-16">
        <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 text-center space-y-6">
          <Rocket className="w-12 h-12 text-primary mx-auto" />
          <h2 className="font-heading text-2xl lg:text-3xl font-bold">
            Ready to Transform Your Development Workflow?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who are using AI to build better commerce solutions faster. 
            Start with one technique and see the difference it makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/blog/claude-code-roadmap-management"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              Start with Project Management
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://x.com/benenewton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background hover:bg-muted/50 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Connect on X
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}