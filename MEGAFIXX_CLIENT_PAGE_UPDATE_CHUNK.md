# MEGAFIXX — Client Page Update: Client Onboarding Form
### Chunk Prompt for Cursor | Next.js App Router | TypeScript | Tailwind CSS v4

---

> **How to Use This Prompt:**
> - Paste the PROJECT CONTEXT block first in a new Cursor Chat session.
> - Then paste the single CHUNK below it.
> - Attach no external images needed — all styling follows the existing design system.
> - Run `npm run dev` after implementation and verify visually before marking complete.

---

## PROJECT CONTEXT (Paste First)

```
PROJECT CONTEXT — READ THIS BEFORE STARTING:

We are modifying an existing production Next.js website for:

Company: MEGAFIXX Home Services LLC
Industry: Statewide Property Maintenance | Texas

Tech Stack:
- Next.js (App Router)
- TypeScript (.tsx files only)
- Tailwind CSS v4 (CSS-based config via @theme {} in globals.css — NO tailwind.config.ts)
- Framer Motion for animations
- src/ directory structure

Existing Design System Tokens (from globals.css @theme {}):
- bg-white / bg-surface-50 / bg-surface-100 → section backgrounds
- bg-charcoal / text-charcoal → deep charcoal (#1C1C1E) for headings, footer
- bg-orange / text-orange / border-orange → burnt orange (#E8621A) for CTAs, icons, links
- bg-orange-dark → hover state (#C94E0D)
- bg-orange-muted → rgba(232,98,26,0.12) subtle tint
- text-text-muted → muted body text (#71717A)
- border-surface-200 → card borders
- shadow-card / shadow-card-hover / shadow-orange-glow → card shadows
- font-display → Outfit (headings)
- font-body → Plus Jakarta Sans (body)
- font-accent → Outfit (buttons, nav)
- bg-hero-bg → #3E3E3E (inner page heroes)

Existing Reusable Components Available:
- <Button variant="primary|secondary|ghost" size="sm|md|lg" loading? asChild? />
- <SectionHeading title subtitle align="left|center" />
- <AnimatedSection variant="fadeUp|fadeLeft|fadeRight|scaleIn" delay? />
- All existing client page sections (ClientsSection, ClientTypeCard, etc.) remain UNTOUCHED

IMPORTANT: Do NOT modify any existing sections on /clients page. Only add to it.
Do NOT create tailwind.config.ts — theme lives in globals.css @theme {} only.
All files must be .tsx or .ts. No .js files.
```

---

## CHUNK — Client Page: "Get Started" Button + Animated Client Onboarding Form

```
We are modifying the existing /clients page of the MEGAFIXX Home Services LLC website.

READ THE EXISTING FILE FIRST:
Open and fully read src/app/clients/page.tsx before writing any code.
Also read src/components/forms/VendorApplicationForm.tsx and
src/components/forms/QuoteForm.tsx to understand the existing form patterns,
field styling, validation approach, and submit behavior used in this project.
Also read src/types/index.ts and src/types/vendor.ts to understand existing type patterns.

DO NOT MODIFY any existing sections or components on the /clients page.
The ONLY changes are:
  1. On the existing bottom CTA section of the /clients page, change the
     button label from "Get a Quote" to "Get Started"
  2. Clicking "Get Started" smoothly scrolls to and/or reveals the new
     Client Onboarding Form section directly below on the same page
  3. Add the new Client Onboarding Form component and section below all
     existing content on the /clients page

---

### TASK 1 — Update Button Label

In src/app/clients/page.tsx:
Find the bottom CTA section (the "Ready to Partner?" or equivalent section
that currently has a button labeled "Get a Quote" or linking to /quote).
Change ONLY the button label text to: "Get Started"
Change the button's href or onClick so that it smoothly scrolls to
the anchor id="client-onboarding" on the same page instead of
navigating to /quote or /contact.

If the existing button is a Next.js <Link> component:
Replace it with a plain <button> that calls:
  document.getElementById('client-onboarding')?.scrollIntoView({ behavior: 'smooth' })

Keep the button's existing variant, size, and all other styling exactly as-is.
Only the label text and click behavior change.

---

### TASK 2 — New TypeScript Types

Create or extend src/types/index.ts (or create src/types/client.ts if preferred)
with the following types for the new form:

export interface ClientOnboardingFormData {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  companyType: string
  companyWebsite: string
  services: string[]
  portfolioSize: string
  propertyLocations: string
  additionalNotes: string
  agreeToTerms: boolean
}

export interface ClientOnboardingFormErrors {
  companyName?: string
  contactPerson?: string
  email?: string
  phone?: string
  companyType?: string
  services?: string
  portfolioSize?: string
  propertyLocations?: string
  additionalNotes?: string
  agreeToTerms?: string
}

---

### TASK 3 — New Component: ClientOnboardingForm

Create: src/components/forms/ClientOnboardingForm.tsx

"use client" directive required.

This is a single-page (non-multi-step) form. All fields visible at once.
Use the SAME input/field styling patterns as QuoteForm.tsx and
VendorApplicationForm.tsx — match exactly:
  - Label: <label> with font-body text-sm font-medium text-charcoal mb-1 block
  - Input: w-full rounded-lg border border-surface-200 bg-white px-4 py-3
           font-body text-sm text-text-primary placeholder:text-text-muted
           focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange
           transition-colors duration-200
  - Error message: text-xs text-error mt-1 (where --color-error: #DC2626)
  - Required asterisk: text-orange after label text

FORM STRUCTURE — implement all fields exactly as specified:

SECTION 1 — Company Information (2-column grid on desktop, 1-column mobile):
  - Company Name* — text input, required
  - Contact Person* — text input, required
  - Email Address* — email input, required, validate email format
  - Phone Number* — tel input, required, validate min 10 digits

SECTION 2 — Business Details:
  - Company Type* — <select> dropdown, required
    Options (match exact labels):
      "" → "Select company type..." (disabled placeholder)
      "property-management" → "Property Management Company"
      "real-estate-investor" → "Real Estate Investor"
      "asset-management" → "Asset Management Company"
      "hoa" → "HOA / Community Association"
      "real-estate-brokerage" → "Real Estate Brokerage"
      "government-municipal" → "Government / Municipal"
      "other" → "Other"
    Select styling: same as QuoteForm selects — include the ChevronDown
    custom arrow using relative wrapper + pointer-events-none absolute icon
    (copy exact pattern from QuoteForm.tsx or VendorApplicationForm.tsx)

  - Company Website — text input, optional
    Placeholder: "https://yourwebsite.com"
    Label: "Company Website (Optional)"

SECTION 3 — Service Needs:
  Label: "What services are you interested in?" with text-sm font-medium text-charcoal
  Subtext below label: "Select all that apply" in text-xs text-text-muted mb-3
  
  Render 8 checkbox items in a 2-column grid (sm:grid-cols-2):
  Each checkbox item:
    - <input type="checkbox"> with custom styling
    - Checkbox visual: w-4 h-4 rounded border-surface-200 text-orange
      focus:ring-orange/40 accent-orange
    - Label text in font-body text-sm text-charcoal
  
  Checkbox options (values in brackets):
    [property-maintenance]  Property Maintenance
    [rental-turnovers]      Rental Turnovers
    [landscaping]           Landscaping
    [minor-plumbing]        Minor Plumbing
    [minor-electrical]      Minor Electrical
    [trash-outs-cleanouts]  Trash Outs / Cleanouts
    [property-preservation] Property Preservation
    [general-repairs]       General Repairs

  Validation: at least one service must be selected.
  Error state: show error below the checkbox group if none selected on submit.

SECTION 4 — Portfolio Information:
  Label: "How many properties do you manage?"*
  Render as 4 radio button pills in a flex-wrap row:
  
  Each pill:
    - Hidden <input type="radio"> with name="portfolioSize"
    - Visual: styled <label> that acts as the clickable pill
    - Unselected: border border-surface-200 bg-white text-charcoal rounded-full
                  px-4 py-2 text-sm font-body cursor-pointer
                  hover:border-orange/50 hover:text-orange transition-colors
    - Selected: border-orange bg-orange-muted text-orange font-medium rounded-full
                px-4 py-2 text-sm cursor-pointer
  
  Radio options (value → label):
    "1-10"   → "1–10"
    "10-50"  → "10–50"
    "50-200" → "50–200"
    "200+"   → "200+"

  Below radio pills:
  - Primary Property Locations* — text input, required
    Placeholder: "e.g. Dallas, Houston, Austin, San Antonio"
    Helper text below: "List major cities or regions where your properties are located"
    in text-xs text-text-muted mt-1

SECTION 5 — Additional Notes:
  Label: "Tell us about your portfolio or maintenance needs (Optional)"
  <textarea> rows={5}, same styling as inputs above, resize-y
  Placeholder: "Describe your property portfolio, specific maintenance challenges,
  service frequency expectations, or anything else that would help us
  understand your needs better..."

TERMS CHECKBOX (before submit button):
  Same pattern as QuoteForm.tsx and VendorApplicationForm.tsx:
  <input type="checkbox"> + label with:
  "I agree to the <Link href='/terms'>Terms & Conditions</Link> and consent to
  being contacted by MEGAFIXX regarding my application."
  Link styled: text-orange hover:text-orange-dark underline
  Required — show error if not checked on submit.

SUBMIT BUTTON:
  Full width, <Button variant="primary" size="lg">
  Label: "Submit Client Application"
  Show loading spinner (Loader2 from lucide-react, animate-spin) while submitting.
  Disabled during loading.

FORM VALIDATION:
  Implement inline client-side validation following formValidation.ts patterns.
  Validate on submit attempt. Show per-field error messages.
  Fields required: companyName, contactPerson, email (+ format), phone (+ min 10 digits),
  companyType, services (min 1), portfolioSize, propertyLocations, agreeToTerms.
  
  After first failed submit, re-validate on each field change (live validation).

FORM SUBMISSION:
  POST to /api/contact with JSON body (reuse the existing contact API).
  Map fields as follows:
    fullName    → contactPerson
    companyName → companyName
    email       → email
    phone       → phone
    propertyType → companyType (the selected label text)
    serviceNeeded → services joined with ", "
    location    → propertyLocations
    message     → additionalNotes + "\n\nPortfolio Size: " + portfolioSize
    agreeToTerms → agreeToTerms
    formSource  → "client-onboarding"

  SUCCESS STATE:
    Replace entire form with a centered success block (same pattern as QuoteForm.tsx):
    - bg-orange-muted rounded-xl p-8 text-center
    - CheckCircle2 icon from lucide-react, text-orange, w-12 h-12, mx-auto mb-4
    - H3: "Application Received!" font-display text-2xl text-charcoal font-bold
    - Paragraph: "Thank you for your interest in partnering with MEGAFIXX.
      Our team will review your request and contact you within 1 business day."
      font-body text-text-muted
    - Framer Motion: animate from opacity 0 scale 0.95 → opacity 1 scale 1

  ERROR STATE (API failure):
    Show a dismissible error banner above the submit button:
    bg-red-50 border border-error text-error rounded-lg px-4 py-3 text-sm font-body
    "Something went wrong. Please try again or contact us directly at
    info@megafixxhomeservices.com"

ANIMATIONS (Framer Motion):
  - The form card itself: when it first becomes visible (scrolled into view),
    animate with AnimatedSection variant="fadeUp"
  - Each section block: stagger children with 0.08s delay
  - Respect useReducedMotion() — skip transforms if true

---

### TASK 4 — "Why Partner With MEGAFIXX" Intro Strip (above the form)

Above the form (inside the same section#client-onboarding), add a short
trust/benefits strip matching the style of VendorWhyPartner.tsx.

Background: bg-charcoal (full-width within the section)
Padding: py-10 lg:py-12
Inner container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

Layout: 5 benefit items in a flex-wrap row, centered.
Each item:
  - CheckCircle2 icon from lucide-react, text-orange, w-5 h-5 inline-block
  - Label text: font-body text-sm text-white font-medium
  - Separator: hidden on mobile, shown on desktop between items (border-r border-white/20)

Benefits (exact labels):
  ✔ Reliable Vendor Network
  ✔ Fast Response Times
  ✔ Work Order Transparency
  ✔ Photo Documentation
  ✔ Scalable Property Maintenance Solutions

AnimatedSection variant="fadeUp" wrapping the strip content.

---

### TASK 5 — Section Assembly in clients/page.tsx

In src/app/clients/page.tsx, after ALL existing sections (keep every existing
section exactly as-is), add the following new section at the bottom:

```tsx
{/* Client Onboarding Form Section */}
<section id="client-onboarding" className="bg-surface-50 py-20 lg:py-28 scroll-mt-24">
  {/* Why Partner Strip */}
  <div className="bg-charcoal">
    {/* WhyPartnerStrip content — see Task 4 */}
  </div>

  {/* Form Container */}
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
    {/* SectionHeading */}
    <AnimatedSection variant="fadeUp">
      <SectionHeading
        title="Become a MEGAFIXX Client"
        subtitle="Partner with MEGAFIXX for reliable property maintenance and field service support. Our team supports property managers, investors, asset managers, and organizations across residential and commercial portfolios."
        align="center"
      />
    </AnimatedSection>

    {/* Form Card */}
    <AnimatedSection variant="fadeUp" delay={0.15}>
      <div className="mt-10 bg-white rounded-2xl shadow-card border border-surface-200 p-8 sm:p-10">
        <ClientOnboardingForm />
      </div>
    </AnimatedSection>
  </div>
</section>
```

The `scroll-mt-24` class ensures the section scrolls into view below the fixed navbar.
Import ClientOnboardingForm at the top of clients/page.tsx.

---

### TASK 6 — Update /api/contact Route (src/app/api/contact/route.ts)

Read the existing file first. Add handling for formSource === "client-onboarding":

In the owner email subject and body, when formSource is "client-onboarding":
  - Subject: "New Client Application from {fullName} — {companyName}"
  - Body header: "New Client Application Received"
  - Include all relevant fields in the email body in a clean HTML format

In the client confirmation email when formSource is "client-onboarding":
  - Subject: "We received your MEGAFIXX client application"
  - Body: Thank the contact person, confirm 1 business day response time,
    include a brief summary of services they selected

If the existing route already handles formSource gracefully (e.g. with a
switch or if/else), add the new case without breaking existing cases.
If the route is minimal, add the conditional without restructuring other logic.

---

### CONSISTENCY RULES — Follow Exactly

1. Input field styling: copy exactly from QuoteForm.tsx — same border, focus ring,
   padding, font, placeholder color, transition.

2. Section heading: use the existing <SectionHeading> component — never recreate it.

3. Button: use the existing <Button> component — never write raw button styles.

4. Animations: use <AnimatedSection> wrapper — never write raw Framer Motion
   unless adding whileHover to individual interactive elements.

5. No hardcoded hex values in JSX — use only Tailwind design token classes.

6. No tailwind.config.ts — theme lives in globals.css @theme {} only.

7. Mobile-first responsive: form fields are full-width on mobile; 2-column grid
   on sm+ for the Company Information section only.

8. Accessibility:
   - All inputs have associated <label htmlFor>
   - Error messages use aria-describedby pointing to error element id
   - aria-live="polite" on the error summary region
   - Checkbox and radio inputs have visible focus styles
   - Submit button disabled state is visually obvious (opacity-50 cursor-not-allowed)

9. "use client" only on ClientOnboardingForm.tsx — the page itself (clients/page.tsx)
   remains a Server Component. Import the form component normally; Next.js handles
   the boundary automatically.

10. The "Get Started" button change is MINIMAL — only the text and onClick/href
    change. No other modifications to the existing CTA section styling or layout.

---

### FINAL VERIFICATION CHECKLIST

After implementation, confirm:

[ ] Existing /clients page sections are completely unchanged
[ ] "Get a Quote" button now reads "Get Started"
[ ] Clicking "Get Started" smoothly scrolls to #client-onboarding section
[ ] Why Partner strip displays with charcoal background and 5 benefit items
[ ] "Become a MEGAFIXX Client" heading renders via SectionHeading component
[ ] Form card renders with white background, rounded-2xl, shadow-card
[ ] All 5 form sections present with correct fields
[ ] Company Type dropdown has custom ChevronDown arrow (no native arrow)
[ ] Service checkboxes: 2-column grid, at least one required
[ ] Portfolio size renders as styled radio pills (not default radio buttons)
[ ] Property Locations input has helper text
[ ] Terms checkbox links to /terms
[ ] Submit button shows spinner during loading, disabled during submit
[ ] Success state shows after mock/real successful submit
[ ] All validation errors display per-field
[ ] /api/contact handles formSource="client-onboarding" without breaking other sources
[ ] No TypeScript errors
[ ] No console errors
[ ] Mobile layout: single column, full-width inputs
[ ] Desktop layout: 2-column grid for Company Info section
[ ] Fixed navbar does not cover the form when scrolled to anchor (scroll-mt-24)
[ ] npm run dev compiles with zero errors
```

---

## QUICK REFERENCE — Fields Summary

| Section | Field | Type | Required |
|---|---|---|---|
| Company Info | Company Name | text | ✅ |
| Company Info | Contact Person | text | ✅ |
| Company Info | Email Address | email | ✅ |
| Company Info | Phone Number | tel | ✅ |
| Business Details | Company Type | select | ✅ |
| Business Details | Company Website | text | ❌ |
| Service Needs | Services (8 checkboxes) | checkbox | ✅ min 1 |
| Portfolio Info | Portfolio Size | radio pill | ✅ |
| Portfolio Info | Primary Property Locations | text | ✅ |
| Additional Notes | Notes / Details | textarea | ❌ |
| Terms | Agree to Terms | checkbox | ✅ |

---

## QUICK REFERENCE — Design Token Mapping

| Element | Tailwind Class |
|---|---|
| Section background | `bg-surface-50` |
| Form card background | `bg-white` |
| Why Partner strip | `bg-charcoal` |
| Input background | `bg-white` |
| Input border | `border-surface-200` |
| Input focus ring | `focus:ring-orange/40 focus:border-orange` |
| Label text | `text-charcoal` |
| Placeholder | `placeholder:text-text-muted` |
| Error text | `text-error` |
| Selected radio pill | `border-orange bg-orange-muted text-orange` |
| Success block | `bg-orange-muted` |
| Success icon | `text-orange` |
| Benefit icons | `text-orange` |
| CTA button | `variant="primary"` → `bg-orange text-white` |
| Heading | `font-display text-charcoal` |
| Body text | `font-body text-text-muted` |

---

*End of prompt. Feed to Cursor in a single session after pasting the PROJECT CONTEXT block first.*
