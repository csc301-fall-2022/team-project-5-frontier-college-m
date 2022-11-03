import { createContext } from './createContext'
import { router } from './router'

test('announcements tRPC test count', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const announcements = await caller.query('announcements', {
    userID: 2,
    maxCount: 3
  } as any)
  expect(announcements).toHaveLength(3)
})

test('announcements tRPC test IDs', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const announcements = await caller.query('announcements', {
    userID: 2,
    maxCount: 5
  } as any)
  expect(announcements[0].id).toEqual(0)
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
  } as any)

  for (const announcement of announcements) {
    expect(announcement.sentAt >= dateLimit).toBeTruthy()
  }
})
