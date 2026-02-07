import { Text } from '@primer/react'
import { useSceneData, useSceneLoading } from '../hooks/useSceneData.js'
import styles from './SceneDebug.module.css'

/**
 * Demo component that uses useSceneData() to display scene data
 * through the hook API instead of loading directly.
 */
export default function SceneDataDemo() {
  const loading = useSceneLoading()
  const user = useSceneData('user')
  const navigation = useSceneData('navigation')

  if (loading) return <Text>Loading scene data…</Text>

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>useSceneData Demo</h2>

      <section>
        <Text as="h3" fontWeight="bold">User</Text>
        <pre className={styles.codeBlock}>
          {user.name} ({user.username})
        </pre>
        <pre className={styles.codeBlock}>
          {user.profile.bio}
        </pre>
        <pre className={styles.codeBlock}>
          {user.profile.location}
        </pre>
      </section>

      <section>
        <Text as="h3" fontWeight="bold">Navigation</Text>
        <pre className={styles.codeBlock}>
          {navigation.primary.map((item) => item.label).join(' · ')}
        </pre>
      </section>
    </div>
  )
}
