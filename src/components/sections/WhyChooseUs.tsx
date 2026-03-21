"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, BarChart, Zap } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "Quick scheduling and efficient communication.",
  },
  {
    icon: Award,
    title: "Reliable Quality",
    description:
      "Work completed with care, consistency, and attention to detail.",
  },
  {
    icon: BarChart,
    title: "Scalable Support",
    description: "Flexible solutions for one property or an entire portfolio.",
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
    <section id="why-us" className="pt-12 pb-20 lg:pb-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Why Choose HomeProX"
            subtitle="Responsive property maintenance backed by dependable service and professional support."
            align="center"
          />
        </AnimatedSection>

        {/* Feature Cards Grid — 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection
                key={feature.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-white border border-surface-200 rounded-xl p-6 h-full shadow-card hover:border-orange/40 hover:shadow-card-hover transition-all duration-300">
                  <Icon
                    className="w-10 h-10 text-orange mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-text-body">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Stats Row */}
        <AnimatedSection variant="fadeUp" delay={0.5}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-8 border-t border-surface-200">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.value}>
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-text-muted text-sm">
                    {stat.label}
                  </div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-surface-300" />
                )}
              </React.Fragment>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
