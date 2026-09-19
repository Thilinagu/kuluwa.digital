# Design System

Source of truth: the supplied Kuluwa.digital brand identity document and logo SVGs. All tokens live in `tailwind.config.ts` — never hardcode a hex color in a component.

## Colors

See the color table in `tailwind.config.ts theme.extend.colors`. Key names: `ink`, `void`, `coral` / `coral-deep`, `cobalt`, `gold`, `surface-0/1/2` (+ `surface-dark-*` for dark mode), `text-primary` / `text-secondary` (+ `text-dark-*`).

## Typography

- Heading: Sora (placeholder for General Sans — see note in `src/app/layout.tsx`)
- Body: Inter
- Mono: JetBrains Mono

## The "node"

The coral dot from the end of the logo's K is the brand's signature reusable device — see `src/components/shared/NodeIcon.tsx`. Reuse it for bullet points, the pulsing hero accent, and similar micro-moments; don't introduce a second generic bullet/dot style.

## Layout conventions

Left-aligned text blocks (not centered marketing copy), flat cards with a 1px border and no default shadow, coral solid-fill primary buttons with a hover color shift (no lift/shadow effect), dark footer regardless of page theme.
