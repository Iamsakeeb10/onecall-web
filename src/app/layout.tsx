import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Barlow } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "MEGAFIXX Home Services LLC | Texas Statewide Property Maintenance",
  description: "Professional property maintenance services across Texas. Serving property managers, investors, banks, and REO departments statewide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable} ${barlow.variable}`}>
      <body className="antialiased bg-navy-950">
        <Navbar />
        <PageWrapper>
          {children}
        </PageWrapper>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
