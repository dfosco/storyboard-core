# `src/storyboard/core/loader.js`

<!--
source: src/storyboard/core/loader.js
category: storyboard
importance: high
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Loads scene JSON/JSONC files from `src/data/`, resolves `$ref` and `$global` directives, and returns fully-merged scene data objects.

## Composition

| Export | Description |
|---|---|
| `loadScene(sceneName)` | Main entry — loads `scenes/{sceneName}.json(c)`, processes `$global` merges and recursive `$ref` resolution |
| `deepMerge(target, source)` | Deep-merges two objects; arrays are replaced, not concatenated; source wins |

**Internal functions:**

| Function | Description |
|---|---|
| `resolveRefPath(ref, baseDir)` | Resolves relative `../`-style paths against a base directory |
| `loadDataFile(dataPath)` | Looks up a data file from the eager-imported module map; parses with JSONC |
| `resolveRefs(node, baseDir, seen)` | Recursively walks the data tree replacing `{ "$ref": "..." }` objects with loaded file contents |

**Module-level state:**

- `dataModules` — Vite `import.meta.glob` eagerly loads all `src/data/**/*.{json,jsonc}` files as raw strings at build time.

## Dependencies

| Import | Purpose |
|---|---|
| `jsonc-parser` | `parse` — parses JSON with comments (JSONC) |
| `import.meta.glob` | Vite API — eagerly imports all data files at build time |

## Dependents

- `src/storyboard/context.jsx` — calls `loadScene` to fetch scene data
- `src/storyboard/index.js` — re-exports `loadScene`
- `src/storyboard/components/SceneDebug.jsx` — calls `loadScene` directly

## Notes

- All data files are loaded eagerly at build time via `import.meta.glob` with `?raw` query. This means data is bundled into the JS output — there are no runtime fetch calls.
- `$global` is a root-level array of relative paths; each referenced file is deep-merged into the scene, with the scene's own keys taking priority.
- `$ref` objects (`{ "$ref": "../path" }`) are replaced inline at any depth. Circular references are detected and throw.
- File lookup tries `.jsonc` extension first, then `.json`.
