# HomeProX Services LLC — Teal & Charcoal Palette

**Professional, clean, and contemporary color palette for B2B property maintenance services.** Clear hierarchy, premium feel, and accessible contrasts.

---

## Overview

The palette combines **white/light surfaces** with **deep charcoal**, **vibrant teal accents**, and **sky blue** for prestige elements.

* **Primary Surfaces** (white & cool grays) — backgrounds, cards
* **Charcoal** — headings, footer, dark elements, authority
* **Teal Accent** — primary CTAs, links, highlights, focus states
* **Sky Blue** — secondary accent (badges, prestige elements)
* **Text Colors** — hierarchy and clarity
* **Hero Colors** — consistent inner page hero backgrounds
* **Utility Colors** — errors, success, dividers

---

## 1. Primary Surfaces — Backgrounds & Cards

| Color           | Hex       | RGB                | CSS Variable          | Tailwind Class                          | Usage                          |
| --------------- | --------- | ------------------ | --------------------- | --------------------------------------- | ------------------------------ |
| **White**       | `#FFFFFF` | rgb(255, 255, 255) | `--color-white`       | `bg-white`                              | Default page background, cards |
| **Surface 50**  | `#F7F9FA` | rgb(247, 249, 250) | `--color-surface-50`  | `bg-surface-50`                         | Light section backgrounds      |
| **Surface 100** | `#E9EDF0` | rgb(233, 237, 240) | `--color-surface-100` | `bg-surface-100`                        | Cards, forms, content boxes    |
| **Surface 200** | `#CBD2D8` | rgb(203, 210, 216) | `--color-surface-200` | `bg-surface-200` / `border-surface-200` | Card borders, dividers         |
| **Surface 300** | `#AFC2CC` | rgb(175, 194, 204) | `--color-surface-300` | `bg-surface-300` / `border-surface-300` | Stronger borders, emphasis     |

---

## 2. Charcoal — Primary Dark Accent

| Color              | Hex       | RGB               | CSS Variable             | Tailwind Class                 | Usage                                  |
| ------------------ | --------- | ----------------- | ------------------------ | ------------------------------ | -------------------------------------- |
| **Charcoal**       | `#1F2A33` | rgb(31, 42, 51)   | `--color-charcoal`       | `text-charcoal`, `bg-charcoal` | Headings, footer background, authority |
| **Charcoal Light** | `#323F4B` | rgb(50, 63, 75)   | `--color-charcoal-light` | `hover:bg-charcoal-light`      | Hover states, secondary dark elements  |
| **Charcoal Muted** | `#637381` | rgb(99, 115, 129) | `--color-charcoal-muted` | `text-charcoal-muted`          | Subdued captions, helper text          |

---

## 3. Teal — Primary Brand Accent

| Color          | Hex                     | RGB                | CSS Variable         | Tailwind Class                               | Usage                             |
| -------------- | ----------------------- | ------------------ | -------------------- | -------------------------------------------- | --------------------------------- |
| **Teal**       | `#14B8A6`               | rgb(20, 184, 166)  | `--color-teal`       | `bg-teal`, `text-teal`, `border-teal`        | Primary buttons, links, icons     |
| **Teal Dark**  | `#0D9488`               | rgb(13, 148, 136)  | `--color-teal-dark`  | `hover:bg-teal-dark`, `hover:text-teal-dark` | Button hover states, emphasis     |
| **Teal Light** | `#E6FFFA`               | rgb(230, 255, 250) | `--color-teal-light` | `bg-teal-light`                              | Ghost buttons, subtle backgrounds |
| **Teal Muted** | `rgba(20,184,166,0.12)` | 12% opacity        | `--color-teal-muted` | `bg-teal-muted`                              | Badge backgrounds, soft accents   |

---

## 4. Sky Blue — Prestige Accent (Badges & Secondary Elements)

| Color              | Hex       | RGB                | CSS Variable            | Tailwind Class                 | Usage                            |
| ------------------ | --------- | ------------------ | ----------------------- | ------------------------------ | -------------------------------- |
| **Sky Blue**       | `#0EA5E9` | rgb(14, 165, 233)  | `--color-skyblue`       | `text-skyblue`, `fill-skyblue` | Badges, secondary highlights     |
| **Sky Blue Light** | `#EFF8FF` | rgb(239, 248, 255) | `--color-skyblue-light` | `bg-skyblue-light`             | Background for badges            |

---

## 5. Text Colors — Typography Hierarchy

| Color            | Hex       | RGB                | CSS Variable           | Tailwind Class    | Usage                           |
| ---------------- | --------- | ------------------ | ---------------------- | ----------------- | ------------------------------- |
| **Text Primary** | `#1F2A33` | rgb(31, 42, 51)    | `--color-text-primary` | `text-charcoal`   | Headings, main text             |
| **Text Body**    | `#3E4C59` | rgb(62, 76, 89)    | `--color-text-body`    | `text-text-body`  | Paragraphs, descriptive content |
| **Text Muted**   | `#64748B` | rgb(100, 116, 139) | `--color-text-muted`   | `text-text-muted` | Captions, placeholders          |
| **Text Inverse** | `#FFFFFF` | rgb(255, 255, 255) | `--color-text-inverse` | `text-white`      | On dark backgrounds             |

---

## 6. Hero Section Colors — Background System

| Color            | Hex       | RGB                | CSS Variable           | Tailwind Class     | Usage                      |
| ---------------- | --------- | ------------------ | ---------------------- | ------------------ | -------------------------- |
| **Hero BG**      | `#374151` | rgb(55, 65, 81)    | `--color-hero-bg`      | `bg-hero-bg`       | Inner page hero background |
| **Hero BG Dark** | `#1F2937` | rgb(31, 41, 55)    | `--color-hero-bg-dark` | `bg-hero-bg-dark`  | Overlay / fallback         |
| **Hero Text**    | `#FFFFFF` | rgb(255, 255, 255) | `--color-hero-text`    | `text-white`       | Headlines on hero          |
| **Hero Muted**   | `#CBD5E1` | rgb(203, 213, 225) | `--color-hero-muted`   | `text-surface-200` | Subtitles / secondary text |

---

## 7. Utility Colors — Feedback & Status

| Color       | Hex       | RGB                | CSS Variable      | Tailwind Class               | Usage                               |
| ----------- | --------- | ------------------ | ----------------- | ---------------------------- | ----------------------------------- |
| **Error**   | `#EF4444` | rgb(239, 68, 68)   | `--color-error`   | `text-error`, `border-error` | Form validation, error states       |
| **Success** | `#22C55E` | rgb(34, 197, 94)   | `--color-success` | `text-success`               | Success messages, completed actions |
| **Divider** | `#CBD2D8` | rgb(203, 210, 216) | `--color-divider` | `border-divider`             | Section dividers, horizontal rules  |

---

## 8. Shadow System — Depth & Elevation

| Shadow         | CSS Value                                                           | Usage                      |
| -------------- | ------------------------------------------------------------------- | -------------------------- |
| **Card**       | `0 1px 3px rgba(31,42,51,0.06), 0 4px 12px rgba(31,42,51,0.05)`     | Default card depth         |
| **Card Hover** | `0 4px 16px rgba(20,184,166,0.12), 0 12px 32px rgba(31,42,51,0.10)` | Hover state with teal tint |
| **Teal Glow**  | `0 0 0 3px rgba(20,184,166,0.22)`                                   | Focus rings, button glow   |
| **Navbar**     | `0 1px 0 rgba(31,42,51,0.06), 0 4px 16px rgba(31,42,51,0.08)`       | Subtle elevation           |

---

## 9. Opacity & Transparency

| Use Case      | Color + Opacity | CSS Class/Value     |
| ------------- | --------------- | ------------------- |
| Hero overlay  | Charcoal 72%    | `bg-charcoal/72`    |
| Teal muted bg | Teal 12%        | `bg-teal-muted`     |
| Hover states  | Teal opacity    | `hover:bg-teal/20`  |
| Badge hover   | White 20%       | `hover:bg-white/20` |

---

## 10. Quick Reference — CSS Variables

```css
/* Backgrounds */
--color-white
--color-surface-50
--color-surface-100
--color-surface-200
--color-surface-300

/* Dark */
--color-charcoal
--color-charcoal-light
--color-charcoal-muted

/* Accent */
--color-teal
--color-teal-dark
--color-teal-light
--color-teal-muted

/* Prestige */
--color-skyblue
--color-skyblue-light

/* Text */
--color-text-primary
--color-text-body
--color-text-muted
--color-text-inverse

/* Hero */
--color-hero-bg
--color-hero-bg-dark
--color-hero-text
--color-hero-muted

/* Utility */
--color-error
--color-success
--color-divider
```

---

✅ **Design Principles:**

1. Professional white/light surfaces with deep charcoal for hierarchy
2. Teal accent for primary CTAs, links, icons, and focus states
3. Sky blue reserved for secondary accents and badges
4. Alternating surface shades maintain visual rhythm
5. All text contrasts meet WCAG AA/AAA standards
