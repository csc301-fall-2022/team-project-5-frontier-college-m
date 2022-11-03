import { z } from 'zod'
import { createRootRouter, createRouter } from './createRouter'
import { td2Data } from '~~/shared/d2-dummy-data'

const helloRouter = createRouter().query('hello', {
  resolve() {
    return 'Hello'
  }
})

/**
 * getEventDetails({userId: int}) => {
 *      id: int;
 *      name: string;
 *      type: string;
 *      recurrence: object;
 *      location: string;
 *      description: string
 * }
 */
const eventRouter = createRouter().query('getEventDetails', {
  input: z.object({
    userId: z.number().int()
  }),
  resolve(req) {
    const userId: number = req.input.userId
    const eventDetails: { [eventId: number]: any } = td2Data.eventDetails
    return {
      id: req.input,
      name: eventDetails[userId].name,
      type: eventDetails[userId].type,
      recurrence: eventDetails[userId].recurrence,
      location: eventDetails[userId].location,
      description: eventDetails[userId].description
    }
  }
})

export const router = createRootRouter().merge(helloRouter).merge(eventRouter)
