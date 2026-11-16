# Rizal sa Japan: a 45-day travel guide (website)

Subject: José Rizal's 45 days in Meiji Japan, 28 February to 13 April 1888.
Audience: students and teachers (history assignment) and curious travellers.
Primary job: teach the trip accurately and make it memorable, by treating it like a modern trip page. Where did he go, when, who did he meet, what can I still see?
Not a brochure. This is a scrolling travel-guide website with an interactive map, a day calendar and infographics.

## Rubric map

| Criterion | Pts | How the site meets it |
|---|---|---|
| Historical accuracy | 30 | Every fact lives in `src/data/content.ts` with a confidence tag: *In a biography*, *Widely repeated* or *Sources differ*. Facts I could not verify were left out (judo, kabuki, Kyoto, Osaka, Kobe). |
| Completeness | 20 | Places (map), events (calendar), people (cast), experiences, the voyage there and on, and what to visit today. |
| Creativity and design | 20 | Sun-disc hero with a ship that sails across Hokusai's wave once on load, scroll-driven map, duotone photography, a 45-day calendar. |
| Organization | 15 | Seven sections in the order a traveller asks questions: why, where, when, what, who, then, now. Sticky nav tracks position. |
| Grammar and clarity | 10 | Short sentences, plain verbs, sentence-case headings, one proofreading pass over `content.ts`. |
| References | 5 | Sources section with direct links, how each was used, and image credits with licences. |

## Site structure

1. Hero: what this is, the dates, a ship sailing once across the wave.
2. The voyage: ribbon from Manila to London with the Japan leg emphasised (why Japan was a stopover).
3. The route: sticky map of the Kanto region. Scrolling five chapters (Yokohama, Tokyo Hotel, Spanish Legation, day trips, departure) moves the highlight along the route.
4. The 45 days: a calendar from 28 Feb to 13 Apr with the dated events pinned. 1888 was a leap year.
5. What he did: language, art, studying society, a job offer he declined.
6. Who he met: Caballero, O-Sei-San, Tetcho Suehiro, Mrs. Jackson, J. M. Basa.
7. The road on: San Francisco, the Rockies, Niagara, the Hudson. What each reminded him of at home.
8. Visit today: Hibiya Park, Nikko, Hakone, Yokohama.
9. Test yourself: a three-question quiz.
10. Sources and credits.

## Content strategy

- Primary reference: Austin Craig, *Lineage, Life and Labors of José Rizal* (1913), read directly from Project Gutenberg. It draws on Rizal's diary.
- Secondary: Inquirer, Japan Times, the Philippine Embassy in Tokyo and student summaries, used to cross-check dates and names. They are tagged *Widely repeated*.
- Known disagreements are shown on the page: the departure date (13 April in most sources, 18 April in one), the title of Caballero (secretary or minister), and the excursion dates.

## Asset sourcing

All images come from Wikimedia Commons, public domain unless noted:
- Rizal portrait, Hokusai's *Great Wave*, Kusakabe Kimbei's Yokohama panorama, Nikko Yomei-mon photo, Kiyochika's Hakone and Fuji print, Ginza in the 1880s.
- Japan map outline: CC BY-SA 3.0 (Lincun, modified by Erida539). It is cropped and recoloured, and credited on the page.
- Photos are treated as indigo and sakura duotones so they read as one set.

## Design tokens

Colour:
- Ai indigo `#1B2A5B`
- Umi sea `#2F8F9D`
- Sakura `#F2B3C1`
- Sun `#F2B53C`
- Washi `#EBEFF2` (cool, not cream)
- Beni `#C8362F` (stamps only)

Type:
- Shippori Mincho for headlines, so kanji sit naturally with Latin.
- Zen Kaku Gothic New for body.
- Scale 1.25, body 17px, line-height 1.6, measure under 62ch.

Layout:
- 1200px container, left-aligned text.
- Two-column sticky map section.
- Calendar grid.
- Stamps and kanji are used where they carry meaning (places, dates), never as filler.

Motion:
- One load moment: the ship crossing the wave.
- Everything else answers the user (scrolling the map, opening a card, answering the quiz).
- `prefers-reduced-motion` turns the ship off.

## Design review (plan against the brief)

First draft: heritage page on cream paper, big serif, stat tiles, three feature cards. That is the default for any history site, so it was changed:
- Warm cream became cool washi, with indigo, sea and Philippine sun yellow.
- The stat-tile row was replaced by a real calendar and a route ribbon, because the content is dates and places.
- Card grids were limited to the people section, where the content really is a set of parallel things.
- Boldness is spent in two places only: the hero ship sailing across the wave, and the scroll-driven map.

## Technical approach

- Vite, React 18, TypeScript (strict).
- No UI library, plain CSS with tokens.
- Components: `Header`, `Hero`, `Voyage`, `RouteMap`, `Calendar`, `Experiences`, `People`, `RoadOn`, `VisitToday`, `Quiz`, `Sources`.
- The map uses extracted SVG paths in `src/data/japanPaths.ts`. Scroll sync uses `IntersectionObserver`.
- Accessibility: skip link, visible focus, semantic landmarks, alt text, `aria-current` in nav, reduced motion, contrast checked against the palette.
- Responsive from 360px: the map becomes a sticky strip above the chapters.

## Accuracy notes

Checked on 16 November 2026 against Craig (full text), joserizal.com (opened) and search results from the NHCP, Philippine Embassy in Tokyo, Japan Times and Philippine government pages.

- Confirmed: 28 February arrival, Grand Hotel, 13 April sailing on the Belgic, 45 days, Mrs. Jackson, Basa, the declined job, Hibiya Park bust at the Tokyo Hotel site, O-Sei-San's 1897 marriage to Alfred Charlton and her English and French.
- Changed: the Tokyo Hotel start is now tagged *Sources differ* (29 February, 1 March or 2 March).
- Left as Sources differ: Caballero's title, the day-trip dates, the sailing date (13 versus 18 April).
- Still unchecked: Guerrero and Zaide (not available online), and the NHCP, Japan Times and Embassy pages were read only through search summaries. Do this before formal submission.
- Not on the page because sources conflict: the year the Hibiya bust was unveiled (1961 or 1998).

---

# Mobile UI/UX plan

Audit at 375px (before changes): the header stacks to 90px tall and the nav scrolls sideways with no cue that it continues; the portrait sits below the first screen; 9 links and buttons are under 44px tall; hover states are the only feedback on the calendar and cards; the calendar detail card sits under the grid, so a tap shows nothing on screen; the quiz options wrap unevenly; the sources section is a long wall of text.

The site has no drawers, quote gallery or infographic grid. The equivalent surfaces are the calendar detail card (the "detail view"), the cast cards (person feature), the parallels and visit cards (infographic grid), and the sources list (references).

## 1. Goals
- Oriented in 3 seconds: who, when, where, on the first screen.
- Thumb-friendly: every target at least 44px, key actions in the lower half, no sideways scrolling.
- Scannable: short blocks, one idea per screen, clear section breaks.
- Exploration without hunting: the map, the stops and the calendar answer a tap in place.
- Fast and quiet: no layout shift, lazy images, motion only as feedback.

## 2. Section decisions
| Section | Decision |
|---|---|
| Hero | Portrait disc first on phones, smaller, with the stamp. Then dates, headline (clamped to 2.6 to 3rem), kanji line, lede, two full-width buttons. Height is content-driven, not forced to a full screen. |
| Navigation | One 56px bar on phones: brand plus a Menu button. The menu is a full-width sheet of large links with the current section marked. It closes on link tap, Escape or outside tap. A thin progress bar shows how far down the page you are. Sticky. Desktop keeps the inline nav. |
| Text sections | 16px body on phones, 1.6 line height, measure under 62ch, 56px section padding, headings at most 2.1rem. |
| Journey (voyage ribbon) | Already stacks vertically with a dotted line. Keep, tighten spacing, enlarge the Japan leg. |
| Map | Sticky strip under the header, 30svh tall. A "Stop 2 of 5" chip and five tappable dots jump to a stop. Stops are 55svh tall instead of 70vh so the next one peeks in as a cue to keep scrolling. |
| Detail view (calendar card) | On phones the card sits above the grid and sticks under the header, so a tap on a day updates what you can already see. Day cells get a press state. |
| People | Portrait beside the text (96px) on phones, instead of a full-width block above it. |
| Infographic grid (parallels, visits, doings) | One column, tighter padding; the kanji in "What he did" shrinks to 3.2rem. |
| Quiz | Options become full-width stacked buttons, 48px tall, with clear right and wrong states that do not rely on colour alone. |
| Legacy and references | Reference lists become collapsible blocks on phones (open on desktop). |
| Footer | Safe-area padding, left-aligned short copy. |

## 3. Design system (phones)
- Type: body 1rem, lede 1.1rem, h1 clamp 2.6 to 3.2rem, h2 clamp 1.8 to 2.1rem, small text never below .8rem.
- Spacing: 4px base; 16px gutters (20px from 400px up); 56px section padding; 12px and 20px gaps.
- Colour: unchanged tokens. Contrast is already 4.5:1 or more on indigo, sea and sakura grounds.
- Targets: 44px minimum; 48px for primary buttons and quiz options.
- Imagery: stays duotone; step photos capped at 180px tall.
- Motion: press feedback (scale .97), sheet fade and slide, map pin change. All off under `prefers-reduced-motion`.

## 4. Interaction patterns
- Hover styles are wrapped in `@media (hover: hover)`; touch devices get `:active` instead.
- `-webkit-tap-highlight-color` set to a soft indigo; `touch-action: manipulation` on controls to remove the 300ms delay.
- `viewport-fit=cover` plus `env(safe-area-inset-*)` on the header, sheet and footer.
- `scroll-padding-top` matches the new header height so anchors land clear of it.

## 5. UX writing
- Menu button says "Menu" (and "Close" when open). Nav labels stay short.
- Map hint: "Scroll or tap a dot to change stop."
- Calendar hint: "Tap a yellow day."
- Phones get "Stop 2 of 5" and "Day 12 of 45" so progress is always visible.

## 6. Accessibility
- Menu button has `aria-expanded` and `aria-controls`; sheet closes on Escape and returns focus to the button.
- Visible focus rings kept; map dots have labels; the live region on the calendar card stays.
- Order in the DOM matches the visual order on phones, except the calendar card, which is moved with CSS `order` only.
- Reduced motion removes the ship, the progress bar easing, sheet animation and smooth scrolling.
- Works in landscape: hero height is not locked to the viewport.

## 7. Visual QA
Viewports: 320, 375, 390, 414, 768, 1024, 1440. Per section: no horizontal scroll, no clipped text, targets at least 44px, sticky header and map do not overlap content, anchors land below the header. Real-device checks before submission: iOS Safari (notch, dynamic toolbar), Android Chrome, landscape on a phone.

## 8. Order of work
1. Base tokens, viewport meta, hover and tap rules (everything depends on this).
2. Header and menu sheet (changes header height, which the sticky map and calendar depend on).
3. Hero.
4. Map chip, dots and stop height.
5. Calendar card order and sticky.
6. People, quiz, grids, sources, footer.
7. Build, type check, viewport pass.
