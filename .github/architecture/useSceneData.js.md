# `src/storyboard/hooks/useSceneData.js`

<!--
source: src/storyboard/hooks/useSceneData.js
category: storyboard
importance: high
-->

> [← Architecture Index](./architecture.index.md)

## Goal

React hooks for consuming scene data from the `StoryboardContext` — `useSceneData` retrieves values by dot-notation path, and `useSceneLoading` exposes the loading state.

## Composition

| Export | Description |
|---|---|
| `useSceneData(path?)` | Returns scene data at the given dot-path (e.g. `'user.profile.name'`). Returns the full scene object when no path is given. Returns `{}` with a console warning if the path is not found. Returns `undefined` while loading or on error. |
| `useSceneLoading()` | Returns `true` while scene data is still loading. |

Both hooks throw if used outside a `<StoryboardProvider>`.

## Dependencies

| Import | Purpose |
|---|---|
| `react` | `useContext` |
| `../StoryboardContext.js` | The raw context object |
| `../core/dotPath.js` | `getByPath` — dot-notation property accessor |

## Dependents

- `src/storyboard/index.js` — re-exports both hooks
- `src/storyboard/components/SceneDataDemo.jsx` — uses `useSceneData()` to display scene data

## Notes

- The hook intentionally returns `{}` (not `undefined`) for missing paths after loading completes. This lets consumers destructure safely without null-checks, but may mask typos — the console warning is the only signal.
- Because `StoryboardProvider` blocks rendering until data is loaded, the `undefined` return for loading/error states is typically unreachable in practice. It serves as a safety net if the hook is used in a subtree that somehow bypasses the provider.
