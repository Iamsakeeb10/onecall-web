'use client'

import { motion, useReducedMotion, easeInOut } from 'framer-motion'
import { ShieldCheck, MapPin, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

/* ─── Service Pills ──────────────────────────────────────── */
const SERVICES = [
  'Lawn & Grounds Care',
  'Pressure Washing',
  'Junk Removal',
  'Snow & Ice Control',
  'Painting & Patching',
  'HVAC Filter Service',
  'Gutter Cleaning',
]

/* ─── Trust Items ────────────────────────────────────────── */
const TRUST = [
  { icon: ShieldCheck, label: 'Fully Protected & Bonded' },
  { icon: MapPin, label: 'Complete State Coverage' },
  { icon: Clock, label: 'Prompt Service Delivery' },
]

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
})

/* ═══════════════════════════════════════════════════════════ */
export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#0F1623' }}
      aria-label="Hero"
    >
      {/* ══════════════════════════════════════ */}
      {/*  BACKGROUND SYSTEM                     */}
      {/* ══════════════════════════════════════ */}

      {/* Gradient mesh base */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            /* top-left navy anchor */
            'radial-gradient(ellipse 90% 70% at -10% -10%, #1A2233 0%, transparent 60%)',
            /* top-right steel bloom */
            'radial-gradient(ellipse 70% 55% at 110% -5%, rgba(37,99,235,0.45) 0%, transparent 55%)',
            /* center-left deep navy */
            'radial-gradient(ellipse 60% 60% at 0% 60%, #111827 0%, transparent 55%)',
            /* bottom-right steel bloom */
            'radial-gradient(ellipse 65% 50% at 100% 110%, rgba(29,78,216,0.35) 0%, transparent 55%)',
            /* mid-canvas atmosphere */
            'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(30,42,59,0.90) 0%, transparent 75%)',
            /* base fill */
            'linear-gradient(160deg, #0F1623 0%, #1A2233 50%, #0F1623 100%)',
          ].join(','),
        }}
      />

      {/* Grain noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.032]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Geometric texture grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Decorative rotating ring — top right */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border opacity-[0.07] ${
          reduced ? '' : 'animate-spin-slow'
        }`}
        style={{ borderColor: '#2563EB', borderWidth: '1px' }}
      />
      {/* Inner ring */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-16 -right-16 w-[420px] h-[420px] rounded-full border opacity-[0.05] ${
          reduced ? '' : 'animate-spin-slower'
        }`}
        style={{ borderColor: '#2563EB', borderWidth: '1px' }}
      />

      {/* Decorative ring — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full border opacity-[0.04]"
        style={{ borderColor: '#2563EB', borderWidth: '1px' }}
      />

      {/* Top accent rule */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.8) 35%, #2563EB 50%, rgba(37,99,235,0.8) 65%, transparent 100%)',
        }}
      />

      {/* ══════════════════════════════════════ */}
      {/*  MAIN CONTENT                          */}
      {/* ══════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        {/* Content column — centered, max readable width */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
          {/* ── Eyebrow badge ── */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 0.92 }}
            animate={reduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <span
              className="inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
              style={{
                background: 'rgba(37,99,235,0.12)',
                borderColor: 'rgba(37,99,235,0.30)',
                fontFamily: 'var(--font-body)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-steel ${
                  reduced ? '' : 'animate-pulse'
                }`}
                style={{ background: '#2563EB' }}
                aria-hidden
              />
              Texas Statewide Property Maintenance
            </span>
          </motion.div>

          {/* ── Giant display headline ── */}
          <motion.div
            variants={fadeUp(0.15, reduced)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <h1
              className="leading-none tracking-wider select-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {/* Line 1 */}
              <span
                className="block text-[clamp(4rem,14vw,10rem)] text-white"
                style={{ letterSpacing: '0.04em' }}
              >
                EXPERT
              </span>

              {/* Line 2 — outlined ghost text */}
              <span
                className="block text-[clamp(2.4rem,8.5vw,6.2rem)]"
                style={{
                  letterSpacing: '0.06em',
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.35)',
                }}
              >
                PROPERTY MAINTENANCE
              </span>

              {/* Line 3 — steel blue */}
              <span
                className="block text-[clamp(3.5rem,12vw,9rem)]"
                style={{
                  letterSpacing: '0.05em',
                  color: '#2563EB',
                  textShadow:
                    '0 0 60px rgba(37,99,235,0.50), 0 0 120px rgba(37,99,235,0.25)',
                }}
              >
                ACROSS TEXAS
              </span>
            </h1>
          </motion.div>

          {/* ── Thin divider rule ── */}
          <motion.div
            variants={fadeUp(0.25, reduced)}
            initial="hidden"
            animate="visible"
            className="w-24 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, #2563EB, transparent)',
            }}
            aria-hidden
          />

          {/* ── Body copy ── */}
          <motion.p
            variants={fadeUp(0.3, reduced)}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl leading-relaxed max-w-2xl"
            style={{ color: '#B8C4D6', fontFamily: 'var(--font-body)' }}
          >
            Institutional-grade property maintenance delivered statewide. Single-family,
            multifamily, and commercial — one call, every service.
          </motion.p>

          {/* ── CTA buttons ── */}
          <motion.div
            variants={fadeUp(0.35, reduced)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary */}
            <Link
              href="/quote"
              className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                boxShadow:
                  '0 0 0 1px rgba(37,99,235,0.5), 0 8px 24px rgba(37,99,235,0.40)',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow =
                  '0 0 0 1px rgba(37,99,235,0.8), 0 12px 32px rgba(37,99,235,0.60)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow =
                  '0 0 0 1px rgba(37,99,235,0.5), 0 8px 24px rgba(37,99,235,0.40)'
                el.style.transform = 'translateY(0)'
              }}
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border px-8 py-4 text-base font-semibold text-white transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(255,255,255,0.18)',
                fontFamily: 'var(--font-body)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.11)'
                el.style.borderColor = 'rgba(255,255,255,0.38)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.05)'
                el.style.borderColor = 'rgba(255,255,255,0.18)'
                el.style.transform = 'translateY(0)'
              }}
            >
              View Our Services
            </Link>
          </motion.div>

          {/* ── Trust micro-row ── */}
          <motion.div
            variants={fadeUp(0.4, reduced)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-7 gap-y-2"
          >
            {TRUST.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-sm"
                style={{ color: '#C8CAD4', fontFamily: 'var(--font-body)' }}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: '#2563EB' }} />
                {label}
              </span>
            ))}
          </motion.div>

          {/* ══════════════════════════════════════ */}
          {/*  SERVICE PILLS ROW                     */}
          {/* ══════════════════════════════════════ */}
          <motion.div
            variants={fadeUp(0.5, reduced)}
            initial="hidden"
            animate="visible"
            className="w-full pt-4"
          >
            {/* Label */}
            <p
              className="text-xs uppercase tracking-[0.2em] mb-4 text-center"
              style={{
                color: 'rgba(184,196,214,0.55)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Our Services
            </p>

            {/* Pills */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {SERVICES.map((service, i) => (
                <motion.span
                  key={service}
                  initial={reduced ? {} : { opacity: 0, scale: 0.88 }}
                  animate={reduced ? {} : { opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: 0.55 + i * 0.06,
                  }}
                  className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium cursor-default transition-all duration-200 hover:border-steel/50 hover:text-white"
                  style={{
                    background: 'rgba(37,99,235,0.08)',
                    borderColor: 'rgba(37,99,235,0.22)',
                    color: '#B8C4D6',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(37,99,235,0.18)'
                    el.style.borderColor = 'rgba(37,99,235,0.50)'
                    el.style.color = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(37,99,235,0.08)'
                    el.style.borderColor = 'rgba(37,99,235,0.22)'
                    el.style.color = '#B8C4D6'
                  }}
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>
          {/* END PILLS */}
        </div>
        {/* END CONTENT COLUMN */}
      </div>
      {/* END MAIN CONTENT */}

      {/* ══════════════════════════════════════ */}
      {/*  TRUST STRIP                           */}
      {/* ══════════════════════════════════════ */}
      <motion.div
        initial={reduced ? {} : { opacity: 0 }}
        animate={reduced ? {} : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 border-t py-4"
        style={{
          background: 'rgba(15,22,35,0.75)',
          borderColor: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            <span
              className="font-semibold uppercase tracking-[0.14em] text-white"
              style={{
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.14em',
              }}
            >
              OneCall Field Services
            </span>

            {[
              { sep: true, text: 'Texas-Licensed & Insured' },
              { sep: true, text: 'Statewide Dispatch Network' },
              { sep: false, text: 'Residential · Commercial · HOA' },
            ].map(({ sep, text }) => (
              <span key={text} className="flex items-center gap-x-8">
                {sep && (
                  <span
                    aria-hidden
                    className="hidden sm:block h-4 w-px"
                    style={{ background: 'rgba(255,255,255,0.18)' }}
                  />
                )}
                <span
                  style={{
                    color: '#C8CAD4',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {text}
                </span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
