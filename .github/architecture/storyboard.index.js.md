# `src/storyboard/index.js`

<!--
source: src/storyboard/index.js
category: storyboard
importance: high
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Public barrel file for the storyboard module — re-exports the provider, hooks, and core utilities so consumers can import from a single path.

## Composition

| Export | Source |
|---|---|
| `StoryboardProvider` | `./context.jsx` |
| `useSceneData` | `./hooks/useSceneData.js` |
| `useSceneLoading` | `./hooks/useSceneData.js` |
| `getByPath` | `./core/dotPath.js` |
| `loadScene` | `./core/loader.js` |

## Dependencies

Re-exports only; no logic of its own.

## Dependents

No files currently import from the barrel path. Internal consumers import submodules directly (e.g., `../storyboard/context.jsx`, `../core/loader.js`).

## Notes

- This barrel exists as the intended public API for the storyboard system. Consumers outside of `src/storyboard/` should prefer importing from here rather than reaching into submodules.
