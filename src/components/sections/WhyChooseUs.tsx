"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, BarChart, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "Swift scheduling and transparent communication throughout every project engagement.",
  },
  {
    icon: Award,
    title: "Superior Workmanship",
    description:
      "Expert execution with meticulous attention to detail and guaranteed lasting value.",
  },
  {
    icon: BarChart,
    title: "Scalable Services",
    description:
      "Flexible solutions available for individual properties through large-scale portfolios.",
  },
];

const stats = [
  { value: "10+ Years", label: "Experience" },
  { value: "500+ Properties", label: "Maintained" },
  { value: "Statewide", label: "Coverage" },
  { value: "Fully Insured", label: "Protection" },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-pearl-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Dependable service delivery with responsive communication, consistent quality, and professional care."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection
                key={feature.title}
                variant="fadeUp"
                delay={index * 0.15}
              >
                <div className="bg-white border border-pearl-200 rounded-xl shadow-card p-6 lg:p-8 h-full hover:border-steel/40 hover:shadow-card-hover transition-all duration-300 group">
                  <div className="w-12 h-12 bg-steel-muted rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-steel" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-text-muted">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection variant="fadeUp" delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 md:pt-12 border-t border-pearl-200">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-display text-2xl md:text-4xl font-bold text-steel mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-text-muted text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
