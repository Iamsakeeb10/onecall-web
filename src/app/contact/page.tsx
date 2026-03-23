import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | ONECALL FIELD SERVICES LLC",
  description:
    "Contact our team for service questions, partnership inquiries, and property support requests across Texas.",
  path: "/contact",
});

const CONTACT_HERO_IMAGE = "/images/about/team-photo.jpg";

const TRUST_ITEMS = [
  "Professional Service Coordination",
  "Responsive Turnaround",
  "Residential & Commercial Support",
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero — same overlay and font styles as Services, About */}
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={CONTACT_HERO_IMAGE}
            alt="Contact ONECALL FIELD SERVICES LLC"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-navy/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Our Team
          </h1>
          <div className="flex justify-center my-3">
            <div className="h-px w-16 bg-steel/50" />
          </div>
          <p className="font-body text-lg text-pearl-200 max-w-2xl mx-auto">
            Have questions about services, timelines, or partnership options?
            Reach out and we&apos;ll help you plan the next step.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Contact Layout - Information + Form */}
      <section className="py-20 lg:py-28 bg-pearl-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection variant="fadeLeft">
                <div className="bg-white rounded-2xl p-8 border border-pearl-200 shadow-card">
                  <h2 className="font-display text-2xl font-bold text-navy mb-5">
                    Direct Contact
                  </h2>
                  <div className="space-y-5">
                    <a
                      href="tel:1234567890"
                      className="flex items-start gap-3 font-body text-navy hover:text-steel transition-colors"
                    >
                      <Phone
                        className="w-5 h-5 text-steel mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block font-accent text-sm text-text-muted uppercase tracking-wide">
                          Phone
                        </span>
                        <span className="text-base font-medium">
                          123-456-7890
                        </span>
                      </span>
                    </a>

                    <a
                      href="mailto:info@onecallfield.com"
                      className="flex items-start gap-3 font-body text-navy hover:text-steel transition-colors"
                    >
                      <Mail
                        className="w-5 h-5 text-steel mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block font-accent text-sm text-text-muted uppercase tracking-wide">
                          Email
                        </span>
                        <span className="text-base font-medium">
                          info@onecallfield.com
                        </span>
                      </span>
                    </a>

                    <div className="flex items-start gap-3 font-body text-navy">
                      <MapPin
                        className="w-5 h-5 text-steel mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block font-accent text-sm text-text-muted uppercase tracking-wide">
                          Service Area
                        </span>
                        <span className="text-base font-medium">
                          Texas, Statewide Coverage
                        </span>
                      </span>
                    </div>

                    <div className="flex items-start gap-3 font-body text-navy">
                      <Clock
                        className="w-5 h-5 text-steel mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block font-accent text-sm text-text-muted uppercase tracking-wide">
                          Business Hours
                        </span>
                        <span className="text-base font-medium">
                          Mon–Fri: 8am–6pm
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeLeft" delay={0.08}>
                <div className="bg-navy rounded-2xl p-7 border border-white/10">
                  <p className="font-accent text-xs uppercase tracking-[0.15em] text-pearl-300 mb-3">
                    Need a detailed estimate?
                  </p>
                  <h3 className="font-display text-xl font-bold text-white mb-4">
                    Request a project quote
                  </h3>
                  <p className="font-body text-pearl-300 text-sm mb-6">
                    For scope-based pricing and service breakdowns, use our
                    dedicated quote workflow.
                  </p>
                  <Button asChild size="sm" className="w-full sm:w-auto">
                    <Link href="/quote">Go to Quote Page</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection variant="fadeRight">
                <div className="bg-white rounded-2xl p-8 sm:p-10 md:p-12 border border-pearl-200 shadow-card">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2">
                    Send us a Message
                  </h2>
                  <p className="font-body text-text-muted mb-8 max-w-2xl">
                    Share your questions and our team will get back to you
                    shortly with next steps.
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Strip */}
      <section className="py-12 bg-pearl-50 border-t border-pearl-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {TRUST_ITEMS.map((label, index) => (
              <AnimatedSection
                key={label}
                variant="fadeUp"
                delay={index * 0.05}
              >
                <div className="flex flex-col items-center gap-2">
                  <CheckCircle2
                    className="text-steel"
                    size={24}
                    aria-hidden="true"
                  />
                  <span className="font-body font-medium text-navy text-sm">
                    {label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="py-12 bg-navy">
        <AnimatedSection variant="fadeUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-body text-pearl-300 mb-1 text-sm uppercase tracking-wider font-accent">
              Prefer to talk?
            </p>
            <a
              href="tel:+11234567890"
              className="font-display text-2xl sm:text-3xl font-bold text-white hover:text-steel transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <Phone className="text-steel" size={28} aria-hidden="true" />
              123-456-7890
            </a>
            <p className="font-body text-pearl-300 mt-2 text-sm">
              Monday – Friday: 8:00 AM – 6:00 PM &nbsp;·&nbsp; Saturday: closed
              &nbsp;·&nbsp; Sunday: Closed
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
