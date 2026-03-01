import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { QualityProcess } from "@/components/sections/QualityProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <ClientsSection />
      <WhyChooseUs />
      <QualityProcess />
      {/* Testimonials - Chunk 6 */}
      {/* CTA Banner - Chunk 7 */}
    </>
  );
}
