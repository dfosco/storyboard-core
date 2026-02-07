/**
 * Resolves a dot-notation path against an object.
 *
 * @param {object} obj  - The source object
 * @param {string} path - Dot-notation path (e.g. 'user.profile.name' or 'projects.0')
 * @returns {*} The value at the path, or undefined if any segment is missing
 */
export function getByPath(obj, path) {
  if (obj == null || typeof path !== 'string' || path === '') {
    return undefined
  }

  const segments = path.split('.')
  let current = obj

  for (const segment of segments) {
    if (current == null || typeof current !== 'object') {
      return undefined
    }
    current = current[segment]
  }

  return current
}
