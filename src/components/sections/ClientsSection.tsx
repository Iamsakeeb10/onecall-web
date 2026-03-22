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
    <section id="clients" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-3 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)"
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              title="Client Expertise Areas"
              subtitle="Custom solutions for asset managers, banks, brokers, and investment organizations"
              align="left"
            />
            <Link
              href="/clients"
              className="inline-flex items-center gap-1 text-steel font-medium text-sm hover:gap-2 transition-all duration-300 whitespace-nowrap"
            >
              Our Clients
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Client Types Grid with alternating stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
              }
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="group h-full">
                <ClientTypeCard client={client} variant="compact" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary CTA Section */}
        <AnimatedSection variant="fadeUp" delay={0.4} className="mt-12">
          <div className="bg-pearl-50 border border-pearl-200 rounded-2xl p-6 sm:p-8 text-center">
            <p className="font-body text-text-muted mb-4">
              Looking to partner with a trusted field services provider?
            </p>
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-steel text-white rounded-lg font-medium hover:bg-steel-dark transition-colors duration-300"
            >
              Learn More About Partnership
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
