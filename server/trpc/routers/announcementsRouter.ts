import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'

/**
 * Return a list of announcements that pertain to a given user.
 */
export const announcementsRouter = createRouter().query('announcements', {
  input: z.object({
    userId: z.string(),
    maxCount: z.number().optional(),
    noEarlierThan: z
      .preprocess((arg) => {
        if (typeof arg === 'string' || arg instanceof Date) return new Date(arg)
      }, z.date())
      .optional()
  }),

  async resolve({ input }) {
    const maxCount = input.maxCount || 100
    const userId = input.userId
    const noEarlierThan = input.noEarlierThan ?? new Date(0)

    // Get the Program__c IDs for the user's programs
    const qString = `SELECT Program_Offering__c FROM ProgPar__C WHERE Participant_Contact__c='${userId}'`
    const resp = await api.query(qString, auth)
    if (!resp || resp.status !== 200) return []
    const programData = await resp.json()
    const programids = programData.records.map(
      (r: any) => r.Program_Offering__c
    )

    // Get the chatter group IDs from Program__c
    const qString2 = `SELECT Id, Name, Chatter_Group_ID__c FROM Program__C WHERE Id IN ('${programids.join(
      "','"
    )}')`
    const resp2 = await api.query(qString2, auth)
    if (!resp2 || resp2.status !== 200) return []
    const chatterData = await resp2.json()

    // map the chatter group IDs to the program names
    const chatterids = chatterData.records.map(
      (r: any) => r.Chatter_Group_ID__c
    )
    const chatterMap = chatterData.records.reduce((acc: any, r: any) => {
      acc[r.Chatter_Group_ID__c] = {
        id: r.Id,
        name: r.Name
      }
      return acc
    }, {})

    // Get the announcements from the chatter groups
    const qString3 = `SELECT Id, CreatedDate, Title, Body, ParentId FROM FeedItem WHERE ParentId IN ('${chatterids.join(
      "','"
    )}') AND CreatedDate > ${noEarlierThan.toISOString()} ORDER BY CreatedDate DESC LIMIT ${maxCount}`
    const resp3 = await api.query(qString3, auth)
    if (!resp3 || resp3.status !== 200) return []
    const announcementData = await resp3.json()

    // sanitize the announcement data
    const announcements = announcementData.records.map((r: any) => {
      r.Title = chatterMap[r.ParentId] ? chatterMap[r.ParentId].name : ''
      r.ProgramId = chatterMap[r.ParentId] ? chatterMap[r.ParentId].id : null
      delete r.ParentId
      delete r.attributes
      return r
    })

    return announcements
  }
})
