# Hero Section Design Documentation

## Overview
The Hero section is the primary above-the-fold content on the homepage. It establishes brand trust, communicates core value propositions, and drives conversions through strategically placed calls-to-action (CTAs). The design emphasizes professionalism, regional coverage, and institutional-grade service quality.

---

## Layout Architecture

### Grid Structure
- **Desktop (1131px+):** Two-column layout with 12-16px gap
  - **Left Column:** Headline, body copy, CTAs, trust indicators
  - **Right Column:** 2x2 stat cards grid
- **Mobile & Tablet (<1131px):** Single-column centered layout with 12px gap

### Dimensions
- **Container:** `max-w-7xl` (1280px) with responsive padding
  - Mobile: `px-4` (16px)
  - Tablet: `sm:px-6` (24px)
  - Desktop: `lg:px-8` (32px)
- **Min-height:** Full viewport (`min-h-screen`)
- **Top Padding:** Responsive
  - Base: `pt-20` (80px)
  - Tablet: `sm:py-20` (80px vertical)
  - Desktop: `lg:py-24` (96px vertical)

### Component Sections
1. **Accent Line** - Top border
2. **Main Content Area** - Text + stats grid
3. **Trust Strip** - Bottom banner with company info

---

## Color Palette

### Primary Colors

#### Navy (#1A2233)
- **Hex:** `#1A2233`
- **CSS Variable:** `--color-navy`
- **Usage:** Primary dark background, text contrast
- **Transparency Variations:**
  - `navy/60` = 60% opacity (trust strip backdrop)

#### Steel Blue (#2563EB) — Brand Accent
- **Hex:** `#2563EB`
- **CSS Variable:** `--color-steel`
- **Usage:** Primary brand accent, CTAs, badges, icons, hover states
- **Related:**
  - Dark: `--color-steel-dark` (#1D4ED8)
  - Light: `--color-steel-light` (#EFF6FF)
  - Muted: `rgba(37,99,235,0.10)` — subtle backgrounds

#### Pearl/Off-White Tones
- **White:** `#FFFFFF` — primary text, icons
- **Pearl-300:** `#C8CAD4` — secondary/muted text, micro-copy
- **Hero Muted:** `#B8C4D6` — body copy in hero section

#### Hero Background
- **Hero BG:** `#1E2A3B` — main section background
- **Hero BG Dark:** `#111827` — fallback/accent

---

## Typography

### Font Families
- **Display Font:** 'Outfit' sans-serif
  - Used for: H1, stat values, badges
  - Weight: Bold (700)
  - Tracking: Tight for uppercase
  
- **Body Font:** 'Plus Jakarta Sans' sans-serif
  - Used for: Body copy, stat labels, micro-copy
  - Weight: Regular (400)
  
- **Accent Font:** 'Outfit' sans-serif
  - Used for: Badges, labels, uppercase micro-text
  - Weight: Medium (500)
  - Tracking: Wide (0.1em+)

### Text Styles

#### Headline (H1)
- **Font:** Display, Bold (700)
- **Size:**
  - Mobile: `text-4xl` (36px)
  - Tablet: `sm:text-5xl` (48px)
  - Desktop: `lg:text-6xl` (60px)
- **Line Height:** Tight (`leading-tight`)
- **Color:** White with steel blue accent on "Across Texas"
- **Max-width:** 3-4 lines recommended

#### Body Copy
- **Font:** Body, Regular (400)
- **Size:** `text-lg` (18px)
- **Line Height:** Relaxed (`leading-relaxed`)
- **Color:** `hero-muted` (#B8C4D6)
- **Max-width:** `max-w-xl` (448px) for readability

#### Stat Values
- **Font:** Display, Bold (700)
- **Size:**
  - Base: `text-3xl` (30px)
  - Desktop: `lg:text-4xl` (36px)
- **Color:** White

#### Stat Labels
- **Font:** Body, Regular (400)
- **Size:** `text-sm` (14px)
- **Line Height:** Snug (`leading-snug`)
- **Color:** Pearl-300 (#C8CAD4)

#### Eyebrow Badge
- **Font:** Accent, Medium (500)
- **Size:** `text-sm` (14px)
- **Color:** Steel (#2563EB)
- **Transform:** `uppercase`
- **Tracking:** `tracking-wide`

#### Trust Micro-labels
- **Font:** Body, Regular (400)
- **Size:** `text-sm` (14px)
- **Color:** Pearl-300 (#C8CAD4)

#### Trust Strip Text
- **Company Name:** Accent, Semibold (600), uppercase, white
- **Items:** Body, Regular (400), Pearl-300
- **Size:** `text-sm` (14px)

---

## Visual Elements

### Accent Line (Top)
- **Position:** Absolute top, full width
- **Height:** 3px
- **Background:** Linear gradient
  - `from-transparent` → `via-steel` → `to-transparent`
- **Opacity:** 60% (`opacity-60`)
- **Purpose:** Brand signature, visual hierarchy anchor

### Eyebrow Badge
- **Background:** Steel with low opacity (`bg-steel/15`)
- **Border:** Steel with low opacity (`border-steel/30`)
- **Border Radius:** `rounded-full`
- **Padding:** `px-4 py-1.5` (horizontal 16px, vertical 6px)
- **Content:**
  - Animated dot (pulse animation)
  - Text: "Texas Statewide Property Maintenance"
- **Alignment:** Centered on mobile, left-aligned on desktop

### Stat Cards
- **Layout:** 2x2 grid on desktop
  - Base gap: `gap-4`
  - Desktop: `lg:gap-5` (20px)
- **Card Styling:**
  - Background: White with 5% opacity (`bg-white/5`)
  - Border: White with 10% opacity (`border-white/10`, 1px)
  - Border Radius: `rounded-2xl` (16px)
  - Padding:
    - Base: `p-5` (20px)
    - Desktop: `lg:p-6` (24px)
- **Hover State:**
  - Background: `bg-white/10` (10% white)
  - Border: `border-steel/30` (steel with 30% opacity)
  - Transition: `transition-all duration-300`
- **Animation:**
  - Entrance: Staggered fade-up
  - Delay per card: 0.15s + (index × 0.1s)
  - Duration: 0.55s
  - Easing: easeOut
  - Respects `prefers-reduced-motion` preference

#### Icon Circle (within stat card)
- **Size:** 40x40px (`w-10 h-10`)
- **Background:** Steel with 15% opacity (`bg-steel/15`)
- **Border Radius:** `rounded-xl` (12px)
- **Hover:** `bg-steel/25` (25% opacity)
- **Icon:** Steel blue color, 20x20px

### CTA Buttons
- **Primary Button:**
  - Variant: Default (filled)
  - Text: "Get a Free Quote"
  - Size: Large
  - Link: `/quote`
  
- **Secondary Button:**
  - Variant: Secondary (outline)
  - Text: "View Our Services"
  - Size: Large
  - Link: `/services`
  - Border: `border-white/30`
  - Hover Background: `bg-white/10`
  - Hover Border: `border-white/60`
  - Text: White

- **Button Layout:**
  - Flex wrap: `flex-wrap`
  - Gap: `gap-4` (16px)
  - Alignment: Centered on mobile, left-aligned on desktop
  - Margin-top: `mt-2` (8px)

### Trust Indicators (Micro-row)
- **Layout:** Flex wrap with gap
  - Horizontal gap: `gap-x-6` (24px)
  - Vertical gap: `gap-y-2` (8px)
- **Icon Size:** 16x16px (`w-4 h-4`)
- **Icon Color:** Steel (#2563EB)
- **Text:** Pearl-300 (#C8CAD4)
- **Items:**
  1. Shield Check + "Fully Protected & Bonded"
  2. Map Pin + "Complete State Coverage"
  3. Clock + "Prompt Service Delivery"

### Trust Strip (Bottom)
- **Background:** Navy at 60% opacity with backdrop blur
  - `bg-navy/60 backdrop-blur-sm`
- **Border:** Top border with white 10% opacity
  - `border-t border-white/10`
- **Padding:** `py-4` (16px vertical)
- **Content:** Company name + divider separators + benefit statements
- **Dividers:**
  - Display: Hidden on mobile, visible on tablet+
  - Style: Vertical line, 16px height, white 20% opacity
  - Spacing: `gap-x-8` (32px) horizontal

---

## Spacing & Gaps

### Internal Spacing
- **Text Column Gaps:**
  - Between sections: `gap-6` (24px)
  
- **Button Group Gaps:**
  - Between buttons: `gap-4` (16px)
  
- **Stat Grid Gaps:**
  - Base: `gap-4` (16px)
  - Desktop: `lg:gap-5` (20px)
  
- **Main Grid Gap:** 
  - Base: `gap-12` (48px)
  - Desktop: `lg:gap-16` (64px)

### External Spacing
- **Container Padding:**
  - Mobile: `px-4` (16px)
  - Tablet: `sm:px-6` (24px)
  - Desktop: `lg:px-8` (32px)
- **Section Vertical Padding:**
  - Top: `pt-20` (80px)
  - Inner: `py-16 sm:py-20 lg:py-24`
  - Trust Strip: `py-4` (16px)

---

## Animations & Interactions

### Motion
- **Library:** Framer Motion
- **Reduced Motion Support:** All animations respect `prefers-reduced-motion` preference

### Stat Cards Animation
- **Type:** Staggered entrance (fade-up)
- **Initial State:** `opacity: 0, y: 24px`
- **Final State:** `opacity: 1, y: 0px`
- **Timing:**
  - Delay pattern: 0.15s + (card index × 0.1s)
  - First card: 0.15s delay
  - Second card: 0.25s delay
  - Third card: 0.35s delay
  - Fourth card: 0.45s delay
  - Duration: 0.55s
  - Easing: `easeOut`

### Hover Effects
- **Stat Cards:**
  - Background fade: `white/5` → `white/10`
  - Border color shift: `white/10` → `steel/30`
  - Duration: `duration-300` (300ms)
  
- **Eyebrow Badge:**
  - Pulsing dot animation
  - Built-in `animate-pulse` class

### Pulse Animation (Badge Indicator)
- **Target:** Dot in eyebrow badge
- **Size:** `w-2 h-2` (8x8px)
- **Color:** Steel (#2563EB)
- **Animation:** Tailwind `animate-pulse` (opacity oscillation)

---

## Background & Texture

### Hero Texture Overlay
- **Pattern:** Diagonal geometric lines (45° criss-cross)
- **Implementation:** Dual linear gradients
  - Primary: `135deg` (diagonal /)
  - Secondary: `225deg` (diagonal \)
- **Color:** White with 4% opacity
- **Background Size:** 60x60px repeat
- **Layer:** Absolute positioned, full coverage, `pointer-events-none`
- **Purpose:** Subtle visual interest, depth, brand sophistication

---

## Responsive Breakpoints

### Mobile First
- **Mobile (< 640px):**
  - Single column layout
  - Centered text alignment
  - No stat card grid on right
  
- **Tablet (640px - 1130px):**
  - Still single column
  - Larger text sizes (`sm:text-5xl`)
  - Larger padding (`sm:px-6`, `sm:py-20`)
  
- **Desktop (1131px+):**
  - Two-column layout
  - Left-aligned text
  - Stat cards on right (2x2 grid)
  - Larger heading (`lg:text-6xl`)
  - Largest padding (`lg:px-8`, `lg:py-24`)
  - Larger gaps (`lg:gap-16`, `lg:gap-5`)

### Custom Breakpoint
- `min-[1131px]` — Tailwind custom breakpoint for two-column trigger

---

## Accessibility Features

### Color Contrast
- White text on navy/dark backgrounds: ✓ WCAG AAA (7:1+)
- Steel blue links and accents: ✓ Sufficient contrast
- Pearl-300 on navy: ✓ WCAG AA (4.5:1+)

### Motion Preferences
- All Framer Motion animations respect `prefers-reduced-motion` media query
- Reduced motion: Animations removed, content displayed immediately

### Semantic HTML
- Proper heading hierarchy (H1 for main headline)
- Semantic buttons with link elements
- Icon accessibility via Lucide React components

### Focus Management
- Global focus ring: 2px steel blue outline with 3px offset
- Keyboard navigable CTAs and links

---

## Design System References

### Color Variables (CSS)
- `--color-steel` — #2563EB (primary brand blue)
- `--color-navy` — #1A2233 (dark backgrounds)
- `--color-hero-bg` — #1E2A3B (hero section bg)
- `--color-hero-muted` — #B8C4D6 (body text)
- `--color-pearl-300` — #C8CAD4 (secondary text)

### Font Variables (CSS)
- `--font-display` — 'Outfit' sans-serif
- `--font-body` — 'Plus Jakarta Sans' sans-serif
- `--font-accent` — 'Outfit' sans-serif

### Shadow (CSS)
- `--shadow-card-hover` — `0 4px 16px rgba(37,99,235,0.12), 0 12px 32px rgba(26,34,51,0.10)`
- Applied to stat cards on hover

---

## Key Statistics Displayed

The hero section showcases four key metrics in animated stat cards:

1. **500+** Properties Maintained Statewide
2. **10+** Years of Industry Leadership
3. **100%** Fully Certified & Bonded
4. **7** Specialized Service Categories

Each metric reinforces institutional credibility and regional expertise.

---

## Content Sections Summary

| Section | Content | Visual Weight |
|---------|---------|----------------|
| **Eyebrow Badge** | "Texas Statewide Property Maintenance" | Low (subtle) |
| **H1 Headline** | "Expert Property Maintenance Across Texas" | High (dominant) |
| **Body Paragraph** | Value proposition and trust statement | Medium |
| **CTA Buttons** | Primary + Secondary actions | High (conversions) |
| **Trust Indicators** | 3 micro-icons + labels | Medium (credibility) |
| **Stat Cards** | 4 animated metrics (2x2 grid) | High (impressive) |
| **Trust Strip** | Company name + benefit statements | Low (foundational) |

---

## Implementation Notes

- **Framework:** Next.js with React
- **Styling:** Tailwind CSS + CSS custom properties
- **Animation Library:** Framer Motion
- **Icon Library:** Lucide React
- **Component Path:** `src/components/sections/Hero.tsx`

---

**Version:** 1.0  
**Last Updated:** March 2026  
**Author:** Design System Documentation
