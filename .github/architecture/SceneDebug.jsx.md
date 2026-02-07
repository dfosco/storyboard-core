# `src/storyboard/components/SceneDebug.jsx`

<!--
source: src/storyboard/components/SceneDebug.jsx
category: storyboard
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Debug component that loads a scene by name and displays its full JSON data, useful for verifying the scene loader pipeline.

## Composition

- **`SceneDebug`** (default export) — Accepts an optional `sceneName` prop. Reads `?scene=` from the URL search params as a fallback, defaulting to `'default'`. Calls `loadScene()` in a `useEffect`, manages loading/error/data states, and renders the result as pretty-printed JSON.
- Uses `PropTypes` for optional `sceneName` validation.

## Dependencies

- `react` — `useState`, `useEffect`
- `react-router-dom` — `useSearchParams`
- `@primer/react` — `Text`
- `prop-types` — runtime prop validation
- `../core/loader.js` — `loadScene`
- `./SceneDebug.module.css` — component styles

## Dependents

- `src/templates/Application/Application.jsx` — renders `<SceneDebug />` in the application layout

## Notes

This component calls `loadScene()` directly (imperative) rather than using the `StoryboardProvider` context, making it a standalone debug tool that works outside the provider tree.
