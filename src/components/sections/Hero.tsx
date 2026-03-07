"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HERO_ILLUSTRATION_URL = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-bg">
      {/* Texture overlay */}
      <div className="hero-texture absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Teal top-left glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(46,204,143,0.06)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col items-start text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-hero-text leading-tight mb-6">
              Professional Property
              <br />
              Maintenance has never
              <br />
              been so{" "}
              <span className="relative inline-block text-teal">
                Simple
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-teal rounded-full" />
              </span>
            </h1>

            <p className="font-body text-lg text-hero-muted mb-10 max-w-md leading-relaxed mx-auto lg:mx-0">
              We are a team of talented professionals supporting your residential and commercial property management across Texas.
            </p>

            <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="bg-teal text-white px-8 py-3 rounded-full font-accent font-medium text-base hover:bg-teal-dark hover:scale-105 transition-all duration-300 shadow-md"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="bg-teal text-white px-8 py-3 rounded-full font-accent font-medium text-base hover:bg-teal-dark hover:scale-105 transition-all duration-300 shadow-md"
              >
                View Our Services
              </Link>
              <Link
                href="/about"
                className="bg-teal text-white px-8 py-3 rounded-full font-accent font-medium text-base hover:bg-teal-dark hover:scale-105 transition-all duration-300 shadow-md"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative drop-shadow-2xl">
              {!imgError ? (
                <Image
                  src={HERO_ILLUSTRATION_URL}
                  alt="Property maintenance illustration"
                  width={560}
                  height={560}
                  className="object-contain w-full max-w-[520px] xl:max-w-[580px] animate-float"
                  priority
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full max-w-[520px] aspect-square bg-hero-bg-dark rounded-2xl flex items-center justify-center border border-white/10">
                  <span className="font-body text-hero-muted text-sm">Property Maintenance</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave — transitions into white section below */}
      <div className="absolute bottom-0 left-0 right-0 leading-none z-10" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 md:h-24"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
