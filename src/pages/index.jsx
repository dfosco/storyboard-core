import { scenes } from 'virtual:storyboard-data-index'
import { Viewfinder } from '@dfosco/storyboard-react'

const pageModules = import.meta.glob('/src/pages/*.jsx')

export default function IndexPage() {
  return (
    <Viewfinder
      title="Storyboard"
      scenes={scenes}
      pageModules={pageModules}
      basePath={import.meta.env.BASE_URL}
    />
  )
}
