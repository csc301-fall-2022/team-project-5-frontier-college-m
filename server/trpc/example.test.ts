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
    userID: 2,
    maxCount: 3
  })
  expect(announcements).toHaveLength(3)
})

test('announcements tRPC test IDs', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const announcements = await caller.query('announcements', {
    userID: 2,
    maxCount: 5
  })
  expect(announcements[0].id).toEqual(4)
  expect(announcements[4].id).toEqual(5)
})

test('announcements tRPC test date', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const dateLimit = new Date('2022-11-01T11:16:01')
  const announcements = await caller.query('announcements', {
    userID: 2,
    maxCount: 5,
    noEarlierThan: dateLimit
  })

  for (const announcement of announcements) {
    expect(announcement.sentAt >= dateLimit).toBeTruthy()
  }
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
