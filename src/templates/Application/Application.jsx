import { Stack } from '@primer/react'
import GlobalNavigation from '../../components/GlobalNavigation.jsx'
import SidebarNavigation from '../../components/SidebarNavigation.jsx'
import SceneDebug from '../../storyboard/components/SceneDebug.jsx';
import styles from "./application.module.css";

function Application({ children, title, subtitle, topnav, sidenav }) {
    return (
      <Stack className={styles.container}>
        <SceneDebug />
        <GlobalNavigation title={title} subtitle={subtitle} items={topnav} />
        <div className={styles.wrapper}>
        {sidenav &&
          <aside className={styles.navigation}>
            <SidebarNavigation sidenav={sidenav} />
          </aside>
        }
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </Stack>
    )
}

export default Application
