import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'

/**
 * Return a list of announcements that pertain to a given user.
 */
export const userEventsRouter = createRouter().query('userEvents', {
  input: z.object({
    userId: z.string()
  }),

  async resolve({ input }) {
    if (!auth.token) {
      await auth.getBearerToken(api)
    }

    const qString = `SELECT Id, Participant_Contact__c, Program_OFFERING__c FROM ProgPar__C WHERE Participant_Contact__c='${input.userId}'`

    let data = await api.query(qString, auth.token as string)
    if (data && data.errorCode && data.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      data = await api.query(qString, auth.token as string)
    }

    // only parse data if records are available
    if (data.totalSize && data.totalSize > 0) {
      const userEvents: Set<string> = new Set()
      for (let i = 0; i < data.records.length; i++) {
        userEvents.add(data.records[i].Program_Offering__c)
      }

      return {
        userId: data.records[0].Participant_Contact__c,
        events: [...userEvents] // convert set to array/list
      }
    }

    // otherwise return events as empty
    return {
      userId: input.userId,
      events: []
    }
  }
})
