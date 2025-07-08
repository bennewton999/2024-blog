import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now | Ben Newton',
  description: "What I'm focused on right now - July 2025"
};

export default function NowPage() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col gap-8">
        <section className="prose dark:prose-invert max-w-none">
          <h1 className="font-heading text-4xl lg:text-5xl">Now</h1>
          <p className="text-muted-foreground">Last updated: July 7, 2025</p>

          <div className="mt-6">
            <p className="text-xl">
              Here&apos;s what I&apos;m focused on right now:
            </p>

            <h2>Professional Life</h2>
            <p>
              I&apos;m currently working on the ticketing website for a large
              global entertainment company. This has been an exciting project
              that&apos;s taken me to different parts of the world:
            </p>
            <ul>
              <li>
                Recently traveled to Japan for the launch of a new ecommerce
                website in Osaka
              </li>
              <li>
                Launched an ecommerce site for the company for a location in Las
                Vegas
              </li>
              <li>Launched an ecommerce site for the company in Hollywood</li>
              <li>
                Currently focused on a family-oriented resort and hotel booking
                platform for a new property
              </li>
              <li>
                Beginning planning on an Orlando-based attraction ticketing
                system update
              </li>
            </ul>

            <h2>Side Projects</h2>
            <p>
              I recently launched{' '}
              <a
                href="https://VitalWall.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                VitalWall.com
              </a>{' '}
              - a project I started over 10 years ago and let sit. After a
              complete rewrite of the entire application, I&apos;m excited to
              have officially launched it!
            </p>
            <p>
              I&apos;m spending significant time working with Claude Code on
              multiple personal projects. One particularly exciting venture is
              the potential resurrection of a 20-year-old Classic ASP
              application that I spent over a decade building. This system
              powered a major distributor&apos;s entire operations - essentially
              functioning as Salesforce before Salesforce existed. I&apos;m
              exploring what happens when I apply modern AI development
              techniques to this legacy codebase, and if successful, it could
              dramatically shift my priorities and open new possibilities for
              the future.
            </p>

            <h2>Location</h2>
            <p>
              I moved to Orlando over 2 years ago and wish I had done it 20
              years ago. It&apos;s been a fantastic change!
            </p>

            <h2>Fitness</h2>
            <p>
              I&apos;m currently focusing on getting healthy. Development work
              can keep you at your desk for months on end, and I&apos;m actively
              working to change that pattern in my life.
            </p>

            <h2>Entertainment</h2>
            <p>
              Just finished{' '}
              <strong>
                <a
                  href="https://www.imdb.com/title/tt10919420/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Squid Game Season 3
                </a>
              </strong>{' '}
              - what a waste of time that was. Now I&apos;m watching{' '}
              <strong>
                <a
                  href="https://www.imdb.com/title/tt14452776/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Bear
                </a>
              </strong>
              .
            </p>

            <h2>Development Focus</h2>
            <p>
              I&apos;m currently digging deep into Claude Code, researching its
              potential for larger projects and team environments. I&apos;m
              exploring how AI-assisted development tools can scale beyond
              individual use cases to enhance productivity across development
              teams. This research includes understanding best practices for
              integrating AI tools into existing workflows and evaluating their
              impact on code quality, development velocity, and team collaboration.
            </p>

            <h2>Goals</h2>
            <p>
              My current goals are to be more involved online and share what
              I&apos;ve learned over nearly 30 years as a developer. I want to
              give back to the community and help others along their development
              journey.
            </p>

            <h2>What&apos;s a &quot;Now&quot; Page?</h2>
            <p>
              This is a{' '}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Now page
              </a>
              . Unlike social media updates that show day-to-day activities, a
              Now page gives you the bigger picture of what someone is focused
              on in their life right now - similar to what I&apos;d tell a
              friend I haven&apos;t seen in a year.
            </p>

            <p className="text-sm text-muted-foreground italic mt-12">
              This page was inspired by{' '}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                nownownow.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
