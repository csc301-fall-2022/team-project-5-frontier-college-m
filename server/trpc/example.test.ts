import { createContext } from './createContext'
import { router } from './router'
import { td2Data } from './d2-dummy-data'

test('example tRPC test', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const count = await caller.query('hello')
  expect(count).toBeGreaterThanOrEqual(0)
})

test('even tRPC test name', async () => {
  const ctx = td2Data 
  const caller = router.createCaller(ctx)

  const answer = await caller.query('get_eventDetails')
  expect(answer[0].name).toBe('Figma Tutoring') 
})

test('even tRPC test type', async () => {
  const ctx = td2Data 
  const caller = router.createCaller(ctx)

  const answer = await caller.query('get_eventDetails')
  expect(answer[1].type).toBe('recurring') 
})
