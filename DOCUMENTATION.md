# MEGAFIXX Home Services LLC — Next.js Website Documentation

**Complete technical documentation for developers and AI.** Use this file to understand, extend, or customize the site without requiring live code access.

---

## 1. Project Overview

### 1.1 Company & Audience

| Field | Value |
|-------|--------|
| **Company** | MEGAFIXX Home Services LLC |
| **Industry** | Statewide Property Maintenance, Texas |
| **Target audience** | Property managers, banks, asset managers, real estate investors, REO specialists, portfolio owners |
| **Value proposition** | Reliable, professional property maintenance across Texas — residential, commercial, rental, and investment properties |

### 1.2 Tech Stack

| Technology | Version / Notes |
|------------|------------------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript (`.tsx` only for components) |
| **Styling** | Tailwind CSS v4 (theme via `@theme {}` in `globals.css` — no `tailwind.config.ts`) |
| **Animations** | Framer Motion |
| **Structure** | `src/` directory; Turbopack enabled |
| **Linting** | ESLint configured |

### 1.3 Design Philosophy

- **Tone:** Premium B2B, corporate, trustworthy — not a local handyman site.
- **Feel:** Statewide B2B services brand; clean, confident, professional.
- **Backgrounds:** White primary; light gray section alternation (`surface-50`, `surface-100`) for rhythm.
- **Primary dark:** Deep charcoal (`#1C1C1E`) for headings, footer, and authority — warmer than navy.
- **Primary accent:** Burnt orange (`#E8621A`) for CTAs, links, active states, icons.
- **Prestige accent:** Amber (`#F59E0B`) for star ratings only.
- **Typography:** Outfit (display/accent) + Plus Jakarta Sans (body); bold headlines, generous spacing.
- **Responsiveness:** Mobile-first; breakpoints at `sm`, `md`, `lg`, `xl`, and custom `min-[1131px]` for hero layout.

---

## 2. Folder & File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, Navbar, PageWrapper, Footer, ScrollToTop, skip link
│   ├── page.tsx                # Home page: Hero, StatsBar, Services, Clients, WhyChooseUs, QualityProcess, Testimonials, CTABanner, Contact
│   ├── globals.css             # Tailwind v4 @theme, body styles, accent line, focus/selection, keyframes, .hero-texture
│   ├── about/page.tsx          # About: hero, mission, categories, regions, values, CTA
│   ├── services/page.tsx       # Services: hero, featured service grid, CTA
│   ├── clients/page.tsx        # Clients: hero, intro, client types, process, CTA
│   ├── contact/page.tsx        # Contact: hero, QuoteForm + contact info cards
│   ├── terms/page.tsx          # Terms & Conditions
│   ├── not-found.tsx           # 404 page
│   ├── loading.tsx             # Global loading spinner
│   ├── api/
│   │   └── contact/route.ts    # POST handler for contact/quote form
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav: logo, links, CTA pill, mobile menu
│   │   ├── Footer.tsx          # 4-column footer: logo, Quick Links, Services, Contact; social; copyright
│   │   └── PageWrapper.tsx     # Framer Motion page transition wrapper; scroll reset on route change
│   ├── ui/
│   │   ├── Button.tsx          # Primary / secondary / ghost; sizes sm | md | lg; loading; asChild
│   │   ├── SectionHeading.tsx  # Title, optional subtitle, orange rule; align left | center
│   │   ├── AnimatedSection.tsx # Scroll-triggered fade/slide (fadeUp, fadeLeft, fadeRight, scaleIn); reduced motion support
│   │   └── Skeleton.tsx        # Loading skeleton: text | card | image variant; shimmer
│   ├── sections/
│   │   ├── Hero.tsx            # Home hero: bg-hero-bg, headline + CTAs, stacked image cards (Plumbing, Electrical, General Repairs)
│   │   ├── StatsBar.tsx        # Stats strip: 10+ Years, 500+ Properties, Statewide, 100% Insured; count-up animation
│   │   ├── ServicesSection.tsx # SectionHeading + service cards grid + "View All Services" button
│   │   ├── ClientsSection.tsx  # SectionHeading + ClientTypeCard grid + "Learn More About Our Clients"
│   │   ├── WhyChooseUs.tsx     # SectionHeading + feature cards + stats row
│   │   ├── QualityProcess.tsx  # SectionHeading + 3-step process cards (Documentation, Screening, Communication)
│   │   ├── Testimonials.tsx    # SectionHeading + carousel (mobile) / 3-col grid (desktop); dots + arrows
│   │   ├── CTABanner.tsx       # Dark (image + overlay) or light variant; heading, CTA buttons
│   │   ├── ContactSection.tsx  # SectionHeading + contact info + QuoteForm
│   │   ├── ServicesPageHero.tsx # Optional hero wrapper for services page (image + overlay)
│   │   └── TestimonialsLazy.tsx # Lazy placeholder for testimonials
│   ├── cards/
│   │   ├── ServiceCard.tsx     # Service card: image, icon, title, description, features; variants grid | list | featured
│   │   ├── ClientTypeCard.tsx  # Client type: icon, title, description, benefits; variants compact | full
│   │   ├── TestimonialCard.tsx # Quote, stars (amber), avatar/initials, name/role
│   │   ├── ClientImage.tsx     # Client image with fallback
│   │   └── TeamPhoto.tsx       # Team/avatar placeholder
│   ├── forms/
│   │   └── QuoteForm.tsx       # Full quote/contact form: fullName, companyName, email, phone, propertyType, serviceNeeded, location, message
│   └── shared/
│       └── ScrollToTop.tsx     # Fixed bottom-right button; visible after 400px scroll; smooth scroll to top
├── hooks/
│   └── useScrollPosition.ts    # Returns window.scrollY; used for scroll-based UI (e.g. navbar state)
├── lib/
│   ├── data/
│   │   ├── services.ts        # services[]: id, title, description, icon, image, slug, features
│   │   ├── clients.ts         # clients[]: id, title, description, icon, image, benefits
│   │   └── testimonials.ts    # testimonials[]: id, name, role, company, content, rating, clientType, avatar
│   ├── metadata.ts            # defaultMetadata, generatePageMetadata(), SITE_URL, Open Graph, Twitter, robots
│   └── utils/
│       ├── formValidation.ts  # validateForm(ContactFormData), validateEmail, validatePhone, validateRequired
│       └── mailer.ts          # Email sending utility for contact API
└── types/
    └── index.ts                # Service, ClientType, NavLink, Testimonial, ContactFormData
```

---

## 3. Pages & Routes

| Route | Purpose | Hero | Key sections | CTA placement |
|-------|---------|------|----------------|----------------|
| **/** | Home | Full-screen hero: solid `bg-hero-bg`, headline + 3 pill CTAs, stacked image cards (Plumbing, Electrical, General Repairs) | StatsBar, Services, Clients, WhyChooseUs, QualityProcess, Testimonials, CTABanner (dark), ContactSection | Hero (Get a Free Quote, View Our Services, Learn More); each section links; CTABanner; ContactSection |
| **/services** | Services overview | Solid `bg-hero-bg`, h1 "Our Services", intro paragraph | Featured service grid (ServiceCard featured), "View All Services" button | Bottom CTA area |
| **/clients** | Who we serve | Solid `bg-hero-bg`, h1 "Our Clients", tagline | Intro, client type cards, process steps, "Ready to Partner" CTA | Learn more link; CTA section with phone/email + Get Started |
| **/about** | About company | Solid `bg-hero-bg`, h1 "About MEGAFIXX...", tagline | Mission, service categories, coverage map (image + overlay), regions, values, CTA block | Buttons in CTA block |
| **/contact** | Contact & quote | Solid `bg-hero-bg`, h1 "Contact MEGAFIXX", tagline | QuoteForm + contact info cards (phone, email, location, hours) | Form submit; contact links |
| **/terms** | Terms & Conditions | Text hero | TOC + content | — |
| **404** | Not found | — | Message + Home / Contact buttons | — |

**Inner-page hero pattern (About, Services, Clients, Contact):**  
`section` with `h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh]`, `bg-hero-bg`, `pt-28 sm:pt-32`. Content: `text-white` heading, `text-surface-200` subtitle, centered. No background image; solid color only.

---

## 4. Components

### 4.1 Layout

**Navbar** (`src/components/layout/Navbar.tsx`)

- Fixed, full width; `z-50`. Background: `bg-white/98 backdrop-blur-md shadow-navbar border-b border-surface-200`.
- Logo: `/images/logo.png`, `h-14 sm:h-20`, link to `/`.
- Links: Home, Services, Our Clients, About, Contact — `text-charcoal hover:text-orange`; active route: `h-0.5 bg-orange` underline.
- CTA: "Get Started" → `/contact`, `bg-orange text-white hover:bg-orange-dark`, rounded-full, `px-6 py-2`.
- Mobile: Hamburger (Menu/X); drawer with same links + CTA; `lg:hidden` / `hidden lg:flex`.
- Uses `usePathname()`; no scroll state in current implementation (navbar always solid).

**Footer** (`src/components/layout/Footer.tsx`)

- `bg-charcoal text-white`; top accent: `h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent opacity-40`.
- Grid: 4 columns (1 on mobile, 2 md, 4 lg): (1) Logo + tagline + Fully Insured/Licensed, (2) Quick Links, (3) Services list, (4) Contact (phone, email, location). Links: `text-surface-300 hover:text-white`. Contact icons: `text-orange`.
- Social row: Facebook, Twitter, LinkedIn, Instagram — `text-surface-300 hover:text-white hover:scale-110`.
- Bottom: copyright, Terms & Conditions link; `border-t border-white/10`.

**PageWrapper** (`src/components/layout/PageWrapper.tsx`)

- Wraps `<main>{children}</main>` in layout. Resets scroll to top on `pathname` change.
- Homepage: no AnimatePresence (direct render).
- Other pages: Framer Motion `AnimatePresence mode="wait"`; enter: `opacity 0→1`, `y: 12→0`; exit: `opacity 0`, `y: -8`. Respects `useReducedMotion()`.

### 4.2 UI

**Button** (`src/components/ui/Button.tsx`)

- **Props:** `variant?: "primary" | "secondary" | "ghost"`, `size?: "sm" | "md" | "lg"`, `loading?`, `asChild?`, `children`, `className`, plus standard button attributes.
- **Variants:** Primary: `bg-orange text-white hover:bg-orange-dark hover:scale-105 shadow-sm hover:shadow-orange-glow`. Secondary: `border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white`. Ghost: `text-orange hover:text-orange-dark hover:underline`.
- **Sizes:** sm `px-4 py-2 text-sm`, md `px-6 py-3 text-base`, lg `px-8 py-4 text-lg`.
- **Loading:** Shows `<Loader2 className="animate-spin" />`. `asChild`: merges styles into child (e.g. `<Link>`).

**SectionHeading** (`src/components/ui/SectionHeading.tsx`)

- **Props:** `title: string`, `subtitle?: string`, `align?: "left" | "center"`, `className?`.
- **Markup:** `h2` with `font-display text-4xl md:text-5xl font-bold text-charcoal`; optional `p` with `font-body text-lg text-text-muted max-w-2xl`; rule: `h-0.5 w-12 bg-orange` + `w-4 bg-surface-300` rounded-full.

**AnimatedSection** (`src/components/ui/AnimatedSection.tsx`)

- **Props:** `children`, `variant?: "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn"`, `delay?: number`, `className?`.
- **Behavior:** `motion.div` with `initial="hidden"` `whileInView="visible"`; `viewport: { once: true, margin: "0px 0px 60px 0px", amount: 0.15 }`; `transition: { duration: 0.6, delay, ease: "easeOut" }`.
- **Variants:** fadeUp (y: 50→0), fadeLeft (x: -50→0), fadeRight (x: 50→0), scaleIn (scale 0.8→1). All with opacity 0→1.
- **Reduced motion:** Renders plain `<div>` with no animation.

**ScrollToTop** (`src/components/shared/ScrollToTop.tsx`)

- Visible when `window.scrollY > 400`. Fixed `bottom-8 right-8 z-50`; `bg-orange text-white rounded-full` button, ArrowUp icon; `hover:bg-orange-dark hover:shadow-orange-glow hover:scale-110`.
- AnimatePresence for mount/unmount; `scrollTo({ top: 0, behavior: "smooth" })` on click. Respects `useReducedMotion()`.

### 4.3 Cards

**ServiceCard** (`src/components/cards/ServiceCard.tsx`)

- **Props:** `service: Service`, `variant?: "grid" | "list" | "featured"`.
- **Grid:** Image (h-48) + icon + title + description + features list + "Learn more →" link. Hover: `hover:border-orange/40 hover:shadow-card-hover hover:-translate-y-1`. Icon and link: `text-orange`.
- **Featured:** Larger image, badge ("Featured"), same content pattern. Uses `iconMap` for Lucide icons (Wrench, Droplets, Paintbrush, Sparkles, Leaf, Home, Trash2).
- **Image:** Next.js `Image` with `fill` and `object-cover`; fallback on error. `service.image` (Unsplash URLs).

**ClientTypeCard** (`src/components/cards/ClientTypeCard.tsx`)

- **Props:** `client: ClientType`, `variant?: "compact" | "full"`.
- **Compact:** Icon (`text-orange`), title, description (line-clamp-2), benefits with CheckCircle; hover lift and border/shadow like ServiceCard.
- **Full:** Larger layout with image support. Icons: Building2, Landmark, KeyRound, TrendingUp.

**TestimonialCard** (`src/components/cards/TestimonialCard.tsx`)

- **Props:** `testimonial: Testimonial`.
- **Content:** 5 amber stars (`text-amber fill-amber`), quote (`text-text-muted italic`), avatar (image or initials fallback) with `ring-2 ring-orange/25`, name (`text-charcoal font-semibold`).
- Card: `bg-white border border-surface-200 rounded-xl shadow-card`; `hover:border-orange/40 hover:shadow-card-hover`.

---

## 5. Design System

### 5.1 Colors (Tailwind v4 `@theme` in `globals.css`)

| Token | Hex / Value | Usage |
|-------|-------------|--------|
| `white` | `#FFFFFF` | Primary backgrounds, inverse text |
| `surface-50` | `#FAFAFA` | Section alt background |
| `surface-100` | `#F4F4F5` | Cards, form inputs, stats bar |
| `surface-200` | `#E4E4E7` | Card borders, dividers |
| `surface-300` | `#D4D4D8` | Stronger borders |
| `charcoal` | `#1C1C1E` | Headings, footer bg |
| `charcoal-light` | `#2C2C2E` | Hover on dark |
| `charcoal-muted` | `#52525B` | Subdued text on dark |
| `orange` | `#E8621A` | Buttons, links, active states, icons |
| `orange-dark` | `#C94E0D` | Button/link hover |
| `orange-light` | `#FFF1E8` | Ghost hover bg, focus tint |
| `orange-muted` | `rgba(232,98,26,0.12)` | Subtle card/badge tint |
| `amber` | `#F59E0B` | Star ratings only |
| `amber-light` | `#FFFBEB` | Badge behind amber |
| `text-primary` | `#1C1C1E` | Headings |
| `text-body` | `#3F3F46` | Body |
| `text-muted` | `#71717A` | Captions, placeholders |
| `text-inverse` | `#FFFFFF` | Text on dark |
| `hero-bg` | `#3E3E3E` | Home hero background |
| `hero-bg-dark` | `#2E2E2E` | Hero fallback/cards |
| `hero-text` | `#FFFFFF` | Hero headline |
| `hero-muted` | `#C8C8C8` | Hero subtitle |
| `error` | `#DC2626` | Form error |
| `success` | `#16A34A` | Success state |

### 5.2 Fonts

| Variable | Font | Usage |
|----------|------|--------|
| `--font-display` | Outfit (600, 700, 800) | Headings |
| `--font-body` | Plus Jakarta Sans (400, 500, 600) | Body, descriptions |
| `--font-accent` | Outfit | Buttons, nav, labels |

Loaded in `layout.tsx` via `next/font/google`: `Outfit`, `Plus_Jakarta_Sans`; applied as CSS variables on `<html>`.

### 5.3 Shadows

| Token | Value |
|-------|--------|
| `shadow-card` | `0 1px 3px rgba(28,28,30,0.06), 0 4px 12px rgba(28,28,30,0.05)` |
| `shadow-card-hover` | `0 4px 16px rgba(232,98,26,0.12), 0 12px 32px rgba(28,28,30,0.10)` |
| `shadow-orange-glow` | `0 0 0 3px rgba(232,98,26,0.22)` |
| `shadow-navbar` | `0 1px 0 rgba(28,28,30,0.06), 0 4px 16px rgba(28,28,30,0.08)` |

### 5.4 Spacing & Breakpoints

- **Section padding:** Typically `py-20 lg:py-28`; some sections use `pt-0` or `pt-12` for tighter top spacing (WhyChooseUs, Testimonials, ClientsSection).
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Breakpoints:** Tailwind defaults (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px); custom `min-[1131px]` used for hero two-column layout.

### 5.5 Buttons (Summary)

- **Primary:** `bg-orange text-white hover:bg-orange-dark`; rounded-lg; shadow and hover scale/glow.
- **Secondary:** `border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white`.
- **Ghost:** `text-orange hover:text-orange-dark hover:underline`.
- **Pill (hero/nav):** `rounded-full`, same orange fill/hover.

### 5.6 Cards (Summary)

- Base: `bg-white border border-surface-200 rounded-xl shadow-card`.
- Hover: `hover:border-orange/40 hover:shadow-card-hover`; some use `hover:-translate-y-1`.
- Icons and links: `text-orange` / `hover:text-orange-dark`.

---

## 6. Styling & Theming

### 6.1 Tailwind v4 Theme (`globals.css`)

- Single `@import "tailwindcss";` at top. All custom theme in `@theme { }`: colors, fonts, shadows, keyframe names.
- **No** `tailwind.config.ts`; v4 uses CSS-based config only.

### 6.2 Global Styles

- **body:** `background-color: #FFFFFF`, `color: var(--color-text-body)`, `font-family: var(--font-body)`, `overflow-x: hidden`, `-webkit-font-smoothing: antialiased`.
- **body::before:** Fixed 3px top bar; gradient `charcoal → orange → charcoal`; `z-index: 100`.
- **:focus-visible:** `outline: 2px solid var(--color-orange)`, `outline-offset: 3px`, `border-radius: 4px`.
- **::selection:** `background: var(--color-orange-light)`, `color: var(--color-charcoal)`.

### 6.3 Keyframes

- **fadeUp:** `opacity 0→1`, `translateY(20px)→0`.
- **float:** `translateY(0)→-16px→0`; used for hero cards; `animation: float 4s ease-in-out infinite`.
- **shimmer:** Background position animation for skeleton loading.

### 6.4 Utility Classes

- **.hero-texture:** Diagonal line pattern overlay (60px grid, white 4% opacity).
- **.animate-float:** Applies `float` keyframe.
- **.animate-shimmer:** Shimmer for skeletons.

---

## 7. Data & Content

### 7.1 Services (`src/lib/data/services.ts`)

- **Type:** `Service[]` — `id`, `title`, `description`, `icon` (Lucide name), `image` (URL), `slug`, `features: string[]`.
- **Count:** 7 services (General Maintenance & Minor Plumbing, Gutter Cleaning, Drywall & Painting, Property Cleaning, Landscaping, Siding & Exterior, Property Cleanouts).
- **Images:** Unsplash URLs; e.g. `photo-1558618666-fcd25c85cd64` (plumbing). Icons: Wrench, Droplets, Paintbrush, Sparkles, Leaf, Home, Trash2.

### 7.2 Clients (`src/lib/data/clients.ts`)

- **Type:** `ClientType[]` — `id`, `title`, `description`, `icon`, `image`, `benefits: string[]`.
- **Count:** 4 (Property Management Companies, Financial Institutions & Asset Managers, Real Estate Professionals, Investors & Portfolio Owners).
- **Icons:** Building2, Landmark, KeyRound, TrendingUp. Images: Unsplash.

### 7.3 Testimonials (`src/lib/data/testimonials.ts`)

- **Type:** `Testimonial[]` — `id`, `name`, `role`, `company`, `content`, `rating` (1–5), `clientType`, `avatar` (Pexels URL).
- **Count:** 6. All 5-star. Avatars: Pexels; fallback to initials in UI.

### 7.4 Contact / Quote Form

- **Fields:** fullName, companyName, email, phone, propertyType (Residential, Commercial, Multi-Unit, REO/Bank Owned, Other), serviceNeeded (from services list), location, message.
- **Validation:** `validateForm()` in `src/lib/utils/formValidation.ts` — required checks, email regex, phone min 10 digits, message min 10 characters.
- **Submit:** POST `/api/contact`; success shows orange-muted success block; errors per field + optional submit error message.
- **Labels:** `text-charcoal font-medium`; required asterisk `text-orange`. Inputs: `border-surface-200 focus:ring-orange focus:border-orange`; error: `border-error text-error`.

---

## 8. Hooks & Utilities

### 8.1 useScrollPosition (`src/hooks/useScrollPosition.ts`)

- **Returns:** `number` (current `window.scrollY`).
- **Usage:** Can drive navbar background or other scroll-dependent UI. Listens with `{ passive: true }`; cleans up on unmount.

### 8.2 Form Validation (`src/lib/utils/formValidation.ts`)

- **validateEmail(email):** Non-empty + regex; returns `{ valid, message }`.
- **validatePhone(phone):** Non-empty + ≥10 digits; returns `{ valid, message }`.
- **validateRequired(value, fieldName):** Trim non-empty; returns `{ valid, message }`.
- **validateForm(formData: ContactFormData):** Returns `Record<string, string>` of field errors; used by QuoteForm before submit.

### 8.3 Metadata (`src/lib/metadata.ts`)

- **SITE_URL:** `process.env.NEXT_PUBLIC_SITE_URL || "https://megafixxhomeservices.com"`.
- **defaultMetadata:** title template, description, keywords, authors, Open Graph, Twitter, robots.
- **generatePageMetadata({ title, description, path }):** Returns Next.js `Metadata` with canonical, OG, Twitter overrides for each page.

---

## 9. Image Guidelines

- **Component:** Next.js `<Image>` from `next/image`.
- **Remote domains:** `images.unsplash.com`, `images.pexels.com` in `next.config.ts` `images.remotePatterns`.
- **Hero/cards:** Use `fill` with a sized container and `className="object-cover"`; specify `sizes` where appropriate (e.g. `360px` for hero cards).
- **Logo:** `/images/logo.png`; Navbar `priority`; fixed height (e.g. `h-14 sm:h-20`).
- **Alt text:** Always meaningful; decorative images use `alt=""`.
- **Fallback:** ServiceCard, TestimonialCard, ClientImage use `onError` or state to hide image / show placeholder or initials.
- **Aspect ratio:** Hero cards use fixed heights (e.g. `h-[200px] xl:h-[220px]`); service cards use `h-48` image block. Rounded corners: `rounded-xl` / `rounded-2xl` as per design.

---

## 10. SEO & Metadata

- **Per-page:** Each page calls `generatePageMetadata({ title, description, path })` and exports `metadata` (or uses `defaultMetadata` in layout).
- **Layout:** `layout.tsx` exports `metadata: Metadata = defaultMetadata`.
- **Canonical:** Set via `generatePageMetadata` `alternates.canonical`.
- **Headings:** Single `h1` per page (hero); sections use `SectionHeading` (`h2`) and card titles `h3` for structure and accessibility.
- **Skip link:** `<a href="#main-content">Skip to main content</a>` in layout; focus styles (orange outline) for keyboard users.

---

## 11. Animations

- **Scroll-triggered:** `AnimatedSection` with `whileInView`, `viewport: { once: true, margin: "0px 0px 60px 0px", amount: 0.15 }`. Variants: fadeUp, fadeLeft, fadeRight, scaleIn.
- **Cards:** ServiceCard, ClientTypeCard use `motion.div` with `whileHover: { y: -4 }` (or similar) when motion not reduced.
- **StatsBar:** Count-up when in view; `motion.div` with `whileInView` and staggered delay.
- **ScrollToTop:** AnimatePresence; fade/scale on show/hide.
- **Page transitions:** PageWrapper uses AnimatePresence + motion.div for enter/exit (non-home only).
- **Reduced motion:** All Framer usage checks `useReducedMotion()` and either disables animation or uses opacity-only / no transform.

---

## 12. Instructions for Developers

### 12.1 Adding a New Page

1. Create `src/app/your-route/page.tsx`.
2. Export `metadata` via `generatePageMetadata({ title: "...", description: "...", path: "/your-route" })`.
3. Use shared layout (Navbar/Footer from root layout). Optionally use same hero pattern: `section` with `bg-hero-bg`, `h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh]`, `pt-28 sm:pt-32`, and centered `text-white` / `text-surface-200` content.
4. Add route to Navbar `navLinks` and Footer if needed.
5. Update `sitemap.ts` if you want the route in the sitemap.

### 12.2 Adding a New Component

1. Place in `components/layout`, `ui`, `sections`, `cards`, `forms`, or `shared` as appropriate.
2. Use `"use client"` if the component uses hooks, Framer Motion, or browser APIs.
3. Use design tokens: `text-charcoal`, `text-orange`, `bg-surface-50`, `border-surface-200`, `font-display`, `font-body`, `font-accent`, etc.
4. For scroll animations, wrap content in `<AnimatedSection variant="fadeUp">` or use `motion` with `whileInView` and `viewport={{ once: true }}`. Respect `useReducedMotion()`.

### 12.3 Adding a Service

1. Open `src/lib/data/services.ts`.
2. Add an object to `services` array: `id`, `title`, `description`, `icon` (Lucide name present in ServiceCard `iconMap`), `image` (URL), `slug`, `features`.
3. If the icon is new, add it to the `iconMap` in `ServiceCard.tsx` and import the icon from `lucide-react`.

### 12.4 Adding a Client Type

1. Open `src/lib/data/clients.ts`.
2. Add to `clients` array: `id`, `title`, `description`, `icon` (in ClientTypeCard `iconMap`), `image`, `benefits`.
3. If the icon is new, add it to `iconMap` in `ClientTypeCard.tsx`.

### 12.5 Adding a Testimonial

1. Open `src/lib/data/testimonials.ts`.
2. Add to `testimonials` array: `id`, `name`, `role`, `company`, `content`, `rating` (1–5), `clientType`, `avatar` (URL). Use existing `clientType` values for consistency.

### 12.6 Following the Design System

- Use only theme colors (no arbitrary hex in class names except where theme does not define a token).
- Use `font-display` for headings, `font-body` for body, `font-accent` for buttons and nav.
- Use `SectionHeading` for section titles. Use `Button` with `variant` and `size`; use `asChild` with `Link` for CTAs.
- Keep spacing consistent: section padding `py-20 lg:py-28` (or reduced top where used); container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Ensure focus and selection styles remain (orange outline, orange-light selection). Do not remove `body::before` top accent.

### 12.7 Handling Images

- Use Next.js `Image` with `fill` + `object-cover` in a sized wrapper, or explicit `width`/`height` for fixed dimensions.
- Add new remote hostnames to `next.config.ts` `images.remotePatterns` if using external URLs.
- Provide alt text for all meaningful images; use `alt=""` for decorative.
- Handle errors with `onError` and local state to show placeholder or hide image.

### 12.8 Responsive Layouts

- Mobile-first: base styles for small screens; override with `sm:`, `md:`, `lg:`, `xl:`.
- Hero two-column: use `min-[1131px]:grid-cols-2` (and related classes) so layout switches at 1131px. Below that, single column, centered text.
- Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (or similar) for cards. Use consistent gap (e.g. `gap-8`).

---

## 13. Example Snippets

### 13.1 ServiceCard (grid variant)

```tsx
<ServiceCard service={service} variant="grid" />
// service: { id, title, description, icon, image, slug, features }
// Renders: image block, icon, title, description, feature list, "Learn more →" link
// Hover: border-orange/40, shadow-card-hover, -translate-y-1
```

### 13.2 ClientTypeCard (compact)

```tsx
<ClientTypeCard client={client} variant="compact" />
// client: { id, title, description, icon, image, benefits }
// Renders: icon, title, description (clamped), benefits with CheckCircle
```

### 13.3 Hero section (inner page)

```tsx
<section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden bg-hero-bg pt-28 sm:pt-32">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
      Page Title
    </h1>
    <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
      Tagline or short description.
    </p>
  </div>
</section>
```

### 13.4 QuoteForm usage

```tsx
import { QuoteForm } from "@/components/forms/QuoteForm";

// In ContactSection or contact page:
<QuoteForm />
// Form includes: fullName, companyName, email, phone, propertyType, serviceNeeded, location, message
// Validates via validateForm(); submits to POST /api/contact
// Success: orange-muted box with thank-you message
```

### 13.5 SectionHeading

```tsx
<SectionHeading
  title="Why Choose MEGAFIXX"
  subtitle="Built on reliability, quality, and long-term partnerships"
  align="center"
/>
```

### 13.6 AnimatedSection

```tsx
<AnimatedSection variant="fadeUp" delay={0.2}>
  <div>Content that fades/slides up when in view</div>
</AnimatedSection>
```

---

## 14. Optional Reference

### 14.1 Page / Component Hierarchy (ASCII)

```
layout (Navbar + PageWrapper(main) + Footer + ScrollToTop)
  └── main#main-content
        └── page.tsx (or route segment)
              ├── Hero / StatsBar / divider
              ├── ServicesSection (SectionHeading + ServiceCard grid + Button)
              ├── ClientsSection (SectionHeading + ClientTypeCard grid + Link)
              ├── WhyChooseUs (SectionHeading + feature cards + stats)
              ├── QualityProcess (SectionHeading + step cards)
              ├── Testimonials (SectionHeading + carousel/grid TestimonialCard)
              ├── CTABanner (dark or light)
              └── ContactSection (SectionHeading + info + QuoteForm)
```

### 14.2 Color Utility Mapping (Tailwind class → theme)

| Tailwind class | Theme variable |
|----------------|----------------|
| `bg-white` | `--color-white` |
| `bg-surface-50` … `bg-surface-300` | `--color-surface-*` |
| `bg-charcoal`, `text-charcoal` | `--color-charcoal` |
| `bg-orange`, `text-orange`, `border-orange` | `--color-orange` |
| `hover:bg-orange-dark` | `--color-orange-dark` |
| `text-amber`, `fill-amber` | `--color-amber` (stars) |
| `text-text-muted` | `--color-text-muted` |
| `bg-hero-bg`, `text-hero-text` | `--color-hero-*` |
| `shadow-card`, `shadow-card-hover`, `shadow-orange-glow` | `--shadow-*` |

### 14.3 Component Variants Summary

| Component | Prop | Values | Notes |
|-----------|------|--------|--------|
| Button | variant | primary, secondary, ghost | — |
| Button | size | sm, md, lg | — |
| SectionHeading | align | left, center | — |
| AnimatedSection | variant | fadeUp, fadeLeft, fadeRight, scaleIn | — |
| ServiceCard | variant | grid, list, featured | grid = default |
| ClientTypeCard | variant | compact, full | compact = default |
| CTABanner | variant | dark, light | dark = image + overlay; light = surface-50 |

---

*End of documentation. For live implementation details, refer to the source files under `src/`. This document is intended for developers and AI to understand, extend, and customize the MEGAFIXX Home Services LLC Next.js website.*
