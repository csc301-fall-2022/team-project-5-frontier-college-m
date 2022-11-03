import { createContext } from './createContext'
import { router } from './router'

test('example tRPC test', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)

  const count = await caller.query('hello')
  expect(count).toBeGreaterThanOrEqual(0)
})

test('user tRPC test', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)
  const user = await caller.query('user', {userId: 1})
  expect(user.name).toEqual('Jane Smith')
})
