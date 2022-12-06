import { createContext } from '../trpc/createContext'
import { router } from '../trpc/router'

test('announcements tRPC test count', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const announcements = await caller.query('announcements', {
    userId: "003Au000005YI4mIAG",
    maxCount: 3
  })
  expect(announcements.length).toBeLessThanOrEqual(3)
})

test('announcements tRPC test future date', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  // make a new date 1000 years in the future
  const announcements = await caller.query('announcements', {
    userId: "003Au000005D9H7IAK",
    noEarlierThan: new Date(3000, 1, 1)
  })
  expect(announcements.length).toBe(0)
})

test('announcements tRPC test false user', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const announcements = await caller.query('announcements', {
    userId: "003Au000005D9H7IAKaaaaa",
    noEarlierThan: new Date(0)
  })
  expect(announcements).toHaveLength(0)
})