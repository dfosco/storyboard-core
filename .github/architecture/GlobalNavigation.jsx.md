# `src/components/GlobalNavigation.jsx`

<!--
source: src/components/GlobalNavigation.jsx
category: component
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Renders the repository-style top navigation header with a GitHub logo, title/subtitle, and an `UnderlineNav` tab bar.

## Composition

- **`GlobalNavigation`** (default export) — Props: `items` (nav tab array, defaults to `defaultNav`), `title`, `subtitle`.
- **`defaultNav`** — Hardcoded array of 8 tabs (Code, Issues, Pull Requests, Discussions, Actions, Projects, Security, Insights) with Octicon icons and optional counters.
- Renders a hamburger `IconButton`, the `MarkGithubIcon` logo, and an `UnderlineNav` mapping over items.

## Dependencies

- `@primer/react` — `UnderlineNav`, `Stack`, `IconButton`, `Text`
- `@primer/octicons-react` — multiple icons (`CodeIcon`, `IssueOpenedIcon`, `GitPullRequestIcon`, etc.)
- `./globalNavigation.module.css` — component styles

## Dependents

- `src/templates/Application/Application.jsx` — used as the page header, receiving `title`, `subtitle`, and `topnav` items
