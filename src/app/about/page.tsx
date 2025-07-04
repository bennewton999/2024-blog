import Image from 'next/image';

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
      <div className="flex flex-col gap-8">
        {/* Bio Section */}
        <section className="prose dark:prose-invert max-w-none">
          <h1 className="font-heading text-4xl lg:text-5xl">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Frontend Architect and Engineering Leader with over 20 years of
            experience building web applications.
          </p>
          <div className="mt-6">
            <h3 className="font-heading text-2xl mb-4">AI-Driven Development</h3>
            <p>
              I&apos;m pioneering AI-driven development workflows and building innovative solutions that leverage 
              artificial intelligence to enhance developer productivity and create smarter applications. 
              My latest project, <a href="https://vitalwall.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">VitalWall.com</a>, 
              is a real-time website analytics and visitor tracking platform that helps businesses boost engagement 
              and conversions through intelligent data visualization and social proof.
            </p>
            <p>
              As a Frontend Architect and Engineering Leader with a passion for creating exceptional user experiences, 
              I combine over two decades of software development expertise with cutting-edge AI technologies. 
              I&apos;ve led teams and architected solutions for companies ranging from startups to Fortune 500 enterprises.
            </p>

            <h3 className="font-heading text-2xl mt-8 mb-4">
              Leadership & Impact
            </h3>
            <p>
              Currently serving as Lead Applications Engineer at one of the world&apos;s
              largest consulting firms, where I lead SAP Composable Storefront implementations
              for a major global entertainment company, managing digital ticketing
              and guest experience platforms across multiple international theme park
              destinations including Japan, Hollywood, and Orlando. I architect and
              maintain complex e-commerce systems that handle millions of family
              visitors annually, creating seamless digital experiences from initial
              ticket purchase through immersive in-park experiences. My work integrates
              ticketing, merchandise, mobile experiences, guest services, and specialized
              seasonal events that create lasting memories for guests of all ages.
            </p>
            <p>
              Previously, I served as Senior Experience Engineer at
              SapientRazorfish, where I architected and led development of
              multiple interactive prototypes for world-class brands including
              MGM Resorts. I specialized in translating complex business
              requirements into scalable technical solutions while mentoring
              development teams.
            </p>

            <h3 className="font-heading text-2xl mt-8 mb-4">
              Technical Expertise
            </h3>
            <p>
              My expertise spans the full spectrum of frontend development, from
              building responsive web applications to implementing design
              systems and optimizing performance. I&apos;ve successfully
              delivered projects using React, Angular, Next.js, and modern
              JavaScript frameworks, with a focus on enterprise-scale
              applications.
            </p>

            <h3 className="font-heading text-2xl mt-8 mb-4">
              Key Achievements
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Led implementation of SAP Commerce and integrated third-party
                services for multi-location entertainment platforms
              </li>
              <li>
                Architected custom design systems and development processes for
                enterprise clients
              </li>
              <li>
                Developed comprehensive account management and guest experience
                platforms
              </li>
              <li>
                Built responsive applications serving millions of users across
                travel, hospitality, and entertainment industries
              </li>
              <li>
                Mentored development teams and established best practices for
                modern web development
              </li>
            </ul>

            <h3 className="font-heading text-2xl mt-8 mb-4">Current Focus</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AI-Driven Development & Automation</li>
              <li>Frontend Architecture and Engineering Leadership</li>
              <li>React and Next.js Development</li>
              <li>SAP Commerce & Composable Storefront Implementation</li>
              <li>Team Mentorship and Growth</li>
              <li>Performance Optimization</li>
              <li>Developer Experience (DX)</li>
            </ul>
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
