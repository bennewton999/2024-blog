import Image from 'next/image'

const clients = [
  { name: 'Taco Bell', logo: '/images/clients/taco_bell.svg' },
  { name: 'SAA', logo: '/images/clients/SAA.png' },
  { name: 'Oakley', logo: '/images/clients/oakley.svg' },
  { name: 'Norwegian Cruise Line', logo: '/images/clients/norwegian_cruise_line.svg' },
  { name: 'MGM Resorts', logo: '/images/clients/MGM_Resorts.png' },
  { name: 'Melia', logo: '/images/clients/melia.svg' },
  { name: 'LATAM', logo: '/images/clients/LATAM.svg' },
  { name: 'Karisma', logo: '/images/clients/karisma.svg' },
  { name: 'Enterprise', logo: '/images/clients/enterprise.svg' },
  { name: 'Bridgestone', logo: '/images/clients/bridgestone.svg' },
  { name: 'Alamo', logo: '/images/clients/alamo.svg' },
  { name: 'Air Canada', logo: '/images/clients/air_canada.svg' },
  { name: 'Aeromexico', logo: '/images/clients/aeromexico.svg' },
]

export default function AboutPage() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col gap-8">
        {/* Bio Section */}
        <section className="prose dark:prose-invert max-w-none">
          <h1 className="font-heading text-4xl lg:text-5xl">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Frontend Architect and Engineering Leader with over 20 years of experience building web applications.
          </p>
          <div className="mt-6">
            <p>
              I&apos;m a Frontend Architect and Engineering Leader with a passion for creating exceptional user experiences. 
              With over two decades in software development, I&apos;ve led teams and architected solutions for companies 
              ranging from startups to Fortune 500 enterprises.
            </p>
            <p>
              My expertise spans the full spectrum of frontend development, from building responsive web applications 
              to implementing design systems and optimizing performance. I&apos;m particularly passionate about mentoring 
              developers and helping teams adopt best practices in modern web development.
            </p>
            <p>
              Currently, I focus on:
            </p>
            <ul>
              <li>Frontend Architecture and Engineering Leadership</li>
              <li>React and Next.js Development</li>
              <li>Design System Implementation</li>
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
            {clients.map((client) => (
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
  )
} 