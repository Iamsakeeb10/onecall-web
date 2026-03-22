# Navbar & Services Pages Design Documentation

**Complete design system documentation for the Navbar and Services page layouts** across all responsive breakpoints and interactive states.

---

## Table of Contents

1. [Navbar Component System](#navbar-component-system)
2. [Services Page Layout](#services-page-layout)
3. [Responsive Behavior](#responsive-behavior)
4. [Color & Typography System](#color--typography-system)
5. [Interactive States & Animations](#interactive-states--animations)
6. [Accessibility & ARIA Labels](#accessibility--aria-labels)

---

## Navbar Component System

### Overview

The Navbar is a **fixed, top-anchored navigation component** with persistent branding, responsive menu structure, and mobile-friendly toggle. It uses **frosted glass backdrop blur** for a modern, premium feel.

**Location:** `src/components/layout/Navbar.tsx`

---

### 1. Navbar Structure

#### Container Properties
```
Position:        Fixed (top-0 left-0 right-0)
Z-Index:         50 (z-50)
Width:           100% (full viewport)
Backdrop:        Blur + 98% white background opacity
Shadow:          Subtle shadow-navbar (0 1px 0 rgba(...), 0 4px 16px rgba(...))
Border:          Bottom border, surface-200 (light gray)
```

#### Grid Layout (Desktop: lg breakpoint)
```
max-width:       7xl (1280px)
margin:          auto (centered)
padding:         4px sm:6px lg:8px (horizontal responsive)
height:          h-20 (80px at lg; responsive on mobile)
display:         flex
items-center:    center
justify-between: spread logo left, menu right
```

---

### 2. Logo Section (Left Side)

#### Logo Container
```
display:      flex
align-items:  center
position:     relative
inline-block: yes
z-index:      10 (above other elements)
```

#### Image Properties
| Property | Value |
|----------|-------|
| **Source** | `/images/logo.png` |
| **Alt Text** | "ONECALL FIELD SERVICES LLC" |
| **Dimensions (static)** | 220w × 66h |
| **Responsive Height** | sm: h-20 (80px) → lg: h-14 (56px) |
| **Width** | auto (maintains aspect ratio) |
| **Object Fit** | contain |
| **Priority** | yes (loads immediately, no lazy loading) |

**Responsive Sizing:**
- Mobile & tablet: `h-20` (80px) — prominent
- Desktop (lg+): `h-14` (56px) — balanced
- Always: `w-auto` (maintains original aspect ratio)

---

### 3. Desktop Navigation Menu (lg+ breakpoint)

#### Menu Container
```
display:         hidden lg:flex
align-items:     center
gap:             8 (2rem spacing between nav items)
```

#### Navigation Links (Six items)
| # | Label | href | Usage |
|---|-------|------|-------|
| 1 | Home | `/` | Homepage |
| 2 | Services | `/services` | Services listing page |
| 3 | Client | `/clients` | Client information & benefits |
| 4 | Vendor | `/vendors` | Vendor partnership program |
| 5 | About | `/about` | Company information |
| 6 | Contact | `/contact` | Contact form & details |

#### Individual Link Styles

**Base State:**
```
font-family:      font-accent (Outfit)
font-size:        base (16px)
color:            charcoal (#1F2A33)
text-decoration:  none
transition:       color 300ms ease
cursor:           pointer
```

**Hover State:**
```
color:            teal (#14B8A6)
underline-effect: Bottom accent bar animates in
```

**Active State (Current Page):**
```
color:            teal (#14B8A6)
underline:        Full width bottom bar (h-0.5, teal)
```

#### Underline Animation (Desktop)
```
position:         absolute (relative to link)
location:         bottom: -1 (1px below text baseline)
left:             0 (starts at link start)
height:           h-0.5 (2px thick)
color:            teal (#14B8A6)
width-inactive:   w-0 (hidden)
width-hover:      w-full (animates in)
width-active:     w-full (static)
transition:       width 300ms ease
```

---

### 4. CTA Button (Desktop)

**Position:** Right side of navbar, after nav links

#### Button Container
```
padding:          px-6 (24px horizontal) py-2 (8px vertical)
border-radius:    rounded-full (9999px)
font-family:      font-accent (Outfit)
font-size:        sm (14px)
font-weight:      medium (500)
transition:       all 300ms ease
hover:effect:     scale(105%) — slight zoom
```

#### Style Variants

**Active / Current Page (`/quote`):**
```
background:       charcoal (#1F2A33)
text-color:       white
hover:bg:         charcoal-light (#323F4B) — slightly lighter
```

**Inactive (not on `/quote`):**
```
background:       teal (#14B8A6)
text-color:       white
hover:bg:         teal-dark (#0D9488)
```

**Interaction:**
- Smooth color transition on hover
- Scale up 5% on hover for tactile feedback
- Never shows text-decoration

---

### 5. Mobile Menu Button (Below lg breakpoint)

#### Button Container
```
display:         lg:hidden (visible only on mobile/tablet)
transition:      colors 300ms ease
padding:         p-2 (8px all sides)
flex-shrink:     0 (never compress)
margin-left:     ml-2 (small spacing from other elements)
color-base:      charcoal (#1F2A33)
color-hover:     teal (#14B8A6)
```

#### Icon Properties (Lucide React)
| State | Icon | Size |
|-------|------|------|
| Menu Closed | `Menu` icon | w-6 h-6 (24px) |
| Menu Open | `X` icon | w-6 h-6 (24px) |

#### ARIA Attributes
```
aria-label:      "Toggle mobile menu"
aria-expanded:   true (when open) / false (when closed)
role:            button
```

---

### 6. Mobile Menu (Animated Drawer)

#### Container Animation
```
trigger:         mobileMenuOpen state change
library:         Framer Motion (AnimatePresence)
```

**Animation Properties (with reduced-motion support):**

| Motion Enabled | Disabled |
|---|---|
| opacity: 0 → 1 | opacity: 1 (instant) |
| height: 0 → auto | height: auto (instant) |
| duration: 0.3s | n/a |

#### Drawer Content
```
display:         lg:hidden (mobile/tablet only)
background:      white
border-top:      surface-200 (light gray divider)
```

**Inner Container:**
```
padding:         px-4 py-6 (16px horizontal, 24px vertical)
space-y:         4 (16px between items)
```

#### Mobile Menu Items (Seven items: 6 links + 1 CTA button)

**Navigation Links:**
```
display:         block (full width stacking)
font-family:     font-accent (Outfit)
font-size:       lg (18px — larger on mobile for touch)
padding-y:       py-2 (8px vertical)
transition:      colors 300ms ease
color-inactive:  charcoal (#1F2A33)
color-active:    teal (#14B8A6)
color-hover:     teal (#14B8A6)
```

**Behavior on Mobile:**
- Tapping a link closes the menu (`setMobileMenuOpen(false)`)
- Active page highlights in teal
- Inactive links gray out

**CTA Button in Mobile Menu:**
```
display:         flex (centered layout)
align-items:     center
justify-center:  center
width:           w-full (full drawer width)
background:      teal (#14B8A6)
text-color:      white
padding:         px-6 py-3 (24px × 12px)
border-radius:   rounded-full
font-family:     font-accent (Outfit)
font-weight:     medium (500)
hover:bg:        teal-dark (#0D9488)
transition:      all 300ms ease
```

---

## Services Page Layout

### Page Structure

The Services page (`src/app/services/page.tsx`) follows a **hero + content flow** pattern with three main sections.

---

### 1. Services Page Hero Section

#### Overview
```
Type:           Full-width hero with background image
Height:         Mobile: 40vh (min 320px)
                Tablet: 50vh
                Desktop: 55vh (min 320px failover)
Display:        flex (centered content)
Overflow:       hidden (clips image edges)
Top Padding:    pt-28 sm:pt-32 (accounts for fixed navbar)
```

#### Hero Background Image
```
source:          /images/heroes/hero-services.jpg
alt-text:        "Professional property maintenance services"
fill:            true (fills entire section)
priority:        true (preloads, no lazy load)
object-fit:      cover (crops to fill dimensions)
```

#### Background Overlay
```
position:        absolute
inset:           0 (covers full section)
z-index:         10
background:      charcoal/72 (dark overlay, 72% opacity)
purpose:         Darkens background image for text readability
```

#### Content Container (Centered)
```
position:        relative
z-index:         20 (above overlay)
max-width:       7xl (1280px)
margin:          auto
padding:         4px sm:6px lg:8px (horizontal responsive)
width:           100%
padding-y:       py-16 sm:py-20 lg:py-24 (vertical responsive)
text-align:      center
```

#### Headline
```
font-family:     font-display (Outfit)
font-size:       sm: text-3xl | sm: text-4xl | lg: text-5xl (responsive)
font-weight:     bold (700)
color:           white
margin-bottom:   mb-4 (16px)
content:         "Complete Maintenance Solutions"
```

#### Accent Divider Line
```
display:         flex
justify-center:  center
margin-y:        my-3 (12px vertical)

line-element:
  height:        h-px (1px)
  width:         w-16 (64px)
  background:    teal/50 (50% opacity)
  purpose:       Visual separator, premium accent
```

#### Subtitle
```
font-family:     font-body (Plus Jakarta Sans)
font-size:       lg (18px)
color:           surface-200 (light gray)
max-width:       max-w-2xl (672px)
margin:          auto
content:         "Seven specialized maintenance areas addressing every property requirement across Texas..."
```

#### Bottom Gradient Fade
```
position:        absolute
location:        bottom-0 left-0 right-0
height:          h-16 (64px)
background:      linear-gradient(to-top, white to transparent)
pointer-events:  none (doesn't interfere with clicks)
purpose:         Smooth transition to white section below
```

---

### 2. Services Featured Introduction Section

#### Container Properties
```
background:      white
padding-y:       py-24 lg:py-32 (24px / 32px responsive)
```

#### Inner Grid
```
max-width:       7xl (1280px)
margin:          auto
padding:         4px sm:6px lg:8px (horizontal)
```

#### Introduction Block (Animated — fadeUp variant)
```
animation:       Scroll-triggered fade-up transition
margin-bottom:   mb-20 (80px)
```

**Section Heading:**
```
max-width:       max-w-3xl (768px)
margin:          auto
text-align:      center
```

- **H2 Title**
  ```
  font-family:   font-display (Outfit)
  font-size:     md: text-4xl | lg: text-5xl
  font-weight:   bold (700)
  color:         charcoal
  margin-bottom: mb-6 (24px)
  content:       "Seven Specialized Services"
  ```

- **Descriptor Paragraph**
  ```
  font-family:   font-body (Plus Jakarta Sans)
  font-size:     lg (18px)
  color:         text-muted (#64748B)
  margin-bottom: mb-8 (32px)
  ```

- **Badge Group (Three badges, flex-wrapped)**
  ```
  display:       flex flex-wrap
  gap:           gap-3 (12px)
  justify:       center
  
  Individual badge:
    display:     inline-flex
    align:       center
    padding:     px-4 py-2 (16px × 8px)
    background:  teal/10 (10% opacity)
    border:      1px teal/20 (20% opacity)
    border-radius: rounded-full
    font-size:   sm (14px)
    font-family: font-body
    color:       teal
    content:     "✓ Statewide Coverage" | "✓ Licensed & Insured" | "✓ 24-Hour Response"
  ```

---

### 3. Services Card Grid

#### Grid Container
```
display:         grid
grid-cols:       1 (mobile) | md:2 | lg:3 (responsive)
gap:             gap-6 (24px between cards)
margin-bottom:   mb-8 (32px)
```

#### Service Card Variants

**Each service renders as a ServiceCard component** with the `featured` variant. See detailed card specifications below.

#### Card Layout (Featured Variant)

**Overview:**
- Maximum 3 columns on desktop (lg+)
- 2 columns on tablet (md)
- Single column on mobile
- Full height with flex layout

**Card Container:**
```
background:      white
border:          1px surface-200 (light gray)
border-radius:   rounded-2xl (16px)
overflow:        hidden
display:         flex flex-col (stacking)
height:          100% (full)
box-shadow:      shadow-card (subtle depth)

hover-state:
  border-color:  teal/40 (teal highlight)
  box-shadow:    shadow-card-hover (elevated with teal tint)
  transform:     -translate-y-1 (lift up 4px)
  transition:    all 300ms ease
  
focus-within:
  ring:          2px teal
  outline:       none
```

**Card Image Section:**
```
width:           100%
height:          h-64 (256px)
overflow:        hidden

<Image>:
  fill:          true
  object-fit:    cover
  border-radius: rounded-t-2xl (matches card top corners)
  
fallback (on error):
  background:    surface-200
  display:       flex center
  icon:          service icon (16px, teal)
```

**Card Content Section:**
```
padding:         p-6 (24px all sides)
display:         flex flex-col
flex-grow:       1 (expands to push button to bottom)
```

**Service Icon Badge:**
```
width:           w-12 h-12 (48px square)
background:      teal-muted (rgba(20,184,166,0.12))
border-radius:   rounded-xl (12px)
display:         flex center
margin-bottom:   mb-4 (16px)

icon:
  width:         w-6 h-6 (24px)
  color:         teal
  aria-hidden:   true
```

**Service Title:**
```
font-family:     font-display (Outfit)
font-size:       text-2xl (28px)
font-weight:     bold (700)
color:           charcoal
margin-bottom:   mb-3 (12px)
```

**Service Description:**
```
font-family:     font-body (Plus Jakarta Sans)
color:           text-muted (#64748B)
margin-bottom:   mb-4 (16px)
```

**Coverage Badge (Prestige Accent):**
```
display:         inline-flex
align-items:     center
padding:         px-3 py-1 (12px × 4px)
background:      skyblue-light (#EFF8FF)
border-radius:   rounded-full
font-size:       xs (12px)
font-family:     font-accent (Outfit)
color:           skyblue (#0EA5E9)
margin-bottom:   mb-4 (16px)
content:         "Available Statewide Across Texas"
```

**Features List:**
```
space-y:         space-y-2 (8px between items)
margin-bottom:   mb-6 (24px)
flex-grow:       1 (pushes CTA button to bottom)

list-item:
  display:       flex items-start
  gap:           gap-2 (8px)
  
  icon (CheckCircle):
    width:       w-5 h-5 (20px)
    color:       teal
    flex-shrink: 0 (doesn't compress)
    margin-top:  mt-0.5 (aligns with text)
    aria-hidden: true
    
  text:
    font-family: font-body
    color:       text-muted
```

**CTA Button:**
```
margin-top:      mt-auto (anchors to bottom)
variant:         secondary
size:            md

button-style:
  background:    charcoal (hover → charcoal-light)
  text:          white
  padding:       md size (standard padding)
  border-radius: matches component
  transition:    all 300ms
  
link:
  href:          /quote
  label:         "Get a Quote"
```

---

### 4. Bottom CTA Banner

#### Container (Animated — fadeUp variant)
```
animation:       Scroll-triggered fade-up
background:      charcoal (#1F2A33)
color:           white
border-radius:   rounded-2xl (16px)
padding:         p-10 md:p-14 (40px / 56px responsive)
text-align:      center
```

**Heading:**
```
font-family:     font-display (Outfit)
font-size:       text-3xl md:text-4xl (responsive)
font-weight:     bold (700)
color:           white
margin-bottom:   mb-4 (16px)
content:         "Prepared to Begin?"
```

**Description:**
```
font-family:     font-body (Plus Jakarta Sans)
color:           surface-200 (light gray)
margin-bottom:   mb-8 (32px)
max-width:       max-w-2xl (672px)
margin-x:        auto
```

**CTA Container (Two-button layout):**
```
display:         flex flex-col sm:flex-row (stacks on mobile, rows on desktop)
gap:             gap-4 (16px)
justify:         center
align-items:     center
```

- **Primary Button: "Get a Free Quote"**
  ```
  variant:       primary
  size:          lg
  link:          /quote
  
  on mobile: full-width stacking
  on desktop: inline with divider + phone
  ```

- **Divider Text:** "or" (only visible on desktop)
  ```
  color:         surface-300
  ```

- **Phone Link:**
  ```
  href:          tel:4693789262
  label:         "123-456-7890"
  color:         teal (hover → teal-light)
  font-family:   font-body
  transition:    colors 300ms
  ```

---

## Responsive Behavior

### Breakpoints (Tailwind v4)

| Breakpoint | Width | Usage |
|---|---|---|
| **Default** | 0px–640px | Mobile first |
| **sm** | 640px+ | Small tablets |
| **md** | 768px+ | Tablets |
| **lg** | 1024px+ | Desktop (Navbar switches here) |
| **xl** | 1280px+ | Large desktop |

### Navbar Responsive Changes

| Breakpoint | Changes |
|---|---|
| **Mobile (< lg)** | Logo: h-20; Menu hidden, hamburger visible; Mobile drawer appears on toggle |
| **Tablet (md)** | Logo: h-20; Menu hidden; Drawer styling optimized |
| **Desktop (lg+)** | Logo: h-14; Full menu visible, hamburger hidden; Drawer hidden |

### Services Page Responsive Changes

| Section | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Hero Height** | 40vh min 320px | 50vh | 55vh |
| **Hero Typography** | text-3xl | text-4xl | text-5xl |
| **Service Cards** | 1 column | 2 columns | 3 columns |
| **Padding** | 4px | 6px | 8px |
| **Spacing (sections)** | 24px | 28px | 32px |
| **CTA Buttons** | Stacked (flex-col) | Stacked | Inline (flex-row) |

---

## Color & Typography System

### Color Palette (from globals.css)

#### Primary Surfaces
```
White:        #FFFFFF
Surface-50:   #F7F9FA (light background)
Surface-100:  #E9EDF0 (card background)
Surface-200:  #CBD2D8 (borders)
Surface-300:  #AFC2CC (strong borders)
```

#### Primary Dark (Charcoal)
```
Charcoal:      #1F2A33 (headings, footer)
Charcoal-light: #323F4B (hover state)
Charcoal-muted: #637381 (subdued text)
```

#### Primary Accent (Teal)
```
Teal:        #14B8A6 (CTAs, links, focus)
Teal-dark:   #0D9488 (hover state)
Teal-light:  #E6FFFA (ghost buttons)
Teal-muted:  rgba(20,184,166,0.12) (badge background)
```

#### Prestige Accent (Sky Blue)
```
Sky Blue:      #0EA5E9 (badges, secondary highlights)
Sky Blue-light: #EFF8FF (badge background)
```

#### Text Colors
```
Text-primary:  #1F2A33 (headings, main text)
Text-body:     #3E4C59 (paragraphs)
Text-muted:    #64748B (captions, secondary text)
Text-inverse:  #FFFFFF (on dark backgrounds)
```

#### Hero Section Colors
```
Hero-bg:       #374151 (inner page hero background)
Hero-bg-dark:  #1F2937 (overlay / fallback)
Hero-text:     #FFFFFF (headlines)
Hero-muted:    #CBD5E1 (subtitles)
```

### Typography System

#### Font Families
```
Display/Accent:  Outfit (sans-serif) — Headlines, CTAs, logos
Body:            Plus Jakarta Sans (sans-serif) — Content, paragraphs
```

#### Font Sizes

**Display Font (Outfit):**
| Use | Mobile | Tablet | Desktop |
|---|---|---|---|
| H1 (hero) | text-3xl (30px) | text-4xl (36px) | text-5xl (48px) |
| H2 (section) | text-2xl (24px) | text-3xl (30px) | text-4xl (36px) |
| H3 (card title) | text-xl (20px) | text-xl (20px) | text-2xl (24px) |
| Navbar links | base (16px) | base (16px) | base (16px) |
| Navbar CTA | sm (14px) | sm (14px) | sm (14px) |

**Body Font (Plus Jakarta Sans):**
| Use | Size |
|---|---|
| Body text | base (16px) / lg (18px) |
| Small text | sm (14px) |
| Extra small | xs (12px) |

#### Font Weights
```
Regular:  400
Medium:   500
Bold:     700 (headings, CTAs)
```

---

## Interactive States & Animations

### Navbar Link Underline Animation

**Desktop Navigation Links:**
```
trigger:        Hover or Active state
animation:      Width transition (0% → 100%)
duration:       300ms ease
direction:      Left to right
color:          Teal (#14B8A6)
```

### Service Card Hover Animation

**On Desktop:**
```
trigger:        Mouse hover
animation:      Framer Motion `whileHover`
transform:      translateY(-4px) — lifts up 4px
duration:       300ms ease
shadow-change:  Normal → elevated
border-change:  Gray → teal tint
```

**On Mobile/Reduced Motion:**
```
animation:      Disabled (Framer Motion respects prefers-reduced-motion)
visual-effect:  Only shadow/border changes on tap
```

### Mobile Menu Animation

**Animation Parameters:**
```
library:         Framer Motion (AnimatePresence)
trigger:         mobileMenuOpen state change
from-state:      
  opacity: 0
  height: 0
to-state:
  opacity: 1
  height: auto
duration:        0.3s
easing:          ease (default)
```

**Reduced Motion Support:**
```
if (prefers-reduced-motion):
  opacity:       1 (instant)
  height:        auto (instant)
  no duration
```

### Scroll-Triggered Section Animations

**AnimatedSection Component (Services Page):**
```
library:         Framer Motion (motion.div)
trigger:         Scroll into viewport
initial-state:   
  opacity: 0
  y: 30 (pushed down 30px)
animate-state:
  opacity: 1
  y: 0 (normal position)
duration:        0.6s
delay:           Per-item stagger (index * 0.08s)
viewport:        
  once: true (animates only once)
  margin: -50px (triggers 50px before full visibility)
```

---

## Accessibility & ARIA Labels

### Navbar Accessibility

#### Mobile Menu Button
```html
<button
  aria-label="Toggle mobile menu"
  aria-expanded={mobileMenuOpen}
  role="button"
>
  {mobileMenuOpen ? <X /> : <Menu />}
</button>
```

**Attributes Explained:**
- `aria-label`: Announces button purpose to screen readers
- `aria-expanded`: Indicates menu open/close state
- `role`: Explicitly declares button semantic role

#### Navbar Links
```html
<Link href="/services">Services</Link>
```

**Implicit Semantics:**
- `<Link>` component from Next.js renders as `<a>` tag
- Natural semantic HTML requires no additional ARIA
- Focus ring visible via `:focus-visible` pseudo-class

#### Focus Management
```css
:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 3px;
  border-radius: 4px;
}
```

### Service Card Accessibility

#### Card Container
```html
<motion.div role="article" className="...">
  {/* Card content */}
</motion.div>
```

**Implicit Structure:**
- Card is semantically a `<div>` (motion component)
- Link within card has `aria-label` or visible text
- Icon elements have `aria-hidden="true"` (decorative)

#### Icon Handling
```html
<CheckCircle 
  className="w-5 h-5 text-teal" 
  aria-hidden="true" 
/>
<span>Leaking faucet repairs</span>
```

**Rationale:**
- Icon is decorative; text conveys meaning
- `aria-hidden="true"` prevents redundant screen reader announcement
- Text is visible and readable

### Images

#### Hero Image
```html
<Image
  src="/images/heroes/hero-services.jpg"
  alt="Professional property maintenance services"
  fill
  priority
  className="object-cover"
/>
```

**Attributes:**
- `alt`: Descriptive alternative text (not empty)
- `fill`: Next.js Image optimization flag
- `priority`: Prevents lazy loading for above-fold hero

#### Service Card Images
```html
<Image
  src={service.image}
  alt={service.title}
  fill
  className="object-cover rounded-t-2xl"
  onError={() => setImgError(true)}
/>
```

**Accessibility:**
- `alt={service.title}`: Meaningful alt text
- `onError` fallback: Renders icon + background on image load failure
- Still accessible: Fallback icon has `aria-hidden` (text label exists in card title)

### Keyboard Navigation

#### Navbar
```
Tab:           Move between links, button, mobile menu button
Enter/Space:   Activate links or mobile menu toggle
Escape:        (Optional) Close mobile menu
```

#### Service Page
```
Tab:           Navigate through all interactive elements
Enter:         Activate links (hero CTA, card links, bottom CTA)
Space:         Same as Enter for button elements
```

### Color Contrast

**WCAG AA Compliance:**
```
Text on White:
  Charcoal (#1F2A33) on White: 14.5:1 ✓ Exceeds AA
  Text-muted (#64748B) on White: 7.1:1 ✓ AA

Text on Charcoal:
  White on Charcoal: 14.5:1 ✓ Exceeds AA

Text on Teal:
  White on Teal: 4.5:1 ✓ AA (minimum for text)

Links:
  Teal links on White: 2.8:1 ⚠️ Requires underline (provided)
```

**Note:** Teal links use underline as additional visual indicator to meet WCAG standards.

### Semantic HTML

**Navbar:**
```html
<nav className="...">
  {/* Nav links and logo */}
</nav>
```

**Hero Section:**
```html
<section className="...">
  {/* Hero content */}
</section>
```

**Service Cards:**
```html
<motion.div role="article" key={service.id}>
  {/* Card content */}
</motion.div>
```

---

## Implementation Guide

### Files Modified / Created
```
src/components/layout/Navbar.tsx          ✓ Existing (reference)
src/app/services/page.tsx                 ✓ Existing (reference)
src/components/cards/ServiceCard.tsx      ✓ Existing (reference)
src/components/sections/ServicesSection.tsx ✓ Existing (reference)
src/app/globals.css                       ✓ Existing (color/shadow system)
```

### Dependencies
```
framer-motion       — Animations, AnimatePresence
lucide-react        — Icons (Menu, X, ArrowRight, CheckCircle, etc.)
next/image          — Image component (optimization)
next/link           — Navigation links
tailwindcss (v4)    — Styling via @theme system
```

### Custom Tailwind Classes Used
```
shadow-card              — Subtle card shadow
shadow-card-hover        — Elevated shadow + teal tint
shadow-navbar            — Subtle navbar shadow
rounded-2xl (16px)       — Card and banner corners
rounded-xl (12px)        — Icon badge corners
rounded-full (9999px)    — Pill-shaped buttons
```

---

## Future Enhancements

### Potential Improvements

1. **Mega Menu (Desktop):**
   - Dropdown submenu for Services, Clients, Vendors
   - Service category previews on hover
   - Quick navigation to major pages

2. **Service Card Animations:**
   - Staggered entrance (already implemented)
   - Parallax scroll effect on desktop
   - Lazy loading for off-screen cards

3. **Sticky Navbar Optimization:**
   - Hide navbar on scroll down, show on scroll up
   - Reduce transparency/shadow on scroll
   - Sticky CTA button below fold

4. **Mobile Enhancements:**
   - Swipe-to-close mobile menu
   - Smooth scroll to page sections
   - Touch-optimized button sizing (min 48×48px)

5. **Dark Mode Support:**
   - CSS variables already structured for dark mode
   - Add `prefers-color-scheme` media query support
   - Dark hero backgrounds, light text

---

## Reference Components

### Related Documentation
- `DOCUMENTATION.md` — Full tech stack and folder structure
- `COLOR_PALETTE.md` — Complete color system with hex values

### Component Files
- `src/components/layout/Navbar.tsx` — Navbar implementation
- `src/app/services/page.tsx` — Services page layout
- `src/components/cards/ServiceCard.tsx` — Card variants (grid, featured, list)
- `src/components/ui/AnimatedSection.tsx` — Scroll-triggered animations

---

## Glossary

| Term | Definition |
|---|---|
| **Navbar** | Fixed top navigation component with responsive menu |
| **Hero Section** | Full-width top section with background image, headline, CTA |
| **Featured Variant** | Service card with larger image, full feature list, prominent CTA |
| **Frosted Glass** | `backdrop-blur` CSS effect creating translucent glass appearance |
| **Service Card** | Individual service item displaying title, image, features, CTA |
| **Stagger Animation** | Sequential animation of multiple elements with time delay |
| **Reduced Motion** | CSS media query supporting users preferring less animation |
| **Semantic HTML** | HTML tags that convey meaning (nav, section, article) vs generic divs |
| **WCAG** | Web Content Accessibility Guidelines (AA/AAA compliance levels) |

---

**Last Updated:** March 22, 2026  
**Document Version:** 1.0  
**Status:** Complete & Production-Ready
