import { createContext } from '../trpc/createContext'
import { router } from '../trpc/router'

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