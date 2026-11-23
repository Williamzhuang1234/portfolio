# SPEC: All In Coaching website (concept)

A 4-page concept website for **All In Coaching**, a boutique coaching firm in La Jolla that helps real estate agents and brokers grow their business. It's built as a learning project and pitch, so it is **not affiliated** with the business until the owner approves.

## Business facts (only use these; don't invent anything)

| Item | Value |
|---|---|
| Name | All In Coaching |
| Founder | Lucas Barra |
| Founded | 2016 |
| Clients | Real estate agents and brokers |
| Services | Junior, Executive, and VP coaching programs |
| Address | 888 Prospect St, Ste 200, La Jolla, CA 92037 |
| Phone | (858) 395-1703 (link: `tel:+18583951703`) |
| Hours | Mon–Fri 7:00 AM–7:00 PM · Sat 8:30 AM–4:00 PM · Sun Closed |

Program details (prices, length, what's included) are **unknown**. Describe each tier in general terms and invite people to call to learn more. Don't make up prices, results, testimonials, or client counts.

## Goals
1. A real estate agent landing on the site understands within 5 seconds what All In Coaching does and who it's for.
2. Calling is one tap away on every page.
3. It looks bold and driven, like the name "All In".

## Pages

### Home (`index.html`)
- Hero: a bold headline about going all in on your real estate business, one line of supporting text, and a **Call now** button.
- Short "who it's for" section (agents and brokers).
- Preview of the 3 programs, linking to Services.
- Short founder teaser linking to About.
- Closing call-to-action band: Call now plus the hours.

### Services (`services.html`)
- Intro with a Call now button near the top.
- Three program cards: **Junior**, **Executive**, **VP**. Each has a general description of who it suits (e.g. newer agents, established agents, team leaders/brokers) and no prices.
- Closing CTA: "Not sure which fits? Call us."

### About (`about.html`)
- Call now button near the top.
- Story: founded in 2016 by Lucas Barra, based in La Jolla, focused on real estate professionals.
- Mission/approach in general terms (no invented credentials or stats).

### Contact (`contact.html`)
- Big click-to-call button: (858) 395-1703.
- Address, with an embedded Google Map (plain `<iframe>` embed, no API key).
- Hours table.
- **No contact form.**

## Shared on every page
- Header: the "All In Coaching" name/logo text, nav (Home, Services, About, Contact), and a mobile menu toggle on small screens.
- Footer: address, phone, hours summary, and **"Concept site, not affiliated."**
- One clear call to action (Call now) near the top.

## Design direction
- Mood: **bold & driven**. Big condensed or heavy headings, high contrast, energetic but professional.
- Follow the `site-style` skill (2 fonts, 1 accent, spacing scale, WCAG AA) and the `frontend-design` skill.
- Photos: free Unsplash images only (e.g. city skylines, people working or meeting, La Jolla coast), each with `alt` text.

## Technical
- Plain HTML, CSS, and JS with no frameworks and no build step. It opens directly in a browser.
- Structure:
  ```
  index.html  services.html  about.html  contact.html
  css/style.css
  js/main.js      (mobile menu toggle only)
  images/
  ```
- Semantic HTML, CSS custom properties in `:root`, and mobile-first media queries.
- Beginner-friendly comments that explain *why*.

## Out of scope
- Online booking or ordering, payments, contact forms, a blog, and logins.

## Done when
- [ ] All 4 pages work at 375px and 1280px wide.
- [ ] Click-to-call works on a phone.
- [ ] Footer shows "Concept site, not affiliated."
- [ ] SPEC.md and skills are committed; the site is live on Vercel and added to the portfolio.
