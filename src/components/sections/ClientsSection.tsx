"use client";

import { ClientTypeCard } from "@/components/cards/ClientTypeCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/lib/data/clients";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ClientsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="clients" className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Who We Serve"
            subtitle="Trusted by property professionals across Texas"
            align="center"
          />
        </AnimatedSection>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ClientTypeCard client={client} variant="compact" />
            </motion.div>
          ))}
        </div>

        {/* Learn More Link */}
        <AnimatedSection variant="fadeUp" delay={0.5}>
          <div className="text-center">
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 font-accent text-orange hover:text-orange-dark hover:underline transition-colors duration-300 text-lg"
            >
              Learn More About Our Clients
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
