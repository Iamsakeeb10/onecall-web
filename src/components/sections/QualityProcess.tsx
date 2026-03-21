"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Bell, Camera, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Comprehensive Documentation",
    description: "Complete visual records from start to finish—before shots, progress photos, and final results—ensuring complete transparency and accountability."
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Professional Team Vetting",
    description: "Rigorous background checks and credential verification guaranteeing only trusted, qualified professionals represent HomeProX on client properties."
  },
  {
    number: "03",
    icon: Bell,
    title: "Continuous Engagement",
    description: "Proactive updates and communication before, during, and after each service—stakeholders stay informed at every milestone."
  }
];

export function QualityProcess() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Our Commitment to Excellence"
            subtitle="Three-step process designed to maintain the highest standards across every Texas project."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t border-surface-200" />

          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              variant="fadeUp"
              delay={index * 0.2}
              className="h-full"
            >
              <div className="relative bg-surface-50 border border-surface-200 rounded-xl p-8 text-center h-full flex flex-col hover:border-teal/30 hover:shadow-card transition-all duration-300">
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-charcoal text-white font-display text-2xl font-bold mb-6 ring-2 ring-charcoal/20 shadow-md">
                  {step.number}
                </div>

                {/* Icon */}
                <step.icon className="w-10 h-10 text-teal mx-auto mb-4" aria-hidden="true" />

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-text-muted flex-grow">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
