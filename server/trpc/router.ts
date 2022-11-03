import { z } from 'zod'
import { createRootRouter, createRouter } from './createRouter'
import { td2Data } from '~/shared/d2-dummy-data'

const helloRouter = createRouter().query('hello', {
  resolve() {
    return 'Hello'
  }
})

/**
 * Return a user object, identified by its id.
 */
const userRouter = createRouter().query('user', {
  input: z.object({
    userId: z.number().int().nonnegative()
  }),
  resolve({ input }) {
    const userDetails: { [userId: number]: any } = td2Data.users
    return {
      userId: input.userId,
      name: userDetails[input.userId].name
    }
  }
})

export const router = createRootRouter().merge(helloRouter).merge(userRouter)
