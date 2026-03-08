# MEGAFIXX Home Services LLC — CHUNK 10
## Contact Page Refactor + Navigation Restructure
### Cursor-Ready Implementation Prompt

---

> **IMPORTANT — READ BEFORE STARTING:**
> Before writing a single line of code, use `@codebase` in Cursor to read and understand the entire existing project. This chunk makes structural changes across multiple files. You MUST understand the current implementation before modifying anything.
>
> Key files to read first:
> - `src/app/layout.tsx`
> - `src/components/layout/Navbar.tsx`
> - `src/components/layout/Footer.tsx`
> - `src/app/contact/page.tsx`
> - `src/components/sections/ContactSection.tsx`
> - `src/components/forms/QuoteForm.tsx`
> - `src/lib/metadata.ts`
> - `src/app/sitemap.ts`
> - `src/app/page.tsx`
> - `src/types/index.ts`
> - `src/app/globals.css` (review all @theme tokens)

---

## OVERVIEW OF CHANGES

This chunk makes two coordinated changes:

**Change 1 — Navigation Restructure:**
- The current `/contact` page and nav link labeled "Contact" is **removed from the nav**
- The current last nav item "Get Started" (linking to `/contact`) is **renamed** to **"Get a Quote"** and now lives at the same `/contact` route
- Result: Nav reads — Home | Services | Our Clients | Vendors | About | **Get a Quote**
- "Get a Quote" retains the existing pill/CTA button styling in the navbar

**Change 2 — Contact Page Full Redesign:**
- The existing `/contact` page content is **completely replaced** with the new client-specified layout below
- The existing `QuoteForm.tsx` component is **replaced** with a new simpler `ContactForm.tsx`
- The existing `ContactSection.tsx` (homepage strip) remains **unchanged**
- The new page uses the same design language: `bg-hero-bg` hero, `bg-white` / `bg-surface-50` sections, `text-charcoal`, `text-orange` accents, `font-display` headings, `font-body` body

---

## COMPATIBILITY REMINDERS

- **Tailwind v4** — all theme tokens in `globals.css` `@theme {}`. No `tailwind.config.ts`.
- Use existing tokens only: `bg-hero-bg`, `text-charcoal`, `text-orange`, `bg-orange`, `hover:bg-orange-dark`, `bg-surface-50`, `bg-surface-100`, `border-surface-200`, `text-text-muted`, `shadow-card`, `shadow-card-hover`, `shadow-orange-glow`, `font-display`, `font-body`, `font-accent`.
- No hardcoded hex values in JSX/TSX — only Tailwind utility classes.
- All component files: `.tsx` or `.ts` only.
- `"use client"` only where hooks or browser APIs are used.
- Next.js `<Image />` for all images — never `<img>`.

---

## PART 1 — NAVIGATION RESTRUCTURE

### 1.1 — Navbar (`src/components/layout/Navbar.tsx`)

**Current nav links array (approximate):**
```
Home | Services | Our Clients | Vendors | About | Contact
```
Plus a separate CTA pill: `"Get Started"` → `/contact`

**New nav links array:**
```
Home | Services | Our Clients | Vendors | About
```
Remove "Contact" as a standard nav link entirely.

**New CTA pill (rightmost item, keep existing pill styling):**
- Label: **"Get a Quote"**
- Route: `/contact`
- Keep all existing styles: `bg-orange text-white hover:bg-orange-dark rounded-full px-6 py-2 font-accent`
- Active state detection: highlight pill when `pathname === "/contact"`

**Mobile drawer menu:**
- Remove "Contact" from the drawer links list
- Add "Get a Quote" as the last item in the drawer, styled as a full-width orange button (same as current mobile CTA)
- Ensure drawer closes on click

**Update the `navLinks` array** (or equivalent constant) to reflect:
```ts
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Clients", href: "/clients" },
  { label: "Vendors", href: "/vendors" },
  { label: "About", href: "/about" },
]
// CTA is separate, not in navLinks:
const ctaLink = { label: "Get a Quote", href: "/contact" }
```

---

### 1.2 — Footer (`src/components/layout/Footer.tsx`)

**Quick Links column:**
- Remove "Contact" if listed as a standard link
- Add **"Get a Quote"** linking to `/contact` — place it last in the Quick Links list
- Keep "Terms & Conditions" in the bottom bar as-is

**Contact column** (Col 4 — contact info):
- Keep phone, email, location, hours display exactly as-is — this is informational, not a nav link

---

### 1.3 — Sitemap (`src/app/sitemap.ts`)

- Ensure `/contact` remains in the sitemap
- Update the `changeFrequency` or label if it was titled "Contact" — no route change needed, just verify it's present

---

### 1.4 — Homepage (`src/app/page.tsx`)

- The `<ContactSection />` component at the bottom of the homepage is a compact informational strip — **do not remove it**
- Any Button or Link pointing to `/contact` with the label "Get Started" should be updated to say **"Get a Quote"**
- Any Button or Link pointing to `/contact` with the label "Contact Us" used as a primary CTA (not body copy) should be updated to **"Get a Quote"** where contextually appropriate
- Do **not** change "Contact Us" links in body copy paragraphs — only primary CTA buttons

---

### 1.5 — Other Pages (About, Services, Clients, Vendors)

Audit and update any CTA buttons that say "Get Started" → **"Get a Quote"** where they link to `/contact`.
Leave all other "Contact Us" inline text links untouched.

---

## PART 2 — NEW CONTACT PAGE (`src/app/contact/page.tsx`)

Completely replace the existing contact page with the new layout below.

---

### 2.1 — Page Metadata

```ts
export const metadata = generatePageMetadata({
  title: "Get a Quote | MEGAFIXX Home Services LLC",
  description: "Contact MEGAFIXX Home Services. Get a quote for property maintenance, client partnerships, vendor opportunities, or general inquiries across Texas.",
  path: "/contact",
})
```

---

### 2.2 — Page Hero

Follow the **exact same inner-page hero pattern** used on About, Services, Clients, and Vendors:

```tsx
<section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden bg-hero-bg pt-28 sm:pt-32">
  {/* Optional: hero-texture overlay */}
  <div className="hero-texture absolute inset-0 z-0 opacity-40" aria-hidden="true" />
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
      Contact MEGAFIXX
    </h1>
    <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
      Have a question about property maintenance, partnerships, or vendor opportunities?
      Send us a message and our team will respond shortly.
    </p>
  </div>
</section>
```

---

### 2.3 — Main Content Section (Two-Column Layout)

```
Section background: bg-white
Section padding: py-20 lg:py-28
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

**Desktop:** Two-column grid — `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16`
**Mobile:** Single column (left col stacks above right col)

---

#### LEFT COLUMN — Contact Information

Wrap in `<AnimatedSection variant="fadeLeft">`.

**Column heading:**
```tsx
<h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
  Contact Information
</h2>
<div className="h-0.5 w-12 bg-orange rounded-full mb-8" />
```

**Four contact info cards** — each is a row with an icon + label + value. Style consistently:
- Icon container: `w-12 h-12 rounded-xl bg-orange-muted flex items-center justify-center flex-shrink-0`
- Icon: Lucide icon, `text-orange`, size 20px
- Label: `font-accent text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5`
- Value: `font-body text-charcoal font-medium`

**Card 1 — Phone:**
- Icon: `Phone` from lucide-react
- Label: "Phone"
- Value: `(469) 378-9262` — wrap in `<a href="tel:+14693789262">` with `hover:text-orange transition-colors`

**Card 2 — Email:**
- Icon: `Mail` from lucide-react
- Label: "Email"
- Value: `info@megafixxhomeservices.com` — wrap in `<a href="mailto:info@megafixxhomeservices.com">` with `hover:text-orange transition-colors`

**Card 3 — Service Coverage:**
- Icon: `MapPin` from lucide-react
- Label: "Service Coverage"
- Value: `Serving Residential & Investment Properties`
- Sub-value (smaller, text-text-muted): `Statewide — Texas`

**Card 4 — Business Hours:**
- Icon: `Clock` from lucide-react
- Label: "Business Hours"
- Value row: `Monday – Friday` with sub-value `8:00 AM – 5:00 PM`
- Second row: `Saturday – Sunday` with sub-value `Closed`

**Card styling — wrap each card in:**
```tsx
<div className="flex items-start gap-4 p-5 rounded-xl bg-surface-50 border border-surface-200 hover:border-orange/40 hover:shadow-card transition-all duration-300">
```

**Spacing between cards:** `space-y-4`

---

**Quick Links block** — below the contact cards, add a "Looking for something specific?" sub-section:

```tsx
<div className="mt-10 pt-8 border-t border-surface-200">
  <p className="font-accent text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
    Looking for something specific?
  </p>
  <div className="flex flex-col gap-3">
    {/* Three quick links */}
  </div>
</div>
```

Three quick link items — each styled as a row with a ChevronRight icon:
- **Become a Client** → `/clients` — `Building2` icon (text-orange)
- **Become a Vendor** → `/vendors` — `Wrench` icon (text-orange)
- **Request Service** → `#contact-form` (anchor on this page) — `ClipboardList` icon (text-orange)

Each quick link:
```tsx
<Link href="..." className="flex items-center gap-3 group font-body text-charcoal hover:text-orange transition-colors duration-200">
  <Icon className="text-orange" size={18} aria-hidden="true" />
  <span className="font-medium">{label}</span>
  <ChevronRight size={16} className="text-text-muted group-hover:text-orange group-hover:translate-x-1 transition-all duration-200 ml-auto" />
</Link>
```

---

#### RIGHT COLUMN — Contact Form

Add `id="contact-form"` to the outer wrapper for the anchor link.
Wrap in `<AnimatedSection variant="fadeRight">`.

**Card wrapper:**
```tsx
<div className="bg-white rounded-2xl border border-surface-200 shadow-card p-8 sm:p-10">
```

**Card heading:**
```tsx
<h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
  Send Us a Message
</h2>
<div className="h-0.5 w-12 bg-orange rounded-full mb-8" />
```

---

### 2.4 — New Contact Form Component (`src/components/forms/ContactForm.tsx`)

**"use client"** directive required.

This is a **new, simpler** form component separate from the existing `QuoteForm.tsx`. Do not modify `QuoteForm.tsx`.

**Fields:**

```ts
interface ContactFormData {
  name: string
  email: string
  phone: string          // optional
  inquiryType: string    // dropdown
  message: string
}
```

**Field 1 — Name (required)**
- Label: "Name"
- Input: `type="text"` placeholder="Your full name"

**Field 2 — Email (required)**
- Label: "Email"
- Input: `type="email"` placeholder="your@email.com"

**Field 3 — Phone (optional)**
- Label: "Phone" + `<span className="text-text-muted font-normal">(Optional)</span>` inline after label
- Input: `type="tel"` placeholder="(000) 000-0000"

**Field 4 — What can we help you with? (required)**
- Label: "What can we help you with?"
- Select dropdown with options:
  - `""` → "Select an option..." (disabled default)
  - `"maintenance"` → "Property Maintenance Service"
  - `"client"` → "Client Partnership"
  - `"vendor"` → "Vendor Application"
  - `"inquiry"` → "General Inquiry"
  - `"support"` → "Support"
- Custom dropdown arrow: use Lucide `ChevronDown` via `appearance-none` + `bg-[url]` or positioned absolutely

**Field 5 — Message (required)**
- Label: "Message"
- Textarea: rows={5}, placeholder="Please tell us how we can assist you."
- Min 10 characters validation

**Input styling (consistent with existing site pattern):**
```
bg-surface-50 border border-surface-200 rounded-lg px-4 py-3
font-body text-charcoal placeholder:text-text-muted
focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange
transition-colors duration-200 w-full
```
Error state: `border-error focus:ring-error/30`

**Label styling:**
```
block font-accent text-sm font-semibold text-charcoal mb-1.5
```
Required asterisk: `<span className="text-orange ml-0.5" aria-hidden="true">*</span>`

**Error messages:**
```tsx
<p id="{field}-error" className="mt-1.5 text-sm text-error font-body" role="alert">
  {error}
</p>
```

**Submit Button:**
- Full width, variant primary, size lg
- Label: "Send Message" with `Send` icon (lucide-react) on the left
- Loading state: replace icon with `<Loader2 className="animate-spin" />`
- Use existing `Button` component: `<Button variant="primary" size="lg" loading={isLoading} className="w-full">`

**Form validation logic:**
```ts
// Run on submit
const errors: Partial<ContactFormErrors> = {}
if (!name.trim()) errors.name = "Name is required."
if (!email.trim()) errors.email = "Email is required."
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address."
if (!inquiryType) errors.inquiryType = "Please select an inquiry type."
if (!message.trim()) errors.message = "Message is required."
else if (message.trim().length < 10) errors.message = "Message must be at least 10 characters."
```

**Form submission:**
- POST to `/api/contact` (existing endpoint)
- Build a payload compatible with what `/api/contact` currently expects — map `name` to `fullName`, pass empty strings for unused fields (`companyName`, `propertyType`, etc.), and use `inquiryType` label as `serviceNeeded`
- On success: replace form content with a success state (do not navigate away)
- On API error: show a general error message below the submit button

**Success state (replaces form content):**
```tsx
<div className="text-center py-8">
  <div className="w-16 h-16 rounded-full bg-orange-muted flex items-center justify-center mx-auto mb-4">
    <CheckCircle2 className="text-orange" size={32} />
  </div>
  <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Message Sent!</h3>
  <p className="font-body text-text-muted max-w-sm mx-auto">
    Thank you for reaching out. Our team will respond within 1 business day.
  </p>
</div>
```

---

### 2.5 — Trust Section (Below Two-Column Layout)

Full-width strip, `bg-surface-50`, `py-12`, `border-t border-surface-200`.

Three trust items in a horizontal row (desktop) / vertical (mobile):
`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center`

Each item:
```tsx
<div className="flex flex-col items-center gap-2">
  <CheckCircle2 className="text-orange" size={24} aria-hidden="true" />
  <span className="font-body font-medium text-charcoal text-sm">{label}</span>
</div>
```

Items:
1. `CheckCircle2` — "Reliable Property Maintenance"
2. `CheckCircle2` — "Fast Response Times"
3. `CheckCircle2` — "Serving Residential & Investment Properties"

---

### 2.6 — Final CTA Strip (Bottom of Page)

`bg-charcoal`, `py-12`, matches the footer tone.

Content centered:
```tsx
<div className="text-center">
  <p className="font-body text-surface-300 mb-1 text-sm uppercase tracking-wider font-accent">
    Prefer to talk?
  </p>
  <a
    href="tel:+14693789262"
    className="font-display text-2xl sm:text-3xl font-bold text-white hover:text-orange transition-colors duration-200 flex items-center justify-center gap-3"
  >
    <Phone className="text-orange" size={28} aria-hidden="true" />
    (469) 378-9262
  </a>
  <p className="font-body text-surface-300 mt-2 text-sm">
    Monday – Friday &nbsp;·&nbsp; 8:00 AM – 5:00 PM
  </p>
</div>
```

---

## PART 3 — ANIMATED SECTION AUDIT

Ensure `<AnimatedSection>` is used correctly on this page:

| Section | Variant | Delay |
|---|---|---|
| Hero content | n/a (always visible) | — |
| Left column (Contact Info) | `fadeLeft` | `0` |
| Right column (Form) | `fadeRight` | `0.1` |
| Trust strip items | `fadeUp` | stagger `0.05s` per item |
| CTA strip | `fadeUp` | `0` |

All `AnimatedSection` usage must include the `viewport={{ once: true }}` pattern already established in the codebase. Respect `useReducedMotion()` — the component already handles this internally.

---

## PART 4 — FILE CHANGE SUMMARY

| File | Action |
|---|---|
| `src/components/layout/Navbar.tsx` | Remove "Contact" from `navLinks`; rename CTA pill to "Get a Quote" |
| `src/components/layout/Footer.tsx` | Remove "Contact" from Quick Links; add "Get a Quote" → `/contact` |
| `src/app/contact/page.tsx` | **Full replacement** with new layout |
| `src/components/forms/ContactForm.tsx` | **Create new** simplified form component |
| `src/app/page.tsx` | Update any "Get Started" CTA button labels → "Get a Quote" |
| `src/app/about/page.tsx` | Update any "Get Started" CTA button labels → "Get a Quote" |
| `src/app/services/page.tsx` | Update any "Get Started" CTA button labels → "Get a Quote" |
| `src/app/clients/page.tsx` | Update any "Get Started" CTA button labels → "Get a Quote" |
| `src/app/vendors/page.tsx` | Update any "Get Started" CTA button labels → "Get a Quote" |
| `src/app/sitemap.ts` | Verify `/contact` is present; no route change needed |
| `src/lib/metadata.ts` | No change needed |
| `src/components/sections/ContactSection.tsx` | **No change** — homepage strip stays as-is |
| `src/components/forms/QuoteForm.tsx` | **No change** — leave existing component intact |

---

## PART 5 — QUALITY CHECKLIST

Before marking this chunk complete, verify every item:

**Navigation:**
- [ ] Navbar shows: Home | Services | Our Clients | Vendors | About | **Get a Quote** (pill)
- [ ] "Contact" no longer appears as a standalone nav link
- [ ] Active state on "Get a Quote" pill when on `/contact`
- [ ] Mobile drawer updated: no "Contact" link, "Get a Quote" button at bottom
- [ ] Footer Quick Links: "Get a Quote" present, links to `/contact`

**Contact Page:**
- [ ] Hero matches height/style of About/Services/Clients/Vendors heroes exactly
- [ ] Two-column layout: info left, form right on `lg:` breakpoint
- [ ] Single column on mobile (info above form)
- [ ] All four contact info cards render with icons
- [ ] Quick Links section renders below contact cards
- [ ] Form renders all 5 fields with correct types
- [ ] Dropdown has all 5 options + disabled default
- [ ] Client-side validation fires on submit with correct error messages
- [ ] Success state appears after simulated/actual successful POST
- [ ] Trust strip (3 items) renders below two-column section
- [ ] Final CTA strip (charcoal, phone link) renders at page bottom
- [ ] All animations trigger on scroll

**Design Consistency:**
- [ ] No hardcoded hex values — all Tailwind tokens
- [ ] `font-display` on all headings, `font-body` on body text, `font-accent` on labels/nav
- [ ] Orange accent rule (`h-0.5 w-12 bg-orange`) under section headings
- [ ] Card hover states: `hover:border-orange/40 hover:shadow-card-hover transition-all duration-300`
- [ ] Page background follows white → surface-50 → white → charcoal rhythm
- [ ] `shadow-card` on form container card

**Technical:**
- [ ] `"use client"` on `ContactForm.tsx` only (page itself can be server component)
- [ ] No TypeScript errors (`npm run build` passes)
- [ ] No ESLint warnings
- [ ] No console errors
- [ ] No hydration mismatches
- [ ] Keyboard navigation works through all form fields
- [ ] `aria-describedby` linking inputs to their error elements
- [ ] `aria-live="polite"` on form error summary region
- [ ] All interactive elements have accessible names

---

## DESIGN REFERENCE SUMMARY

> The new contact page should feel like a natural, seamless extension of the existing site. A visitor moving from the About page to "Get a Quote" should experience zero visual discontinuity — same hero pattern, same card styles, same spacing rhythm, same orange-on-charcoal accent system. The form should feel clean and approachable without being sparse. The contact info cards on the left should feel premium, not like a plain text list.

---

*End of CHUNK 10. Run `npm run dev` after implementation and verify all routes, the navbar on every page, and the full contact page on mobile (375px), tablet (768px), and desktop (1280px) before closing.*
