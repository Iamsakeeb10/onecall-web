import { ClientImage } from "@/components/cards/ClientImage";
import { ClientTypeCard } from "@/components/cards/ClientTypeCard";
import ClientOnboardingForm from "@/components/forms/ClientOnboardingForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/lib/data/clients";
import { generatePageMetadata } from "@/lib/metadata";
import {
  CheckCircle2,
  MessageSquareText,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Clients | ONECALL FIELD SERVICES LLC",
  description:
    "Learn how we support client teams with dependable property service delivery and transparent coordination across Texas.",
  path: "/clients",
});

const QUALITY_STEPS = [
  {
    number: "01",
    title: "Detailed Documentation",
    description:
      "Before, progress, and completion updates keep every stakeholder aligned with full work-order visibility.",
  },
  {
    number: "02",
    title: "Vendor & Team Screening",
    description:
      "Only approved, qualified teams are deployed so quality and professionalism stay consistent across properties.",
  },
  {
    number: "03",
    title: "Proactive Communication",
    description:
      "Clear scheduling, status updates, and completion confirmations reduce delays and support confident planning.",
  },
] as const;

const CLIENT_BENEFITS = [
  {
    icon: Zap,
    title: "Reliability",
    description:
      "Responsive execution and dependable delivery across recurring and urgent work orders.",
  },
  {
    icon: Wrench,
    title: "Quality Workmanship",
    description:
      "Professional standards and detailed QA checks ensure clean, lasting outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable Solutions",
    description:
      "Service programs scale from single assets to large statewide portfolios.",
  },
  {
    icon: MessageSquareText,
    title: "Professional Communication",
    description:
      "Consistent status reporting, clear documentation, and transparent coordination.",
  },
] as const;

const ONBOARDING_STRIP_ITEMS = [
  "Reliable Vendor Network",
  "Fast Response Times",
  "Work Order Transparency",
  "Photo Documentation",
  "Scalable Property Maintenance Solutions",
] as const;

export default function ClientsPage() {
  const heroImageUrl = "/images/heroes/hero-clients-2.jpg";

  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Property management professionals"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-navy/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Clients
          </h1>
          <div className="flex justify-center my-3">
            <div className="h-px w-16 bg-steel/50" />
          </div>
          <p className="font-body text-lg text-pearl-200 max-w-2xl mx-auto">
            Trusted Property Support Partner Across Texas
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant="fadeLeft">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
                  Built for Long-Term Partnerships
                </h2>
                <p className="font-body text-lg text-text-muted mb-4">
                  ONECALL FIELD SERVICES LLC supports organizations that need
                  consistency, speed, and accountability across property
                  maintenance operations. We partner with teams that manage
                  performance at scale and require dependable execution across
                  Texas.
                </p>
                <p className="font-body text-lg text-text-muted">
                  From ongoing preventive work to fast-turn service requests,
                  our delivery model focuses on quality control, transparent
                  communication, and measurable outcomes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight">
              <div className="bg-pearl-100 border border-pearl-200 rounded-xl p-8">
                <h3 className="font-display text-2xl font-bold text-navy mb-6">
                  By The Numbers
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-display font-bold text-steel mb-2">
                      500+
                    </div>
                    <div className="font-body text-sm text-text-muted">
                      Properties Maintained
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-steel mb-2">
                      Texas
                    </div>
                    <div className="font-body text-sm text-text-muted">
                      Statewide Coverage
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-steel mb-2">
                      100%
                    </div>
                    <div className="font-body text-sm text-text-muted">
                      Fully Insured
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-steel mb-2">
                      10+
                    </div>
                    <div className="font-body text-sm text-text-muted">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-pearl-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Client Segments We Serve"
              subtitle="Every client segment receives tailored workflows, clear reporting, and dependable service execution."
              align="center"
            />
          </AnimatedSection>

          <div className="mt-12 space-y-12">
            {clients.map((client, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={client.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
                >
                  <AnimatedSection
                    variant={isEven ? "fadeLeft" : "fadeRight"}
                    className={isEven ? "order-1" : "order-1 lg:order-2"}
                  >
                    <div className="bg-white border border-pearl-200 rounded-xl shadow-card p-6 lg:p-8 h-full">
                      <ClientTypeCard client={client} variant="full" />
                    </div>
                  </AnimatedSection>

                  <AnimatedSection
                    variant={isEven ? "fadeRight" : "fadeLeft"}
                    className={isEven ? "order-2" : "order-2 lg:order-1"}
                  >
                    <ClientImage client={client} />
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Why Clients Choose ONECALL FIELD SERVICES LLC"
              subtitle="A delivery model focused on reliability, consistent workmanship, and professional coordination."
              align="center"
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <AnimatedSection
                  key={benefit.title}
                  variant="fadeUp"
                  delay={index * 0.1}
                >
                  <div className="bg-pearl-50 border border-pearl-200 rounded-xl shadow-card p-6 h-full hover:border-steel/40 hover:shadow-card-hover transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-steel-muted flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-steel" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-pearl-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Quality Assurance Process"
              subtitle="A clear three-step framework that protects assets and keeps stakeholders informed."
              align="center"
            />
          </AnimatedSection>

          <div className="relative mt-12">
            <div
              className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-pearl-300"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {QUALITY_STEPS.map((step, index) => (
                <AnimatedSection
                  key={step.number}
                  variant="fadeUp"
                  delay={index * 0.1}
                >
                  <div className="relative bg-white border border-pearl-200 rounded-xl shadow-card p-6 lg:p-8 h-full">
                    <div className="w-14 h-14 rounded-full bg-steel text-white font-display text-lg font-bold flex items-center justify-center mb-4 relative z-10">
                      {step.number}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white border-t border-pearl-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                Ready to Partner?
              </h2>
              <p className="font-body text-lg text-text-muted mb-8">
                Connect with our team to start a reliable, transparent
                maintenance program built for your portfolio goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                <a
                  href="tel:1234567890"
                  className="font-body text-navy hover:text-steel transition-colors duration-300"
                >
                  123-456-7890
                </a>
                <a
                  href="mailto:info@onecallfield.com"
                  className="font-body text-navy hover:text-steel transition-colors duration-300"
                >
                  info@onecallfield.com
                </a>
              </div>
              <Button asChild size="lg">
                <Link href="#client-onboarding">Get Started</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-navy py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {ONBOARDING_STRIP_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2
                  className="w-5 h-5 text-steel"
                  aria-hidden="true"
                />
                <span className="font-body text-sm text-white font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section
        id="client-onboarding"
        className="py-20 lg:py-28 bg-pearl-50 scroll-mt-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <SectionHeading
              title="Become a ONECALL FIELD SERVICES LLC Client"
              subtitle="Tell us about your portfolio and service goals, and our team will follow up with a tailored onboarding path."
              align="center"
            />
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.1}>
            <div className="mt-10 bg-white border border-pearl-200 rounded-2xl shadow-card p-6 sm:p-8 lg:p-10">
              <ClientOnboardingForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
