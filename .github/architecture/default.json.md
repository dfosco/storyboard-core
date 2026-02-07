# `src/data/scenes/default.json`

<!--
source: src/data/scenes/default.json
category: data
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Default scene definition that assembles user, navigation, project, and settings data for the storyboard system.

## Composition

- **`user`** — `$ref` to `../objects/jane-doe` (resolved at load time by the scene loader)
- **`navigation`** — `$ref` to `../objects/navigation`
- **`projects`** — Inline array of two project objects (`primer-react`, `storyboard`) with owner, stars, and issues
- **`settings`** — Inline object: theme `dark_dimmed`, notifications enabled, language `en`

## Dependencies

- `../objects/jane-doe` — referenced via `$ref`
- `../objects/navigation` — referenced via `$ref`

## Dependents

- `src/storyboard/core/loader.js` — `loadScene('default')` dynamically imports this file as the default scene

## Notes

`$ref` values are not standard JSON pointers — they are custom references resolved by the storyboard loader (`resolveRef` in `loader.js`), which dynamically imports the referenced JSON modules.
