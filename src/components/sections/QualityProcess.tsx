"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Bell, Camera, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Complete Documentation",
    description:
      "Full photo and video documentation from beginning to end—initial assessment, progress tracking, and final verification—ensuring total transparency and complete accountability.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Verified Team Members",
    description:
      "Comprehensive screening procedures and certification validation guaranteeing only the most reliable, experienced professionals deliver ONECALL FIELD SERVICES LLC services on your properties.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Proactive Communication",
    description:
      "Regular touchpoints and status updates preceding, occurring during, and following all services—keeping you fully informed at every stage.",
  },
];

export function QualityProcess() {
  return (
    <section className="py-24 lg:py-32 bg-pearl-50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-4 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 70%)"
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Our Quality Assurance Process"
            subtitle="Three-stage approach designed to maintain peak standards on every property throughout Texas by ONECALL FIELD SERVICES LLC."
            align="center"
          />
        </AnimatedSection>

        {/* Process Steps with Varied Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mt-12">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-steel/30 via-steel/60 to-steel/30" />

          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              variant={index === 0 ? "fadeLeft" : index === 1 ? "fadeUp" : "fadeRight"}
              delay={index * 0.2}
              className="h-full"
            >
              <div className={`relative rounded-2xl p-6 lg:p-7 text-center h-full flex flex-col hover:shadow-card transition-all duration-300 group ${
                index === 1 
                  ? 'bg-white border border-steel/30 shadow-md' 
                  : 'bg-white border border-pearl-200'
              }`}>
                {/* Step Number Badge */}
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className={`absolute inset-0 rounded-full ${
                    index === 1 
                      ? 'bg-steel/20' 
                      : 'bg-steel/10'
                  } group-hover:bg-steel/25 transition-colors duration-300`} />
                  <div className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center font-display text-xl font-bold ${
                    index === 1
                      ? 'bg-white border-steel text-steel shadow-md'
                      : 'bg-pearl-50 border-steel/20 text-steel/60'
                  }`}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <step.icon
                  className={`w-10 h-10 mx-auto mb-4 transition-colors duration-300 ${
                    index === 1 ? 'text-steel' : 'text-steel/50 group-hover:text-steel'
                  }`}
                  aria-hidden="true"
                />

                {/* Title */}
                <h3 className={`font-display text-xl font-bold mb-3 transition-colors duration-300 ${
                  index === 1 ? 'text-navy' : 'text-navy/80'
                }`}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`font-body flex-grow transition-colors duration-300 ${
                  index === 1 ? 'text-text-muted' : 'text-text-muted/70'
                }`}>
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
