"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, BarChart, Zap } from "lucide-react";
import React from "react";

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
    <section id="why-us" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Diagonal accent overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(-45deg, #2563EB 0, #2563EB 1px, transparent 0, transparent 40%)",
        backgroundSize: "60px 60px"
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Why Partner With ONECALL FIELD SERVICES LLC"
            subtitle="Industry-leading field services with responsive team members, demonstrated quality outcomes, and complete professionalism."
            align="center"
            className="titleClassName text-white"
          />
        </AnimatedSection>

        {/* Feature Cards Grid — Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            if (index > 1) return null;
            return (
              <AnimatedSection
                key={feature.title}
                variant={index === 0 ? "fadeLeft" : "fadeRight"}
                delay={index * 0.15}
              >
                <div className="bg-white/8 border border-white/15 rounded-2xl p-6 lg:p-8 h-full hover:bg-white/12 hover:border-steel/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-steel/25 rounded-lg flex items-center justify-center mb-5 group-hover:bg-steel/35 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-steel" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-pearl-200">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
          
          {/* Right-aligned single feature card */}
          {features.length > 2 && (() => {
            const ThirdIcon = features[2].icon;
            return (
              <AnimatedSection
                variant="fadeUp"
                delay={0.3}
                className="md:col-span-2 lg:col-span-1 lg:col-start-2"
              >
                <div className="bg-white/8 border border-white/15 rounded-2xl p-6 lg:p-8 h-full hover:bg-white/12 hover:border-steel/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-steel/25 rounded-lg flex items-center justify-center mb-5 group-hover:bg-steel/35 transition-colors duration-300">
                    <ThirdIcon className="w-6 h-6 text-steel" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {features[2].title}
                  </h3>
                  <p className="font-body text-pearl-200">
                    {features[2].description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })()}
        </div>

        {/* Stats Row with Enhanced Design */}
        <AnimatedSection variant="fadeUp" delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 md:pt-12 border-t border-white/15">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.value}>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="font-display text-2xl md:text-4xl font-bold text-steel mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="font-body text-pearl-300 text-xs md:text-sm">
                    {stat.label}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
