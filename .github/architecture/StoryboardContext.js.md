# `src/storyboard/StoryboardContext.js`

<!--
source: src/storyboard/StoryboardContext.js
category: storyboard
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Creates and exports the React Context object used to distribute loaded scene data throughout the storyboard component tree.

## Composition

- **`StoryboardContext`** — `createContext(null)`. A single named export; the context value is `null` until a provider supplies scene data.

## Dependencies

- `react` — `createContext`

## Dependents

- `src/storyboard/context.jsx` — imports `StoryboardContext` to wrap it in a `StoryboardProvider` component
- `src/storyboard/hooks/useSceneData.js` — reads from this context via `useContext(StoryboardContext)`

## Notes

This file is intentionally kept separate from `context.jsx` (which contains the provider logic) to avoid circular imports: hooks that consume the context can import this lightweight module without pulling in the provider's loader dependencies.
