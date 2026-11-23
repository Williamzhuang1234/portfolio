---
name: site-style
description: William's personal design rules for every website he builds. Use when creating, restyling, or critiquing any web page or site.
---

# Site style rules

## Taste
- Bold and modern by default: big confident headings, strong contrast, clear layouts. Adjust the tone to the business, but never go timid or generic.

## Layout and testing
- Mobile-first: write base CSS for phones, then add `@media (min-width: ...)` for bigger screens.
- Check every page at **375px** and **1280px** wide before calling it done.

## Type and color
- At most **2 fonts**: one for headings, one readable font for body text.
- **One accent color**; everything else neutral (black, white, grays).
- All text must pass **WCAG AA** contrast (4.5:1 for body text, 3:1 for large text).

## Spacing
- Use spacing only from this scale: **4, 8, 16, 24, 32, 48, 64px**. Store it as CSS custom properties (e.g. `--space-4: 1rem`) so it stays consistent.

## Content
- Real content only: no lorem ipsum, no fake testimonials, no made-up numbers or stats.
- Every page has **one clear call to action** (call, visit, book, order) near the top.

## Never
- Purple-to-blue gradients
- Emoji as icons
- "Welcome to our website" headlines

## Concept sites (building for a business that hasn't hired me yet)
- Footer says **"Concept site, not affiliated"** until the owner approves.
- Use free photos from Unsplash or Pexels, never the business's own photos, and give every image `alt` text.
