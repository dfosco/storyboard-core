# `src/index.jsx`

<!--
source: src/index.jsx
category: entry
importance: high
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Application entry point — mounts the React root, wraps the app in Primer's `ThemeProvider` and `BaseStyles`, and renders the auto-generated `<Routes />` from `@generouted/react-router`.

## Composition

- Selects the `#root` DOM element and calls `createRoot`
- Render tree (outer → inner):
  1. `<StrictMode>`
  2. `<ThemeProvider colorMode="auto">`
  3. `<BaseStyles>`
  4. `<ColorModeSwitcher />` — toggles light/dark mode
  5. `<Routes />` — file-based router outlet

## Dependencies

| Import | Purpose |
|---|---|
| `react`, `react-dom/client` | React 18 root API |
| `@generouted/react-router` | Auto-generated `<Routes />` from `src/pages/` |
| `@primer/react` | `ThemeProvider`, `BaseStyles` |
| `./reset.css`, `./globals.css` | Global stylesheets |
| `./components/ColorModeSwitcher` | Theme toggle component |

## Dependents

None — this is the application entry point referenced by `index.html`.

## Notes

- `colorMode="auto"` defers to the user's OS-level dark/light preference. The `ColorModeSwitcher` component can override it at runtime.
- There is no explicit dark-mode default here; the previous `night` / `dark_dimmed` scheme has been replaced by `auto` mode.
