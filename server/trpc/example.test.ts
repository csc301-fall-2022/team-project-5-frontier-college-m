import { createContext } from './createContext'
import { router } from './router'

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
