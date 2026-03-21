# Home Page Services Cards — Layout Comparison

**Visual before/after comparison of the new row-based card design**

---

## Overview Comparison

### Previous Design (Mixed Layout)
```
┌──────────────────────────────────────────┐
│ Featured Service (Large)                 │
│ ├─ Big image (h-64)                      │
│ ├─ Full title and description            │
│ ├─ All features (6 items)                │
│ └─ Get a Quote button                    │
├──────────────────────────────────────────┤
│ Grid Services (6 cards, 2 per row)       │
│ ├─ Smaller images (h-48)                 │
│ ├─ Compact titles and descriptions       │
│ ├─ Limited features (3 items)            │
│ └─ Learn More link                       │
└──────────────────────────────────────────┘
```

### New Design (Row-Based)
```
┌──────────────────────────────────────────┐
│ All 7 Services (Uniform Grid)            │
│ ├─ 2-column layout on desktop            │
│ ├─ Image left 40%, Content right 60%     │
│ ├─ Compact horizontal cards              │
│ ├─ 2 features per card                   │
│ └─ Learn More link                       │
└──────────────────────────────────────────┘
```

---

## Section-by-Section Comparison

### Desktop Layout

#### BEFORE: Mixed (Featured + Grid)
```
┌─────────────────────────────────────────────────────────────────────┐
│ FEATURED (1 col, row-span-2)    │ GRID (2 cols × 3 rows)          │
│ ┌──────────────────────────────┐│ ┌──────────┐ ┌──────────┐       │
│ │  Image (h-64)                ││ │Img Svc2  │ │Img Svc3  │       │
│ │  (Larger image)              ││ │(h-48)    │ │(h-48)    │       │
│ ├──────────────────────────────┤│ ├──────────┤ ├──────────┤       │
│ │ Service 1 FEATURED           ││ │ Svc 2    │ │ Svc 3    │       │
│ │ Full description             ││ │ desc...  │ │ desc...  │       │
│ │ ✓ All 6 features listed      ││ │ ✓ Feat 1 │ │ ✓ Feat 1 │       │
│ │ [Get a Quote] Button         ││ │ ✓ Feat 2 │ │ ✓ Feat 2 │       │
│ │                              ││ │ ✓ Feat 3 │ │ ✓ Feat 3 │       │
│ │ (Takes 2 rows on left)       ││ │ [Learn]  │ │ [Learn]  │       │
│ │                              ││ │          │ │          │       │
│ │                              ││ └──────────┘ └──────────┘       │
│ │ (empty space)                ││ ┌──────────┐ ┌──────────┐       │
│ │                              ││ │Img Svc4  │ │Img Svc5  │       │
│ │                              ││ │(h-48)    │ │(h-48)    │       │
│ │                              ││ ├──────────┤ ├──────────┤       │
│ │                              ││ │ Svc 4    │ │ Svc 5    │       │
│ │                              ││ │ (same)   │ │ (same)   │       │
│ │                              ││ └──────────┘ └──────────┘       │
│ │                              ││ ┌──────────┐ ┌──────────┐       │
│ │                              ││ │Img Svc6  │ │Img Svc7  │       │
│ │                              ││ │(h-48)    │ │(h-48)    │       │
│ │                              ││ ├──────────┤ ├──────────┤       │
│ │                              ││ │ Svc 6    │ │ Svc 7    │       │
│ │                              ││ │ (same)   │ │ (same)   │       │
│ │                              ││ └──────────┘ └──────────┘       │
│ └──────────────────────────────┘│                                 │
└─────────────────────────────────────────────────────────────────────┘

Issues:
- Unequal visual treatment (featured vs others)
- Large empty space in left column (unused)
- Different card sizes and layouts
```

#### AFTER: Row-Based (Uniform 2-Column)
```
┌─────────────────────────────────────┬─────────────────────────────────────┐
│ SERVICE 1                           │ SERVICE 2                           │
│ ┌──────────┐                        │ ┌──────────┐                        │
│ │ Image    │ Content               │ │ Image    │ Content               │
│ │ 40%      │ (Title, Desc,        │ │ 40%      │ (Title, Desc,        │
│ │ w-2/5    │  2 Features,          │ │ w-2/5    │  2 Features,          │
│ │          │  Learn More)          │ │          │  Learn More)          │
│ │          │ 60% / w-3/5           │ │          │ 60% / w-3/5           │
│ │          │                       │ │          │                       │
│ └──────────┘                        │ └──────────┘                        │
└─────────────────────────────────────┴─────────────────────────────────────┘

┌─────────────────────────────────────┬─────────────────────────────────────┐
│ SERVICE 3 (Same row layout)         │ SERVICE 4 (Same row layout)         │
├─ Image left 40%, Content right 60% ├─ Image left 40%, Content right 60% │
└─────────────────────────────────────┴─────────────────────────────────────┘

┌─────────────────────────────────────┬─────────────────────────────────────┐
│ SERVICE 5 (Same row layout)         │ SERVICE 6 (Same row layout)         │
├─ Image left 40%, Content right 60% ├─ Image left 40%, Content right 60% │
└─────────────────────────────────────┴─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ SERVICE 7 (Last card, full width)   │
│ ┌──────────┐                        │
│ │ Image    │ Content               │
│ │ 40%      │ (Same as above)       │
│ │          │ 60%                   │
│ └──────────┘                        │
└─────────────────────────────────────┘

Benefits:
✓ Uniform layout (all cards identical)
✓ Clean 2-column grid
✓ Horizontal row design (engaging)
✓ Efficient space usage (no wasted areas)
✓ Consistent card heights
✓ Professional appearance
```

---

## Tablet Layout

### BEFORE: Mixed Layout (Stacks)
```
┌─────────────────────────────┐
│ Featured Service (Full)     │
│ ├─ Big image               │
│ ├─ Title, description      │
│ ├─ All features           │
│ └─ Button                 │
├─────────────────────────────┤
│ Grid (2 columns)           │
│ ├─ Svc 2 │ Svc 3          │
│ ├─ Svc 4 │ Svc 5          │
│ └─ Svc 6 │ Svc 7          │
└─────────────────────────────┘
```

### AFTER: Row-Based (Stacks Same)
```
┌─────────────────────────────┐
│ Service 1 (Horizontal)      │
│ ├─ Image 40% │ Content 60% │
├─────────────────────────────┤
│ Service 2 (Horizontal)      │
│ ├─ Image 40% │ Content 60% │
├─────────────────────────────┤
│ Service 3-7 (Same layout)   │
│ ├─ All horizontal rows      │
└─────────────────────────────┘
```

---

## Mobile Layout

### BEFORE: Mixed Layout (Stacks)
```
┌────────────────────────┐
│ Featured Service       │
│ ├─ Large image (h-64) │
│ ├─ Title, desc        │
│ ├─ All features       │
│ └─ Button             │
├────────────────────────┤
│ Grid Services (1 col) │
│ ├─ Svc 2 (h-48 img)  │
│ ├─ Svc 3 (h-48 img)  │
│ ├─ Svc 4 (h-48 img)  │
│ └─ Svc 5-7 (same)    │
└────────────────────────┘
```

### AFTER: Row-Based (Stacks)
```
┌────────────────────────┐
│ Service 1              │
│ ├─ Image (h-48, full) │
│ ├─ Content below      │
├────────────────────────┤
│ Service 2              │
│ ├─ Image (h-48)       │
│ ├─ Content below      │
├────────────────────────┤
│ Services 3-7 (same)   │
│ ├─ All vertical stack │
└────────────────────────┘
```

---

## Card Content Comparison

### BEFORE: Mixed Layout

**Featured Card:**
```
┌──────────────────────────────────┐
│ Image: h-64 (256px)              │
├──────────────────────────────────┤
│ Icon Badge: w-12 h-12 (48px)     │
│ Title: text-2xl (24px)           │
│ Description: Full text           │
│ Badge: Sky blue "Statewide"      │
│ Features: All 6 items            │
│ Button: "Get a Quote"            │
│         (charcoal, secondary)    │
└──────────────────────────────────┘
```

**Grid Card:**
```
┌──────────────────────────────────┐
│ Image: h-48 (192px)              │
├──────────────────────────────────┤
│ Icon Badge: w-10 h-10 (40px)     │
│ Title: text-xl (20px, clamped)   │
│ Description: Line-clamped × 2    │
│ Features: First 3 items          │
│ Link: "Learn More →"             │
│         (text link, teal)        │
└──────────────────────────────────┘
```

### AFTER: Row-Based

**All Cards (Uniform):**
```
┌──────────────┬───────────────────────────────┐
│ Image        │ Content                       │
│ 40% width    │ 60% width                     │
│ h-48 (mobile)│ ├─ Icon Badge: w-8 h-8       │
│ auto (tablet)│ ├─ Title: text-lg (18px max) │
│ min-h-240px │ ├─ Description: 2 lines       │
│              │ ├─ Features: 2 items max     │
│              │ └─ Learn More link           │
└──────────────┴───────────────────────────────┘
```

**Benefits:**
- ✓ Consistent sizing (w-8, text-sm, 2 features)
- ✓ Uniform spacing and padding
- ✓ Predictable layout
- ✓ Easier to scan
- ✓ Better information density

---

## Animation Differences

### BEFORE & AFTER: Same Animation

```
All cards use identical scroll-triggered animation:

Trigger:      Scroll into viewport (-50px margin)
From:         opacity: 0, y: 30px (pushed down)
To:           opacity: 1, y: 0 (normal)
Duration:     0.6s
Stagger:      index * 0.08s

Timeline:
- Card 1: 0.0s delay
- Card 2: 0.08s delay
- Card 3: 0.16s delay
- Card 4: 0.24s delay
- Card 5: 0.32s delay
- Card 6: 0.40s delay
- Card 7: 0.48s delay

Hover effect (desktop only):
- Card lift: -4px (translateY)
- Border: teal/40
- Shadow: elevated
- Duration: 300ms
```

---

## Sizing Comparison

### BEFORE: Mixed Layout

| Aspect | Featured | Grid |
|---|---|---|
| Grid columns | 1 (row-span-2) | 2 per row |
| Image height | h-64 (256px) | h-48 (192px) |
| Image width | Full (featured) | Full (grid) |
| Title size | text-2xl (24px) | text-xl (20px) |
| Features | All (6 items) | Limited (3 items) |
| Button | Primary button | Text link |
| Card height | ~800px+ | ~500px+ |

### AFTER: Row-Based

| Aspect | All Cards |
|---|---|
| Grid columns | 2 per row (uniform) |
| Image | 40% width, auto height |
| Image height (min) | 240px (desktop) |
| Title size | text-lg (18px) |
| Features | Limited (2 items) |
| CTA | Text link |
| Card height | Uniform, ~240px+ |
| Card width | 50% (minus gap) |

---

## Grid Math

### BEFORE: Mixed Layout
```
3-column grid structure:
- Column 1: Featured (row-span-2, 1/3 width)
- Columns 2-3: Grid cards (6 items in 2 cols)
- Grid: grid-cols-1 lg:grid-cols-3
```

### AFTER: Row-Based
```
2-column grid structure:
- All 7 cards in uniform 2-column layout
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-2
- Mobile: 1 column
- Tablet+: 2 columns
```

---

## Key Improvements

| Aspect | Before | After |
|---|---|---|
| **Uniformity** | Mixed (2 styles) | Uniform (1 style) |
| **Grid structure** | 3-column | 2-column |
| **Card layout** | Vertical only | Horizontal (row-based) |
| **Image placement** | Top | Left (horizontal) |
| **Content density** | Variable | Compact |
| **Space efficiency** | Good | Better |
| **Scannability** | Good | Better |
| **Consistency** | Fair | Excellent |
| **Mobile experience** | Good | Same good |
| **Professional feel** | Good | Cleaner |

---

## Why Row-Based Design Works Better

1. **Space Efficiency:** Image left + text right = compact, efficient
2. **Better Scanning:** Horizontal scan (left to right) matches reading
3. **Visual Uniformity:** All cards identical, easier to parse
4. **Grid Predictability:** 2-column is cleaner than 3-column
5. **Mobile Responsive:** Stacks naturally on mobile
6. **Information Hierarchy:** Image + content balanced
7. **Professional:** Modern horizontal card design
8. **Engagement:** More visual interest than plain grid

---

## Statistics

### Cards Per Row
- Before: 1 featured + 2 grid = 3 col width
- After: 2 uniform = 2 col width

### Total Display Height (3 rows)
- Before: ~1800px+ (featured large + grid)
- After: ~900px (compact rows)

### Information Density
- Before: Varied (featured large, grid small)
- After: Consistent (all same)

### User Attention
- Before: Featured draws attention (intended)
- After: All equal (unbiased browsing)

---

**Version:** 1.0  
**Last Updated:** March 22, 2026  
**Status:** Production Ready ✅
