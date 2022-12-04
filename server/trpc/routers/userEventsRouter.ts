import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter, TRPCError } from '../createRouter'

/**
 * Return a list of announcements that pertain to a given user.
 */
export const userEventsRouter = createRouter().query('userEvents', {
  input: z.object({
    userId: z.string()
  }),

  async resolve({ input }) {
    const qString = `SELECT Id, Participant_Contact__c, Program_OFFERING__c FROM ProgPar__C WHERE Participant_Contact__c='${input.userId}'`
    const participationResp = await api.query(qString, auth)
    const data = await participationResp.json()
    if (!participationResp || participationResp.status !== 200) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause: data
      })
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
