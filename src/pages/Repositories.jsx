import Application from '../templates/Application/Application.jsx'
import { useSceneData } from '../storyboard'
import { Button, TextInput, IconButton, SegmentedControl } from '@primer/react'
import {
  HomeIcon,
  RepoIcon,
  ProjectIcon,
  PackageIcon,
  PeopleIcon,
  PersonIcon,
  ShieldIcon,
  GraphIcon,
  GearIcon,
  RepoForkedIcon,
  StarIcon,
  FilterIcon,
  ListUnorderedIcon,
  TableIcon,
  XCircleFillIcon,
  SearchIcon,
  GlobeIcon,
  OrganizationIcon,
  LockIcon,
  LinkIcon,
  ArchiveIcon,
  RowsIcon,
} from '@primer/octicons-react'
import styles from './repositories.module.css'

const iconMap = {
  home: HomeIcon,
  repo: RepoIcon,
  project: ProjectIcon,
  package: PackageIcon,
  people: PeopleIcon,
  person: PersonIcon,
  shield: ShieldIcon,
  graph: GraphIcon,
  gear: GearIcon,
  globe: GlobeIcon,
  organization: OrganizationIcon,
  lock: LockIcon,
  link: LinkIcon,
  'repo-forked': RepoForkedIcon,
  archive: ArchiveIcon,
  rows: RowsIcon,
}

function Repositories() {
  const rawTopnav = useSceneData('topnav')
  const rawSidenav = useSceneData('sidenav')
  const rawRepos = useSceneData('repositories')
  const topnavData = Array.isArray(rawTopnav) ? rawTopnav : []
  const sidenavData = Array.isArray(rawSidenav) ? rawSidenav : []
  const repositories = Array.isArray(rawRepos) ? rawRepos : []
  const org = useSceneData('org') || {}

  const topnav = topnavData.map((item) => ({
    icon: iconMap[item.icon] || RepoIcon,
    label: item.label,
    url: item.url || '#',
    current: item.current || false,
    counter: item.counter,
  }))

  const sidenav = sidenavData.map((item) => ({
    icon: item.icon ? iconMap[item.icon] : undefined,
    label: item.label,
    url: item.url || '#',
    current: item.current || false,
  }))

  return (
    <Application
      title={org.name || 'dsp-testing'}
      topnav={topnav}
      sidenav={sidenav}
    >
      <div className={styles.content}>
        <div className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>All</h2>
          <Button variant="primary">New repository</Button>
        </div>

        <div className={styles.filterBar}>
          <TextInput
            className={styles.filterInput}
            leadingVisual={() => <><FilterIcon size={16} /> Filter</>}
            placeholder="Filter"
            defaultValue="copilot"
            trailingAction={
              <TextInput.Action
                onClick={() => {}}
                icon={XCircleFillIcon}
                aria-label="Clear"
              />
            }
          />
          <IconButton icon={SearchIcon} aria-label="Search" variant="invisible" />
        </div>

        <div>
          <div className={styles.repoListHeader}>
            <span className={styles.repoListHeaderText}>
              {repositories.length} repositories
            </span>
            <div className={styles.sortControls}>
              <Button variant="invisible" trailingAction={null} size="small">
                Last pushed ↓
              </Button>
              <SegmentedControl aria-label="View mode" size="small">
                <SegmentedControl.IconButton
                  icon={TableIcon}
                  aria-label="Card view"
                  selected
                />
                <SegmentedControl.IconButton
                  icon={ListUnorderedIcon}
                  aria-label="List view"
                />
              </SegmentedControl>
            </div>
          </div>

          {repositories.map((repo) => (
            <div key={repo.name} className={styles.repoRow}>
              <div className={styles.repoInfo}>
                <RepoIcon size={16} className={styles.repoIcon} />
                <a href="#" className={styles.repoName}>
                  {repo.name}
                </a>
                {repo.description && (
                  <span className={styles.repoDescription}>
                    {repo.description}
                  </span>
                )}
              </div>
              <div className={styles.repoMeta}>
                {repo.language && (
                  <span className={styles.metaItem}>
                    <span className={styles.languageDot} />
                    {repo.language}
                  </span>
                )}
                <a href="#" className={styles.metaItem}>
                  <GearIcon size={16} />
                </a>
                <a href="#" className={styles.metaItem}>
                  <RepoForkedIcon size={16} />
                  {repo.forks}
                </a>
                <a href="#" className={styles.metaItem}>
                  <StarIcon size={16} />
                  {repo.stars}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Application>
  )
}

export default Repositories
