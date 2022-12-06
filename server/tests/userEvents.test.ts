import { createContext } from '../trpc/createContext'
import { router } from '../trpc/router'

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