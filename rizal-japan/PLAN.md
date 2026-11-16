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

Not verified against Guerrero or Zaide. Confirm "Widely repeated" items before formal submission.
