import {
  syncOverrideClasses,
  setSceneClass,
  installBodyClassSync,
} from './bodyClasses.js'
import { activateHideMode, deactivateHideMode, setShadow } from './hideMode.js'

/**
 * Collect all sb- prefixed classes currently on document.body.
 * @returns {string[]}
 */
function getSbClasses() {
  return [...document.body.classList].filter((c) => c.startsWith('sb-'))
}

beforeEach(() => {
  // Clear all sb- classes and hash between tests
  for (const cls of getSbClasses()) {
    document.body.classList.remove(cls)
  }
  window.location.hash = ''
  // Ensure hide mode is off
  try {
    deactivateHideMode()
  } catch {
    // ignore if not active
  }
})

// ── Override Classes ──

describe('Override body classes', () => {
  it('adds sb- classes for hash overrides', () => {
    window.location.hash = '#theme=dark&sidebar=collapsed'
    syncOverrideClasses()
    expect(getSbClasses()).toContain('sb-theme--dark')
    expect(getSbClasses()).toContain('sb-sidebar--collapsed')
  })

  it('removes stale classes when overrides are cleared', () => {
    window.location.hash = '#theme=dark&sidebar=collapsed'
    syncOverrideClasses()
    expect(getSbClasses()).toContain('sb-theme--dark')

    window.location.hash = '#sidebar=collapsed'
    syncOverrideClasses()
    expect(getSbClasses()).not.toContain('sb-theme--dark')
    expect(getSbClasses()).toContain('sb-sidebar--collapsed')
  })

  it('removes all override classes when hash is empty', () => {
    window.location.hash = '#theme=dark'
    syncOverrideClasses()
    expect(getSbClasses()).toContain('sb-theme--dark')

    window.location.hash = ''
    syncOverrideClasses()
    const overrideClasses = getSbClasses().filter((c) => !c.startsWith('sb-scene--'))
    expect(overrideClasses).toEqual([])
  })

  it('sanitizes dot-notation keys (dots become dashes)', () => {
    window.location.hash = '#settings.theme=dark'
    syncOverrideClasses()
    expect(getSbClasses()).toContain('sb-settings-theme--dark')
  })

  it('sanitizes values with special characters', () => {
    window.location.hash = '#mode=dark.dimmed'
    syncOverrideClasses()
    expect(getSbClasses()).toContain('sb-mode--dark-dimmed')
  })

  it('skips overrides with empty values', () => {
    window.location.hash = '#theme='
    syncOverrideClasses()
    const overrideClasses = getSbClasses().filter((c) => !c.startsWith('sb-scene--'))
    expect(overrideClasses).toEqual([])
  })

  it('updates classes when override value changes', () => {
    window.location.hash = '#theme=dark'
    syncOverrideClasses()
    expect(getSbClasses()).toContain('sb-theme--dark')

    window.location.hash = '#theme=light'
    syncOverrideClasses()
    expect(getSbClasses()).not.toContain('sb-theme--dark')
    expect(getSbClasses()).toContain('sb-theme--light')
  })
})

// ── Scene Classes ──

describe('Scene body classes', () => {
  it('sets sb-scene-- class', () => {
    setSceneClass('Dashboard')
    expect(getSbClasses()).toContain('sb-scene--dashboard')
  })

  it('replaces previous scene class', () => {
    setSceneClass('Dashboard')
    setSceneClass('Settings')
    expect(getSbClasses()).not.toContain('sb-scene--dashboard')
    expect(getSbClasses()).toContain('sb-scene--settings')
  })

  it('removes scene class when called with empty string', () => {
    setSceneClass('Dashboard')
    setSceneClass('')
    const sceneClasses = getSbClasses().filter((c) => c.startsWith('sb-scene--'))
    expect(sceneClasses).toEqual([])
  })

  it('does not interfere with override classes', () => {
    window.location.hash = '#theme=dark'
    syncOverrideClasses()
    setSceneClass('Dashboard')
    expect(getSbClasses()).toContain('sb-theme--dark')
    expect(getSbClasses()).toContain('sb-scene--dashboard')
  })
})

// ── Hide Mode ──

describe('Hide mode body classes', () => {
  it('reflects shadow overrides as body classes', () => {
    activateHideMode()
    setShadow('theme', 'dark')
    syncOverrideClasses()
    expect(getSbClasses()).toContain('sb-theme--dark')
  })
})

// ── installBodyClassSync ──

describe('installBodyClassSync', () => {
  it('runs initial sync on install', () => {
    window.location.hash = '#layout=compact'
    const unsub = installBodyClassSync()
    expect(getSbClasses()).toContain('sb-layout--compact')
    unsub()
  })

  it('returns an unsubscribe function', () => {
    const unsub = installBodyClassSync()
    expect(typeof unsub).toBe('function')
    unsub()
  })
})
