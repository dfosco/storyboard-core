/**
 * Tests for authModal.js — PAT entry modal lifecycle.
 *
 * Alpine.js is stubbed: initTree triggers the Alpine component methods
 * directly so we can test the modal's resolve/reject/close behavior
 * without a real Alpine runtime.
 */

import { vi } from 'vitest'
import { clearToken } from '../auth.js' // eslint-disable-line no-unused-vars -- kept for future test coverage

// Store the Alpine component factory so tests can call done()/close()/submit()
let alpineFactory = null
let alpineInitTree = null

vi.mock('alpinejs', () => ({
  default: {
    start: vi.fn(),
    data: vi.fn((name, factory) => { alpineFactory = factory }),
    initTree: vi.fn((el) => { alpineInitTree?.(el) }),
  },
}))

describe('authModal.js', () => {
  let openAuthModal, signOut

  beforeEach(async () => {
    document.body.innerHTML = ''
    localStorage.clear()
    alpineFactory = null
    alpineInitTree = null

    vi.resetModules()

    const mockAlpine = {
      _sbAuthRegistered: false,
      start: vi.fn(),
      data: vi.fn((name, factory) => { alpineFactory = factory }),
      initTree: vi.fn((el) => { alpineInitTree?.(el) }),
    }

    vi.doMock('alpinejs', () => ({ default: mockAlpine }))

    // authModal.js reads window.Alpine directly (set by mount.js at runtime)
    window.Alpine = mockAlpine

    const mod = await import('./authModal.js')
    openAuthModal = mod.openAuthModal
    signOut = mod.signOut
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('creates a backdrop element in the DOM', () => {
    openAuthModal()

    const backdrop = document.getElementById('sb-auth-modal')
    expect(backdrop).not.toBeNull()
    expect(backdrop.classList.contains('sb-auth-backdrop')).toBe(true)
  })

  it('removes old modal before creating a new one', () => {
    openAuthModal()
    openAuthModal()

    const modals = document.querySelectorAll('#sb-auth-modal')
    expect(modals.length).toBe(1)
  })

  it('resolves null when Escape is pressed', async () => {
    const promise = openAuthModal()

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))

    const result = await promise
    expect(result).toBeNull()
    expect(document.getElementById('sb-auth-modal')).toBeNull()
  })

  it('resolves null when backdrop is clicked', async () => {
    const promise = openAuthModal()

    const backdrop = document.getElementById('sb-auth-modal')
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    const result = await promise
    expect(result).toBeNull()
    expect(document.getElementById('sb-auth-modal')).toBeNull()
  })

  it('does not close when inner modal content is clicked', () => {
    openAuthModal()

    const inner = document.querySelector('.sb-auth-modal')
    inner.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    // Modal should still be present
    expect(document.getElementById('sb-auth-modal')).not.toBeNull()
  })

  it('registers Alpine component with sbAuthModal name', () => {
    openAuthModal()
    expect(alpineFactory).toBeTypeOf('function')
  })

  describe('Alpine component methods via _ref', () => {
    it('done() resolves promise with user and removes modal', async () => {
      const promise = openAuthModal()

      // Simulate what Alpine does: create instance from factory, set user, call done()
      const instance = alpineFactory()
      instance.user = { login: 'testuser', avatarUrl: 'https://example.com/avatar.png' }
      instance.done()

      const result = await promise
      expect(result).toEqual({ login: 'testuser', avatarUrl: 'https://example.com/avatar.png' })
      expect(document.getElementById('sb-auth-modal')).toBeNull()
    })

    it('close() resolves promise with null and removes modal', async () => {
      const promise = openAuthModal()

      const instance = alpineFactory()
      instance.close()

      const result = await promise
      expect(result).toBeNull()
      expect(document.getElementById('sb-auth-modal')).toBeNull()
    })

    it('done() on second modal resolves the second promise, not the first', async () => {
      // Open first modal, then close via Escape
      const promise1 = openAuthModal()
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
      const result1 = await promise1
      expect(result1).toBeNull()

      // Reset Alpine registration so factory is recaptured on next open
      window.Alpine._sbAuthRegistered = false

      // Open second modal
      const promise2 = openAuthModal()
      const instance2 = alpineFactory()
      instance2.user = { login: 'user2', avatarUrl: 'https://example.com/u2.png' }
      instance2.done()

      const result2 = await promise2
      expect(result2).toEqual({ login: 'user2', avatarUrl: 'https://example.com/u2.png' })
      expect(document.getElementById('sb-auth-modal')).toBeNull()
    })
  })

  describe('signOut', () => {
    it('clears the stored token', () => {
      localStorage.setItem('sb-comments-token', 'ghp_test')
      localStorage.setItem('sb-comments-user', JSON.stringify({ login: 'test' }))

      signOut()

      expect(localStorage.getItem('sb-comments-token')).toBeNull()
      expect(localStorage.getItem('sb-comments-user')).toBeNull()
    })
  })
})
