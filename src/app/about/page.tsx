import Image from 'next/image';
import { PersonJsonLd } from '@/components/json-ld';

const clients = [
  { name: 'Taco Bell', logo: '/images/clients/taco_bell.svg' },
  { name: 'SAA', logo: '/images/clients/SAA.png' },
  { name: 'Oakley', logo: '/images/clients/oakley.svg' },
  {
    name: 'Norwegian Cruise Line',
    logo: '/images/clients/norwegian_cruise_line.svg'
  },
  { name: 'MGM Resorts', logo: '/images/clients/MGM_Resorts.png' },
  { name: 'Melia', logo: '/images/clients/melia.svg' },
  { name: 'LATAM', logo: '/images/clients/LATAM.svg' },
  { name: 'Karisma', logo: '/images/clients/karisma.svg' },
  { name: 'Enterprise', logo: '/images/clients/enterprise.svg' },
  { name: 'Bridgestone', logo: '/images/clients/bridgestone.svg' },
  { name: 'Alamo', logo: '/images/clients/alamo.svg' },
  { name: 'Air Canada', logo: '/images/clients/air_canada.svg' },
  { name: 'Aeromexico', logo: '/images/clients/aeromexico.svg' }
];

export default function AboutPage() {
  return (
    <div className="container py-6 lg:py-10">
      <PersonJsonLd
        name="Ben Newton"
        jobTitle="Commerce Frontend Specialist & Engineering Leader"
        url="https://benenewton.com"
        image="https://benenewton.com/images/avatar.png"
        sameAs={[
          'https://linkedin.com/in/bennewton',
          'https://github.com/bennewton999',
          'https://x.com/benenewton'
        ]}
      />
      <div className="flex flex-col gap-8">
        {/* Bio Section */}
        <section className="prose dark:prose-invert max-w-none">
          <h1 className="font-heading text-4xl lg:text-5xl">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Commerce Frontend Specialist and Engineering Leader with nearly 30 years of
            experience building enterprise e-commerce solutions for Fortune 500 brands.
          </p>

          {/* Hero Image */}
          <div className="my-8">
            <div className="relative w-full max-w-2xl mx-auto text-center">
              <Image
                src="/images/about/ben-universal-studios.png"
                alt="Ben Newton at a theme park in Orlando"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
                priority
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Enjoying Orlando&apos;s theme park scene, where I&apos;ve made my home for the past 2+ years
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-heading text-2xl mb-4">
              AI-Driven Commerce Development
            </h3>
            <p>
              I&apos;m pioneering AI-driven commerce development workflows using tools like
              Claude Code (my primary AI assistant), GitHub Copilot, and ChatGPT to dramatically
              increase development velocity and quality. This AI-enhanced approach has enabled me
              to single-handedly build multiple production applications including{' '}
              <a
                href="https://vitalwall.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                VitalWall.com
              </a>
              {' '}(real-time analytics and social proof),{' '}
              <a
                href="https://voicecommit.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                VoiceCommit.com
              </a>
              {' '}(AI-powered development workflow automation with built-in AI features), and{' '}
              <a
                href="https://silverbullet.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                SilverBullet.com
              </a>
              {' '}(next-generation AI-first commerce platform in development).
            </p>
            <p>
              My vision for SilverBullet represents the future of e-commerce: a platform where 
              AI powers every aspect from personalized product recommendations to automated 
              inventory management, dynamic pricing, and intelligent customer service. 
              I&apos;ve architected commerce solutions for major brands across retail, travel, 
              hospitality, and entertainment industries, always seeking the next technological 
              breakthrough to deliver exceptional user experiences.
            </p>

            <h3 className="font-heading text-2xl mt-8 mb-4">
              Leadership & Impact
            </h3>
            <p>
              Currently serving as Lead Applications Engineer at one of the
              world&apos;s largest consulting firms, where I lead commerce frontend
              implementations for a major global entertainment company across
              multiple international destinations including Japan, Hollywood, and Orlando. 
              I architect and maintain complex e-commerce systems that handle millions of 
              visitors annually, creating seamless digital experiences from initial
              ticket purchase through in-park commerce experiences. My work spans
              ticketing platforms, merchandise systems, mobile commerce, guest
              services, and seasonal campaign implementations that drive significant
              revenue for one of the world&apos;s most recognized brands.
            </p>
            <p>
              Throughout my career, I&apos;ve mentored over 100 developers across onshore 
              and offshore teams, working with distributed teams around the world. I&apos;ve 
              been flown to client sites globally to lead critical implementations and have 
              extensive experience with both Agile and traditional development methodologies. 
              Previously, I served as Senior Experience Engineer at SapientRazorfish, where 
              I architected and led development of multiple interactive prototypes for 
              world-class brands including MGM Resorts.
            </p>

            <h3 className="font-heading text-2xl mt-8 mb-4">
              Commerce & Technical Expertise
            </h3>
            <p>
              Since 1996, I&apos;ve been building e-commerce solutions, with the past 9 years 
              specializing in SAP Commerce implementations. However, my commerce experience 
              spans much broader - I&apos;ve built custom e-commerce systems from the ground up, 
              architected headless commerce solutions, and delivered enterprise-scale platforms 
              using React, Angular, Next.js, and modern JavaScript frameworks. My expertise 
              covers the full commerce stack: product catalogs, checkout flows, payment integration, 
              inventory management, order processing, and customer account systems.
            </p>

            <h3 className="font-heading text-2xl mt-8 mb-4">
              Key Achievements
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Led multi-platform commerce implementations serving millions of customers
                across entertainment, travel, and hospitality industries
              </li>
              <li>
                Architected custom e-commerce systems and design systems for
                Fortune 500 brands including major retail and travel companies
              </li>
              <li>
                Built comprehensive commerce platforms handling complex product catalogs,
                multi-location inventory, and international payment processing
              </li>
              <li>
                Developed responsive commerce applications for brands like Oakley,
                MGM Resorts, Norwegian Cruise Line, and major automotive companies
              </li>
              <li>
                Mentored development teams and established commerce-focused best practices
                for enterprise-scale implementations
              </li>
            </ul>

            <h3 className="font-heading text-2xl mt-8 mb-4">Current Focus</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AI-Driven Commerce Development & Automation</li>
              <li>Commerce Frontend Architecture and Engineering Leadership</li>
              <li>Headless Commerce and Modern JavaScript Frameworks</li>
              <li>Multi-Platform Commerce Solutions (SAP, Custom, Headless)</li>
              <li>Team Mentorship and Growth</li>
              <li>E-commerce Performance Optimization</li>
              <li>Developer Experience for Commerce Teams</li>
            </ul>

            <h3 className="font-heading text-2xl mt-8 mb-4">Open to New Opportunities</h3>
            <p>
              I&apos;m always interested in challenging, innovative projects that push the 
              boundaries of commerce technology. While I&apos;m happy in my current role, 
              I&apos;m open to discussing interesting opportunities - particularly those 
              involving AI-driven commerce solutions, cutting-edge frontend architecture, 
              or unique technical challenges. Contact me on{' '}
              <a
                href="https://x.com/benenewton"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              {' '}if you have something different and compelling to discuss.
            </p>
          </div>
        </section>

        {/* Clients Section */}
        <section className="mt-12">
          <h2 className="font-heading text-3xl mb-8">Clients & Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map(client => (
              <div
                key={client.name}
                className="relative flex items-center justify-center p-6 bg-muted rounded-lg hover:bg-muted/80 transition-colors aspect-[16/9]"
              >
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain p-2 dark:invert"
                    sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
