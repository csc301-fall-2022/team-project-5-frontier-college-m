import { createContext } from '../trpc/createContext'
import { router } from '../trpc/router'

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