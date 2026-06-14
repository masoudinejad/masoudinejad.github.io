# Mojtaba Masoudinejad — Design System

A calm, serious, all-sans personal design system for **Mojtaba Masoudinejad** —
research engineer, writer, and builder of tools for machine-learning systems.
It exists to make every personal artifact (website, résumé, slides, side-project
UI, throwaway prototype) feel unmistakably *his*: friendly but serious, plain
but precise, scientific without being cold.

> **There is no upstream brand, codebase, or Figma.** This system was authored
> from a brief — *"personal · all-sans · light + dark · friendly, serious,
> scientific"* — so it is the source of truth, not a recreation. The palette is a
> teal-blue **ocean** primary with a muted green **moss** support on cool slate
> neutrals; there is intentionally **no logo**. If a real photo or résumé content
> exists, it should replace the placeholders noted throughout.

---

## Sources & provenance
- **Brief:** personal portfolio system; type *all sans-serif*; theme *light +
  dark with a real toggle*; personality *friendly, serious, scientific*; surfaces
  *personal homepage* + *résumé / about*. (Palette revised from an early warm
  terracotta to a calmer teal-blue + green at the owner's request; logo dropped.)
- **No external assets were provided.** Fonts are loaded from Google Fonts;
  icons from Lucide. Both are flagged under **Caveats** for self-hosting.

---

## Content fundamentals — how the words sound

The voice is **first person, calm, and unhurried**. It explains rather than
sells. Think *a thoughtful scientist writing to a curious friend*.

- **Person:** First person singular — "I study how systems learn." Speak *to*
  the reader as "you" in CTAs ("Read the CV", "Let's talk").
- **Casing:** Sentence case everywhere — headings, buttons, labels. The only
  uppercase is the **eyebrow/overline** (tracked-out, small). Never Title Case
  UI.
- **Tone:** Plain-spoken and precise. Define terms; respect the reader's
  intelligence; don't dumb things down. Confidence without hype.
- **Punctuation:** Em dashes for asides — like this. No exclamation points in
  product copy. Ampersands are fine in tight labels ("care & curiosity").
- **Numbers & science:** Set figures, units, and notation in **mono**
  (`v = ½·m·c²`). Tabular numerals for any aligned data.
- **Emoji:** **No.** Never decorative emoji. Meaning is carried by words and
  Lucide icons.
- **Length:** Short ledes (≤ 40ch), generous line-height, `text-wrap: pretty`.
  One idea per sentence.

**Examples**
- Hero: *"Hi, I'm Mojtaba. I study how systems learn."*
- Lede: *"I work at the seam between machine learning research and the tools
  that make it legible — and I write to make hard ideas feel simple."*
- Voice card *do*: write in first person; define terms; lead with the idea.
- Voice card *don't*: hype, buzzwords, exclamation points; hand-wave the
  science; emoji as decoration.

---

## Visual foundations — how it looks

**Overall vibe.** Cool paper and slate ink. Soft, generous rounding. Calm,
confident type. A single teal-blue accent doing the quiet, scientific work, with
a muted green for support. Nothing harsh, nothing neon, nothing purple-gradient.

### Color
- **Paper** (`--paper-*`): cool off-whites for light backgrounds (never pure
  `#fff` for the canvas — the app sits on `--paper-50 #f8f9fb`).
- **Slate** (`--stone-*`): neutral greys. Text primary is `stone-900`;
  borders use `stone-100 → 300`.
- **Ocean** (`--ocean-*`, primary, `#2a6f93`): teal-blue. The signature. Used for
  the primary button, links, accent text, soft accent fills.
- **Moss** (`--moss-*`, support, `#537d41`): quiet green. Positive accents, the
  support badge — used sparingly.
- **Semantic:** green/amber/red, each with a `*-soft` (tinted bg) and `*-text`
  pairing. Used sparingly.
- **Dark theme:** cool **charcoal**, never pure black (`--bg-app #14181d`).
  Surfaces step *up* in lightness. Ocean brightens to `ocean-400`; links shift to
  `ocean-300`. Shadows become near-invisible (depth carried by borders).
- **Imagery vibe:** calm, soft, even light. The hero "portrait" is a
  token-driven ocean→moss radial gradient stand-in (replace with a real photo).

### Type
- **Display — Schibsted Grotesk** (semibold, tight tracking): headlines, hero,
  section titles. Clean, architectural, serious.
- **Sans — Hanken Grotesk** (300–800): body, UI, labels. The workhorse.
- **Mono — JetBrains Mono:** code, data, scientific notation, captions.
- **Scale:** 11 → 72px modular (`--text-2xs … --text-6xl`). Hero is restrained —
  `clamp(2rem, 4.4vw, 3.25rem)`, semibold, not oversized.
- **Eyebrows:** 12px, semibold, `letter-spacing: .10em`, uppercase, accent text,
  often with a small leading icon.

### Spacing & layout
- **4px base grid** (`--space-1 = 4px … --space-16 = 64px`). Sections breathe at
  `--space-20` (80px) vertical.
- **Containers:** `--container-lg (1024)` for the site; `--container-prose
  (68ch)` for reading. Centered, `--space-6` gutters.
- **Fixed elements:** a single sticky, blurred navbar (`--z-sticky`). The résumé
  aside is `position: sticky`. No other chrome.

### Shape, depth & borders
- **Radii** are generous (friendly): `md 10` for inputs/buttons, `lg 14` for
  cards, `xl 20`/`2xl 28` for hero/dialog, `pill` for badges & the toggle.
- **Borders:** hairline `1px` in stone for definition; most separation is a
  border, not a shadow.
- **Shadows** are **cool-tinted** (slate, via `--shadow-color`) and soft —
  `xs → xl`. Cards use `sm`; raised/hover uses `md/lg`; dialogs `xl`. In dark
  mode shadows nearly vanish.
- **Cards:** surface-card background, hairline border, soft `sm` shadow, `lg`
  radius, `clip` overflow. Interactive cards **lift 2px** + grow the shadow on
  hover.

### Motion
- Easing: `--ease-out` (most), `--ease-in-out` (symmetric), `--ease-spring`
  (gentle overshoot — checks, switch thumb, hover arrows).
- Durations: `fast 140 · base 220 · slow 340`. Quick, never bouncy-cartoonish.
- **Hover:** color shifts (accent → `accent-hover`), subtle background tint, a
  2px lift on cards, a 3px diagonal nudge on "↗" link arrows.
- **Press:** a small `scale(0.985–0.92)` + 0.5px translate. Tactile, restrained.
- All decorative motion respects `prefers-reduced-motion`.

### Transparency & blur
- Used **only** for the navbar (`backdrop-filter: blur` over a translucent
  paper) and the dialog backdrop (3px blur + slate wash). Never on content.

---

## Iconography

- **System: [Lucide](https://lucide.dev)** — 24px grid, **2px stroke, round
  caps/joins**. This matches the warm-but-precise tone (humanist, not sharp).
- **In foundation cards:** loaded from CDN
  (`unpkg.com/lucide@0.460.0`) via `data-lucide` attributes.
- **In React (UI kits):** the handful of icons used are **inlined** as path data
  in `ui_kits/portfolio/Icons.jsx` and rendered via `<Icon name="…" />`. This
  avoids a CDN/runtime dependency inside the kits and keeps them offline-safe.
  To add an icon, copy its Lucide path data into `MM_ICON_PATHS`.
- **Sizing:** in `rem` so icons scale with adjacent text; default `1.25rem`.
  Color is always `currentColor`.
- **Emoji / unicode as icons:** never. Use Lucide.
- **Logo:** there is **no logo or monogram** — by choice. This is a personal
  site, so the brand is simply the name set in Schibsted Grotesk. The navbar and
  footer use the wordmark *Mojtaba Masoudinejad* as plain text; don't generate or
  add a mark.

---

## Index — what's in this project

**Foundations (root):**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `elevation.css`, `base.css`.
- `guidelines/*.card.html` — foundation specimen cards (Type, Colors, Spacing,
  Brand) shown in the Design System tab.

**Components** (`components/<group>/`, namespace
`window.MojtabaMasoudinejadDesignSystem_141387`):
- **forms/** — `Button`, `IconButton`, `Field`, `Input`, `Textarea`, `Select`,
  `Checkbox`, `Radio`, `Switch`
- **data/** — `Card`, `Badge`, `Tag`, `Avatar`, `AvatarGroup`
- **feedback/** — `Dialog`, `Toast`, `ToastViewport`, `Tooltip`
- **navigation/** — `Tabs`, `Navbar` (+ `NavLink`, `NavLinks`, `NavSpacer`,
  `NavActions`), `ThemeToggle`

Each component ships `.jsx` + `.d.ts` (props/contract) + `.prompt.md` (usage),
and each group has one `*.card.html` specimen.

**UI kits** (`ui_kits/<product>/`):
- **portfolio/** — the personal website. Interactive: hero, work, writing,
  about, light/dark, Contact dialog → toast. (`index.html`, `App.jsx`,
  `Home.jsx`, `About.jsx`, `Icons.jsx`, `portfolio.css`.)
- **resume/** — standalone About / résumé page; reuses the portfolio's `PFAbout`
  view and icons.

**Starting points** (for consuming projects): `Button` (Forms), the
**Portfolio** personal site, and the **Résumé** page.

---

## Caveats & substitutions
- **Fonts** are loaded from **Google Fonts** (Schibsted Grotesk, Hanken
  Grotesk, JetBrains Mono). For offline/production use, self-host the `.woff2`
  files and swap the `@import` in `tokens/fonts.css` for local `@font-face`
  rules. No font binaries ship today, so the manifest reports **0 fonts** — this
  is expected.
- **Icons** use **Lucide** (closest match to the desired humanist 2px style).
  Flagged as the system's chosen set, not a substitution for an existing one.
- **Imagery** (hero portrait) is a **token gradient placeholder** — replace with
  a real photo.
- **All copy and résumé data are illustrative placeholders.**
