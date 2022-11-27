
import { z } from 'zod'
import { auth, api } from '../salesforce'
import fetch from 'node-fetch'
import { createRouter } from '../createRouter'
import { td2Data } from '~/shared/d2-dummy-data'

/**
 * Return a list of programs from a given user.
 */
const userEventsRouter = createRouter().query('userEvents', {
  input: z.object({
    userID: z.string()
  }),

// SELECT Id, Program_Name__c, RecordTypeId FROM ProgPar__C

async resolve({input}) {
  const response = await fetch( `${process.env.SALESFORCE_URL}/?q=SELECT ID, Program_Name__c, RecordTypeId FROM ProgPar__C WHERE ID='${input.userID}'` , {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })
  const data = await response.json()
  const userEvents = data.record[0] // not sure
  return {
    userID: userEvents.ID,
    events: userEvents.Program_Name__c // not sure if it forms array 
  }
}
})
