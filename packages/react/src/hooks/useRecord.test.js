import { renderHook, act } from '@testing-library/react'
import { seedTestData, TEST_RECORDS } from '../../test-utils.js'
import { activateHideMode, setShadow } from '@dfosco/storyboard-core'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return { ...actual, useParams: vi.fn(() => ({})) }
})
import { useParams } from 'react-router-dom'

import { useRecord, useRecords } from './useRecord.js'

beforeEach(() => {
  seedTestData()
  useParams.mockReturnValue({})
})

// ── useRecord ──

describe('useRecord', () => {
  it('returns null when no URL param matches', () => {
    const { result } = renderHook(() => useRecord('posts'))
    expect(result.current).toBeNull()
  })

  it('returns matching record entry when param is set', () => {
    useParams.mockReturnValue({ id: 'post-1' })
    const { result } = renderHook(() => useRecord('posts'))
    expect(result.current).toEqual(TEST_RECORDS.posts[0])
  })

  it('returns null when param value does not match any entry', () => {
    useParams.mockReturnValue({ id: 'nonexistent' })
    const { result } = renderHook(() => useRecord('posts'))
    expect(result.current).toBeNull()
  })

  it('defaults paramName to id', () => {
    useParams.mockReturnValue({ id: 'post-2' })
    const { result } = renderHook(() => useRecord('posts'))
    expect(result.current).toEqual(TEST_RECORDS.posts[1])
  })

  it('returns null gracefully when record collection does not exist', () => {
    useParams.mockReturnValue({ id: 'post-1' })
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const { result } = renderHook(() => useRecord('nonexistent'))
    expect(result.current).toBeNull()
    console.error.mockRestore()
  })
})

// ── useRecords ──

describe('useRecords', () => {
  it('returns all entries from a record collection', () => {
    const { result } = renderHook(() => useRecords('posts'))
    expect(result.current).toEqual(TEST_RECORDS.posts)
  })

  it('returns empty array when record does not exist', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const { result } = renderHook(() => useRecords('nonexistent'))
    expect(result.current).toEqual([])
    console.error.mockRestore()
  })

  it('applies hash overrides to existing entries', () => {
    window.location.hash = 'record.posts.post-1.title=Updated'
    const { result } = renderHook(() => useRecords('posts'))
    const post1 = result.current.find(e => e.id === 'post-1')
    expect(post1.title).toBe('Updated')
  })

  it('creates new entries from hash overrides', () => {
    window.location.hash = 'record.posts.new-post.title=New'
    const { result } = renderHook(() => useRecords('posts'))
    const newPost = result.current.find(e => e.id === 'new-post')
    expect(newPost).toBeTruthy()
    expect(newPost.title).toBe('New')
  })
})

// ── Hide mode ──

describe('useRecord (hide mode)', () => {
  beforeEach(() => {
    act(() => { activateHideMode() })
  })

  it('reads overrides from localStorage shadow in hide mode', () => {
    useParams.mockReturnValue({ id: 'post-1' })
    act(() => { setShadow('record.posts.post-1.title', 'Shadow Title') })

    const { result } = renderHook(() => useRecord('posts'))
    expect(result.current.title).toBe('Shadow Title')
  })

  it('reactively updates when shadow changes in hide mode', () => {
    useParams.mockReturnValue({ id: 'post-1' })
    const { result } = renderHook(() => useRecord('posts'))
    expect(result.current.title).toBe('First Post')

    act(() => { setShadow('record.posts.post-1.title', 'Updated via Shadow') })
    expect(result.current.title).toBe('Updated via Shadow')
  })
})

describe('useRecords (hide mode)', () => {
  beforeEach(() => {
    act(() => { activateHideMode() })
  })

  it('applies shadow overrides to existing entries', () => {
    act(() => { setShadow('record.posts.post-1.title', 'Hidden Update') })

    const { result } = renderHook(() => useRecords('posts'))
    const post1 = result.current.find(e => e.id === 'post-1')
    expect(post1.title).toBe('Hidden Update')
  })

  it('creates new entries from shadow overrides', () => {
    act(() => { setShadow('record.posts.shadow-post.title', 'New Shadow') })

    const { result } = renderHook(() => useRecords('posts'))
    const newPost = result.current.find(e => e.id === 'shadow-post')
    expect(newPost).toBeTruthy()
    expect(newPost.title).toBe('New Shadow')
  })
})
