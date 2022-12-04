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

    if (!auth.token) {
      await auth.getBearerToken(api)
    }

    // get all userids from SELECT Id FROM Contact
    const userIds = await api.query(
      `SELECT Id FROM Contact`,
      auth.token as string
    )

    // check if userId is in userIds
    if (!userIds.records.find((record: any) => record.Id === userId)) {
      return []
    }

    // Get the Program__c IDs for the user's programs
    const qString = `SELECT Program_Offering__c FROM ProgPar__C WHERE Participant_Contact__c='${userId}'`

    // if there is an error, return an empty array
    
    let programData = await api.query(qString, auth.token as string)
    if (programData && programData.errorCode && programData.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      programData = await api.query(qString, auth.token as string)
    }

    // if the user is not in any programs, return an empty array
    if (!programData || !programData.records || programData.records.length === 0) {
      return []
    }

    const programids = programData.records.map((r: any) => r.Program_Offering__c)

    // Get the chatter group IDs from Program__c
    const qString2 = `SELECT Name, Chatter_Group_ID__c FROM Program__C WHERE Id IN ('${programids.join( "','")}')`

    let chatterData = await api.query(qString2, auth.token as string)
    if (chatterData && chatterData.errorCode && chatterData.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      chatterData = await api.query(qString2, auth.token as string)
    }

    // if there are no chatter groups, return an empty array
    if (!chatterData || !chatterData.records || chatterData.records.length === 0) {
      return []
    }

    const chatterids = chatterData.records.map((r: any) => r.Chatter_Group_ID__c)

    // map the chatter group IDs to the program names
    const chatterMap = chatterData.records.reduce((acc: any, r: any) => {
      acc[r.Chatter_Group_ID__c] = r.Name
      return acc
    }, {})


    // Get the announcements from the chatter groups
    const qString3 = `SELECT Id, CreatedDate, Title, Body, ParentId FROM FeedItem WHERE ParentId IN ('${chatterids.join( "','")}') AND CreatedDate > ${noEarlierThan.toISOString()} ORDER BY CreatedDate DESC LIMIT ${maxCount}`
    let announcementData = await api.query(qString3, auth.token as string)
    if (announcementData && announcementData.errorCode && announcementData.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      announcementData = await api.query(qString3, auth.token as string)
    }

    // if there are no announcements, return an empty array
    if (!announcementData || !announcementData.records || announcementData.records.length === 0) {
      return []
    }


    // sanitize the announcement data
    const announcements = announcementData.records.map((r: any) => {
      r.Title = chatterMap[r.ParentId]
      delete r.ParentId
      delete r.attributes
      return r
    })

    return announcements
  }
})

