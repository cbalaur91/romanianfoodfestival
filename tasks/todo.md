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
