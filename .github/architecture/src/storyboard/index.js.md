# `src/storyboard/index.js`

<!--
source: src/storyboard/index.js
category: storyboard
importance: medium
-->

> [← Architecture Index](../../architecture.index.md)

## Goal

The public barrel file for the storyboard system. All external imports of storyboard functionality should go through this module. It exports the provider, hooks, utilities, and the new session state management API.

## Composition

```js
export { default as StoryboardProvider } from './context.jsx'
export { useSceneData, useSceneLoading } from './hooks/useSceneData.js'
export { useSession } from './hooks/useSession.js'
export { getByPath } from './core/dotPath.js'
export { loadScene } from './core/loader.js'
export { getParam, setParam, getAllParams, removeParam } from './core/session.js'
```

The module exports two main categories:
1. **Scene data access** — `StoryboardProvider`, `useSceneData`, `useSceneLoading` for read-only scene data
2. **Session state** — `useSession` hook and direct utilities (`getParam`, `setParam`, etc.) for URL hash-based state management

## Dependencies

- [`src/storyboard/context.jsx`](./context.jsx.md) — Provider component
- [`src/storyboard/hooks/useSceneData.js`](./hooks/useSceneData.js.md) — Scene data access hooks
- [`src/storyboard/hooks/useSession.js`](./hooks/useSession.js.md) — Session state hook
- [`src/storyboard/core/dotPath.js`](./core/dotPath.js.md) — Path utility
- [`src/storyboard/core/loader.js`](./core/loader.js.md) — Scene loader
- [`src/storyboard/core/session.js`](./core/session.js.md) — Session utilities

## Dependents

This is the intended public import path for external consumers. Currently, internal files import from specific sub-modules directly (e.g., [`src/pages/_app.jsx`](../pages/_app.jsx.md) imports from [`src/storyboard/context.jsx`](./context.jsx.md)).
