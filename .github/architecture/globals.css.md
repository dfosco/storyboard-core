# `src/globals.css`

<!--
source: src/globals.css
category: style
importance: low
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Global stylesheet that imports Primer design-token CSS (sizes, typography, motion, themes) and sets base typographic styles for headings, paragraphs, and the root element.

## Composition

- Imports 20 `@primer/primitives` CSS files covering size, typography, motion, breakpoints, and all 9 color themes
- Sets `h1`/`h2` font sizes and weights via Primer CSS custom properties
- Sets `p`/`span`/`li` body text sizing
- Forces `#root` to fill the viewport height
