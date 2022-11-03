import { createContext } from './createContext'
import { router, announcementsRouter } from './router'

test('example tRPC test', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const count = await caller.query('hello')
  expect(count).toBeGreaterThanOrEqual(0)
})

test('announcements tRPC test count', async () => {
  const ctx = {userID: 2, maxCount: 3}
  const caller = announcementsRouter.createCaller(ctx)

  const announcements = await caller.query('announcements')
  expect(announcements).toHaveLength(3)
})

test('announcements tRPC test IDs', async () => {
  const ctx = {userID: 2, maxCount: 5}
  const caller = announcementsRouter.createCaller(ctx)

  const announcements = await caller.query('announcements')
  expect(announcements[0].id).toEqual(0)
  expect(announcements[4].id).toEqual(5)
})

test('announcements tRPC test date', async () => {
  const ctx = {userID: 2, maxCount: 5, noEarlierThan: new Date('2022-11-01T11:16:01')}
  const caller = announcementsRouter.createCaller(ctx)

  const announcements = await caller.query('announcements')
  for (const announcement of announcements) {
    expect(announcement.sentAt >= ctx.noEarlierThan).toBeTruthy()
  }
})
