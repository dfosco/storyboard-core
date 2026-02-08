# `src/storyboard/context.jsx`

<!--
source: src/storyboard/context.jsx
category: storyboard
importance: high
-->

> [← Architecture Index](../../architecture.index.md)

## Goal

The `StoryboardProvider` component that loads scene data and provides it to the component tree via React context. It determines which scene to load from three sources (in priority order): the `?scene=` URL parameter, the `sceneName` prop, or the default `"default"`. It blocks rendering children until the scene is fully loaded, showing a loading fallback or error message as needed.

This is the runtime core of the storyboard system — it calls [`loadScene()`](./core/loader.js.md) on mount, stores the result in state, and exposes it through [`StoryboardContext`](./StoryboardContext.js.md) so any descendant can call [`useSceneData()`](./hooks/useSceneData.js.md) or [`useSession()`](./hooks/useSession.js.md).

## Composition

The component accepts three props:

```jsx
export default function StoryboardProvider({ sceneName, fallback, children })
```

**Scene name resolution** — Reads directly from `window.location.search` to avoid React Router re-renders:

```js
function getSceneParam() {
  return new URLSearchParams(window.location.search).get('scene')
}

const activeSceneName = getSceneParam() || sceneName || 'default'
```

This bypasses React Router's `useSearchParams()` hook, which would cause a full re-render on every navigation event including hash changes. The provider only re-loads the scene when the `activeSceneName` changes, which is stable across hash-only updates.

The context value shape provided to descendants:

```js
const value = {
  data,        // resolved scene object (or null)
  error,       // error message string (or null)
  loading,     // boolean
  sceneName: activeSceneName,
}
```

The component blocks rendering until loading completes:

```jsx
if (loading) {
  return fallback ?? <Text>Loading scene…</Text>
}
if (error) {
  return <Text color="danger.fg">Error loading scene: {error}</Text>
}
return (
  <StoryboardContext.Provider value={value}>
    {children}
  </StoryboardContext.Provider>
)
```

Also re-exports [`StoryboardContext`](./StoryboardContext.js.md) as a named export.

## Dependencies

- `react` — `useState`, `useEffect`
- `@primer/react` — `Text`
- [`src/storyboard/core/loader.js`](./core/loader.js.md) — `loadScene`
- [`src/storyboard/StoryboardContext.js`](./StoryboardContext.js.md) — `StoryboardContext`

## Dependents

- [`src/pages/_app.jsx`](../pages/_app.jsx.md) — wraps the entire route tree
- [`src/storyboard/index.js`](./index.js.md) — re-exported as the public `StoryboardProvider`

## Notes

- **React Router interaction** — The provider no longer uses `react-router-dom`'s `useSearchParams()` because React Router (via `generouted`) patches `history.replaceState/pushState`. This means any query param change triggers a full route tree re-render, even if only the hash changed. By reading the search param directly from `window.location.search`, the provider only responds to actual scene changes.
