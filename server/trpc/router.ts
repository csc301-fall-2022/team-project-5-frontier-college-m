import { z } from 'zod'
import { createRootRouter, createRouter } from './createRouter'
import { td2Data } from '~/shared/d2-dummy-data'

const helloRouter = createRouter().query('hello', {
  resolve() {
    return 'Hello'
  }
})

/**
 * Return an event object, identified by its id
 *
 * /eventDetails?input={"eventId": int} => {
 *      id: int;
 *      name: string;
 *      type: string;
 *      recurrence: object;
 *      location: string;
 *      description: string
 * }
 */
const eventDetailsRouter = createRouter().query('eventDetails', {
  input: z.object({
    eventId: z.number().int()
  }),
  resolve(req) {
    const eventId: number = req.input.eventId
    const eventDetails: { [eventId: number]: any } = td2Data.eventDetails
    return {
      id: req.input,
      name: eventDetails[eventId].name,
      type: eventDetails[eventId].type,
      recurrence: eventDetails[eventId].recurrence,
      location: eventDetails[eventId].location,
      description: eventDetails[eventId].description
    }
  }
})

/**
 * Return an array of event IDs for a given user, identified by the user ID
 *
 * /event_id?input={"userId": int} => {
 *      events: array;
 * }
 */
const userEventsRouter = createRouter().query('userEvents', {
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

export const router = createRootRouter()
  .merge(helloRouter)
  .merge(eventDetailsRouter)
  .merge(userEventsRouter)
