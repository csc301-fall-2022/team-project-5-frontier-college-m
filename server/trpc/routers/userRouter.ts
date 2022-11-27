import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'

/**
 * Return a user, identified by its id.
 */
export const userRouter = createRouter().query('user', {
  input: z.object({
    userId: z.string()
  }),

  async resolve({ input }) {
    if (!auth.token) {
      await auth.getBearerToken(api)
    }

    const userQuery = `SELECT Id, Name, Email FROM User WHERE Id='${input.userId}'`

    let userData = await api.query(userQuery, auth.token as string)

    if (userData && userData.errorCode && userData.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      userData = await api.query(userQuery, auth.token as string)
    }

    if (!userData.records || !userData.records[0]) return
    
    const user = userData.records[0]
    const contactQuery = `SELECT Id FROM Contact WHERE Email='${user.Email}'`

    let contactData = await api.query(contactQuery, auth.token as string)

    if (contactData && contactData.errorCode && contactData.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      contactData = await api.query(contactQuery, auth.token as string)
    }

    const contacts = contactData.records.map(entry => entry.Id)

    return {
      userId: user.Id,
      name: user.Name,
      contacts: contacts
    }
  }
})
