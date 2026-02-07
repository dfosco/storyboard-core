# `package.json`

<!--
source: package.json
category: config
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Defines the project metadata, scripts, and dependency tree for the Storyboard prototyping app.

## Composition

- **name**: `storyboard`, private, version `0.1.0`, ES module (`"type": "module"`)
- **Scripts**: `dev` (vite), `build` (vite build), `lint` (eslint), `preview` (vite preview)
- **Runtime dependencies**: React 19, react-router-dom, @generouted/react-router (file-based routing), @primer/react + @primer/octicons-react + @primer/primitives (design system), styled-components, jsonc-parser, web-vitals
- **Dev dependencies**: Vite 7, @vitejs/plugin-react, ESLint 9 + plugins, PostCSS (postcss-preset-env, @csstools/postcss-global-data), TypeScript types for React

## Dependencies

N/A (root manifest)

## Dependents

All project tooling and every `import` in the codebase ultimately resolves through the dependencies declared here.

## Notes

`jsonc-parser` is included for parsing JSON with comments (used by the storyboard scene loader). `web-vitals` is listed but not visibly consumed in application code.
