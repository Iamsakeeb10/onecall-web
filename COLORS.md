# Website color palette

All theme colors are defined in **`src/app/globals.css`** under `@theme` and used via Tailwind classes across the site.

---

## Theme colors (design tokens)

| Token          | Hex        | Usage |
|---------------|------------|--------|
| **cream-50**  | `#FDFAF5` | Page background (`body`, `html`), hero sections, section backgrounds |
| **cream-100** | `#F5EFE0` | Footer, navbar (scrolled), email template header/footer blocks |
| **cream-200** | `#EDE3CC` | Cards, stats bar, form inputs, navbar mobile menu, skeleton/loading, overlay panels, email body background |
| **cream-300** | `#E0D4B4` | Card borders, dividers, icon containers, testimonial dots (inactive), vertical dividers |
| **gold**      | `#C89B3C` | Primary accent: CTAs, links, headings highlight, icons, badges, focus rings, scroll-to-top button, footer border |
| **gold-dark** | `#A67C28` | Hover state for gold (buttons, links) — replaces orange |
| **muted**     | `#7A6A52` | Secondary text, placeholders, labels, email body text |

---

## Tailwind usage

- **Backgrounds:** `bg-cream-50`, `bg-cream-100`, `bg-cream-200`, `bg-cream-300`, `bg-gold`, `bg-transparent`
- **Text:** `text-stone-900`, `text-gold`, `text-gold-dark`, `text-muted`, `text-cream-50`
- **Borders:** `border-cream-300`, `border-gold`, `border-gold/20`, `border-gold/30`, `border-stone-900/20`
- **Gradients:** `from-gold/40`, `to-transparent`, `from-cream-200 via-cream-100 to-cream-200`
- **Shadows:** `shadow-gold-glow` (gold glow), `shadow-card-hover` (warm shadow)
- **Focus:** `focus:ring-gold`, `focus:ring-offset-cream-200`, `focus:bg-gold`, `focus:text-cream-50`, `focus:ring-stone-900`

---

## Standard colors (no token)

| Color              | Usage |
|-------------------|--------|
| **stone-900**     | Primary text on light backgrounds, headings, nav links, form labels/values, footer content |
| **transparent**   | Navbar (unscrolled), gradient ends, overlay blending |
| **cream-50/80**   | Navbar mobile menu backdrop |
| **stone-900/20**  | Footer logo border, subtle dividers |

---

## Shadow / rgba references

- **Gold glow:** `rgba(200, 155, 60, 0.25)` — `--shadow-gold-glow`, hover states
- **Card hover:** `rgba(120, 90, 40, 0.15)` — `--shadow-card-hover` (warm brown instead of black)

---

## Inline styles (email templates)

Used in **`src/app/api/contact/route.ts`** for HTML emails:

- Background: `#FDFAF5`, `#EDE3CC`, `#F5EFE0`
- Text: `#1C1410`, `#7A6A52`, `#C89B3C`
- Border accent: `#C89B3C` (left border on quote summary)

---

## Migration notes

### Dark → Light token mapping

| Old token (dark)  | New token (light) |
|------------------|------------------|
| `navy-950`       | `cream-50`       |
| `navy-900`       | `cream-100`      |
| `navy-800`       | `cream-200`      |
| `navy-700`       | `cream-300`      |
| `orange`         | `gold-dark`      |
| `muted` `#A0AEC0`| `muted` `#7A6A52`|
| `text-white`     | `text-stone-900` |

### ServicesPageHero

`ServicesPageHero.tsx` uses theme tokens: `bg-cream-200`, `border-cream-300`, and `text-stone-900` for consistency with the light theme.
