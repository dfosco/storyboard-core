# `src/components/ColorModeSwitcher.jsx`

<!--
source: src/components/ColorModeSwitcher.jsx
category: component
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Dropdown menu that lets users switch between all six Primer color schemes (light, dark, and their colorblind / high-contrast variants).

## Composition

- **`ColorModeSwitcher`** (default export) — Uses `useTheme()` to read the current `colorScheme` and obtain `setDayScheme` / `setNightScheme`. Sets both day and night schemes to the same value so the selected theme applies unconditionally.
- Renders a `ActionMenu` with a `ActionList` of selectable scheme items, each with a sun/moon icon.

## Dependencies

- `@primer/react` — `useTheme`, `ActionMenu`, `ActionList`, `Stack`
- `@primer/octicons-react` — `SunIcon`, `MoonIcon`
- `./ColorModeSwitcher.module.css` — component styles

## Dependents

- `src/pages/index.jsx` — rendered on the home page
- `src/index.jsx` — rendered at the app root level

## Notes

Both `setDayScheme` and `setNightScheme` are called with the same value, effectively overriding the OS-level light/dark preference to force the user's explicit choice.
