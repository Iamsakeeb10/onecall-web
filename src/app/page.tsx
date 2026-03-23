import { ClientsSection } from "@/components/sections/ClientsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { QualityProcess } from "@/components/sections/QualityProcess";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "ONECALL FIELD SERVICES LLC | Reliable Property Support",
  description:
    "Dependable property support services across Texas for residential and commercial portfolios.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <div
        className="h-px bg-gradient-to-r from-transparent via-pearl-300 to-transparent"
        aria-hidden="true"
      />
      <ServicesSection />
      <ClientsSection />
      <WhyChooseUs />
      <div
        className="h-px bg-gradient-to-r from-transparent via-pearl-300 to-transparent"
        aria-hidden="true"
      />
      <QualityProcess />
      <Testimonials />
      {/* <CTABanner variant="dark" /> */}
      <ContactSection />
    </>
  );
}
