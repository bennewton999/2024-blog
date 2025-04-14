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
        <ul className="space-y-2">
          <li>MacBook Air (M2, 2023)</li>
          <li>
            LG 32&quot; UltraFine Display Ergo (32UN880-B) - 4K UHD IPS monitor
            with ergonomic stand and USB-C connectivity
            <a
              href="https://amzn.to/4lpYqWh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [View on Amazon*]
            </a>
          </li>
          <li>
            SanDisk 2TB Extreme Portable SSD - Fast external storage with IP65
            water and dust resistance
            <a
              href="https://amzn.to/3RKZg1U"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [View on Amazon*]
            </a>
          </li>
          <li>Magic Keyboard and Track Pad</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Office</h2>
        <ul className="space-y-2">
          <li>
            VIVO Electric Height Adjustable L-Shaped Standing Desk - 83 x 60
            inch corner desk with memory controller and dark walnut top
            <a
              href="https://amzn.to/4luz5dE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [View on Amazon*]
            </a>
          </li>
          <li>
            SecretLab Titan Evo 2022 Series - Ergonomic gaming chair with
            premium comfort for long work sessions
            <a
              href="https://secretlab.co/products/titan-evo-2022-series?sku=M07-E24SW-CREAM1R"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [View Product]
            </a>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Travel Gear</h2>
        <ul className="space-y-2">
          <li>
            Thule Subterra Carry On Spinner - Sleek and durable spinner with
            oversized wheels, internal compression panel, and divided main
            compartment
            <a
              href="https://amzn.to/4cyG411"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [View on Amazon*]
            </a>
          </li>
          <li>
            Twelve South AirFly Pro - Bluetooth transmitter that connects
            wireless headphones to in-flight entertainment systems
            <a
              href="https://amzn.to/3RMWOYQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [View on Amazon*]
            </a>
          </li>
          <li>
            Cable Matters Retractable HDMI Cable - Compact 3.3ft cable with 4K
            60Hz support for easy travel connectivity
            <a
              href="https://amzn.to/4jte1Cr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [View on Amazon*]
            </a>
          </li>
          <li>
            Portable Laptop Stand - Foldable, lightweight stand for improved
            ergonomics while traveling
            <a
              href="https://amzn.to/42yPVzu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [View on Amazon*]
            </a>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Software</h2>
        <ul className="space-y-2">
          <li>
            Visual Studio Code
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [Visit Website]
            </a>
          </li>
          <li>
            Obsidian
            <a
              href="https://obsidian.md/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [Visit Website]
            </a>
          </li>
          <li>
            Raycast
            <a
              href="https://www.raycast.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [Visit Website]
            </a>
          </li>
          <li>
            Readwise
            <a
              href="https://readwise.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [Visit Website]
            </a>
          </li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 border-t pt-4">
        * Affiliate links: As an Amazon Associate I earn from qualifying
        purchases.
      </p>
    </div>
  );
}
