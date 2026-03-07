"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface CTABannerProps {
  variant?: "dark" | "gold";
}

export function CTABanner({ variant = "dark" }: CTABannerProps) {
  const [imgError, setImgError] = useState(false);
  const backgroundImageUrl = "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1920&q=80";

  if (variant === "gold") {
    return (
      <section className="py-20 lg:py-28 bg-gradient-to-r from-gold to-gold-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Looking for a Trusted Maintenance Partner?
              </h2>
              <p className="font-body text-lg text-stone-900/80 mb-8 max-w-2xl mx-auto">
                MEGAFIXX Home Services LLC is ready to serve your properties across Texas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  // Dark variant (default)
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <Image
            src={backgroundImageUrl}
            alt="Professional property maintenance services Texas"
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-cream-50" />
        )}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-cream-50/85 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
                Ready to Protect Your Properties?
              </h2>
              <p className="font-body text-lg text-muted max-w-2xl">
                Partner with Texas&apos;s trusted property maintenance team.
              </p>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:4693789262">Call Now: (469) 378-9262</a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
