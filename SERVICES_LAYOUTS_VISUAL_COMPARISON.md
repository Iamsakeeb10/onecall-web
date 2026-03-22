# Services Layouts Visual Comparison Guide

**Visual before/after comparison for all redesigned sections**

---

## Overview Comparison

### Services Page
```
┌─ BEFORE ──────────────────────────┐
│ Full-width image with overlay     │
│ Centered text on top              │
│ 3-column uniform card grid        │
│ Centered CTA banner               │
└───────────────────────────────────┘

┌─ AFTER ───────────────────────────┐
│ Split: Navy text + Image      │
│ Left-bordered heading + Stat strip│
│ Alternating horizontal rows       │
│ 2-column CTA (text + buttons)     │
└───────────────────────────────────┘
```

### Home Page Services
```
┌─ BEFORE ──────────────────────────┐
│ Uniform 3-column grid             │
│ All cards equal size              │
│ No visual hierarchy               │
│ Looks like services page preview  │
└───────────────────────────────────┘

┌─ AFTER ───────────────────────────┐
│ Mixed layout: Featured + Grid     │
│ Featured service prominent        │
│ Clear visual hierarchy            │
│ Distinctly different from services│
└───────────────────────────────────┘
```

---

## Section-by-Section Comparison

---

## 1. Hero Section

### BEFORE: Centered Overlay

```
┌──────────────────────────────────────────────┐
│  ┌─ Full-width image background ────────────┐
│  │                                          │
│  │         Dark Overlay (72% opacity)       │
│  │                                          │
│  │    ┌─────────────────────────────────┐  │
│  │    │  Complete Maintenance Solutions │  │
│  │    │                                 │  │
│  │    │             ─────               │  │
│  │    │                                 │  │
│  │    │  Seven specialized maintenance  │  │
│  │    │  areas addressing every...      │  │
│  │    └─────────────────────────────────┘  │
│  │                                          │
│  │  Gradient fade to white at bottom        │
│  └──────────────────────────────────────────┘
└──────────────────────────────────────────────┘
```

**Issues:**
- No text/image separation
- Generic centered layout
- Dark overlay obscures image

### AFTER: Split Layout

```
┌───────────────────────────────────────────────────┐
│ NAVY LEFT (50%)  │  IMAGE RIGHT (50%)        │
│ ┌─────────────────┐  │  ┌──────────────────────┐ │
│ │ Bg: Navy    │  │  │  Service image       │ │
│ │ ┌─────────────┐ │  │  │  (No overlay!)       │ │
│ │ │ Complete    │ │  │  │                      │ │
│ │ │ Maintenance │ │  │  │  Clear, vibrant      │ │
│ │ │ Solutions   │ │  │  │                      │ │
│ │ │             │ │  │  │                      │ │
│ │ │ ─────────   │ │  │  │                      │ │
│ │ │             │ │  │  │                      │ │
│ │ │ Seven spec..│ │  │  └──────────────────────┘ │
│ │ └─────────────┘ │  │                          │
│ └─────────────────┘  │                          │
└───────────────────────────────────────────────────┘
```

**Improvements:**
- ✓ Clean text/image separation
- ✓ Modern split layout
- ✓ Image fully visible (no dark overlay)
- ✓ Premium feel with color contrast

---

## 2. Introduction Section

### BEFORE: Centered + Pills

```
┌──────────────────────────────────────────┐
│            (Centered)                     │
│                                          │
│     Seven Specialized Services           │
│                                          │
│ ONECALL FIELD SERVICES LLC provides specialized support    │
│ across all property maintenance areas... │
│                                          │
│  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │ ✓ State- │  │ ✓ Licens-│  │ ✓ 24-  │ │
│  │  wide    │  │   ed &   │  │ Hour   │ │
│  │          │  │  Insured │  │ Resp.  │ │
│  └──────────┘  └──────────┘  └────────┘ │
│                                          │
└──────────────────────────────────────────┘
```

**Issues:**
- Generic pill badges
- Centered layout (boring)
- No visual hierarchy

### AFTER: Left Border + Stat Strip

```
┌──────────────────────────────────────────┐
│                                          │
│ ├─ Seven Specialized Services           │
│ │  (4px steel left border)                │
│ │                                        │
│ │  ONECALL FIELD SERVICES LLC provides specialized support │
│ │  across all property maintenance...    │
│                                          │
│  ┌──────────┬──────────┬──────────────┐  │
│  │ Statewide│ Licensed │ 24-Hour     │  │
│  │ Coverage │ & Insured│ Response    │  │
│  │          │          │             │  │
│  └──────────┴──────────┴──────────────┘  │
│   Light gray background (pearl-50)     │
│   Vertical dividers on desktop           │
│                                          │
└──────────────────────────────────────────┘
```

**Improvements:**
- ✓ Visual accent (left border)
- ✓ Modern stat strip design
- ✓ Better visual hierarchy
- ✓ Professional appearance

---

## 3. Service Cards

### BEFORE: 3-Column Grid (Services Page)

```
┌──────────────────────────────────────────────────────┐
│  ┌───────────┐  ┌───────────┐  ┌───────────┐       │
│  │ Image 1   │  │ Image 2   │  │ Image 3   │       │
│  │ (h-48)    │  │ (h-48)    │  │ (h-48)    │       │
│  ├───────────┤  ├───────────┤  ├───────────┤       │
│  │ 🔧        │  │ 💧        │  │ 🎨        │       │
│  │ Service 1 │  │ Service 2 │  │ Service 3 │       │
│  │ Descrip.. │  │ Descrip.. │  │ Descrip.. │       │
│  │ ✓ Feature │  │ ✓ Feature │  │ ✓ Feature │       │
│  │ ✓ Feature │  │ ✓ Feature │  │ ✓ Feature │       │
│  │ ✓ Feature │  │ ✓ Feature │  │ ✓ Feature │       │
│  │ [Learn]   │  │ [Learn]   │  │ [Learn]   │       │
│  └───────────┘  └───────────┘  └───────────┘       │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐       │
│  │ (same as above for services 4, 5, 6, 7)        │
│  └───────────┘  └───────────┘  └───────────┘       │
└──────────────────────────────────────────────────────┘
```

**Issues:**
- All cards identical
- No visual flow
- Like a standard grid

### AFTER: Alternating Rows

```
Row 1 (Odd) — Image Left:
┌──────────────────────────────────────────────────┐
│ IMAGE      │ Content                            │
│ (40%)      │ (60%)                              │
│ ┌────────┐ │ Service 1 TITLE                   │
│ │        │ │ Full description...                │
│ │ Image 1│ │ All features (6 items)             │
│ │(h-48)  │ │ [Get a Quote]                      │
│ │        │ │                                    │
│ └────────┘ │                                    │
└──────────────────────────────────────────────────┘

Row 2 (Even) — Image Right (flex-row-reverse):
┌──────────────────────────────────────────────────┐
│ Content                            │ IMAGE      │
│ (60%)                              │ (40%)      │
│ Service 2 TITLE                    │ ┌────────┐ │
│ Full description...                │ │        │ │
│ All features (6 items)             │ │ Image 2│ │
│ [Get a Quote]                      │ │(h-48)  │ │
│                                    │ │        │ │
│                                    │ └────────┘ │
└──────────────────────────────────────────────────┘

(Repeat for rows 3-7, alternating pattern)
```

**Improvements:**
- ✓ Engaging alternating rhythm
- ✓ Dynamic visual flow
- ✓ Professional layout
- ✓ Distinct from home page grid

---

## 4. CTA Banner

### BEFORE: Centered Layout

```
┌──────────────────────────────────────────┐
│  Dark Navy Background (bg-navy)  │
│                                          │
│        Prepared to Begin?                │
│                                          │
│ Get a personalized estimate tailored to  │
│ your property maintenance requirements.  │
│ We'll get back to you within 24 hours.   │
│                                          │
│  ┌──────────────────────┐                │
│  │ Get a Free Quote     │                │
│  └──────────────────────┘                │
│              or                          │
│  123-456-7890                         │
│                                          │
└──────────────────────────────────────────┘
```

**Issues:**
- Centered, stacked on mobile
- Generic layout
- No visual separation

### AFTER: 2-Column Layout

```
┌─────────────────────────────────────────────────┐
│ TEXT LEFT (60%)    │ BUTTONS RIGHT (40%)       │
│                   │                            │
│ Prepared to Begin? │  ┌──────────────────────┐ │
│                   │  │ Get a Free Quote     │ │
│ Get a personal-   │  └──────────────────────┘ │
│ ized estimate     │                            │
│ tailored to your  │      ─ steel ─ (1px)      │
│ property maint... │                            │
│                   │  123-456-7890           │
│                   │                            │
└─────────────────────────────────────────────────┘
```

**Improvements:**
- ✓ 2-column layout (professional)
- ✓ Text left, CTAs right (visual flow)
- ✓ Steel divider (accent detail)
- ✓ Better visual balance

---

## 5. Home Page Services — Full Redesign

### BEFORE: Uniform 3-Column Grid

```
┌──────────────────────────────────────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐                   │
│  │Img 1 │  │Img 2 │  │Img 3 │                   │
│  │(h-48)│  │(h-48)│  │(h-48)│                   │
│  ├──────┤  ├──────┤  ├──────┤                   │
│  │ Svc1 │  │ Svc2 │  │ Svc3 │                   │
│  │ desc │  │ desc │  │ desc │                   │
│  │features │features │features                 │
│  │ [Ln] │  │ [Ln] │  │ [Ln] │                   │
│  └──────┘  └──────┘  └──────┘                   │
│  ┌──────┐  ┌──────┐  ┌──────┐                   │
│  │ Svc4 │  │ Svc5 │  │ Svc6 │  ... (Svc7)      │
│  │ (same as above)                             │
│  └──────┘  └──────┘  └──────┘                   │
│                                                 │
│ All 7 services in identical card format        │
└──────────────────────────────────────────────────┘
```

**Issues:**
- No visual hierarchy
- All cards identical (boring)
- Looks like services page preview
- Doesn't guide user attention

### AFTER: Mixed Layout (Featured + Grid)

```
┌──────────────────────────────────────────────────┐
│  FEATURED (1 col)    │ GRID CARDS (2 cols)      │
│  row-span-2          │                          │
│  ┌────────────────┐  │ ┌────────┐  ┌────────┐  │
│  │  Image (h-64)  │  │ │Img Svc2│  │Img Svc3│  │
│  │  (Larger!)     │  │ │(h-48)  │  │(h-48)  │  │
│  ├────────────────┤  │ ├────────┤  ├────────┤  │
│  │ Service 1      │  │ │ Svc 2  │  │ Svc 3  │  │
│  │ FEATURED       │  │ │ (grid) │  │ (grid) │  │
│  │ Longer descr   │  │ └────────┘  └────────┘  │
│  │ ALL features   │  │ ┌────────┐  ┌────────┐  │
│  │ (All 6)        │  │ │Img Svc4│  │Img Svc5│  │
│  │ [Get a Quote]  │  │ │(h-48)  │  │(h-48)  │  │
│  │ (Button!)      │  │ ├────────┤  ├────────┤  │
│  │                │  │ │ Svc 4  │  │ Svc 5  │  │
│  │                │  │ └────────┘  └────────┘  │
│  │ (Takes 2 rows) │  │ ┌────────┐  ┌────────┐  │
│  │                │  │ │Img Svc6│  │Img Svc7│  │
│  │                │  │ │(h-48)  │  │(h-48)  │  │
│  │                │  │ ├────────┤  ├────────┤  │
│  │                │  │ │ Svc 6  │  │ Svc 7  │  │
│  │                │  │ └────────┘  └────────┘  │
│  └────────────────┘  │                          │
└──────────────────────────────────────────────────┘
```

**Improvements:**
- ✓ Visual hierarchy (featured prominent)
- ✓ Guides user attention
- ✓ Compact grid for browsing
- ✓ Distinctly different from services page
- ✓ Professional information architecture

---

## Responsive Comparison

### Services Page Hero

```
Mobile (< md):
┌────────────────────────┐
│  TEXT (Full Width)     │
│  Complete Maintenance  │
│  Solutions             │
│  ─────────             │
│  Description...        │
├────────────────────────┤
│  IMAGE (h-48)          │
│  Service image         │
└────────────────────────┘

Tablet (md):
┌────────────────────────┐
│  TEXT    │  IMAGE      │
│          │  (same as   │
│  Heading │  desktop)   │
│  Desc    │             │
└────────────────────────┘

Desktop (lg+):
┌────────────────────────────────────┐
│  TEXT (50%)    │  IMAGE (50%)      │
│  Navy BG   │  Full width image │
│                │  (no overlay)     │
└────────────────────────────────────┘
```

### Home Page Services

```
Mobile (< md):
┌────────────────────────┐
│ Featured Service       │
│ (Full Width)           │
│ ┌──────────────────────┤
│ │ h-64 image          │
│ │ Title, desc, features
│ │ [Get a Quote]        │
│ └──────────────────────┘
├────────────────────────┤
│ Grid Services          │
│ 1 column (stacked)     │
│ ┌──────────────────────┤
│ │ Service 2 (h-48)    │
│ └──────────────────────┘
│ ┌──────────────────────┤
│ │ Service 3 (h-48)    │
│ └──────────────────────┘
│ ... (Services 4-7)     │
└────────────────────────┘

Desktop (lg+):
┌────────────────────────────────────┐
│ Featured (1 col)  │ Grid (2 cols)  │
│ row-span-2        │ 3 rows × 2 cols│
│ ┌─────────────┐   │ ┌──────┐┌──────┐
│ │ h-64 image  │   │ │Svc 2 ││Svc 3 │
│ │ featured... │   │ └──────┘└──────┘
│ │ [Quote]     │   │ ┌──────┐┌──────┐
│ │             │   │ │Svc 4 ││Svc 5 │
│ │             │   │ └──────┘└──────┘
│ │             │   │ ┌──────┐┌──────┐
│ │             │   │ │Svc 6 ││Svc 7 │
│ └─────────────┘   │ └──────┘└──────┘
└────────────────────────────────────┘
```

---

## Animation Differences

### Services Page Cards
```
Desktop only (respects reduced-motion):
- Initial: opacity 0, y: 30px (pushed down)
- Hover: y: -4px (lifts up), shadow increases, border steel
- Duration: 300ms ease
- Stagger: 0, 0.08s, 0.16s, 0.24s, ... (per service)
```

### Home Page Cards
```
Same animation as services page:
- Initial: opacity 0, y: 30px
- Scroll trigger: fades in and moves up
- Duration: 0.6s
- Stagger: 0s (featured), 0.08s (grid 1), 0.16s (grid 2), ...
- No hover lift (grid cards), link hover underline
```

---

## Color & Typography Usage

### Both Layouts
```
Colors:        All preserved (navy, steel, surface, brass)
Fonts:         All preserved (Outfit, Plus Jakarta Sans)
Shadows:       All preserved (shadow-card, shadow-card-hover)
Spacing:       Responsive (gap-6, px-4 to px-8)
```

---

## Key Takeaways

| Aspect | Services Page | Home Page |
|---|---|---|
| **Primary Goal** | Comprehensive service showcase | Quick service overview |
| **Layout** | Alternating horizontal rows | Mixed featured + grid |
| **Visual Flow** | Left-right rhythm | Top-heavy hierarchy |
| **Featured?** | All equal | First service prominent |
| **Image Size** | Large (40% width) | Compact (responsive) |
| **Use Case** | Deep dive into services | Browse & go to details |
| **Distinctive?** | Yes (vs home) | Yes (vs services page) |

---

**Version:** 1.0  
**Last Updated:** March 22, 2026  
**Status:** Complete ✅
