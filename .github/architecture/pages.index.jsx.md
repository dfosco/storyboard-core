# `src/pages/index.jsx`

<!--
source: src/pages/index.jsx
category: page
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Home page route (`/`) that composes the Playground welcome screen with the color-mode switcher.

## Composition

- **`Code`** (default export) — Renders `<Playground />` and `<ColorModeSwitcher />` inside a fragment.

## Dependencies

- `../components/Playground.jsx` — welcome/starter component
- `../components/ColorModeSwitcher.jsx` — theme switcher dropdown

## Dependents

Auto-registered as the `/` route by `@generouted/react-router` file-based routing (no explicit import needed).

## Notes

The component is named `Code` internally but serves as the index/home page by virtue of its file path. Generouted picks it up automatically.
