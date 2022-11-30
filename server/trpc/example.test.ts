import { createContext } from './createContext'
import { router } from './router'

/**
 * Tests for /announcements
 */

test('announcements tRPC test count', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const announcements = await caller.query('announcements', {
    userId: 2,
    maxCount: 3
  })
  expect(announcements).toHaveLength(3)
})

test('announcements tRPC test IDs', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const announcements = await caller.query('announcements', {
    userId: 2,
    maxCount: 5
  })
  expect(announcements[0].id).toEqual(4)
  expect(announcements[4].id).toEqual(6)
})

test('announcements tRPC test date', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const dateLimit = new Date('2022-11-01T11:16:01')
  const announcements = await caller.query('announcements', {
    userId: 2,
    maxCount: 5,
    noEarlierThan: dateLimit
  })

  for (const announcement of announcements) {
    expect(announcement.sentAt >= dateLimit).toBeTruthy()
  }
})

/**
 * Tests for /eventDetails
 */

test('eventDetails tRPC test name', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const answer = await caller.query('eventDetails', {
    eventId: 'a26Au00000008tdIAA'
  })
  expect(answer?.name).toBe('Literacy and Basic Skills')
})

test('eventDetails tRPC test json', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const answer = await caller.query('eventDetails', {
    eventId: 'a26Au00000008wrIAA'
  })
  expect(answer?.programOfferingSchedule).toEqual({
    interval: 'weekly',
    daysOfWeek: [5, 6]
  })
})

/**
 * Tests for /user
 */

test('user tRPC test name', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const user = await caller.query('user', { userId: '003Au000005YI4mIAG' })
  expect(user.name).toEqual('Samm Du')
})

test('user tRPC test email', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const user = await caller.query('user', { userId: '003Au000005YI4mIAG' })
  expect(user.email).toEqual('samm.du@mail.utoronto.ca')
})

test('user tRPC test userType', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const user = await caller.query('user', { userId: '003Au000005YI4mIAG' })
  expect(user.userType).toEqual('Partner')
})

/**
 * Tests for /userEvents
 */

test('userEvents tRPC test userId', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)
  const userEvents = await caller.query('userEvents', {
    userId: '003Au000005D9H7IAK'
  })
  expect(userEvents.userId).toEqual('003Au000005D9H7IAK')
})

test('userEvents tRPC test event', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)
  const userEvents = await caller.query('userEvents', {
    userId: '003Au000005D9H7IAK'
  })
  expect(userEvents.events[0]).toEqual('a26Au00000008tdIAA')
})
