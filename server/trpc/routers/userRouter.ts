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
    const contactQuery = `SELECT Id, Name, Email, RecordTypeId FROM Contact WHERE Id='${input.userId}'`
    const contactResp = await api.query(contactQuery, auth)
    const contactData = await contactResp.json()
    if (!contactResp || contactResp.status !== 200) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause: contactData
      })
    }

    if (!contactData || !contactData.totalSize || contactData.totalSize !== 1) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Given user not found by Id = ' + input.userId
      })
    }
    const contact = contactData.records[0]

    const recordTypeQuery = `SELECT Id, Name, DeveloperName FROM RecordType WHERE Id = '${contact.RecordTypeId}'`
    const recordResp = await api.query(recordTypeQuery, auth)
    const recordData = await recordResp.json()
    if (!recordResp || recordResp.status !== 200) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause: recordData
      })
    }

    return {
      userId: contact.Id,
      name: contact.Name,
      email: contact.Email,
      userType: recordData.records[0].Name
    }
  }
})
