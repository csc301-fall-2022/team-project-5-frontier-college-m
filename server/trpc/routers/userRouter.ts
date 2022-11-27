import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter, TRPCError } from '../createRouter'

/**
 * Return a user, identified by its id (Contact Id in Salesforce).
 */
export const userRouter = createRouter().query('user', {
  input: z.object({
    userId: z.string()
  }),

  async resolve({ input }) {
    if (!auth.token) {
      await auth.getBearerToken(api)
    }

    const contactQuery = `SELECT Id, Name, Email, RecordTypeId FROM Contact WHERE Id='${input.userId}'`

    let contactData = await api.query(contactQuery, auth.token as string)
    if (
      contactData &&
      contactData.errorCode &&
      contactData.errorCode === 'INVALID_SESSION_ID'
    ) {
      await auth.getBearerToken(api)
      contactData = await api.query(contactQuery, auth.token as string)
    }

    if (!contactData || !contactData.totalSize || contactData.totalSize !== 1) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Given user not found by Id = ' + input.userId
      })
    }

    const contact = contactData.records[0]

    const recordTypeQuery = `SELECT Id, Name, DeveloperName FROM RecordType WHERE Id = '${contact.RecordTypeId}'`
    let recordData = await api.query(recordTypeQuery, auth.token as string)
    if (
      recordData &&
      recordData.errorCode &&
      recordData.errorCode === 'INVALID_SESSION_ID'
    ) {
      await auth.getBearerToken(api)
      recordData = await api.query(recordTypeQuery, auth.token as string)
    }

    return {
      userId: contact.Id,
      name: contact.Name,
      email: contact.Email,
      userType: recordData.records[0].Name
    }
  }
})
