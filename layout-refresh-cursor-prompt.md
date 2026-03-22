# ONECALL FIELD SERVICES LLC — Site-Wide Layout Refresh
## Cursor AI Prompt: Differentiate layout across all sections (Hero & Navbar unchanged)

---

## Mission

The site's layout patterns were copied from another website. We need to make **subtle but meaningful structural changes** across every section and page so it looks original — while keeping the same content, teal/charcoal color palette, fonts, and full responsiveness.

**DO NOT touch:**
- `src/components/layout/Navbar.tsx` — leave completely unchanged
- `src/components/sections/Hero.tsx` — leave completely unchanged
- Any color tokens in `globals.css`
- Any font variables
- Any data files in `src/lib/data/`
- Any API routes
- Any form logic or validation

**ONLY change visual layout, spacing, card shapes, section structures, and decorative patterns.**

---

## Global Changes (Apply Everywhere)

### 1. Section heading rule — change the decorative accent line

**Current:** `h-0.5 w-12 bg-teal` + `w-4 bg-surface-300` side by side (two pills)

**New:** Replace with a single left-aligned accent using a short teal bar + dot pattern:
```tsx
// In SectionHeading.tsx — change the rule markup to:
<div className="flex items-center gap-2 mt-3">
  <div className="h-1 w-8 bg-teal rounded-full" />
  <div className="h-1 w-1 bg-teal/50 rounded-full" />
  <div className="h-1 w-1 bg-teal/30 rounded-full" />
</div>
```
When `align="center"`, wrap in `<div className="flex justify-center">`.

---

### 2. Card border radius — make slightly more rounded

**Current:** `rounded-xl` on most cards

**New:** Change to `rounded-2xl` on all section cards (ServiceCard, ClientTypeCard, TestimonialCard, WhyChooseUs feature cards, QualityProcess step cards, VendorWhyPartner cards, VendorServices cards). Keep `rounded-xl` only on form input fields.

---

### 3. Section background alternation — change the pattern

**Current:** White → surface-50 → white → surface-50 (pure alternation)

**New:** Use this order across the homepage sections in `src/app/page.tsx`:
- StatsBar: keep `bg-surface-100` (no change)
- ServicesSection: `bg-white`
- ClientsSection: `bg-surface-50`
- WhyChooseUs: `bg-charcoal` (dark section — see WhyChooseUs changes below)
- QualityProcess: `bg-white`
- Testimonials: `bg-surface-50`
- CTABanner: keep existing dark variant
- ContactSection: `bg-white`

---

## Component-by-Component Changes

---

### `src/components/ui/SectionHeading.tsx`

Apply the new rule from Global Change #1. No other changes.

---

### `src/components/sections/StatsBar.tsx`

**Current:** Horizontal row of 4 stats with dividers between them, flat surface-100 background.

**Change:** Add a thin teal top border line and change the inner layout so each stat has a small teal icon-circle above the number instead of a plain number-only layout.

```
Before: [ 10+ Years | 500+ Properties | Statewide | 100% Insured ]

After:
┌──────────────────────────────────────────┐  ← 2px teal top border
│   🔵     🔵     🔵     🔵               │
│  10+    500+  State  100%                │
│  Years  Props  wide  Insured             │
└──────────────────────────────────────────┘
```

Specifically:
- Add `border-t-2 border-teal` to the section element
- Wrap each stat in a `flex flex-col items-center gap-1` container
- Add a small `w-8 h-8 rounded-full bg-teal-muted flex items-center justify-center` circle above each number with a relevant Lucide icon inside (`text-teal w-4 h-4`):
  - Years → `<Clock />`
  - Properties → `<Building2 />`
  - Statewide → `<MapPin />`
  - Insured → `<ShieldCheck />`
- Keep count-up animation on numbers
- Keep the vertical dividers between stats on desktop

---

### `src/components/sections/ServicesSection.tsx`

**Current:** SectionHeading (centered) → 3-col card grid → "View All Services" button centered below.

**Change layout to left-aligned heading with a right-side CTA link on the same row:**

```
┌────────────────────────────────────────────┐
│ Our Services              [View All →]     │  ← heading + CTA on same row
│ Subtitle text                              │
├────────────────────────────────────────────┤
│  [Card]    [Card]    [Card]                │
│  [Card]    [Card]    [Card]                │
└────────────────────────────────────────────┘
```

- Replace centered `SectionHeading` with a `flex items-end justify-between` row
- Left: `SectionHeading align="left"` (title + subtitle)
- Right: A ghost-style link `<Link>` with `text-teal font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all` and `<ArrowRight className="w-4 h-4" />` — "View All Services →"
- This CTA link replaces the centered button below the grid — remove the old button
- Keep the 3-col card grid unchanged

---

### `src/components/sections/ClientsSection.tsx`

**Current:** SectionHeading (centered) → compact ClientTypeCard grid → centered "Learn More" link.

**Change:** Same heading+CTA inline pattern as ServicesSection (left heading, right "Our Clients →" link). Remove the old centered "Learn More" link. Keep grid unchanged.

---

### `src/components/sections/WhyChooseUs.tsx`

**Current:** White/surface background, feature cards in a grid, stats row below.

**Change to a dark section:**
- Change section background to `bg-charcoal`
- Change all heading text from `text-charcoal` → `text-white`
- Change body/subtitle text from `text-text-muted` → `text-surface-300`
- Change feature cards from white background to `bg-white/5 border border-white/10` with `hover:bg-white/10 hover:border-teal/30`
- Change card icon containers from `bg-teal-muted` → `bg-teal/20`
- Change card title text → `text-white`
- Change card description text → `text-surface-300`
- Change stats row numbers → `text-teal` (they already are, keep)
- Change stats row labels → `text-surface-300`
- Change stats row dividers from `border-surface-200` → `border-white/15`
- Update `SectionHeading` usage: pass custom className to override charcoal text colors for this dark context (add a `titleClassName` prop if needed, or override inline)

---

### `src/components/sections/QualityProcess.tsx`

**Current:** 3 step cards in a row with a connector line behind them on desktop.

**Change connector + card numbering style:**

- Change the connector line from a plain `border-t border-dashed border-surface-200` to:
  ```tsx
  <div className="absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-teal/20 via-teal/60 to-teal/20" />
  ```
- Change step number circles from plain numbered circles to a two-layer design:
  ```tsx
  <div className="relative w-14 h-14 mx-auto mb-4">
    <div className="absolute inset-0 rounded-full bg-teal/10 animate-ping opacity-30" />
    <div className="relative w-14 h-14 rounded-full bg-teal/15 border border-teal/30
                    flex items-center justify-center">
      <span className="font-display text-lg font-bold text-teal">0{n}</span>
    </div>
  </div>
  ```
- Keep card content (title, description) unchanged
- Keep 3-col responsive grid

---

### `src/components/sections/Testimonials.tsx`

**Current:** SectionHeading (centered) → carousel on mobile, 3-col grid on desktop. Cards have white bg + border.

**Changes:**
- Add a subtle background to the section: `bg-surface-50` (already in the new alternation order)
- Change the carousel/grid top area: add a decorative large opening quote mark above the SectionHeading:
  ```tsx
  <div className="text-center mb-2">
    <span className="font-display text-8xl font-bold text-teal/15 leading-none select-none">
      "
    </span>
  </div>
  ```
- Change navigation dots on mobile: replace plain gray/teal dots with slightly larger `w-2 h-2` rounded-full dots that use `bg-teal` active and `bg-surface-300` inactive (keep same logic, just tweak sizing)
- Keep cards unchanged (only border radius changes from Global Change #2)

---

### `src/components/sections/CTABanner.tsx`

**Current (dark variant):** Full-width dark section with image + charcoal overlay, centered heading and two CTA buttons side by side.

**Change button layout:**
- Stack CTAs vertically on mobile (they likely are already), but on desktop change from side-by-side `flex-row` to keeping them inline with a vertical divider text between them:
  ```tsx
  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
    <Button ...>Get a Free Quote</Button>
    <span className="hidden sm:block text-white/30 text-sm">or</span>
    <Button variant="secondary" ...>View Our Services</Button>
  </div>
  ```
- Add a thin teal/40 top border line to the section: `border-t border-teal/20`

---

### `src/components/sections/ContactSection.tsx`

**Current:** Two-column layout (info left, CTA right) or centered block with contact info and a primary button linking to /quote.

**Change:** Add a soft left border accent to the contact info items:
- Wrap each contact info row (phone, email, location, hours) in:
  ```tsx
  <div className="flex items-start gap-3 pl-3 border-l-2 border-teal/40">
    <Icon className="text-teal mt-0.5 w-5 h-5 flex-shrink-0" />
    <div>...</div>
  </div>
  ```
- This makes each row feel like a structured list rather than a plain icon+text pair

---

### `src/components/cards/ServiceCard.tsx`

**Current (grid variant):** Full image top, icon overlapping, title, description, features, "Learn more →".

**Change icon placement:**
- Move the icon from overlapping the image bottom-left to being inside the card content area, above the title, in a standalone `bg-teal-muted rounded-xl p-2.5 w-10 h-10` box:
  ```tsx
  // Remove icon from image overlay position
  // Add above <h3> title:
  <div className="w-10 h-10 rounded-xl bg-teal-muted flex items-center justify-center mb-3">
    <Icon className="w-5 h-5 text-teal" />
  </div>
  ```
- Keep everything else (image, title, description, features, link) identical

---

### `src/components/cards/ClientTypeCard.tsx` (compact variant)

**Current:** Icon top-left circle, title, description, benefits list with CheckCircle.

**Change:** Add a small colored top bar to each card:
```tsx
// Add as first child inside the card div, before all content:
<div className="h-1 w-full bg-gradient-to-r from-teal to-teal/20 rounded-t-2xl -mx-0 -mt-0 mb-4" />
```
This gives each client type card a teal "header stripe" at the top.

---

### `src/components/cards/TestimonialCard.tsx`

**Current:** Stars → quote → avatar+name layout.

**Change order slightly:**
```
Before: [★★★★★]  [quote text]  [avatar | name/role]
After:  [avatar | name/role]  [★★★★★]  [quote text]
```

Specifically:
- Move the avatar+name row to the **top** of the card
- Keep stars below the name row
- Keep quote text at the bottom
- Add a subtle left border accent on the quote: `border-l-2 border-teal/30 pl-3`

---

### Vendor Page Sections

**`src/components/sections/VendorWhyPartner.tsx`**
- Apply same dark card style as WhyChooseUs change above (if this section has a dark background already, keep; if white, leave as-is)
- Add a teal top-bar stripe to each benefit card (same as ClientTypeCard change)

**`src/components/sections/VendorOnboarding.tsx`**
- Change step number style to match QualityProcess new ping-circle design (same code pattern as above)
- Change connector line to gradient (same as QualityProcess)

**`src/components/sections/VendorRequirements.tsx`**
- Change the teal and skyblue left-bar accents from full-height side bars to a short `h-1 w-full` top bar on each column header card (same stripe pattern as ClientTypeCard)

**`src/components/sections/VendorServices.tsx`**
- Change icon container from `bg-teal-muted` circle to a `rounded-2xl` square with `bg-teal/10 border border-teal/20` (squircle style instead of circle):
  ```tsx
  <div className="w-12 h-12 rounded-2xl bg-teal/10 border border-teal/20
                  flex items-center justify-center mb-3 group-hover:bg-teal/20 transition-colors">
    <Icon className="w-6 h-6 text-teal" />
  </div>
  ```

---

### Inner-Page Heroes (About, Services, Clients, Contact, Vendors)

All inner-page heroes use the same pattern: `bg-hero-bg`, solid color, centered h1 + subtitle.

**Change:** Add a decorative bottom fade to each inner-page hero section:
```tsx
// Add as last child inside each inner-page hero section:
<div className="absolute bottom-0 left-0 right-0 h-16
                bg-gradient-to-t from-white to-transparent pointer-events-none" />
```
This creates a smooth blend from the dark hero into the white first section below it.

Apply this to: `about/page.tsx`, `services/page.tsx`, `clients/page.tsx`, `contact/page.tsx`, `vendors/page.tsx` (in `VendorHero.tsx`).

Also add a faint teal horizontal rule above the subtitle on each inner hero:
```tsx
// Between h1 and subtitle <p>:
<div className="flex justify-center my-3">
  <div className="h-px w-16 bg-teal/50" />
</div>
```

---

### `src/app/about/page.tsx` — Values Section

**Current:** Values listed as plain icon + title + text rows or cards in a grid.

**Change:** If values are in a simple list/grid, add a left-border accent per item matching the ContactSection change:
```tsx
<div className="pl-4 border-l-2 border-teal/40">
  <h3 className="font-display font-semibold text-charcoal mb-1">{value.title}</h3>
  <p className="font-body text-text-muted">{value.description}</p>
</div>
```

---

## Spacing Micro-Adjustments

Make these small spacing changes globally across all sections to break the copied rhythm:

| Location | Current | Change To |
|---|---|---|
| Section `py` (most sections) | `py-20 lg:py-28` | `py-24 lg:py-32` |
| SectionHeading `mb` (below heading block) | `mb-12` or `mb-16` | `mb-10` with `mt-2` on the grid/content below |
| Card grid `gap` | `gap-8` | `gap-6` (slightly tighter) |
| Card inner padding | `p-6` | `p-5 lg:p-6` (mobile slightly tighter) |

---

## Files to Edit — Checklist

| File | Change |
|---|---|
| `src/components/ui/SectionHeading.tsx` | New accent rule (dot pattern) |
| `src/components/sections/StatsBar.tsx` | Icon circles above stats, teal top border |
| `src/components/sections/ServicesSection.tsx` | Left heading + inline right CTA link |
| `src/components/sections/ClientsSection.tsx` | Left heading + inline right CTA link |
| `src/components/sections/WhyChooseUs.tsx` | Dark bg, white/surface-300 text, glass cards |
| `src/components/sections/QualityProcess.tsx` | Gradient connector, ping step circles |
| `src/components/sections/Testimonials.tsx` | Large decorative quote mark above heading |
| `src/components/sections/CTABanner.tsx` | "or" divider between buttons, teal top border |
| `src/components/sections/ContactSection.tsx` | Left border accent on contact info rows |
| `src/components/cards/ServiceCard.tsx` | Icon moved inside card content (not overlapping image) |
| `src/components/cards/ClientTypeCard.tsx` | Teal top stripe bar |
| `src/components/cards/TestimonialCard.tsx` | Flip order: avatar/name top, stars mid, quote bottom |
| `src/components/sections/VendorWhyPartner.tsx` | Teal top stripe on benefit cards |
| `src/components/sections/VendorOnboarding.tsx` | Ping step circles + gradient connector |
| `src/components/sections/VendorRequirements.tsx` | Top bar instead of side bar on column headers |
| `src/components/sections/VendorServices.tsx` | Rounded-2xl square icon containers |
| `src/components/sections/VendorHero.tsx` | Bottom fade + teal hr between h1 and subtitle |
| `src/app/about/page.tsx` | Bottom hero fade + teal hr; values left-border accent |
| `src/app/services/page.tsx` | Bottom hero fade + teal hr |
| `src/app/clients/page.tsx` | Bottom hero fade + teal hr |
| `src/app/contact/page.tsx` | Bottom hero fade + teal hr |
| `src/app/page.tsx` | Section background alternation order |

---

## What Must NOT Change

| Item | Rule |
|---|---|
| `Navbar.tsx` | Do not touch — zero changes |
| `Hero.tsx` | Do not touch — zero changes |
| All color CSS variables | Do not change any hex values |
| All font variables | Do not change |
| All data files (`services.ts`, `clients.ts`, `testimonials.ts`) | Do not touch |
| All form logic and validation | Do not touch |
| All API routes | Do not touch |
| All text content (headings, copy, labels) | Do not change any wording |
| Responsive breakpoints | Keep all existing breakpoints, only change visual structure |
| Accessibility (focus rings, aria labels, skip link) | Keep unchanged |

---

## Summary of What Changes Visually

| What | Before | After |
|---|---|---|
| Section heading rule | Two side-by-side pills | Short bar + two dots |
| Card radius | rounded-xl | rounded-2xl |
| Section backgrounds | White/surface-50 alternating | Charcoal dark section added for WhyChooseUs |
| Stats bar | Plain numbers + labels | Icon circles above numbers |
| Services/Clients section header | Centered heading + bottom button | Left heading + inline right ghost link |
| Step circles (Process/Onboarding) | Plain numbered circles | Ping-animated teal circles |
| Connector lines | Dashed border | Gradient line (teal center, transparent edges) |
| ServiceCard icon | Overlaps image at bottom-left | Inside card content, above title |
| ClientTypeCard | Plain card | Teal top stripe |
| TestimonialCard | Stars → quote → avatar | Avatar → stars → quote with left border |
| Inner-page heroes | Hard edge at bottom | Soft white fade into next section |
| WhyChooseUs | Light background | Dark charcoal with glass cards |
| Contact info rows | Icon + text flat | Left teal border accent per row |

---

*This file is complete and self-contained. Run it in Cursor Agent mode. Work through the checklist top to bottom. Verify each component compiles before moving to the next.*
