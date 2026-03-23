import { TeamPhoto } from "@/components/cards/TeamPhoto";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Award,
  Clock,
  Home,
  Paintbrush,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us | ONECALL FIELD SERVICES LLC",
  description:
    "Learn about our Texas-based team delivering reliable property support for residential and commercial operations.",
  path: "/about",
});

const serviceCategories = [
  {
    icon: Paintbrush,
    title: "Interior Services",
    description:
      "Drywall restoration, interior painting, property cleaning, and plumbing support for homes and commercial operations.",
  },
  {
    icon: Home,
    title: "Exterior Services",
    description:
      "Gutter systems, siding solutions, landscaping services, and exterior maintenance protecting property curb appeal.",
  },
  {
    icon: Trash2,
    title: "Property Cleanouts",
    description:
      "Complete property cleanouts, unwanted item removal, and debris hauling for transitions, bank properties, and general cleanup.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Honesty",
    description:
      "We practice complete transparency — straightforward pricing, realistic timelines, and no unexpected charges.",
  },
  {
    icon: Clock,
    title: "Dependability",
    description:
      "We show up on schedule, fulfill our commitments, and deliver results consistently across all properties.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain high standards on every project. Every task receives professional-level execution with proven durability.",
  },
];

const regions = [
  "North Texas",
  "Central Texas",
  "East Texas",
  "West Texas",
  "South Texas",
];

export default function AboutPage() {
  const heroImageUrl = "/images/heroes/hero-about.jpg";
  const coverageImageUrl = "/images/about/coverage-bg.jpg";

  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="ONECALL FIELD SERVICES LLC professional team at work"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-navy/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <p className="font-accent text-sm uppercase tracking-[0.14em] text-pearl-300 mb-4">
              Trusted Partner Across Texas
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About ONECALL FIELD SERVICES LLC
            </h1>
            <div className="flex justify-center my-3">
              <div className="h-px w-16 bg-steel/50" />
            </div>
            <p className="font-body text-lg text-pearl-200 max-w-2xl mx-auto">
              Built in Texas. Supporting properties statewide with dependable
              service coordination.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="md" asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="border-white/70 text-white hover:bg-white hover:text-navy"
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <AnimatedSection variant="fadeLeft" className="lg:col-span-7">
              <div>
                <SectionHeading
                  title="Our Purpose"
                  subtitle="Helping property owners and business teams with consistent, professional support and clear communication."
                  align="left"
                  className="mb-6"
                />
                <p className="font-body text-base sm:text-lg text-text-muted mb-4">
                  ONECALL FIELD SERVICES LLC operates as a Texas-based statewide
                  maintenance provider serving property owners, asset managers,
                  institutional partners, and commercial clients. We deliver
                  consistent, affordable, and professional maintenance solutions
                  throughout Texas — designed to safeguard, maintain, and grow
                  property investments.
                </p>
                <p className="font-body text-base sm:text-lg text-text-muted mb-6">
                  Our clients depend on us to handle regular maintenance duties,
                  urgent service needs, transition preparations, asset
                  preservation, and property inspections.
                </p>
                <div className="bg-pearl-100 border-l-4 border-steel rounded-lg p-4 sm:p-6 mb-8">
                  <p className="font-body text-base sm:text-lg text-steel italic font-medium">
                    &quot;We view every property as a valued investment — and we
                    manage it that way.&quot;
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg" asChild>
                    <Link href="/services">View Our Services</Link>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight" className="lg:col-span-5">
              <div className="space-y-6">
                <TeamPhoto />
                <div className="bg-pearl-50 border border-pearl-200 rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold text-navy mb-4">
                    At a Glance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-pearl-200 pb-3">
                      <span className="font-body text-text-muted">
                        Service Coverage
                      </span>
                      <span className="font-accent text-navy font-semibold">
                        Statewide Texas
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-pearl-200 pb-3">
                      <span className="font-body text-text-muted">
                        Core Focus
                      </span>
                      <span className="font-accent text-navy font-semibold">
                        B2B Maintenance
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-text-muted">
                        Workflow
                      </span>
                      <span className="font-accent text-navy font-semibold">
                        Fast Coordination
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-28 bg-pearl-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Our Capabilities"
              subtitle="Comprehensive property support across Texas, including interior, exterior, and cleanout-focused service categories."
              align="center"
              className="mb-12"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <AnimatedSection
                key={category.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div
                  className={`bg-white border border-pearl-200 rounded-2xl p-8 text-center h-full hover:border-steel/40 hover:shadow-card transition-all duration-300 ${index === 1 ? "md:-translate-y-2" : ""}`}
                >
                  <category.icon
                    className="w-12 h-12 text-steel mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-xl font-bold text-navy mb-3">
                    {category.title}
                  </h3>
                  <p className="font-body text-text-muted">
                    {category.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 lg:py-28 bg-pearl-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection variant="fadeLeft">
              <div className="relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden border border-pearl-200 shadow-card">
                <Image
                  src={coverageImageUrl}
                  alt="Texas property maintenance coverage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/55" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="font-accent text-sm uppercase tracking-[0.12em] text-pearl-300 mb-2">
                    Coverage Focus
                  </p>
                  <p className="font-display text-2xl sm:text-3xl text-white font-bold">
                    Statewide Property Support
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight">
              <SectionHeading
                title="Across the Entire Lone Star State"
                subtitle="From major metros to surrounding regions, our team supports properties with consistent statewide execution."
                align="left"
                className="mb-8"
              />

              <div className="flex flex-wrap gap-3 mb-6">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="bg-white border border-pearl-200 rounded-full px-4 py-2 text-center hover:border-steel/40 transition-colors duration-300"
                  >
                    <span className="font-accent text-sm text-navy">
                      {region}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-pearl-200 rounded-xl p-5">
                <p className="font-body text-text-muted">
                  Supporting Dallas, Houston, Austin, San Antonio, and
                  surrounding areas through coordinated teams and reliable
                  vendor networks.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Our Values"
              subtitle="The principles guiding every interaction, timeline, and service outcome."
              align="center"
              className="mb-12"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-pearl-50 border border-pearl-200 rounded-2xl p-6 h-full hover:border-steel/40 hover:shadow-card transition-all duration-300">
                  <value.icon
                    className="w-10 h-10 text-steel mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-display font-semibold text-navy mb-2 text-xl">
                    {value.title}
                  </h3>
                  <p className="font-body text-text-muted">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-28 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center border border-white/15 rounded-2xl p-8 sm:p-10 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Want to Begin?
              </h2>
              <p className="font-body text-lg text-pearl-300 mb-10 max-w-2xl mx-auto">
                Partner with a responsive team that helps keep your properties
                running smoothly with dependable maintenance support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
