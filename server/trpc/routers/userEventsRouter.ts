import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'
import { td2Data } from '~/shared/d2-dummy-data'

/**
 * Return an array of event IDs for a given user, identified by the user ID
 *
 * /event_id?input={"userId": int} => {
 *      events: array;
 * }
 */
export const userEventsRouter = createRouter().query('userEvents', {
  input: z.object({
    userId: z.number().int()
  }),

  resolve(req) {
    const userId: number = req.input.userId
    const userGroups: { [userId: number]: any } = td2Data.userGroups

    const groups: { [groupId: number]: { events: Array<number> } } =
      td2Data.groupEvents

    const userEvents: Set<number> = new Set()
    for (const groupId in Object.keys(userGroups[userId])) {
      groups[parseInt(groupId)].events.forEach((eventId) => {
        userEvents.add(eventId)
      })
    }

    return {
      userId,
      events: Array(...userEvents)
    }
  }
})
