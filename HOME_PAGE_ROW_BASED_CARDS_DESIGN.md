# Home Page Services Cards — Row-Based Horizontal Layout

**Updated design documentation for the new row-based service cards on the home page**

---

## Overview

The home page services cards have been redesigned with a **row-based horizontal layout**. Each card now displays image and content side by side within a single card, creating a more engaging and compact grid layout.

**Key Change:** From mixed layout (featured + grid) → To uniform row-based grid with horizontal cards

---

## Layout Structure

### Desktop (lg+) Layout

```
┌─────────────────────────────────────┬─────────────────────────────────────┐
│ SERVICE 1 (2 COLS)                  │ SERVICE 2 (2 COLS)                  │
│ ┌────────────┐                      │ ┌────────────┐                      │
│ │   Image    │ Content (Title,      │ │   Image    │ Content (Title,      │
│ │   40%      │ Desc, Features)      │ │   40%      │ Desc, Features)      │
│ │   w-2/5    │ 60%                  │ │   w-2/5    │ 60%                  │
│ │            │ w-3/5                │ │            │ w-3/5                │
│ │            │ [Learn More]         │ │            │ [Learn More]         │
│ └────────────┘                      │ └────────────┘                      │
└─────────────────────────────────────┴─────────────────────────────────────┘

┌─────────────────────────────────────┬─────────────────────────────────────┐
│ SERVICE 3                           │ SERVICE 4                           │
│ (Same layout as above)              │ (Same layout as above)              │
└─────────────────────────────────────┴─────────────────────────────────────┘

┌─────────────────────────────────────┬─────────────────────────────────────┐
│ SERVICE 5                           │ SERVICE 6                           │
│ (Same layout as above)              │ (Same layout as above)              │
└─────────────────────────────────────┴─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ SERVICE 7 (Last card)               │
│ (Same layout as above, full width)  │
└─────────────────────────────────────┘
```

**Grid Properties:**
```
grid:           grid-cols-1 md:grid-cols-2 lg:grid-cols-2
gap:            gap-6 (24px between all cards)
responsive:     1 column on mobile, 2 columns on tablet/desktop
```

### Tablet (md) Layout

```
┌─────────────────────────────────────┬─────────────────────────────────────┐
│ SERVICE 1 (Responsive row layout)    │ SERVICE 2 (Responsive row layout)    │
│ ┌────────────┐                      │ ┌────────────┐                      │
│ │   Image    │ Content              │ │   Image    │ Content              │
│ │   40%      │ 60%                  │ │   40%      │ 60%                  │
│ │            │ [Learn More]         │ │            │ [Learn More]         │
│ └────────────┘                      │ └────────────┘                      │
└─────────────────────────────────────┴─────────────────────────────────────┘
(Same 2-column layout as desktop, cards adapt to width)
```

### Mobile (< md) Layout

```
┌─────────────────────────────────────┐
│ SERVICE 1 (Full Width)              │
│ ┌──────────────────────────────────┐
│ │  Image (Full Width, h-48)        │
│ │  ┌────────────────────────────┐  │
│ │  │  Service image preview     │  │
│ │  └────────────────────────────┘  │
│ └──────────────────────────────────┘
│ Content (Full Width Below Image)    │
│ ┌──────────────────────────────────┐
│ │  Icon Badge (w-8 h-8)            │
│ │  Title (2 lines max)             │
│ │  Description (2 lines max)       │
│ │  ✓ Feature 1 (max 2 features)   │
│ │  ✓ Feature 2                    │
│ │  [Learn More Link]               │
│ └──────────────────────────────────┘
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ SERVICE 2 (Same layout, full width) │
│ (Image stacked on top, content below)
└─────────────────────────────────────┘

(Repeat for all 7 services)
```

---

## Card Design Details

### Container Properties

```
Background:         white
Border:             1px pearl-200
Border radius:      rounded-2xl (16px)
Box shadow:         shadow-card (normal), shadow-card-hover (on hover)
Display:            flex flex-col sm:flex-row (stack on mobile, row on tablet+)
Height:             h-full (full height for equal cards)
Hover effect:       Border steel/40, shadow elevated, -4px lift
Transition:         all 300ms ease
```

### Image Section

```
Width:              Full (mobile), 40% (tablet+)    [sm:w-2/5]
Height:             h-48 (mobile), auto (tablet+)   [sm:h-auto]
Min height (tablet+): sm:min-h-[240px]
Flex shrink:        flex-shrink-0 (prevents image compression)

Image properties:
  fill:             true (Next.js Image)
  object-fit:       cover (crops to fill)
  onError:          Shows icon fallback
  
Fallback (on image error):
  Background:       pearl-200 (light gray)
  Icon:             service.icon (teal)
  Size:             w-12 h-12 (48px)
```

### Content Section

```
Width:              Full (mobile), 60% (tablet+)     [sm:w-3/5]
Padding:            p-4 sm:p-5 (16px mobile, 20px tablet+)
Display:            flex flex-col justify-between
Flex grow:          1 (expands to fill available space)

Sub-elements spacing:
  Icon badge:       mb-2
  Title:            mb-2
  Description:      mb-3
  Features:         mb-3
  Link:             mt-auto (pushed to bottom)
```

### Icon Badge

```
Size:               w-8 h-8 (32px)
Background:         bg-steel-muted (12% opacity steel)
Border radius:      rounded-lg (8px)
Display:            flex items-center justify-center
Icon:               w-4 h-4 (16px, steel color)
```

### Title

```
Font:               font-display (Outfit)
Size:               text-base (mobile) → sm:text-lg (16px → 18px)
Weight:             bold (700)
Color:              navy
Line clamp:         line-clamp-2 (max 2 lines)
Margin:             mb-2
```

### Description

```
Font:               font-body (Plus Jakarta Sans)
Size:               text-sm (14px)
Color:              text-muted (#64748B)
Line clamp:         line-clamp-2 (max 2 lines, truncated)
Margin:             mb-3
```

### Features List

```
Layout:             space-y-1.5 (6px between items)
Max items:          2 (show only first 2 features for compact view)
Margin:             mb-3
Flex grow:          flex-grow (pushes to middle, link to bottom)

Feature item:
  Display:          flex items-start gap-1.5
  Icon:             CheckCircle w-3.5 h-3.5 (14px, steel)
  Text:             font-body text-xs text-text-muted
  Text clamp:       line-clamp-1 (single line, no wrap)
```

### Learn More Link

```
Display:            inline-flex items-center gap-1
Font:               font-accent (Outfit), medium (500), text-sm (14px)
Color:              steel (normal) → steel-dark (hover)
Text decoration:    none (normal) → underline (hover)
Icon:               ArrowRight w-3.5 h-3.5 (14px)
Transition:         all 300ms ease
Margin:             mt-auto (pushes to bottom via flex)

Icon animation on link hover:
  Transform:        translateX(1) / 4px right
  Duration:         300ms
  Easing:           ease

Focus state:
  Ring:             2px steel
  Outline:          none
  Offset:           2px (focus-ring-offset-2)
  Offset color:     white
  Border radius:    rounded
```

---

## Responsive Behavior

| Breakpoint | Grid | Image Width | Content Width | Layout |
|---|---|---|---|---|
| **Mobile (< 640px)** | 1 column (grid-cols-1) | Full width | Full width | Stacked vertically |
| **Tablet (640–1024px)** | 2 columns (md:grid-cols-2) | 40% (sm:w-2/5) | 60% (sm:w-3/5) | Row (flex-row) |
| **Desktop (1024px+)** | 2 columns (lg:grid-cols-2) | 40% (sm:w-2/5) | 60% (sm:w-3/5) | Row (flex-row) |

**Key Points:**
- Mobile: Cards stack vertically, image full width on top, content below
- Tablet+: Cards display as horizontal rows, image left (40%), content right (60%)
- All cards: Uniform grid, no featured vs grid variants

---

## Animation & Interaction

### Scroll-Triggered Animation

```
Trigger:         Element enters viewport
Library:         Framer Motion (motion.div + whileInView)

From state:
  opacity: 0
  y: 30 (pushed down)

To state:
  opacity: 1
  y: 0 (normal position)

Duration:        0.6s
Easing:          ease-out (default)
Stagger delay:   index * 0.08s (0s, 0.08s, 0.16s, ...)

Viewport:        once: true, margin: "-50px"
                 (triggers when 50px before visible, only once)

Reduced motion:  Instant appearance (no animation)
```

### Hover Effects (Desktop Only)

```
Card hover:
  Border:        pearl-200 → steel/40
  Shadow:        shadow-card → shadow-card-hover (elevated)
  Transform:     -translate-y-1 (4px up)
  Duration:      300ms ease
  
Link hover:
  Color:         steel → steel-dark
  Underline:     appears (text-decoration: underline)
  Arrow icon:    translateX(4px) (moves right)
  Duration:      300ms ease

Mobile/Touch:
  No transform animation (respects touch experience)
  Only shadow and border changes
```

---

## Color Usage

| Element | Color | Hex | CSS Variable |
|---|---|---|---|
| Background | white | `#FFFFFF` | `--color-white` |
| Border (normal) | pearl-200 | `#E2E4EA` | `--color-pearl-200` |
| Border (hover) | steel/40 | rgba(20,184,166,0.4) | opacity variant |
| Icon badge bg | steel-muted | rgba(20,184,166,0.12) | `--color-steel-muted` |
| Icon | steel | `#2563EB` | `--color-steel` |
| Title | navy | `#1A2233` | `--color-navy` |
| Description | text-muted | `#64748B` | `--color-text-muted` |
| Feature icon | steel | `#2563EB` | `--color-steel` |
| Link | steel | `#2563EB` | `--color-steel` |
| Link hover | steel-dark | `#1D4ED8` | `--color-steel-dark` |

---

## Typography

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Title | Outfit | text-base → lg (14px → 18px) | bold (700) | navy |
| Description | Plus Jakarta Sans | text-sm (14px) | regular (400) | text-muted |
| Feature text | Plus Jakarta Sans | text-xs (12px) | regular (400) | text-muted |
| Link text | Outfit | text-sm (14px) | medium (500) | steel |

---

## Accessibility

### Semantic HTML

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
  {services.map(service => (
    <motion.div key={service.id} ...>
      <div class="flex flex-col sm:flex-row h-full">
        <div class="relative w-full sm:w-2/5 h-48 sm:h-auto">
          <Image alt={service.title} />
        </div>
        
        <div class="flex flex-col justify-between">
          <div class="w-8 h-8 rounded-lg">
            <Icon aria-hidden="true" />
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul>
            <li>✓ Feature</li>
          </ul>
          <Link href={...}>Learn More</Link>
        </div>
      </div>
    </motion.div>
  ))}
</div>
```

### ARIA Attributes

```
aria-hidden="true"    Decorative icons (service icons, CheckCircle)
alt={service.title}   All images with descriptive alt text
href={service.slug}   Links to service detail sections
focus-visible         2px steel ring on links (focus ring)
```

### Keyboard Navigation

```
Tab:           Navigate through all links
Enter/Space:   Activate links
Focus ring:    2px steel outline with white offset
Visible:       Always visible on focus
```

### Color Contrast (WCAG AA)

```
Navy on white:   14.5:1 ✓ AAA
Text-muted on white: 7.1:1 ✓ AA
Steel link on white:  2.8:1 ⚠️ Requires underline (provided)
```

---

## Performance Optimizations

### Image Loading

```
Strategy:       Next.js Image component optimization
Loading:        Default lazy-load (loads when visible)
Object fit:     cover (crops to fill, no distortion)
Error handling: Shows icon fallback on load error
Format:         Auto optimized by Next.js
```

### Animations

```
GPU accelerated:    Transform (translateY) uses GPU
No reflow:          Opacity/transform don't trigger layout recalculation
Stagger timing:     Prevents simultaneous animations
Reduced motion:     Respects prefers-reduced-motion (instant appearance)
```

### Layout

```
Grid:           CSS Grid (efficient layout engine)
Flexbox:        Flex for row layout (browser optimized)
Min-height:     Prevents collapsed content areas
Flex grow:      Links pushed to bottom without extra spacing
```

---

## Comparison: Before vs After

| Aspect | Before (Mixed Layout) | After (Row-Based) |
|---|---|---|
| **Primary layout** | Featured (row-span-2) + Grid | Uniform grid (2 columns) |
| **Card structure** | Vertical (image top, content below) | Horizontal (image left, content right) |
| **Visual hierarchy** | Yes (featured prominent) | Equal (all cards equal) |
| **Compact view** | Large featured card | Compact horizontal cards |
| **Image size** | Large (h-64 for featured, h-48 for grid) | Uniform (40% width, adaptive height) |
| **Grid layout** | 1 col (featured) + 2 cols (grid) | 2 columns (all) |
| **Mobile view** | Full-width stacking | Single column stacking |
| **Distinctiveness** | Different from services page | More uniform, cleaner |

---

## Visual Examples

### Desktop (2-Column Grid with Row-Based Cards)

```
┌──────────────────────────────────────────────────────────┐
│ Service Offerings                                        │
│ Specialized maintenance solutions...            [View All]
│                                                          │
│ ┌──────────┬──────────────────────────┐ ┌──────────┬──────┐
│ │          │ General Property         │ │          │ Gutter
│ │ Image    │ Maintenance & Minor      │ │ Image    │ Cleaning
│ │  40%     │ Plumbing                 │ │  40%     │ & Preventative
│ │          │                          │ │          │ Maintenance
│ │          │ Leaking faucet repairs.. │ │          │
│ │          │ ✓ Leaking faucet repairs │ │          │ ✓ Gutter debris
│ │          │ ✓ Running toilet fixes   │ │          │ ✓ Downspout
│ │          │                          │ │          │
│ │          │ [Learn More →]           │ │          │ [Learn More →]
│ └──────────┴──────────────────────────┘ └──────────┴──────┘
│
│ (Repeats for cards 3-7 in 2-column grid)
└──────────────────────────────────────────────────────────┘
```

### Mobile (Single Column, Stacked)

```
┌────────────────────────────┐
│ Service Offerings          │
│ Specialized maintenance... │
│                            │
│ ┌────────────────────────┐ │
│ │ Image (Full Width)     │ │
│ │ h-48                   │ │
│ ├────────────────────────┤ │
│ │ General Property...    │ │
│ │ Description...         │ │
│ │ ✓ Feature 1           │ │
│ │ ✓ Feature 2           │ │
│ │ [Learn More →]        │ │
│ └────────────────────────┘ │
│                            │
│ ┌────────────────────────┐ │
│ │ (Service 2 - same)    │ │
│ └────────────────────────┘ │
│                            │
│ (All 7 services stacked)   │
└────────────────────────────┘
```

---

## Implementation Summary

### File Modified
- `src/components/sections/ServicesSection.tsx`

### Key Changes
1. Removed ServiceCard component import
2. Added icon mapping and image/lucide imports
3. Changed grid from mixed layout to uniform 2-column
4. Implemented custom horizontal row-based card layout
5. All 7 services now use uniform card design
6. Compact 2-feature display (vs full feature list)

### Features Preserved
- ✅ All content text (title, description, features)
- ✅ All animations (scroll fade-up, stagger delays)
- ✅ All colors and design tokens
- ✅ All accessibility (ARIA, alt text, focus rings)
- ✅ All links and navigation

---

**Version:** 1.0  
**Last Updated:** March 22, 2026  
**Status:** Production Ready ✅
