# Design System: BeyoU Productions

Derived from two reference sites (vectura.framer.website, coorda.framer.website),
measured from rendered computed styles at 1440px and 390px viewports. Values marked
"(ref)" are taken 1:1 from a reference; everything else is the synthesis for BeyoU.

## 1. Visual Theme & Atmosphere

A quiet, gallery-airy interface that steps back so the footage can lead. The page is
almost colourless: paper-white and soft-grey sheets alternate with deep charcoal
sheets, and all colour on screen comes from video and stills. Type is large, light
and tightly tracked, which reads confident rather than loud. Media sits inside
rounded frames inset a few pixels from the viewport edge, like screens in a
screening room. Motion is slow, long-eased and sparse: things arrive once, calmly,
and then stay still.

- Density: 3 / 10 — Art Gallery Airy. 120px vertical section padding is the norm.
- Variance: 3 / 10 — Predictable, mostly symmetric. Centred hero and centred section
  headings are part of the language; alternate with left-aligned headings for rhythm.
- Motion: 4 / 10 — Slow fluid reveals, one orchestrated hero sequence, no perpetual loops
  except marquee rails and muted autoplay video.

## 2. Color Palette & Roles

Monochrome system. The footage is the colour.

- **Paper White** (#FFFFFF) — Primary canvas, cards on grey sheets, pill buttons on dark
- **Warm Paper** (#FBFAF9) (ref) — Soft panel fill for intro/quote blocks and testimonial cards
- **Studio Grey** (#F2F2F2) (ref) — Light sheet background in the alternating sheet rhythm
- **Hairline Grey** (#E4E4E7) (ref) — 1px dividers, logo-grid cell borders, table rules
- **Muted Graphite** (#707070) (ref) — Secondary text, captions, metadata
- **Soft Graphite** (#52525B) (ref) — Body text on light when full ink is too heavy
- **Ink** (#18181B) (ref) — Primary text on light surfaces, primary pill button fill
- **Studio Charcoal** (#1A1A1A) (ref) — Dark sheet background, footer, dark cards
- **Glass White** (rgba(255,255,255,0.15)) (ref) — Secondary button fill over video, with 16px backdrop blur
- **Media Scrim** (linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)) — Legibility layer over video/stills behind text

Accent: none. No brand hue is introduced. Focus rings use Ink on light and Paper White
on dark (2px, 2px offset). If a signal colour is ever needed (e.g. a "live" dot), it is a
single small element, never a button or heading.

Rules:
- Text on video is always Paper White over the Media Scrim.
- Light and dark surfaces alternate by whole sections, never inside a section.
- No gradients as decoration. The only gradient is the Media Scrim.

## 3. Typography Rules

One family for everything, one mono for micro-labels.

- **Display & Body:** `Geist` (ref, Vectura), variable, weights 300 and 400 only. Headlines
  get their authority from size and negative tracking, not from bold.
- **Micro-labels:** `Chivo Mono` (ref, Vectura) 400, uppercase, positive tracking. Used
  sparingly: at most one label per section (e.g. client · category on a project card).
- **Fallback stack:** `Geist, "Helvetica Neue", Arial, sans-serif`.

Type scale (desktop → mobile via clamp). Line-height and tracking are proportional:

| Token | Size | Weight | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| display-xl | 140px → 64px | 400 | 0.8 | -0.05em | Footer wordmark only (ref) |
| display | 80px → 44px | 300 | 1.1 | -0.05em | Hero headline (ref) |
| h1 | 58px → 36px | 400 | 1.2 | -0.05em | Section headlines (ref) |
| h2 | 40px → 28px | 400 | 1.2 | -0.02em | Card titles, feature titles (ref) |
| h3 | 32px → 24px | 400 | 1.2 | -0.02em | Sub-titles, stat numbers (ref) |
| h4 | 24px → 20px | 400 | 1.2 | -0.01em | Small card titles (ref) |
| lead | 19px → 17px | 400 | 1.4 | -0.01em | Hero subline, section intros (ref) |
| body | 16px | 400 | 1.4 | -0.01em | Running text (ref) |
| small | 14px | 400 | 1.4 | 0 | Captions, button text (ref) |
| label | 12px | 400 | 1.2 | +0.06em, uppercase, Chivo Mono | Micro-labels (ref) |

- Body copy max 60ch. Section intro text max ~760px (ref: 759px column).
- Headlines are set as short, balanced 2–3 line blocks (`text-wrap: balance`).
- No weight above 400 anywhere except button text, which may use 500.

## 4. Component Stylings

* **Buttons:** Fully rounded pills (radius 100px) (ref). Height 44px, horizontal padding
  20px, 14–15px text, weight 500. Primary on light: Ink fill, Paper White text. Primary on
  dark or over video: Paper White fill, Ink text. Secondary over video: Glass White fill with
  16px backdrop blur, white text. No icons, no arrows appended to labels. Hover: fill shifts
  one step lighter/darker over 0.4s cubic-bezier(0.44,0,0.56,1) (ref). Active: scale 0.98.
* **Navigation:** Minimal top bar over the hero, transparent; logo left, 3–4 text links and
  a language switch (DE / EN) right, one pill button. Becomes a Paper White bar with a
  hairline bottom border once scrolled past the hero.
* **Hero media frame:** Full-bleed video inset from the viewport: 24px left/right,
  ~72px top (below nav), 24px bottom (ref). Radius 16px. Muted autoplay loop, cover fit,
  Media Scrim on top. Headline, lead and buttons centred in the lower-middle of the frame.
* **Media cards (projects):** Large rounded frames (radius 16px desktop / 12px mobile) with
  16:9 or 4:5 video stills. Caption sits *below* the media, never on top: micro-label
  (client · category) and an h4 title. On hover the still is replaced by a muted preview clip.
* **Panels:** Warm Paper or Studio Grey fill, radius 16–24px (ref), 40px inner padding,
  no border, no shadow. Used for the intro/quote block and testimonial.
* **Logo grid:** 6 × 2 cells on desktop (ref), each a Paper White tile, radius 8px,
  hairline shadow, logos in greyscale at ~60% opacity.
* **Stat row:** 3–4 columns separated by 1px Hairline Grey rules; number in h3, label in
  small Muted Graphite below (ref: Coorda metrics).
* **Testimonial:** Single wide panel with client logo row on top, quote in h4/lead size,
  name and role as micro-labels, prev/next as 32px outlined circle buttons (ref).
* **Hairline shadow (the only elevation):**
  `0 2px 4px rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)` (ref).
* **FAQ / accordion:** Stacked white rows, radius 12px, 8px gap, question left, 24px round
  Ink "+" toggle right (ref: Coorda).
* **Footer:** Studio Charcoal, 80px top padding, contact and link columns, then a giant
  display-xl wordmark bleeding to the edges at the bottom (ref).
* **Loaders:** Grey skeleton blocks matching media frame dimensions. No spinners.

## 5. Layout Principles

- **Container:** max-width 1440px, centred. Page gutter 40px desktop, 24px tablet,
  16px mobile (ref: 40px).
- **Section rhythm:** 120px top/bottom padding (ref). The widest breathing room (160–180px)
  is reserved for one section before the work showcase.
- **Inside a section:** heading block → 64px gap → content (ref). Card grids use 16–20px
  gaps (ref).
- **Sheet stacking (ref: Coorda):** Sections are full-width sheets. Light sheets have 40px
  rounded bottom corners and overlap the following dark sheet, so the page reads as a stack
  of rounded plates. Use for at most 3 transitions per page.
- **Heading alignment rhythm:** Alternate between centred headings (clients, testimonials,
  final CTA) and left-aligned headings with a right-aligned pill button on the same baseline
  (work, services, insights) (ref: both).
- **Grids:** CSS Grid. Work grid is 2 columns of large media on desktop, never 3 equal
  small cards. Bento only where one tile is clearly dominant (1 large media tile + 2 small
  text tiles) (ref: Vectura).
- **Horizontal rails:** Project or testimonial rails may bleed off the right edge and
  scroll horizontally on drag/swipe (ref: Coorda).
- **Full-height:** Hero uses `min-height: 100dvh`, never `100vh`.

Section order template for the home page (layout only):
1. Inset full-bleed video hero, centred text
2. Warm panel: left large statement, right small attribution; stat row below
3. Centred heading + logo grid
4. Left heading + 2-column work grid
5. Bento: 1 dark media tile + 2 light text tiles (services)
6. Centred heading + single testimonial panel
7. Full-bleed CTA with background still and centred text
8. Charcoal footer with giant wordmark

## 6. Motion & Interaction

- **Entry reveal (default):** opacity 0 → 1, translateY 60px → 0, duration 1.4–1.6s,
  easing cubic-bezier(0.23, 1, 0.32, 1) (ref: Vectura). Triggered once when 20% in view.
  Smaller elements use translateY 20–40px.
- **Hero sequence (the one orchestrated moment):** hero video scales 1.6 → 1.0 over 2s with
  cubic-bezier(0.55, 0.06, 0.53, 0.81) (ref); headline, lead and buttons follow with delays
  0.2s / 1.4s / 1.8s (ref). Nothing else on the page is choreographed this heavily.
- **Statement text:** the intro quote reveals word by word on scroll (opacity 0.15 → 1 per
  word, scrubbed to scroll) (ref: Vectura splits the quote into per-word spans).
- **Hover:** colour/background transitions 0.4s cubic-bezier(0.44, 0, 0.56, 1) (ref).
  Interactive springs: stiffness 120, damping 27 (ref: Coorda).
- **Perpetual motion:** only the logo marquee (slow, linear, ~40s per loop) and muted
  autoplay video. No pulsing, floating or shimmering UI.
- **Performance:** animate `transform` and `opacity` only. Respect `prefers-reduced-motion`:
  replace reveals with instant opacity, pause autoplay video and marquee.

## 7. Responsive Rules

- Below 768px: every multi-column layout collapses to one column; logo grid becomes 3 × 4;
  stat row becomes 2 × 2.
- Hero frame inset shrinks to 8px sides / 64px top, radius 12px.
- Type scales with `clamp()` between the mobile and desktop values in section 3.
- Section padding: `clamp(4rem, 10vw, 7.5rem)`.
- Touch targets at least 44px. No horizontal page scroll except intentional rails.
- Navigation collapses into a full-screen Studio Charcoal menu with h1-sized links.

## 8. Anti-Patterns (Banned)

- No brand accent colour, no neon, no glows, no gradient text, no decorative gradients
- No pure black (#000000); darkest value is Studio Charcoal (#1A1A1A)
- No bold headlines; nothing heavier than 400 in headings
- No second typeface beyond Geist + Chivo Mono; no Inter, no generic serif
- No drop shadows beyond the hairline shadow
- No text on top of media without the Media Scrim
- No three equal cards in a row; no identical card grids for everything
- No arrows or icons appended to button labels; no "scroll down" hints or bouncing chevrons
- No mono labels above every heading; max one micro-label per section
- No fade-up on every single element; reveals only on section-level blocks
- No emojis, no stock-photo people, no fake metrics, no invented testimonials
- No custom cursors
