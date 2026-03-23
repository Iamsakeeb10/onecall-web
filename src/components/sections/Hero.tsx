"use client";

import { easeInOut, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ─── Trust Items ────────────────────────────────────────── */
const TRUST = [
  { icon: ShieldCheck, label: "Licensed & Insured Professionals" },
  { icon: MapPin, label: "Statewide Service Areas" },
  { icon: Clock, label: "Responsive Scheduling" },
];

const HERO_IMAGE = "/images/heroes/hero-services.jpg";

/* ─── Animation helpers ──────────────────────────────────── */
const fadeUp = (delay = 0, skipDelay: boolean | null = false) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeInOut,
      delay: skipDelay ? 0 : delay,
    },
  },
});

/* ═══════════════════════════════════════════════════════════ */
export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Professional property maintenance services"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-navy/60" aria-hidden="true" />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 hero-texture opacity-25"
        aria-hidden="true"
      />

      <div className="relative z-20 flex-1 flex items-center pt-28 sm:pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={reduced ? {} : { opacity: 0, scale: 0.96 }}
              animate={reduced ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-steel/45 bg-steel/20 px-4 py-1.5 text-xs font-accent font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-steel ${reduced ? "" : "animate-pulse"}`}
                  aria-hidden="true"
                />
                Trusted Property Support Across Texas
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.12, reduced)}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.04]"
            >
              Reliable Property Services for Every Portfolio
            </motion.h1>

            <motion.p
              variants={fadeUp(0.2, reduced)}
              initial="hidden"
              animate="visible"
              className="mt-5 text-base sm:text-lg text-pearl-200 max-w-2xl leading-relaxed"
            >
              Streamlined maintenance and field support for residential and
              commercial properties with one accountable statewide team.
            </motion.p>

            <motion.div
              variants={fadeUp(0.28, reduced)}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2 rounded-full bg-steel px-8 py-3 text-sm sm:text-base font-accent font-semibold text-white transition-all duration-300 hover:bg-steel-dark hover:-translate-y-0.5 hover:shadow-steel-glow"
              >
                Request a Service Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-pearl-300/55 bg-white/10 px-8 py-3 text-sm sm:text-base font-accent font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-pearl-200"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp(0.34, reduced)}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {TRUST.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-pearl-200"
                >
                  <Icon
                    className="w-3.5 h-3.5 text-steel shrink-0"
                    aria-hidden="true"
                  />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={reduced ? {} : { opacity: 0 }}
        animate={reduced ? {} : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-20 border-t border-white/15 py-4 bg-navy/65 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm">
            <span className="font-accent font-semibold uppercase tracking-[0.14em] text-white">
              OneCall Field Services
            </span>

            {[
              { sep: true, text: "Licensed & Insured Team" },
              { sep: true, text: "Statewide Service Coordination" },
              { sep: false, text: "Residential · Commercial · Multi-Site" },
            ].map(({ sep, text }) => (
              <span key={text} className="flex items-center gap-x-8">
                {sep && (
                  <span
                    aria-hidden
                    className="hidden sm:block h-4 w-px"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                  />
                )}
                <span className="text-pearl-300">{text}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
