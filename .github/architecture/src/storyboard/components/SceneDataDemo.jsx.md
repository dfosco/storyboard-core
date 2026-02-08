# `src/storyboard/components/SceneDataDemo.jsx`

<!--
source: src/storyboard/components/SceneDataDemo.jsx
category: storyboard
importance: high
-->

> [← Architecture Index](../../../architecture.index.md)

## Goal

A demo component that showcases the [`useSession()`](../hooks/useSession.js.md) hook API. It demonstrates how session state works with URL hash params as overrides over scene defaults. Every value can be overridden by adding a URL hash param (e.g., `#user.name=Alice&user.profile.bio=Hello`), and the override persists across page refreshes. Removing the param reverts to the scene default.

Unlike [`SceneDebug`](./SceneDebug.jsx.md) (which displays raw JSON), this component uses the session state system to show reactive, overridable data in a formatted UI.

## Composition

```jsx
export default function SceneDataDemo() {
  const [name] = useSession('user.name')
  const [username] = useSession('user.username')
  const [bio] = useSession('user.profile.bio')
  const [location] = useSession('user.profile.location')
  const [theme] = useSession('settings.theme')

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>useSession Demo</h2>
      <p>Add <code>?user.name=Alice</code> to the URL to override any value.</p>

      <section>
        <Text as="h3" fontWeight="bold">User</Text>
        <pre className={styles.codeBlock}>
          {name} ({username})
        </pre>
        <pre className={styles.codeBlock}>
          {bio} · {location}
        </pre>
      </section>

      <section>
        <Text as="h3" fontWeight="bold">Settings</Text>
        <pre className={styles.codeBlock}>
          theme: {theme}
        </pre>
      </section>
    </div>
  )
}
```

Each `useSession` call reads from the URL hash first, falling back to the scene data if no hash param exists. The component only destructures the `value` from the returned tuple (ignoring the setter and clear functions).

## Dependencies

- `@primer/react` — `Text`
- [`src/storyboard/hooks/useSession.js`](../hooks/useSession.js.md) — `useSession`
- `src/storyboard/components/SceneDebug.module.css` — CSS Modules (shared with [`SceneDebug`](./SceneDebug.jsx.md))

## Dependents

Currently not imported by any page. Available as a reusable demo component.

## Notes

- **URL hash override pattern** — The component description shows using query params (`?user.name=Alice`), but the actual implementation uses hash params (`#user.name=Alice`). The query param syntax in the UI text is incorrect; it should say `#user.name=Alice` to match the [`useSession`](../hooks/useSession.js.md) implementation.
- **Read-only demo** — This component only reads values. To demonstrate the setter/clear functions, a more interactive demo with form inputs would be needed.

