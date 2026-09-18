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
