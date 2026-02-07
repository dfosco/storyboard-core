# `src/components/SidebarNavigation.jsx`

<!--
source: src/components/SidebarNavigation.jsx
category: component
importance: medium
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Renders a vertical sidebar navigation list using Primer's `NavList`, defaulting to an issues-oriented set of links.

## Composition

- **`SidebarNavigation`** (default export) — Props: `items` (array of nav items, defaults to `defaultNav`).
- **`defaultNav`** — 4-item array: Open issues, Your issues, Assigned to you (current), Mentioning you.
- Maps items into `NavList.Item` entries with leading icons and `aria-current` support.

## Dependencies

- `@primer/react` — `NavList`
- `@primer/octicons-react` — `IssueOpenedIcon`, `SmileyIcon`, `PersonIcon`, `MentionIcon`

## Dependents

- `src/templates/Application/Application.jsx` — rendered in the sidebar slot of the Application layout
