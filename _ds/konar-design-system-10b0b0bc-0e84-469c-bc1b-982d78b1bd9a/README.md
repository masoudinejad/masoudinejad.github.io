# Konar — Design System

> **Konar** is an AI education startup. It makes the deep concepts of **AI, Machine Learning, and Data Science** legible to a *general* audience — turning rigorous, scientific material into something simple, visual, and gently gamified. Think the intellectual depth of a graduate seminar delivered with the clarity and warmth of a great explainer video.

> **The name.** *Konar* is the Persian name for the tree *Ziziphus spina-christi* (Christ's-thorn jujube) — a hardy tree of warm, arid places with glossy green leaves and small fruit that ripens from green through **amber** to a deep **russet**. The brand grows from this tree: learning as patient growth toward the light, and the moment of understanding as ripe fruit. Its colours, leaf, and fruit run through the whole system.

This repository is Konar's **design system**: the brand foundations, tokens, assets, and high-fidelity UI kits used to build every Konar surface.

---

## The brief (what shaped this system)

This system was created **from scratch** — no prior brand, codebase, or Figma was supplied. The direction was set from a short brief:

| Decision | Choice |
|---|---|
| Personality | **Calm & academic** — clean, focused, scholarly, trustworthy |
| Visual direction | **Warm & textured** — paper, grain, organic warmth |
| Color | **Dark-mode first** — sleek and modern |
| Typography | **Modern sans** — clean and neutral |
| Surfaces to build | Marketing website · Docs / knowledge base · Video lesson player · Slide deck template |
| Audience | General learners; content is *scientifically deep* but delivered *simply & gamified* |
| Inspiration | [3Blue1Brown](https://www.youtube.com/@3blue1brown) animations · [Welch Labs](https://www.youtube.com/@WelchLabs) cinematic science · [AI Engineer](https://www.youtube.com/@aiDotEngineer) talks |

> **No source files were provided.** Everything here is original. If Konar has real assets (logo, fonts, screenshots, Figma), share them via the Import menu and this system will be re-grounded against them.

---

## The idea: "The Konar tree, after dark"

Konar's world is a **warm, dark canvas** — bark and soil at dusk — where ideas grow and *glow*. The signature accent is **konar-leaf green**, the colour of new growth and the main thread of every explanation. The moment of insight is **ripe amber** — the fruit catching the last light. **Russet** (the deeper ripe-fruit skin) marks attention and warmth, and a cool **dusk blue** is the sky behind the tree, used sparingly. Concepts are color-coded with these tree colours, exactly as a good educator colours a derivation. Long-form reading happens on **warm cream "paper"** insets — notes pinned up among the branches. A faint **film grain** sits over everything so the dark never feels clinical; it feels like film, like a study at dusk.

This metaphor drives every decision: living green and ripe amber on warm bark-dark ground, generous space, precise type, and imagery that glows like a plant reaching toward light.

---

## CONTENT FUNDAMENTALS — how Konar writes

**Voice:** A brilliant, patient teacher sitting next to you. Konar is *confident about the depth* of the material and *relaxed about your starting point*. It never condescends and never shows off. Rigor is a gift, not a gate.

- **Person & address:** Speaks to **"you"**; uses **"we"** when walking through reasoning together ("let's look at why this works"). Avoids the royal/corporate "we." First-person singular is rare.
- **Tone:** Calm, curious, encouraging. Wonder over hype. Short declaratives carry the weight; the excitement is in the *idea*, not the punctuation.
- **Casing:** **Sentence case everywhere** — headings, buttons, nav, course titles. Title Case is avoided (it reads corporate). UI labels are sentence case ("Start lesson", not "Start Lesson").
- **Jargon:** Introduced deliberately, never assumed. A technical term appears, gets defined in plain language immediately, then is used freely. "A *gradient* — the direction of steepest increase — tells us which way to step."
- **Length:** Sentences are short to medium. Paragraphs are 2–4 sentences. White space is part of the explanation.
- **Numbers & rigor:** Real and specific when used ("≈ 175B parameters"), never decorative. No invented stats, no stat-padding. One precise number beats five vague ones.
- **Gamification language:** Warm and low-pressure. "Streak", "you've unlocked", "concept mastered", "3 of 7 steps" — encouraging, never shouty or manipulative. No FOMO, no fake urgency.
- **Emoji:** **Not used** in product UI or marketing copy. (The brand expresses warmth through color, grain, and type — not emoji.)
- **Punctuation:** Em dashes for asides. Sparing exclamation points. Questions are used to prompt thinking ("So what *is* attention, really?").

**Examples (write like this):**
- Hero: *"Understand the ideas behind modern AI. Really understand them."*
- Section kicker: *"the intuition first"*
- Lesson CTA: *"Start with the intuition"* / *"See the math"*
- Empty state: *"Nothing here yet. Pick a concept and we'll start at the beginning."*
- Progress: *"Concept mastered — 4 of 9"*

**Avoid:** "Revolutionary", "unleash", "supercharge", "game-changing", "10x", "🚀", ALL-CAPS shouting, Title Case headings, walls of text without a visual.

---

## VISUAL FOUNDATIONS

**Color & mood.** Dark-mode first on a **warm** near-black (`--bg-0 #14120E`) — dark soil and bark, never cold blue-black. Text is a **warm cream white** (`--fg-1 #F3EEE3`), not pure white, so the page reads like paper under lamplight. Accents are *luminous* and saturated, used sparingly against the dark, and all drawn from the konar tree: **leaf green** (`#74BE83`, primary — growth), **amber** (`#F4B62E`, emphasis/insight — ripe fruit), **russet-orange** (`#EB7338`, attention), and a strong **dusk** blue (`#5BA8D8`, atmospheric/secondary). Solid accent fills are reserved for the single most important action on a view.

**Grounded in the real tree (re-grounded May 2026 from photographs).** Two photo-true token families sit alongside the luminous accents. **Natural / illustrative tokens** — `--foliage #8CAC9E` (sunlit leaf), `--foliage-shadow #4B5932`, `--canopy-dusk #695A37`, `--bark #5A4A2C`, `--sky-dusk #9DBADA`, `--horizon #F6ECDB` — are the honest, muted colours of the tree itself, for imagery, organic fills and the logo "in nature" (never for UI accents). The **ripeness ramp** (`--ripe-0 #9FAE5A` unripe green → `--ripe-5 #97381A` deep russet, with `--ripe-2` = `--amber`, plus a ready `--ripeness` gradient) is the whole bowl of konar fruit as one scale — use it to encode **growth / progress / mastery**, a concept ripening as it's learned. The primary `--leaf` accent was nudged off the old cool mint (`#5FB87A`) toward the tree's truer sage/yellow-green (`#74BE83`) while staying bright enough to remain the accessible accent on dark.

**Colour-blind safety.** The accents sit on the green–orange–blue axis and are spaced apart in **lightness** as well as hue, so they stay distinguishable under deuteranopia/protanopia/tritanopia. Critically, **semantic state is never carried by colour alone** — it is always reinforced by an icon, shape, or label (e.g. ✓/✗ in comparisons, a dot + word in status badges, distinct positions in plots). Treat that as a hard rule when building new components.

> **Token note.** The CSS exposes tree-named tokens (`--leaf`, `--amber`, `--russet`, `--dusk`) and keeps **legacy aliases** (`--azure`→leaf, `--gold`→amber, `--green`→leaf, `--coral`→russet, `--violet`→dusk) so older files render on-brand. **Prefer the tree names** in new work.

**Typography.** Three clean, modern sans typefaces — all **open-source / freely available** (SIL Open Font License), so they work in production with no licence cost:
- **Space Grotesk** — display & headings. Geometric, faintly technical; gives the scientific personality. Tight tracking (-0.02 to -0.03em) at large sizes.
- **Hanken Grotesk** — body, UI, long-form. Humanist, warm, highly readable. The workhorse.
- **JetBrains Mono** — code, math labels, data, and **eyebrows/kickers** (uppercase, letter-spaced).

**Fonts work both on the web and locally/offline.** The quick path is the Google Fonts `<link>` (see the top of `colors_and_type.css`). For a **local/offline or production** setup, self-host: download the families (e.g. from [fontsource](https://fontsource.org) or Google Fonts), drop the `.woff2` files in a `fonts/` folder, and add `@font-face` rules — the CSS variables (`--font-display` etc.) already point at the family names, so nothing else changes. *(No font files are bundled here yet — add them when you self-host.)*

**Math (the content is math-heavy).** Mathematical notation is rendered with **[KaTeX](https://katex.dev)** — fast, open-source, and it **bundles its own math fonts, so it renders identically offline once self-hosted**. Load `katex.min.css` + `katex.min.js` from CDN (web) or from a local `katex/` folder (offline). Render inline or display math, and **colour-code symbols** with `\textcolor{var}{…}` using the brand accents (weights = leaf, gradient = amber, rate = dusk) for the 3Blue1Brown effect. See `preview/type-math.html` for a working specimen and `ui_kits/docs/Article.jsx` (the `TeX` component) for the React pattern. **Do not** name a component `Math` — it shadows the global `Math` object KaTeX needs.

Type is generous: body 17px+, big airy display, balanced headings (`text-wrap: balance`), pretty body (`text-wrap: pretty`).

**Texture & backgrounds.** A subtle **film-grain overlay** (SVG `feTurbulence`, ~3.5% opacity, `overlay` blend) sits fixed over dark surfaces — the core "warm & textured" signal. Backgrounds are solid warm-dark, occasionally with a *very* soft radial glow behind a hero or an accent node. **No busy gradients, no purple-blue mesh, no stock photos.** Imagery, when present, is luminous diagrams/animations over the dark ground (manim-style): cool glowing lines on warm black.

**Paper insets.** Reading-dense content (definitions, worked examples, quotes) can sit on a **cream paper** surface (`--paper-bg #F1E9DA`, ink `#2A2620`), optionally with faint rule lines. This is the only place the palette inverts — used as a deliberate, sparing accent, like a note clipped to the board.

**Spacing & layout.** 4px base scale (`--s-1`…`--s-10`). Roomy. Content columns are narrow for reading (~68ch). Layouts are calm and grid-aligned; a faint baseline/axis motif (echoing the logo's plot) can appear as a structural accent. Fixed elements: top nav (sticky, translucent + blur over dark), and in-app a left rail.

**Radii.** Moderate, consistent: inputs/buttons `--r-md (10px)`, cards `--r-lg (14px)`–`--r-xl (20px)`, pills/avatars `--r-full`. Not bubbly, not sharp.

**Elevation.** On dark, depth comes from **lighter surfaces** (`bg-1 → bg-2 → bg-3`) plus **soft black shadows** for popovers/modals. Interactive emphasis uses a colored **glow** (`--glow-leaf`, `--glow-amber`) rather than heavy drop shadows. Cards: subtle 1px `--line-2` border + `bg-1` fill + optional `--shadow-md`; no colored left-border-accent cliché. `--glow-gold`) rather than heavy drop shadows. Cards: subtle 1px `--line-2` border + `bg-1` fill + optional `--shadow-md`; no colored left-border-accent cliché.

**Borders & hairlines.** Three weights: `--line-1` (barely-there dividers), `--line-2` (default border), `--line-3` (strong / focus base). Focus rings: 2px leaf-green outline + soft leaf glow.

**Transparency & blur.** Used for *floating chrome only* — sticky nav, menus, modals get `backdrop-filter: blur` over a translucent `bg-0`. Body content stays opaque. Protection: floating bars use a translucent fill + blur (capsule), not a hard gradient scrim, unless over imagery.

**Motion.** Calm and physical. Default `--ease` (gentle ease-out), `--dur 220ms`. Fades and short rises (8–12px) for entrances; never bounces, never springy overshoot. Accent nodes may *glow-pulse* slowly. Reduced-motion respected. The spirit is 3b1b: things *resolve into place* smoothly, drawing attention to the idea.

**Hover / press.**
- *Hover:* surfaces lighten one step (`bg-1 → bg-2`); accent buttons brighten (`leaf → leaf-bright`); links underline (3px offset). Subtle, ~120–220ms.
- *Press:* slight scale-down (0.98) + brief brightness dip. Never a color hue shift.
- *Disabled:* `--fg-4` text, reduced opacity, no shadow.

---

## ICONOGRAPHY

Konar uses **[Lucide](https://lucide.dev)** — an open-source line-icon set with a consistent 1.75px stroke, rounded caps/joins, and a calm geometric construction that matches Space Grotesk and the academic-but-friendly tone. *(Lucide is a deliberate, documented choice for this from-scratch brand; if Konar adopts a different set, swap here.)*

- **Style:** outline / stroke icons only — never filled, never duotone, never glyph-emoji. Stroke `currentColor`, default size 20–24px, 1.75–2px stroke.
- **Color:** icons inherit text color (`--fg-2`/`--fg-3`); accent icons use `--leaf`/`--amber` only to signal state or category.
- **Delivery:** load from CDN — `https://unpkg.com/lucide@latest` (or `lucide-static` SVGs). In React/JSX prototypes use inline `<svg>` copied from Lucide, or the `lucide` web font/sprite. Do **not** hand-draw replacement icons.
- **Emoji:** never used as iconography. **Unicode math glyphs** (∇, Σ, ∂, →, ×, ≈) *are* welcome inline in content and may appear set in JetBrains Mono as small "concept tokens."
- **Logo:** the Konar mark is bespoke (see `assets/`), not from an icon set. It is an **outlined K monogram** — a single-weight contour letterform with an **inner branch line** running through the stem and upper arm. The full **KONAR** wordmark is drawn in the same hollow, single-weight outline. Both are delivered as **font-independent vector outlines** (no live text), so they render anywhere — as `<img>`, in PowerPoint, in PDF. The mark is **single-colour** — recolour the whole glyph as one: cream on dark, ink on paper, dark on a warm field. See `Konar Logo.html` for the full showcase.

**Brand assets in `assets/`:**
- `logo-mark.svg` — the K monogram in cream `#F3EEE3`, for dark backgrounds.
- `logo-mark-mono.svg` / `logo-letter.svg` — `currentColor` monogram; recolours to any single colour (ink on paper, dark on a warm field, on-accent).
- `logo-lockup.svg` — the full **KONAR** wordmark in cream, for dark headers. `logo-full.svg` is the `currentColor` version.
- `badge-{leaf,amber,russet,dusk,soil,paper}.svg` — the monogram on a brand-colour **rounded square** (240×240, r 54) for avatars, favicons, and app icons.

Clear space ≥ the height of the K on all sides. Minimum monogram size 24px. The mark is single-colour — recolour the whole glyph as one; never split it into multiple colours or add effects.

---

## Index — what's in this system

**Foundations (root)**
- `README.md` — this file: context, content & visual foundations, iconography, index.
- `colors_and_type.css` — the single source of truth for tokens: color, type, spacing, radii, elevation, motion, and the film-grain utility. Import this everywhere.
- `SKILL.md` — agent-skill manifest (works as a Claude Code Agent Skill).

**Assets** — `assets/`
- Konar logo files (mark, mono, lockup). Icons come from Lucide (CDN).

**Design System cards** — `preview/`
- Small HTML specimens that populate the Design System tab (type, color, spacing, components, brand). Browse them there.

**UI Kits** — `ui_kits/<product>/` (each has its own `README.md`)
- `marketing/` — landing page + course catalog (the public site).
- `docs/` — documentation / knowledge base.
- `video/` — the video-lesson player experience.
- Each kit has its own `README.md`, an interactive `index.html`, and modular `.jsx` components.

**Slides** — `slides/`
- `index.html` — branded deck template with multiple slide types (title, section, concept, big-quote, comparison, etc.).

---

## Using this system

1. Link the fonts (snippet at the top of `colors_and_type.css`) and import `colors_and_type.css`.
2. Add `class="grain"` to `<body>` for the film-grain overlay.
3. Build with the CSS variables and semantic classes — don't hard-code hex values.
4. Pull components/patterns from the relevant UI kit; pull icons from Lucide.
5. Keep copy in Konar's voice (sentence case, warm, rigorous, no emoji).
