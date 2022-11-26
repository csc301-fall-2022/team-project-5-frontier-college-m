import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'
import { td2Data } from '~/shared/d2-dummy-data'

/**
 * Return a user object, identified by its id.
 */
export const userRouter = createRouter().query('user', {
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
