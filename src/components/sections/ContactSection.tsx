"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: "123-456-7890",
      href: "tel:1234567890",
      color: "text-blue-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@onecallfield.com",
      href: "mailto:info@onecallfield.com",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Serving Texas Statewide",
      href: null,
      color: "text-orange-500"
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Available 7 days a week",
      href: null,
      color: "text-purple-500"
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-pearl-50">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 60%)"
      }} aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="relative h-full bg-white border border-pearl-200 rounded-2xl shadow-card p-5 sm:p-6 hover:border-steel/40 hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1 flex flex-col">
                    {/* Icon with colored background */}
                    <div className="w-10 h-10 rounded-lg bg-steel-muted flex items-center justify-center mb-3 group-hover:bg-steel/20 transition-colors duration-300">
                      <Icon className="text-steel w-5 h-5" aria-hidden="true" />
                    </div>
                    
                    {/* Label */}
                    <div className="font-body text-xs text-text-muted uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    
                    {/* Value */}
                    <div className="font-body font-semibold text-navy break-words flex-grow">
                      {item.value}
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="block h-full hover:opacity-100 transition-opacity duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index} className="h-full">
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Right: Main CTA Card */}
            <AnimatedSection variant="fadeRight" delay={0.2}>
              <div className="bg-white border-2 border-steel/30 rounded-2xl shadow-card p-8 sm:p-10 h-full flex flex-col justify-between hover:shadow-card-hover transition-all duration-300">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                    Tell Us About Your Property Maintenance Requirements
                  </h2>
                  <p className="font-body text-text-muted mb-8 text-base">
                    Contact our team with questions, project details, or collaboration ideas. We respond quickly and adapt to your schedule.
                  </p>
                </div>

                <Button variant="primary" size="lg" className="w-full" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
