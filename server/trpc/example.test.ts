import { createContext } from './createContext'
import { router } from './router'
import { td2Data } from '~/shared/d2-dummy-data'

test('user tRPC test', async () => {
  const ctx = await createContext()
  const caller = router.createCaller(ctx)
  const users = [0, 1, 2]
  users.forEach(async (id) => {
    const user = await caller.query('user', { userId: id })
    expect(user.name).toEqual(td2Data.users[id].name)
  })
})
