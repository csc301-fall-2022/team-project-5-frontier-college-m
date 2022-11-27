import { createContext } from './createContext'
import { router } from './router'
import { td2Data } from '~/shared/d2-dummy-data'

/**
 * Tests for /announcements
 */

test('announcements tRPC test count', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const announcements = await caller.query('announcements', {
    userId: "005Au0000028amjIAA",
    maxCount: 3
  })
  expect(announcements.length).toBeLessThanOrEqual(3)
})

test('announcements tRPC test date', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const announcements = await caller.query('announcements', {
    userId: "005Au0000028amjIAA",
    noEarlierThan: new Date(0)
  })
  for (const announcement of announcements) {
    expect(new Date(announcement.createdDate) > new Date(0)).toBe(true)
  }
})

test('announcements tRPC test false user', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const announcements = await caller.query('announcements', {
    userId: "baduserid",
    noEarlierThan: new Date(0)
  })
  expect(announcements).toHaveLength(0)
})


/**
 * Tests for /eventDetails
 */

test('eventDetails tRPC test name', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const answer = await caller.query('eventDetails', {
    eventId: 0
  })
  expect(answer.name).toBe('Figma Tutoring')
})

test('eventDetails tRPC test type', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const answer = await caller.query('eventDetails', {
    eventId: 1
  })
  expect(answer.type).toBe('recurring')
})

/**
 * Tests for /user
 */

test('user tRPC test', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)
  const users = [0, 1, 2]
  users.forEach(async (id) => {
    const user = await caller.query('user', { userId: id })
    expect(user.name).toEqual(td2Data.users[id].name)
  })
})
