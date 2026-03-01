"use client";

import React from "react";
import { Camera, ShieldCheck, Megaphone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Detailed Documentation",
    description: "Every project includes comprehensive before and after photos, detailed reports, and complete documentation for your records."
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Team Screening",
    description: "All team members and vendors undergo thorough screening and background checks to ensure the highest standards."
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Proactive Communication",
    description: "We keep you informed at every step with regular updates, progress reports, and immediate notification of any issues."
  }
];

export function QualityProcess() {
  return (
    <section className="py-20 lg:py-28 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Quality Assurance Process"
            subtitle="Our commitment to excellence in every project"
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t border-gold/30" />

          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              variant="fadeUp"
              delay={index * 0.2}
            >
              <div className="relative bg-navy-950 border border-navy-700 rounded-xl p-8 text-center">
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-navy-950 font-display text-2xl font-bold mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <step.icon className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true" />

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-muted">
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
