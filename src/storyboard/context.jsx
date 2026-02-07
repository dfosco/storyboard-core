/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Text } from '@primer/react'
import { loadScene } from './core/loader.js'
import { StoryboardContext } from './StoryboardContext.js'

export { StoryboardContext }

/**
 * Provides loaded scene data to the component tree.
 * Reads the scene name from the ?scene= URL param, the sceneName prop,
 * or defaults to "default".
 * 
 * Blocks rendering children until scene data is loaded.
 */
export default function StoryboardProvider({ sceneName, fallback, children }) {
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

  // Block children until loaded
  if (loading) {
    return fallback ?? <Text>Loading scene…</Text>
  }

  if (error) {
    return <Text color="danger.fg">Error loading scene: {error}</Text>
  }

  return (
    <StoryboardContext.Provider value={value}>
      {children}
    </StoryboardContext.Provider>
  )
}
