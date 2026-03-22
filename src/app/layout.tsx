import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const accent = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-accent",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable}`}
    >
      <body className="antialiased bg-white">
        {/* Skip Navigation Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-steel focus:text-white focus:font-bold focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
        >
          Skip to main content
        </a>
        <Navbar />
        <PageWrapper>
          <main id="main-content">{children}</main>
        </PageWrapper>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
