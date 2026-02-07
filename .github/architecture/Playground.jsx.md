# `src/components/Playground.jsx`

<!--
source: src/components/Playground.jsx
category: component
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Starter / welcome component that introduces new users to the Primer React prototyping environment with a Mona animation and documentation links.

## Composition

- **`Playground`** (default export) — Renders the GitHub logo, two `CodeLine` messages, and a `Footer` with links to Primer docs.
- **`CodeLine`** — Internal helper; renders an icon + text line styled like a terminal output.
- **`Footer`** — Internal helper; links to Primer React docs and Primer Templates (staff-only).
- Displays the `mona-loading.gif` animated image.

## Dependencies

- `@primer/react` — `Stack`, `Text`, `Link`
- `@primer/octicons-react` — `MarkGithubIcon`, `CheckIcon`, `CommentIcon`, `SmileyIcon`
- `../images/mona-loading.gif` — animated Mona image
- `./playground.module.css` — component styles

## Dependents

- `src/pages/index.jsx` — rendered on the home page
