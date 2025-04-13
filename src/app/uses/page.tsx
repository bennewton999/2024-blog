import Image from 'next/image';

export default function UsesPage() {
  return (
    <div className="container py-6 lg:py-10">
      <h1 className="text-4xl font-bold mb-4">What I Use</h1>
      <p className="text-lg mb-4">
        Welcome to my /uses page! Here, I share the tools, software, and
        hardware I use to stay productive and creative.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Hardware</h2>
        <ul className="list-disc list-inside">
          <li>MacBook Air (M2, 2023)</li>
          <li>
            <a
              href="https://amzn.to/4lpYqWh"
              target="_blank"
              rel="noopener noreferrer"
            >
              LG 32" UltraFine Display Ergo (32UN880-B)
            </a>{' '}
            - 4K UHD IPS monitor with ergonomic stand and USB-C connectivity
          </li>
          <li>
            <a
              href="https://amzn.to/3RKZg1U"
              target="_blank"
              rel="noopener noreferrer"
            >
              SanDisk 2TB Extreme Portable SSD
            </a>{' '}
            - Fast external storage with IP65 water and dust resistance
          </li>
          <li>Magic Keyboard and Track Pad</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Office</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://amzn.to/4luz5dE"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIVO Electric Height Adjustable L-Shaped Standing Desk
            </a>{' '}
            - 83 x 60 inch corner desk with memory controller and dark walnut
            top
          </li>
          <li>
            <a
              href="https://secretlab.co/products/titan-evo-2022-series?sku=M07-E24SW-CREAM1R"
              target="_blank"
              rel="noopener noreferrer"
            >
              SecretLab Titan Evo 2022 Series
            </a>{' '}
            - Ergonomic gaming chair with premium comfort for long work sessions
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Travel Gear</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://amzn.to/3RMWOYQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twelve South AirFly Pro
            </a>{' '}
            - Bluetooth transmitter that connects wireless headphones to
            in-flight entertainment systems
          </li>
          <li>
            <a
              href="https://amzn.to/4jte1Cr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cable Matters Retractable HDMI Cable
            </a>{' '}
            - Compact 3.3ft cable with 4K 60Hz support for easy travel
            connectivity
          </li>
          <li>
            <a
              href="https://amzn.to/42yPVzu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portable Laptop Stand
            </a>{' '}
            - Foldable, lightweight stand for improved ergonomics while
            traveling
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Software</h2>
        <ul className="list-disc list-inside">
          <li>Visual Studio Code</li>
          <li>Obsidian</li>
          <li>Raycast</li>
          <li>Readwise</li>
        </ul>
      </section>
    </div>
  );
}
