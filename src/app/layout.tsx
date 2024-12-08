import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VitalWallScript } from "@/components/vital-wall-script";

export const metadata: Metadata = {
  title: "Ben Newton",
  description: "Frontend Architect and Engineering Leader sharing insights on web development, productivity, and technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <VitalWallScript />
      </body>
    </html>
  );
}
