"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 text-muted">
                <a
                  href="tel:4693789262"
                  className="flex items-center gap-2 font-body hover:text-gold transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-gold" aria-hidden="true" />
                  (469) 378-9262
                </a>
                <a
                  href="mailto:info@megafixxhomeservices.com"
                  className="flex items-center gap-2 font-body hover:text-gold transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-gold" aria-hidden="true" />
                  info@megafixxhomeservices.com
                </a>
              </div>
            </div>

            {/* Right CTA */}
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
