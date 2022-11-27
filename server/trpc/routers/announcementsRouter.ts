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

    // get the users announcements
    const announcements = await fetch(
      `${api.baseUrl}/services/data/${api.version}/chatter/feeds/user-profile/${userId}/feed-elements`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-Type': 'application/json'
        }
      }
    ).then((response) => response.json())

    // check if announcements.elements exists, if not, user has no announcements or is not found
    if (!announcements.elements) {
      return []
    }
      
    const qString = 'SELECT ChatterGroupID__c FROM pmdm__Program__c'

    let data = await api.query(qString, auth.token as string)
    if (data && data.errorCode && data.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      data = await api.query(qString, auth.token as string)
    }

    
    // make a set containing all chatterID's
    const chatterIDs = new Set()
    data.records.forEach((record: any) => {
      chatterIDs.add(record.ChatterGroupID__c)
    })

    const announcementsList = []

    for (const announcement of announcements.elements) {
      if (new Date(announcement.createdDate) > noEarlierThan) {
        const groupID = announcement.parent.id
        const formattedAnnouncement = {
          id: announcement.id,
          title: announcement.parent.name,
          body: announcement.body.text,
          createdDate: announcement.createdDate,
        }

        if (chatterIDs.has(groupID) || announcement.type === 'TextPost') {
          announcementsList.push(formattedAnnouncement)
        }

      } else {
        break
      }

      if (announcementsList.length >= maxCount) {
        break
      }
    }
    return announcementsList
  }
})
