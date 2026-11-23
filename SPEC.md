# Portfolio Site Spec

## Goal
A one-page site that convinces **small business owners in San Diego** to hire William Zhuang to build their website, and makes it easy for them to get in touch.

Live at https://williamzhuang1234.github.io/portfolio/ (staying on github.io for now; a custom domain can come later once there are paying clients).

## Audience
Local small business owners, often non-technical, who may be unsure about hiring a high school student. Every section should answer one of their questions: *What can you do? What does it cost? Can I trust you? How do I reach you?*

## Constraints
These follow `CLAUDE.md`:
- Plain HTML, CSS, and JS with no frameworks and no build step.
- Mobile-first: most owners will open the link on a phone.
- **Visual design follows the `frontend-design` skill** (`.claude/skills/frontend-design/SKILL.md`), which takes priority over the current white-and-blue look. Redesign with a deliberate, distinctive identity grounded in local San Diego small business, not a generic template. It must still feel trustworthy and easy to use for non-technical owners. Write a design plan (colors, fonts, layout) and get William's OK before building.
- Must look right at **375px** and **1280px** wide.

## Page sections (in order)

| # | Section | Status | Notes |
|---|---------|--------|-------|
| 1 | **Hero** | Done; update copy | Name and pitch. Add "Serving small businesses in San Diego." Buttons: "See pricing", "Get in touch". |
| 2 | **Services & pricing** | New | Package cards with starting prices (see below). |
| 3 | **How it works** | New | 3 numbered steps showing the process is simple. |
| 4 | **Projects** | Done; update when work ships | 3 cards (see below). |
| 5 | **Testimonials** | New; hidden until there's one | Quote, owner name, business name. Leave the section out of the page entirely until a real quote exists. |
| 6 | **About** | Done; add photo | Add a friendly photo of William (`images/william.jpg`, with alt text). |
| 7 | **FAQ** | New | Short Q&As using `<details>`/`<summary>` (no JS needed). |
| 8 | **Contact** | Done | Email and phone links, the same as now. No form. |

Update the nav to link to: Services, Projects, About, FAQ, Contact.

### Services & pricing (DRAFT: William to edit prices)
| Package | Starting price | Includes |
|---------|---------------|----------|
| One-page website | $150 | Mobile-friendly single page: about, hours, location/map, contact |
| Multi-page website | $350 | Up to 5 pages, photo gallery, menu/services list |
| Monthly updates | $25/month | Text and photo changes, hours updates, small fixes |

Add a line under the cards: "Every business is different. Get in touch for an exact quote."
The Review Reply & Dashboard App can be listed as "Coming soon" once it's closer to ready.

### How it works
1. **Quick chat**: we talk about your business and what you need.
2. **I build a draft**: you see it and ask for changes.
3. **You approve and launch**: your site goes live, and I can keep it updated.

### Projects
- Small Business Website #1 (in progress)
- Small Business Website #2 (in progress)
- Review Reply & Dashboard App (in progress)

When a project is finished, replace the blue bar with a **screenshot** (`images/project-name.jpg`) and add a **"View site"** link to the live site. Remove the "In progress" badge.

### FAQ (starting questions)
- How long does a website take?
- How much does it cost? (link to pricing)
- Where is my site hosted, and what does that cost?
- What if I need changes later?
- Do I own my website?

William to confirm the answers before they go live.

## Out of scope (for now)
- Contact form, booking links, and custom domain
- Separate case-study pages per project

## Done when
- The approved design plan is applied across the whole page.
- All 8 sections exist (Testimonials can stay hidden until there's a real quote) and the nav links reach each one.
- Prices and FAQ answers have been reviewed by William.
- Layout looks right with no horizontal scroll at 375px and 1280px.
- Pushed to GitHub and live on the github.io URL.
