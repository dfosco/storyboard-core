# `src/templates/Application/Application.jsx`

<!--
source: src/templates/Application/Application.jsx
category: template
importance: high
-->

> [← Architecture Index](./architecture.index.md)

## Goal

Primary page layout template that provides a global navigation header, an optional sidebar, storyboard debug overlays, and a main content area for page children.

## Composition

- **Default export**: `Application` component
- **Props**: `children`, `title`, `subtitle`, `topnav` (nav items array), `sidenav` (sidebar config)
- Render tree:
  1. `<Stack>` (Primer) with container styles
  2. `<SceneDebug />` — storyboard debug overlay
  3. `<SceneDataDemo />` — scene data demo overlay
  4. `<GlobalNavigation />` — top navigation bar
  5. Wrapper `<div>` with optional `<SidebarNavigation />` aside
  6. `<main>` — page content via `children`

## Dependencies

| Import | Purpose |
|---|---|
| `@primer/react` | `Stack` layout component |
| `../../components/GlobalNavigation.jsx` | Top navigation bar |
| `../../components/SidebarNavigation.jsx` | Sidebar navigation |
| `../../storyboard/components/SceneDebug.jsx` | Storyboard debug UI |
| `../../storyboard/components/SceneDataDemo.jsx` | Scene data demo UI |
| `./application.module.css` | CSS Modules styles |

## Dependents

- `src/pages/Issues.jsx`
- `src/pages/Overview.jsx`

## Notes

- The sidebar renders conditionally: only when the `sidenav` prop is provided.
- `SceneDebug` and `SceneDataDemo` are development/demo overlays injected at the template level; they may need to be removed or feature-flagged for production.
