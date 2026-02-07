# `vite.config.js`

<!--
source: vite.config.js
category: config
importance: high
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Configures the Vite build tool with React support, file-based routing via `@generouted/react-router`, and PostCSS processing using Primer design-token CSS primitives.

## Composition

- **Default export**: `defineConfig` object
- **Plugins**: `@vitejs/plugin-react`, `@generouted/react-router/plugin`
- **Dev server**: port `1234`
- **PostCSS pipeline**:
  - `@csstools/postcss-global-data` — injects Primer Primitives CSS custom-property files
  - `postcss-preset-env` — stage 2 features with nesting-rules enabled, focus-visible and logical-properties disabled

## Dependencies

| Package | Purpose |
|---|---|
| `vite` | Build toolchain |
| `@vitejs/plugin-react` | React Fast Refresh / JSX transform |
| `@generouted/react-router` | File-based route generation from `src/pages/` |
| `@csstools/postcss-global-data` | Injects global CSS custom properties for PostCSS |
| `postcss-preset-env` | Modern CSS transforms |
| `@github/browserslist-config` | GitHub's shared browser-support list |
| `glob` | Globs Primer Primitives CSS files at build time |

## Dependents

No source files import this directly — it is consumed by Vite at build/dev time.

## Notes

- Primer Primitives CSS files are eagerly globbed at config time and injected as global data so that `postcss-preset-env` can resolve custom-property fallbacks in any CSS module.
- The `noIsPseudoSelector` option on `nesting-rules` avoids emitting `:is()` selectors for broader browser compatibility.
