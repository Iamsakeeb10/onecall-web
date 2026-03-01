"use client";

import React from "react";
import { Clock, Award, BarChart, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: Clock,
    title: "Reliability",
    description: "We respond quickly, meet deadlines, and keep projects moving forward. Your properties are our priority."
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "Every service completed with attention to detail and professional standards that exceed expectations."
  },
  {
    icon: BarChart,
    title: "Scalable Solutions",
    description: "One-time repairs or ongoing contracts, tailored to your needs. We scale with your portfolio."
  },
  {
    icon: MessageSquare,
    title: "Professional Communication",
    description: "Clear updates before, during, and after every project. You always know what's happening and when."
  }
];

const stats = [
  { value: "10+ Years", label: "Experience" },
  { value: "500+ Properties", label: "Maintained" },
  { value: "Statewide", label: "Coverage" },
  { value: "Fully Insured", label: "Protection" }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Why Choose MEGAFIXX"
            subtitle="Built on reliability, quality, and long-term partnerships"
            align="center"
          />
        </AnimatedSection>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              variant="fadeUp"
              delay={index * 0.1}
            >
              <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 h-full">
                <feature.icon className="w-10 h-10 text-gold mb-4" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Row */}
        <AnimatedSection variant="fadeUp" delay={0.5}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-8 border-t border-navy-700">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.value}>
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-muted text-sm">
                    {stat.label}
                  </div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-navy-700" />
                )}
              </React.Fragment>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
