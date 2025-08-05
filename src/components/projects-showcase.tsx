import Link from 'next/link';
import { ExternalLink, Zap, Mic, Shield } from 'lucide-react';

const projects = [
  {
    name: 'VitalWall',
    description: 'Real-time website analytics and visitor tracking platform that boosts engagement through intelligent social proof.',
    url: 'https://vitalwall.com',
    tech: ['Next.js', 'TypeScript', 'Real-time Analytics'],
    icon: <Zap className="w-6 h-6" />,
    status: 'Live Product',
    highlight: 'Used by 500+ websites'
  },
  {
    name: 'VoiceCommit',
    description: 'AI-powered voice-first tool that turns spoken development ideas into GitHub Issues, PRs, and updates.',
    url: 'https://voicecommit.com', 
    tech: ['AI Integration', 'GitHub API', 'Voice Recognition'],
    icon: <Mic className="w-6 h-6" />,
    status: 'Recently Launched',
    highlight: 'Zero to GitHub in 60 seconds'
  },
  {
    name: 'SilverBullet',
    description: 'Next-generation AI-first commerce platform with intelligent features across every aspect of e-commerce.',
    url: 'https://silverbullet.com',
    tech: ['AI/ML', 'Commerce Platform', 'TypeScript'],
    icon: <Shield className="w-6 h-6" />,
    status: 'In Development',
    highlight: 'AI-powered commerce revolution'
  }
];

export function ProjectsShowcase() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold">
          Current Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Building the future of commerce and developer productivity with AI-driven solutions
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            {/* Status badge */}
            <div className="absolute top-4 right-4">
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {project.status}
              </div>
            </div>

            <div className="space-y-4">
              {/* Icon and title */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {project.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.highlight}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2 py-1 bg-muted/50 rounded text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link indicator */}
              <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                <span>Visit Project</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}