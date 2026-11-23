# Portfolio Site

A personal portfolio built with plain HTML, CSS, and JavaScript. The owner is a beginner, so the code should be easy to read and learn from.

## Rules

- **No frameworks or libraries.** Use vanilla HTML, CSS, and JS only: no React, Tailwind, Bootstrap, jQuery, etc.
- **No build step.** No npm, bundlers, or preprocessors (Sass, TypeScript). Every file should work when opened directly in a browser.
- **Keep it simple.** Pick the most straightforward approach over a clever one. Avoid abstractions until they're clearly needed.
- **Comment anything non-obvious.** Explain *why*, not just *what*, in plain language a beginner can follow. Skip comments on self-explanatory lines.
- **Mobile-first CSS.** Write base styles for small screens, then add `@media (min-width: ...)` queries for larger ones.

## Conventions

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) and `alt` text on every image.
- Use CSS custom properties (`--color-primary`, etc.) in `:root` for colors, fonts, and spacing.
- Prefer Flexbox and Grid for layout, with relative units (`rem`, `%`) over fixed `px` where it makes sense.
- JavaScript only for real interactivity (e.g. a mobile menu toggle). Load it with `<script src="..." defer>`.
- When making a change, briefly explain what it does and why so the owner learns along the way.

## Structure

```
index.html
css/style.css
js/main.js
images/
```

## Testing

Open `index.html` in a browser and check it at phone width (browser dev tools → device toolbar) as well as desktop.
