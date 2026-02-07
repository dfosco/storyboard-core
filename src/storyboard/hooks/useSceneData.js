import { useContext } from 'react'
import { StoryboardContext } from '../context.jsx'
import { getByPath } from '../core/dotPath.js'

/**
 * Access scene data by dot-notation path.
 *
 * @param {string} [path] - Dot-notation path (e.g. 'user.profile.name').
 *                          Omit to get the entire scene object.
 * @returns {*} The resolved value. Returns {} if path is missing after loading.
 * @throws If used outside a StoryboardProvider.
 */
export function useSceneData(path) {
  const context = useContext(StoryboardContext)

  if (context === null) {
    throw new Error('useSceneData must be used within a <StoryboardProvider>')
  }

  const { data, loading, error } = context

  if (loading || error || data == null) {
    return undefined
  }

  if (!path) {
    return data
  }

  const value = getByPath(data, path)

  if (value === undefined) {
    console.warn(`[useSceneData] Path "${path}" not found in scene data.`)
    return {}
  }

  return value
}

/**
 * Returns true while scene data is still loading.
 */
export function useSceneLoading() {
  const context = useContext(StoryboardContext)

  if (context === null) {
    throw new Error('useSceneLoading must be used within a <StoryboardProvider>')
  }

  return context.loading
}
