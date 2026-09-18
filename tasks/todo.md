# Festival 2026 — Release A

Spec: `tasks/spec-festival-2026-release-a.md` · Parent issue #1 · Branch `festival-2026`

## Issue #2 — Event config module + site-wide location-change banner

1. [x] `lib/event.test.ts` written first (bun:test, injected time) → verify: fails before module exists
2. [x] `lib/event.ts` config + `getEventPhase` + display strings → verify: `bun test` green
3. [x] `test` script + `@types/bun` (via npm, keeps package-lock the only lockfile) → verify: `tsc --noEmit` clean
4. [x] `components/location-banner.tsx` in root layout above nav, hidden in `after` phase → verify: screenshots desktop + mobile, every route
5. [x] Nav `fixed` → `sticky` (banner scrolls away, nav stays); drop pages' `pt-16`; mobile dropdown overlays → verify: screenshots, no overlap
6. [x] Nav `text-grey-700` → `text-gray-700`; `aria-expanded={isOpen}` → verify: rendered HTML
7. [x] Typecheck, lint, node production build → verify: all pass
8. [x] /code-review, commit to `festival-2026`

Result: 12 tests pass (TZ=UTC and Pacific/Auckland); tsc, lint, node build clean. Browser (1440/390, all 4 routes): no banner/nav overlap at top or scrolled; aria-expanded false→true; banner present Sun 6:59 PM, gone 7:00 PM (clock mocked, Tokyo TZ). Screenshots: ~/rff-shots/.
Review notes: banner shows until hydration after the end (fail-safe, by spec); tab open across 7 PM keeps banner; `@types/bun` added (spec said no new dep — needed for tsc); nav fixed→sticky needs owner sign-off on home hero.

## Issue #3 — Home page: 2026 hero, poster and festival-facts block

1. [x] Test first: poster path in config is 2026-specific, not a 2025 filename → verify: `bun test` red, then green
2. [x] Poster `2026.jpeg` → `afis-2026.jpg`; delete `:Zone.Identifier`; `event.poster` in config → verify: `git status` shows no Zone.Identifier
3. [x] Hero: config year; sponsor effect + both slideshow blocks gated on `event.showSponsors`; 4 cards (date/hours/venue+Indoors/Free Entrance) from config; CTAs Get Directions (anchor) + See the Menu (`/about?tab=menu`); after-phase thank-you in date card → verify: rendered HTML, no `/sponsors` request with flag off, flag flip restores slideshow
4. [x] Poster column (lightbox, meaningful alt) after content in DOM, `lg:order-1` → verify: screenshots 1440 + 390, poster left on desktop, below buttons on mobile
5. [x] `FlyersSection` → `FestivalFacts` text block from config, no image → verify: rendered HTML
6. [x] Stale sweep: no `afis-en|afis-ro` refs; no "Rochester Hills"/"20-21"/"Both Days" in home components → verify: grep
7. [x] Typecheck, lint, tests, node build → verify: all pass
8. [x] /code-review, commit to `festival-2026`

Result: 13 tests pass (UTC + Auckland); tsc, lint, node build (in scratch copy) clean. Browser via CDP: flag off → no `/sponsors/sponsorslist.txt` request, no "Loading Sponsors", poster left column at 1440, below "See the Menu" at 390 (1312 vs 1288 px); flag on → slideshow + request return, poster gone; lightbox opens; clock at Sun 7:00 PM EDT → "Thank you for coming!", banner gone. Screenshots: ~/rff-shots/i3-*.png.
Review notes: remaining home-page "Rochester Hills"/"20-21" hits are root metadata (#6) and footer (#5). Poster keeps `priority` (desktop LCP; mobile preloads it below fold). Hero "Romanian" title clips at 1440 — pre-existing, Release B. 2025 `afis-en/ro.jpg` + `AFIS-EN/RO.pdf` now unreferenced — delete is owner's call (spec: unused assets → Release B). Not extracted: shared `useEventPhase` hook (hero + banner duplicate 4 lines).

## Issue #4 — About page: no donations, menu deep-link, indoor-accurate content

1. [x] Tabs → Festival | Menu | Sponsors; drop Donations trigger/content/import; `donations.tsx` stays (flagged) → verify: grep no importer, rendered HTML no "donat"
2. [x] Initial tab from `?tab=` via `useSearchParams` inside Suspense (fallback = Festival tabs, so static HTML keeps content) → verify: node build passes; browser `tab=menu|sponsors|junk|none`
3. [x] Kids' activities block commented out (icon imports kept, restore = uncomment) → verify: rendered HTML no "Bounce House"
4. [x] Live Entertainment card names performers from `event.performers` → verify: rendered HTML
5. [x] Menu: price spans removed, items unchanged; "Prices posted at the festival · dine in or take it to go" under heading → verify: rendered HTML, diff of menu data empty
6. [x] Metadata: no "Rochester Hills"/"admission details"; hero subtitle drops "in Rochester Hills" → verify: rendered `<title>`/description
7. [x] Typecheck, lint, tests, node build → verify: all pass
8. [x] /code-review, commit to `festival-2026`

Result: tsc, lint, 13 tests clean; node build (scratch copy) keeps /about static (○). Browser via CDP (dev :3000): tabs exactly Festival/Menu/Sponsors; `tab=menu`→Menu, `sponsors`→Sponsors, none/`junk`/`constructor`/`MENU`→Festival; no "donat", no kids block, performers present, prices/to-go line under heading, 0 price spans, 34 menu items. Screenshots: ~/rff-shots/i4-*.png.
Review notes: tab value `sponsorship`→`sponsors` so value == query param (nothing linked to the old value). Hero subtitle "in Rochester Hills" dropped (beyond metadata, needed for #7 sweep). `/about` rendered head still has "Rochester Hills" via root layout og/twitter/keywords → #6; re-check after it lands. Still for owner: history copy "beloved tradition in the Rochester Hills community" (festival-info) will hit #7 sweep; "DJ Oli & Orga · DJ" repeats DJ (config role, shared with home facts); `?tab=menu` hard load flashes Festival until hydration (static HTML). Flagged, not deleted: `donations.tsx`, menu `price: ''` fields.

## Issue #5 — Contact page and footer: Warren everywhere

1. [x] No new test: `venueAddress` + `directionsUrl` already covered in `lib/event.test.ts` (only seam) → verify: `bun test` green
2. [x] Footer address → `venueAddress` from config → verify: rendered HTML has "31500 Ryan Rd, Warren, MI 48092", no "School Rd"
3. [x] Contact directions: `window.open` handler → `<Button asChild><a href={event.directionsUrl}>`; copy names Warren venue; drop orphaned `'use client'` → verify: rendered `<a href="https://maps.app.goo.gl/...">`, grep no `window.open`/`onClick`
4. [x] Church block: church address, labelled "not the festival location", plain text (no link) → verify: rendered body has "Rochester Hills" exactly once, inside church card; no `href` to Rochester Hills
5. [x] "Sponsorship & Donations" → "Sponsorship", copy sponsorship/partnership only → verify: rendered contact HTML no "donat"
6. [x] Phones/email/socials untouched → verify: diff
7. [x] Typecheck, lint, tests, node build; screenshots contact 1440/390 → verify: all pass
8. [x] /code-review, commit to `festival-2026`

Result: tsc, lint, 13 tests clean; node build (scratch copy) keeps /contact static (○). Rendered /contact body: "Rochester Hills" ×1 (church card, labelled), 0 "donat", only external hrefs = maps.app.goo.gl directions, FB, IG, aiwebhub; directions is an `<a>`. Screenshots contact + footer 1440/390: ~/rff-shots/i5-*.png.
Review fixes: footer line now "Festival location: Armonia Event Hall, 31500 Ryan Rd, Warren, MI 48092" (under the church-name heading a bare address read as the church's); pin icon `shrink-0`/top-aligned for the wrap; directions copy "indoors" gated on `event.indoors`.
For owner / later: General Questions card still says "tickets" (admission free) → #7 sweep; church address hardcoded in contact-info (not a festival fact, by spec); `venue.name + venueAddress` + directions anchor now repeated in 4 components (banner, hero, facts, contact) — extraction not done. Flagged, not deleted: unused `Clock`/`Facebook`/`Instagram` imports in contact-info. `/contact` + root `<head>` still say Rochester Hills → #6.
