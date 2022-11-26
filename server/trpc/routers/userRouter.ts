import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'

/**
 * Return a user object, identified by its id.
 */
export const userRouter = createRouter().query('user', {
  input: z.object({
    username: z.string()
  }),

  async resolve({ input }) {
    if (!auth.token) {
      await auth.getBearerToken(api)
    }

    const qString = `SELECT Name, Username FROM User WHERE Username='${input.username}'`
    let data = await api.query(qString, auth.token as string)

    if (data && data.errorCode && data.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      data = await api.query(qString, auth.token as string)
    }

    const user = data.records[0]
    if (user) {
      return {
        username: user.Username,
        name: user.Name
      }
    }
  }
})
