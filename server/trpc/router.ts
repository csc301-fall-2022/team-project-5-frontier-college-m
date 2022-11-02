import { createRootRouter } from './createRouter'
import { prisma } from './prisma'
import { td2Data } from './d2-dummy-data'

export const router = createRootRouter().query('hello', {
  async resolve() {
    return await prisma.user.count()
  }
})

//get_eventDetails(id: int) => (id: int; name: string; type: string; recurrence: object; location: string; description: string)

export const eventRouter = createRootRouter().router().query('get_eventDetails', {
  input: (val: unknown) => {
    if (typeof val === 'number') return val;
    throw new Error(`Invalid input: ${typeof val}`);
  },
  async resolve(req) {
    req.input; 
    return {id: req.input, 
      name: td2Data.eventDetails[req.input].name, 
      type: td2Data.eventDetails[req.input].type,
      recurrence: td2Data.eventDetails[req.input].recurrence,
      location: td2Data.eventDetails[req.input].location,
      description: td2Data.eventDetails[req.input].description};
  },
});
