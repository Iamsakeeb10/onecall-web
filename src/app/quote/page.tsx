import { QuoteForm } from "@/components/forms/QuoteForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Tag } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Get a Quote | ONECALL FIELD SERVICES LLC",
  description:
    "Request a service quote and receive a clear, timely response from our property support team.",
  path: "/quote",
});

export default function QuotePage() {
  const heroImageUrl = "/images/heroes/hero-quote.jpg";

  return (
    <>
      {/* Page Hero — overlay and font styles */}
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Get a quote from ONECALL FIELD SERVICES LLC"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-navy/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get a Quote
          </h1>
          <p className="font-body text-lg text-pearl-200 max-w-2xl mx-auto">
            Tell us what you need and we&apos;ll follow up quickly with clear
            next steps.
          </p>
        </div>
      </section>

      {/* Split Layout: Quote Form (Full Width) + Floating Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <AnimatedSection variant="fadeRight">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-3">
                  Request Your Quote
                </h2>
                <p className="font-body text-base sm:text-lg text-text-muted mb-10">
                  Tell us about your property needs and we&apos;ll provide a
                  customized quote with clear scope details and transparent
                  pricing.
                </p>
                <QuoteForm />
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <AnimatedSection variant="fadeLeft">
                <div className="bg-pearl-50 rounded-2xl p-6 sm:p-7 border border-pearl-200 lg:sticky lg:top-28">
                  <h3 className="font-display text-xl font-bold text-navy mb-5">
                    Before You Submit
                  </h3>
                  <div className="space-y-4 mb-6">
                    {[
                      "Property type and location",
                      "Primary service need",
                      "Preferred timeline",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 text-steel mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="font-body text-sm text-navy">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-pearl-200 pt-5 space-y-3">
                    <a
                      href="tel:1234567890"
                      className="flex items-center gap-3 font-body text-navy hover:text-steel transition-colors duration-300"
                    >
                      <Phone
                        className="w-5 h-5 text-steel flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium">123-456-7890</span>
                    </a>
                    <a
                      href="mailto:info@onecallfield.com"
                      className="flex items-center gap-3 font-body text-navy hover:text-steel transition-colors duration-300"
                    >
                      <Mail
                        className="w-5 h-5 text-steel flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium">
                        info@onecallfield.com
                      </span>
                    </a>
                    <div className="flex items-start gap-3 font-body text-text-muted">
                      <MapPin
                        className="w-5 h-5 text-steel flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm">
                        Serving all of Texas · Mon–Fri: 8am–6pm
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Info Cards - Process */}
      <section className="py-20 lg:py-28 bg-pearl-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-navy mb-12 text-center">
            What Happens Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "1. Quick Review",
                description:
                  "Our team reviews your request and confirms service details.",
              },
              {
                icon: Tag,
                title: "2. Scope & Pricing",
                description:
                  "We prepare a clear service scope with transparent pricing.",
              },
              {
                icon: CheckCircle2,
                title: "3. Confirmation",
                description:
                  "You receive next steps to schedule and move forward.",
              },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <AnimatedSection
                  key={card.title}
                  variant="fadeUp"
                  delay={index * 0.1}
                >
                  <div className="bg-white rounded-2xl p-8 border border-pearl-200 text-center hover:border-steel/40 hover:shadow-card transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-steel/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-steel" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy mb-2">
                      {card.title}
                    </h3>
                    <p className="font-body text-text-muted">
                      {card.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
