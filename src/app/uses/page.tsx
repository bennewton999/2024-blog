import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tools & Equipment I Use | Ben Newton',
  description:
    'Discover the hardware, software, office equipment, and travel gear I use daily as a Frontend Architect and Engineering Leader.',
  keywords: [
    'productivity tools',
    'developer setup',
    'office equipment',
    'software recommendations',
    'travel gear',
    'Ben Newton setup'
  ],
  openGraph: {
    title: 'Tools & Equipment I Use | Ben Newton',
    description:
      'Discover the hardware, software, office equipment, and travel gear I use daily as a Frontend Architect and Engineering Leader.',
    url: 'https://benenewton.com/uses',
    type: 'website'
  }
};

export default function UsesPage() {
  return (
    <div className="container py-6 lg:py-10">
      <h1 className="text-4xl font-bold mb-4">What I Use</h1>
      <p className="text-lg mb-8">
        Welcome to my /uses page! Here, I share the tools, software, and
        hardware I use to stay productive and creative as a Frontend Architect
        and Engineering Leader.
      </p>

      <section className="mb-8" aria-labelledby="hardware-heading">
        <h2 id="hardware-heading" className="text-2xl font-semibold mb-4">
          Hardware
        </h2>
        <ul className="space-y-4">
          <li>
            MacBook Air (M2, 2023) - My primary development machine with
            excellent battery life and performance
          </li>
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
          <li>
            Magic Keyboard and Track Pad - Apple's wireless input devices for a
            clean desk setup
          </li>
        </ul>
      </section>

      <section className="mb-8" aria-labelledby="office-heading">
        <h2 id="office-heading" className="text-2xl font-semibold mb-4">
          Office Setup
        </h2>
        <ul className="space-y-4">
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

      <section className="mb-8" aria-labelledby="travel-heading">
        <h2 id="travel-heading" className="text-2xl font-semibold mb-4">
          Travel Gear
        </h2>
        <ul className="space-y-4">
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

      <section className="mb-8" aria-labelledby="software-heading">
        <h2 id="software-heading" className="text-2xl font-semibold mb-4">
          Software Tools
        </h2>
        <ul className="space-y-4">
          <li>
            Visual Studio Code - My primary code editor with powerful extensions
            for JavaScript, React, and web development
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
            Obsidian - Knowledge management system I use for note-taking,
            writing, and connecting ideas
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
            Raycast - Productivity launcher that replaces Spotlight on Mac with
            powerful extensions and workflows
            <a
              href="https://raycast.com/?via=ben"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm ml-2 text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
            >
              [Visit Website*]
            </a>
          </li>
          <li>
            Readwise - Tool that aggregates highlights from books, articles, and
            tweets for better knowledge retention
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
        * Affiliate links: I may earn a commission if you make a purchase
        through these links at no additional cost to you.
      </p>
    </div>
  );
}
