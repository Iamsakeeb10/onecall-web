import { ServiceCard } from "@/components/cards/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services | ONECALL FIELD SERVICES LLC",
  description:
    "Professional field services across Texas including plumbing, gutter cleaning, drywall repair, landscaping, and more.",
  path: "/services",
});

export default function ServicesPage() {
  const featuredServices = services.slice(0, 3);
  const heroImageUrl = "/images/heroes/hero-services.jpg";

  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Professional property maintenance services"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-navy/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <div className="flex justify-center my-3">
            <div className="h-px w-16 bg-steel/50" />
          </div>
          <p className="font-body text-lg text-pearl-200 max-w-3xl mx-auto">
            Statewide property maintenance solutions designed for property
            managers, banks, investors, and commercial operators across Texas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="md" asChild>
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button
              variant="secondary"
              size="md"
              className="border-white/70 text-white hover:bg-white hover:text-navy"
              asChild
            >
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Full-Service Property Maintenance"
              subtitle="From routine upkeep to urgent field requests, our team delivers consistent workmanship, transparent updates, and reliable turnaround times."
              align="center"
            />
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-pearl-50 border border-pearl-200 rounded-xl p-6 text-center">
                <p className="font-display text-3xl font-bold text-steel mb-2">
                  7
                </p>
                <p className="font-body text-text-muted">
                  Core Service Categories
                </p>
              </div>
              <div className="bg-pearl-50 border border-pearl-200 rounded-xl p-6 text-center">
                <p className="font-display text-3xl font-bold text-steel mb-2">
                  Statewide
                </p>
                <p className="font-body text-text-muted">
                  Coverage Across Texas
                </p>
              </div>
              <div className="bg-pearl-50 border border-pearl-200 rounded-xl p-6 text-center">
                <p className="font-display text-3xl font-bold text-steel mb-2">
                  24h
                </p>
                <p className="font-body text-text-muted">
                  Fast Response Workflow
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-pearl-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Featured Services"
              subtitle="High-demand solutions trusted by partners throughout Texas."
              align="center"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <AnimatedSection
                key={service.id}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <ServiceCard service={service} variant="featured" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="All Services"
              subtitle="Explore our complete maintenance lineup for residential, commercial, rental, and investment properties."
              align="center"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                variant="fadeUp"
                delay={index * 0.06}
              >
                <div id={service.slug}>
                  <ServiceCard service={service} variant="grid" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-pearl-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="bg-navy rounded-2xl p-8 sm:p-10 md:p-14 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Custom Service Plan?
              </h2>
              <p className="font-body text-pearl-200 max-w-2xl mx-auto mb-8">
                Share your property details and service priorities. Our team
                will provide a tailored scope and quote for your portfolio.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 w-full">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/quote">Request a Quote</Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/70 text-white hover:bg-white hover:text-navy"
                  asChild
                >
                  <Link href="/contact">Talk to Our Team</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
