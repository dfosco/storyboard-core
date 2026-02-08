# `src/storyboard/hooks/useSession.js`

<!--
source: src/storyboard/hooks/useSession.js
category: storyboard
importance: high
-->

> [← Architecture Index](../../../architecture.index.md)

## Goal

A React hook that provides read/write access to session state backed by URL hash params, with scene data as the fallback default. It uses `useSyncExternalStore` to subscribe to hash changes reactively, ensuring components re-render when session params update.

The hook prioritizes URL hash params over scene defaults: if a hash param exists, it wins; otherwise, the scene JSON value is used. This enables URL-based state overrides that persist across page refreshes without mutating the underlying scene data.

## Composition

**Hook signature:**

```js
export function useSession(path)
```

Returns a tuple similar to `useState`:

```js
const [value, setValue, clearValue] = useSession('settings.theme')
```

- `value` — Current value (hash param if present, otherwise scene default)
- `setValue(newValue)` — Write to the hash param
- `clearValue()` — Remove the hash param, reverting to scene default

**Read priority:**

```
URL hash param  ??  Scene JSON value  ??  undefined
```

**Write target:**

```
URL hash only (scene JSON is read-only)
```

**Implementation:**

The hook uses `useSyncExternalStore` to subscribe to `hashchange` events:

```js
function subscribeToHash(callback) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

const getSnapshot = useCallback(() => getParam(path), [path])
const hashValue = useSyncExternalStore(subscribeToHash, getSnapshot)
```

Whenever the hash changes, React re-renders the component with the new value. The snapshot function reads the specific path from the hash on each render.

**Value resolution:**

```js
const sceneDefault = data != null ? getByPath(data, path) : undefined
const value = hashValue !== null ? hashValue : sceneDefault
```

If the hash param exists (even if empty string), it takes precedence. Otherwise, the scene data is used as the fallback.

**Setters:**

```js
const setValue = useCallback((newValue) => {
  setParam(path, newValue)
}, [path])

const clearValue = useCallback(() => {
  removeParam(path)
}, [path])
```

Both setters are memoized with the `path` as the dependency.

## Dependencies

- `react` — `useCallback`, `useContext`, `useSyncExternalStore`
- [`src/storyboard/StoryboardContext.js`](../StoryboardContext.js.md) — `StoryboardContext` for scene data
- [`src/storyboard/core/dotPath.js`](../core/dotPath.js.md) — `getByPath` to read nested scene values
- [`src/storyboard/core/session.js`](../core/session.js.md) — `getParam`, `setParam`, `removeParam`

## Dependents

- [`src/storyboard/components/SceneDataDemo.jsx`](../components/SceneDataDemo.jsx.md) — Uses `useSession` to demonstrate session state
- [`src/storyboard/index.js`](../index.js.md) — Re-exports the hook

## Notes

- **Must be inside `StoryboardProvider`** — The hook throws an error if used outside a provider because it needs access to scene data.
- **Dot-notation paths** — The `path` parameter supports nested keys like `'user.profile.name'` via [`getByPath`](../core/dotPath.js.md).
- **Why `useSyncExternalStore`?** — React 18's `useSyncExternalStore` is designed for subscribing to external state (like browser APIs). It handles concurrent rendering correctly and avoids tearing issues. Using `useState` + `useEffect` would require manual sync logic and could miss rapid updates.
- **Session vs Scene** — Session state is ephemeral and URL-bound. Scene data is loaded once and immutable during the session. This separation lets prototypes use URL params for transient UI state (filters, selected tabs, etc.) without polluting scene files.
