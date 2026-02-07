# `src/storyboard/components/SceneDataDemo.jsx`

<!--
source: src/storyboard/components/SceneDataDemo.jsx
category: storyboard
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Demo component that showcases the `useSceneData()` hook by rendering user and navigation data from the active scene context.

## Composition

- **`SceneDataDemo`** (default export) — Calls `useSceneData()` to obtain the full scene object, then renders:
  - User name, username, bio, and location
  - Primary navigation labels joined with `·`
- Re-uses `SceneDebug.module.css` for styling

## Dependencies

- `@primer/react` — `Text`
- `../hooks/useSceneData.js` — `useSceneData` hook
- `./SceneDebug.module.css` — shared CSS module styles

## Dependents

- `src/templates/Application/Application.jsx` — renders `<SceneDataDemo />` in the application layout
