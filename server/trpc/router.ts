import { z } from 'zod'
import { createRootRouter, createRouter } from './createRouter'
import { td2Data } from '~~/shared/d2-dummy-data'

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

 * Return an array of event ID, identified by User id
 *
 * /event_id?input={"userId": int} => {
 *      events: array;
 * }
 */
 const eventRouter = createRouter().query('id_event', {
  input: z.object({
    eventId: z.number().int()
  }),
  resolve(req) {
    const userId: number = req.input.eventId
    const userGroups: {[userID: number]: any} = td2Data.userGroups
    const groupId = Object.keys(userGroups[userId])
    const groupEvents: {[groupId: number]: any} = td2Data.groupEvents
    const count = Object.keys(userGroups[userId]).length
    const event_array = []
    for (let i = 0; i < count; i++) {
      if (groupEvents[groupId[i]] in event_array){}
      else{
        event_array.push(groupEvents[groupId[i]])
      }
    }
    return {
      id: req.input,
      event: event_array
    }
  }
})

export const router = createRootRouter()
  .merge(helloRouter)
  .merge(eventDetailsRouter)
  .merge(eventRouter)
