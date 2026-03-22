# Services Page Layout Visual Reference

**Quick reference guide for the redesigned Services page layout**

---

## 1. Hero Section: Split Layout

### Desktop (lg+)
```
┌──────────────────────────────────────────────────────────────────┐
│  CHARCOAL LEFT (50%)  │  IMAGE RIGHT (50%)                       │
│                       │                                          │
│  ┌─────────────────┐  │  ┌──────────────────────────────────────┐│
│  │ Complete        │  │  │                                      ││
│  │ Maintenance     │  │  │  Hero Image                          ││
│  │ Solutions       │  │  │  (/images/heroes/hero-services.jpg)  ││
│  │                 │  │  │                                      ││
│  │ ───────         │  │  │                                      ││
│  │                 │  │  │                                      ││
│  │ Seven speci...  │  │  │                                      ││
│  └─────────────────┘  │  └──────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────┘
```

### Tablet (md)
```
Same as desktop but with responsive padding
```

### Mobile (< md)
```
┌──────────────────────────────────┐
│  TEXT (Full width)               │
│  ┌───────────────────────────────┐
│  │ Complete Maintenance Solutions │
│  │ ─────────                      │
│  │ Seven specialized...           │
│  └───────────────────────────────┘
├──────────────────────────────────┤
│  IMAGE (Full width, h-48)        │
│  ┌───────────────────────────────┐
│  │ Hero Image                     │
│  │ (height: 192px)                │
│  └───────────────────────────────┘
└──────────────────────────────────┘
```

---

## 2. Intro Section: Left-Bordered Heading + Stat Strip

### Desktop Layout
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ├─ Seven Specialized Services                              │
│  │  ONECALL FIELD SERVICES LLC provides specialized support across...          │
│  │                                                           │
│  ┌──────────────────────────────────────────────────────────┐
│  │ Statewide  │  Licensed  │  24-Hour                       │
│  │ Coverage   │  & Insured │  Response                      │
│  └──────────────────────────────────────────────────────────┘
│                                                              │
└──────────────────────────────────────────────────────────────┘

Stat Strip Details:
- Background: surface-50 (light gray)
- Dividers: Vertical on desktop (md:divide-x)
- Height: py-8 per stat
- Padding: px-6 sm:px-8
```

### Mobile (<md)
```
┌──────────────────────────────────┐
│ ├─ Seven Specialized Services   │
│ │  ONECALL FIELD SERVICES LLC provides...          │
│                                  │
│ ┌─ Statewide                    │
│ │  Coverage                      │
│ ├─ Licensed                     │
│ │  & Insured                     │
│ ├─ 24-Hour                      │
│ │  Response                      │
│ └─                              │
└──────────────────────────────────┘

Stat Strip Details:
- Vertical stacking (grid-cols-1)
- Horizontal dividers (divide-y)
- Full width cells
```

---

## 3. Service Cards: Alternating Horizontal Rows

### Row 1 (Odd) — Image Left
```
Desktop (lg+):
┌────────────────────────────────────────────────────────────┐
│ IMAGE (40%)       │ CONTENT (60%)                          │
│ ┌──────────────┐  │ ┌──────────────────────────────────┐  │
│ │              │  │ │ 🔧 Icon Badge                   │  │
│ │   Service    │  │ │ Service Title                    │  │
│ │   Image      │  │ │ Service description text...      │  │
│ │   (640px)    │  │ │ [Sky Blue: Statewide Badge]     │  │
│ │              │  │ │ ✓ Feature 1                      │  │
│ │              │  │ │ ✓ Feature 2                      │  │
│ │              │  │ │ ✓ Feature 3                      │  │
│ │              │  │ │ [Get a Quote Button]             │  │
│ └──────────────┘  │ └──────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

### Row 2 (Even) — Image Right (flex-row-reverse)
```
Desktop (lg+):
┌────────────────────────────────────────────────────────────┐
│ CONTENT (60%)                          │ IMAGE (40%)       │
│ ┌──────────────────────────────────┐  │ ┌──────────────┐  │
│ │ 💧 Icon Badge                   │  │ │              │  │
│ │ Service Title                    │  │ │   Service    │  │
│ │ Service description text...      │  │ │   Image      │  │
│ │ [Sky Blue: Statewide Badge]     │  │ │   (640px)    │  │
│ │ ✓ Feature 1                      │  │ │              │  │
│ │ ✓ Feature 2                      │  │ │              │  │
│ │ ✓ Feature 3                      │  │ │              │  │
│ │ [Get a Quote Button]             │  │ └──────────────┘  │
│ └──────────────────────────────────┘  │                    │
└────────────────────────────────────────────────────────────┘
```

### Mobile (< md)
```
All rows stack vertically:
┌──────────────────────────────┐
│ IMAGE (Full Width, h-48)     │
│ ┌────────────────────────────┐
│ │   Service Image            │
│ │   (height: 192px)          │
│ └────────────────────────────┘
├──────────────────────────────┤
│ CONTENT (Full Width)         │
│ ┌────────────────────────────┐
│ │ 🔧 Icon Badge             │
│ │ Service Title             │
│ │ Description...            │
│ │ [Badge] Statewide         │
│ │ ✓ Feature 1               │
│ │ ✓ Feature 2               │
│ │ ✓ Feature 3               │
│ │ [Get a Quote]             │
│ └────────────────────────────┘
└──────────────────────────────┘
```

### Card Hover Effects
```
Desktop Only:
- Border: surface-200 → teal/40 (teal highlight)
- Shadow: shadow-card → shadow-card-hover
- Transform: translateY(-4px) lift
- Duration: 300ms ease

Mobile/Touch:
- Only shadow and border changes (no transform)
- respects prefers-reduced-motion
```

---

## 4. Bottom CTA Banner: Two-Column Layout

### Desktop (md+)
```
┌────────────────────────────────────────────────────────┐
│ TEXT (60%, left-aligned)  │  BUTTONS (40%, centered)  │
│                          │                            │
│ Prepared to Begin?       │  ┌──────────────────────┐ │
│ Get a personalized...    │  │ Get a Free Quote     │ │
│                          │  └──────────────────────┘ │
│                          │         ─ teal ─          │
│                          │  123-456-7890          │
│                          │                            │
└────────────────────────────────────────────────────────┘
```

### Mobile (< md)
```
┌──────────────────────────────┐
│ TEXT (Full Width, centered)  │
│ Prepared to Begin?           │
│ Get a personalized...        │
├──────────────────────────────┤
│ BUTTONS (Stacked, centered)  │
│    ┌─────────────────────┐   │
│    │ Get a Free Quote    │   │
│    └─────────────────────┘   │
│             ─ teal ─         │
│    123-456-7890            │
└──────────────────────────────┘
```

### CTA Banner Details
```
Container:
  Background: bg-charcoal (#1F2A33)
  Padding: p-8 sm:p-10 md:p-14
  Border Radius: rounded-2xl
  Gap: gap-8

Divider:
  Height: h-px (1px)
  Width: w-12 (48px)
  Color: bg-teal
  Margin: my-4
```

---

## 5. Responsive Breakpoints Summary

| Breakpoint | Width | Layout Changes |
|---|---|---|
| **Mobile** | < 768px | Stacked hero (text top, image bottom); Single-column cards; CTA stacked |
| **Tablet** | 768–1024px | Split hero; Alternating cards begin; CTA transitions |
| **Desktop** | 1024px+ | Full split hero; Full alternating rows (40/60); 2-column CTA |

---

## 6. Animation Timeline

### Page Load
```
Sequence:
1. Hero fades in (no delay)
2. Left-bordered heading fades up (0.0s)
3. Stat strip fades up (0.0s)
4. Service Card 1 fades up (0.0s)
5. Service Card 2 fades up (0.08s)
6. Service Card 3 fades up (0.16s)
7. Service Card 4 fades up (0.24s)
... and so on

Per-item delay: index * 0.08s
Duration: 0.6s
Easing: ease-out
```

### Scroll Trigger
```
Viewport margin: -50px (triggers 50px before fully visible)
Once: true (animates only once per page load)
Reduced motion: Instant appearance (respects prefers-reduced-motion)
```

---

## 7. Color Usage

### Hero Section
```
Left (Text):      bg-charcoal (#1F2A33), text-white, accent teal/50
Right (Image):    No color overlay (direct image)
```

### Intro Section
```
Heading border:   border-teal (4px)
Stat background:  bg-surface-50 (#F7F9FA)
Stat text:        text-teal (numbers), text-text-muted (labels)
Dividers:         divide-surface-200 (#CBD2D8)
```

### Service Cards
```
Border:           border-surface-200 (normal) → teal/40 (hover)
Icon badge:       bg-teal-muted (12% opacity)
Badge bg:         bg-skyblue-light (#EFF8FF)
Badge text:       text-skyblue (#0EA5E9)
Feature icons:    text-teal (#14B8A6)
Button:           bg-charcoal → hover: darker shade
```

### CTA Banner
```
Background:       bg-charcoal (#1F2A33)
Text (heading):   text-white
Text (body):      text-surface-200
Divider:          bg-teal
Link:             text-teal → hover: teal-light
```

---

## 8. Typography Hierarchy

### Hero
```
H1: Outfit, 3xl (30px) → 4xl (36px) → 5xl (48px)
P:  Plus Jakarta Sans, base–lg, surface-200 color
```

### Intro
```
H2: Outfit, 4xl (36px) → 5xl (48px)
P:  Plus Jakarta Sans, lg, text-muted
Stat numbers: Outfit, 2xl → 3xl, bold, teal
Stat labels: Plus Jakarta Sans, sm, text-muted
```

### Service Cards
```
H3: Outfit, 2xl, bold, charcoal
P:  Plus Jakarta Sans, base, text-muted
List items: Plus Jakarta Sans, sm, text-muted
```

### CTA Banner
```
H2: Outfit, 3xl → 4xl
P:  Plus Jakarta Sans, base, surface-200
Phone link: Plus Jakarta Sans, base, teal
```

---

## 9. Accessibility Structure

### Semantic HTML
```
<section>              Hero container
<section>              Content container
  <div border-l>       Left-bordered heading (visual accent)
  <div grid>           Stat strip
  <div space-y>        Service card rows
    <ul>               Features list
    <li + CheckCircle> Feature item
```

### ARIA Attributes
```
aria-hidden="true"     Decorative icons, dividers
alt="text"             All images with descriptive text
role="article"         Service card rows (implicit in article context)
```

### Focus Management
```
Focus ring: 2px teal outline with 3px offset
Visible on: Links, buttons, interactive elements
Keyboard nav: Tab through all focusable elements
```

---

## 10. Touch Optimization

### Button Sizing
```
Primary: h-12 px-8 (min 48×48px)
Secondary: h-10 px-6 (min 44×44px)
All above WCAG minimum touch target (44×44px)
```

### Spacing
```
Mobile: px-6 sm:px-8 (gaps >= 8px)
Prevents accidental touch misses
Responsive padding increases on larger screens
```

### Hover/Active States
```
Desktop: Hover effects active
Mobile: Touch-friendly, no hover (uses active/focus instead)
Reduced motion: Disabled animations respect preference
```

---

**Version:** 1.0  
**Last Updated:** March 22, 2026  
**Status:** Production Ready ✅
