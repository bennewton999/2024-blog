import { Code, Users, Zap, Layers } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Commerce Frontend Architecture',
    description: 'Enterprise-scale e-commerce solutions with 30 years of experience across multiple platforms including SAP Commerce, custom builds, and headless implementations.',
    highlights: ['Multi-platform expertise', 'Performance optimization', 'Scalable architecture']
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'AI-Driven Development',
    description: 'Pioneering AI-enhanced development workflows using tools like Claude Code, GitHub Copilot, and custom automation to dramatically increase team productivity.',
    highlights: ['Workflow automation', 'AI tool integration', 'Developer productivity']
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Engineering Leadership',
    description: 'Leading distributed development teams and mentoring 100+ developers across global implementations for Fortune 500 companies.',
    highlights: ['Team leadership', 'Global experience', 'Agile methodologies']
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Enterprise Implementation',
    description: 'Complex commerce systems serving millions of users across entertainment, travel, and retail industries with proven track record at scale.',
    highlights: ['High-traffic systems', 'International deployment', 'Enterprise security']
  }
];

export function ServicesSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold">
          What I Specialize In
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nearly three decades of expertise in commerce frontend development and engineering leadership
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="space-y-4">
              {/* Icon and title */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {service.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}