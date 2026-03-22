"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Droplets,
  Home,
  Leaf,
  Paintbrush,
  Sparkles,
  Trash2,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Icon mapping for service cards
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Droplets,
  Paintbrush,
  Sparkles,
  Leaf,
  Home,
  Trash2,
};

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-3 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)"
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              title="Service Offerings"
              subtitle="Specialized maintenance solutions tailored to address comprehensive property requirements across Texas"
              align="left"
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-steel font-medium text-sm hover:gap-2 transition-all duration-300 whitespace-nowrap"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Services Grid — Vertical Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            const [imgError, setImgError] = React.useState(false);

            return (
              <motion.div
                key={service.id}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
                }
                whileInView={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                {/* Vertical Card: Image Top + Content Bottom */}
                <div className="bg-white border border-pearl-200 rounded-2xl overflow-hidden flex flex-col h-full shadow-card hover:border-steel/40 hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1">
                  {/* Image: Full width on top */}
                  <div className="relative w-full h-40 flex-shrink-0 bg-pearl-100">
                    {!imgError ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-pearl-200 flex items-center justify-center">
                        <IconComponent
                          className="w-10 h-10 text-steel/40"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content: Bottom section */}
                  <div className="flex flex-col justify-between p-4 sm:p-5 flex-grow">
                    {/* Icon Badge + Title Row */}
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-steel-muted flex items-center justify-center mb-3">
                        <IconComponent
                          className="w-4 h-4 text-steel"
                          aria-hidden="true"
                        />
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-display text-lg font-bold text-navy mb-2 line-clamp-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-body text-text-muted text-sm mb-3 line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-1.5 mb-4 flex-grow">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle
                            className="w-3.5 h-3.5 text-steel mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="font-body text-text-muted text-xs line-clamp-1">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-1 font-accent text-steel hover:text-steel-dark font-medium hover:underline transition-colors duration-300 text-sm group/link focus:outline-none focus:ring-2 focus:ring-steel focus:ring-offset-2 focus:ring-offset-white rounded"
                    >
                      Learn More
                      <ArrowRight
                        className="w-3.5 h-3.5 text-steel transition-transform duration-300 group-hover/link:translate-x-1"
                        aria-hidden="true"
                      />
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
