"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Droplets,
  Home,
  Leaf,
  Paintbrush,
  Sparkles,
  Trash2,
  Wrench
} from "lucide-react";

// Icon mapping for service cards
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Droplets,
  Paintbrush,
  Sparkles,
  Leaf,
  Home,
  Trash2
};

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              title="Service Offerings"
              subtitle="Specialized maintenance solutions tailored to address comprehensive property requirements across Texas"
              align="left"
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-teal font-medium text-sm hover:gap-2 transition-all duration-300 whitespace-nowrap"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Services Grid — Row-Based Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            const [imgError, setImgError] = React.useState(false);

            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                {/* Horizontal Card: Image Left + Content Right */}
                <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row h-full shadow-card hover:border-teal/40 hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1">
                  {/* Image: 40% on desktop, full width on mobile */}
                  <div className="relative w-full sm:w-2/5 h-48 sm:h-auto sm:min-h-[240px] flex-shrink-0">
                    {!imgError ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-surface-200 flex items-center justify-center">
                        <IconComponent className="w-12 h-12 text-teal" aria-hidden="true" />
                      </div>
                    )}
                  </div>

                  {/* Content: 60% on desktop, full width on mobile */}
                  <div className="flex flex-col justify-between p-4 sm:p-5 w-full sm:w-3/5">
                    {/* Icon Badge */}
                    <div className="w-8 h-8 rounded-lg bg-teal-muted flex items-center justify-center mb-2">
                      <IconComponent className="w-4 h-4 text-teal" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-base sm:text-lg font-bold text-charcoal mb-2 line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Description (truncated) */}
                    <p className="font-body text-text-muted text-sm mb-3 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features List (2 items only for compact view) */}
                    <ul className="space-y-1.5 mb-3 flex-grow">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-teal mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span className="font-body text-text-muted text-xs line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-1 font-accent text-teal hover:text-teal-dark font-medium hover:underline transition-colors duration-300 text-sm group/link focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-white rounded"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 text-teal transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
