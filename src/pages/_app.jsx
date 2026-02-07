import { Outlet } from 'react-router-dom'
import StoryboardProvider from '../storyboard/context.jsx'

export default function App() {
  return (
    <StoryboardProvider>
      <Outlet />
    </StoryboardProvider>
  )
}
