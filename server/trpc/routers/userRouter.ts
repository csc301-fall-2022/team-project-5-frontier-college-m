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
    const statement = `SELECT Name, Username FROM User WHERE Username='${input.username}'`
    const token = await auth.getBearerToken(api)
    if (typeof token == "string") {
      const data = await api.query(statement, token)
      return {
        username: data.records[0].Username,
        name: data.records[0].Name
      }
    }
  }
})
