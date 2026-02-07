# `eslint.config.js`

<!--
source: eslint.config.js
category: config
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Flat ESLint configuration for linting all `.js` and `.jsx` files with React-specific rules and React Refresh support.

## Composition

- **Default export**: Array of config objects (ESLint flat config format)
- Ignores `dist/` directory
- Targets `**/*.{js,jsx}` with ECMAScript 2020, browser globals, and JSX
- Applies recommended rules from `@eslint/js`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`
- Disables `react/jsx-no-target-blank`; warns on non-component exports via `react-refresh/only-export-components`

## Dependencies

- `@eslint/js` — base recommended rules
- `globals` — browser global definitions
- `eslint-plugin-react` — React linting (pinned to React 18.3)
- `eslint-plugin-react-hooks` — hooks rules
- `eslint-plugin-react-refresh` — fast-refresh compliance

## Dependents

None — consumed by the ESLint CLI (`npm run lint`), not imported by application code.

## Notes

React version is hardcoded to `18.3` in settings even though the project uses React 19. This may suppress version-specific lint warnings.
