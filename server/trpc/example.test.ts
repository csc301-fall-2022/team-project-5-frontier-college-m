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

test('user tRPC test name', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const user = await caller.query('user', { userId: '0056g000005JD9wAAG' })
  expect(user.name).toEqual('Frontier College Hub')
})

test('user tRPC test contact', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const user = await caller.query('user', { userId: '005Au0000028agHIAQ' })
  expect(user.contacts[0]).toEqual('003Au000006dNMPIA2')
})
