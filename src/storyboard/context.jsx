import { createContext, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { loadScene } from './core/loader.js'

export const StoryboardContext = createContext(null)

/**
 * Provides loaded scene data to the component tree.
 * Reads the scene name from the ?scene= URL param, the sceneName prop,
 * or defaults to "default".
 */
export default function StoryboardProvider({ sceneName, children }) {
  const [searchParams] = useSearchParams()
  const sceneFromUrl = searchParams.get('scene')
  const activeSceneName = sceneFromUrl || sceneName || 'default'

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(null)

    loadScene(activeSceneName)
      .then((sceneData) => {
        setData(sceneData)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [activeSceneName])

  const value = {
    data,
    error,
    loading,
    sceneName: activeSceneName,
  }

  return (
    <StoryboardContext.Provider value={value}>
      {children}
    </StoryboardContext.Provider>
  )
}
