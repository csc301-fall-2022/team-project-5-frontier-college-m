import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'
import { td2Data } from '~/shared/d2-dummy-data'

/**
 * Return a list of announcements that pertain to a given user.
 */
export const userEventsRouter = createRouter().query('userEvents', {
  input: z.object({
    userId: z.string()
  }),

  // SELECT Id, Program_Name__c, RecordTypeId FROM ProgPar__C

  async resolve({ input }) {
    if (!auth.token) {
      await auth.getBearerToken(api)
    }
    const qString = `SELECT Id, Participant_Contact__c, Program_Name__c, Program_OFFERING__c, RecordTypeId FROM ProgPar__C WHERE Patricipant_Contact__c='${input.userId}'`
    let data = await api.query(qString, auth.token as string)

    if (data && data.errorCode && data.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      data = await api.query(qString, auth.token as string)
    }

    const userEvents: Set<string> = new Set()
    for (let i = 0; i < data.record[0].length; i++) {
      if (data.record[0][i].Patricipant_Contact__c === input.userId) {
        userEvents.add(data.record[0][i].Program_OFFERING__c)
      }
    }

    if (data.record[0]) {
      return {
        userId: input.userId,
        events: userEvents
      }
    }
  }
})
