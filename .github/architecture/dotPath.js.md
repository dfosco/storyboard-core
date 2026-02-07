# `src/storyboard/core/dotPath.js`

<!--
source: src/storyboard/core/dotPath.js
category: storyboard
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Provides a safe dot-notation property accessor for navigating nested objects (e.g., `'user.profile.name'`).

## Composition

- **`getByPath(obj, path)`** — Splits `path` on `.`, walks `obj` segment-by-segment, returns the resolved value or `undefined` if any segment is missing. Handles `null`/`undefined` inputs gracefully.

## Dependencies

None (pure utility, no imports).

## Dependents

- `src/storyboard/hooks/useSceneData.js` — uses `getByPath` to resolve sub-paths within loaded scene data
- `src/storyboard/index.js` — re-exports `getByPath` as part of the public storyboard API

## Notes

Numeric keys work for array access (e.g., `'projects.0.name'`) because arrays are objects and `current[segment]` coerces the string key.
