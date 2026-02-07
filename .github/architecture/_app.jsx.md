# `src/pages/_app.jsx`

<!--
source: src/pages/_app.jsx
category: routing
importance: high
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Root layout route for `@generouted/react-router` — wraps every page in a `StoryboardProvider` so scene data is available app-wide, and renders child routes via `<Outlet />`.

## Composition

- **Default export**: `App` component
- Render tree:
  1. `<StoryboardProvider>` — loads scene data from JSON and provides it via context
  2. `<Outlet />` — React Router nested route outlet

## Dependencies

| Import | Purpose |
|---|---|
| `react-router-dom` | `Outlet` for nested routing |
| `../storyboard/context.jsx` | `StoryboardProvider` context wrapper |

## Dependents

Consumed automatically by `@generouted/react-router` as the root `_app` layout. No file imports it directly.

## Notes

- `_app.jsx` is a generouted convention: any file named `_app.jsx` inside `src/pages/` becomes a layout wrapper for all sibling and nested routes.
- Because `StoryboardProvider` blocks rendering until scene data loads, no child page will render until the active scene is resolved.
