# `src/storyboard/context.jsx`

<!--
source: src/storyboard/context.jsx
category: storyboard
importance: high
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Provides the `StoryboardProvider` component that loads scene data and exposes it to the component tree via React context, blocking rendering until loading completes.

## Composition

- **Default export**: `StoryboardProvider` component
- **Named export**: `StoryboardContext` (re-exported from `./StoryboardContext.js`)
- **Props**:
  - `sceneName` — override the active scene name
  - `fallback` — custom loading UI (defaults to `<Text>Loading scene…</Text>`)
  - `children` — child components rendered after data loads
- **Context value shape**: `{ data, error, loading, sceneName }`

## Dependencies

| Import | Purpose |
|---|---|
| `react` | `useState`, `useEffect` |
| `react-router-dom` | `useSearchParams` — reads `?scene=` query param |
| `@primer/react` | `Text` — loading/error display |
| `./core/loader.js` | `loadScene` — fetches and resolves scene JSON |
| `./StoryboardContext.js` | The raw `createContext` object |

## Dependents

- `src/pages/_app.jsx` — wraps the entire app
- `src/storyboard/index.js` — re-exports as `StoryboardProvider`

## Notes

- Scene name resolution priority: `?scene=` URL param → `sceneName` prop → `"default"`.
- The provider **blocks** child rendering during loading and on error, displaying status text instead. This guarantees downstream `useSceneData` consumers always have data available.
- `StoryboardContext` is defined in a separate file (`StoryboardContext.js`) so that the context object can be imported by hooks without pulling in the provider's React dependencies.
