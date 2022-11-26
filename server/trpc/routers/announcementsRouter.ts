import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'
import { td2Data } from '~/shared/d2-dummy-data'

/**
 * Return a list of announcements that pertain to a given user.
 */
export const announcementsRouter = createRouter().query('announcements', {
  input: z.object({
    userId: z.number().nonnegative(),
    maxCount: z.number().optional(),
    noEarlierThan: z
      .preprocess((arg) => {
        if (typeof arg === 'string' || arg instanceof Date) return new Date(arg)
      }, z.date())
      .optional()
  }),

  resolve({ input }) {
    const maxCount = input.maxCount
    const userId = input.userId
    const noEarlierThan = input.noEarlierThan ?? new Date(0)

    // Find the group IDs of the user
    const userGroups: { [userId: number]: { [groupID: number]: string } } =
      td2Data.userGroups
    const groupIDs: number[] = Object.keys(userGroups[userId]).map((id) =>
      parseInt(id)
    )

    const announcementsList = []

    // Find the announcements for each groupID and add it to the list
    // only if the noEarlierThan and maxCount constraint is satisfied
    const announcements: { [eventId: number]: any } = td2Data.eventAnnouncements
    // get all announcements for the groupIDs
    for (const groupID of groupIDs) {
      const groupAnnouncements = announcements[groupID]
      if (groupAnnouncements) {
        for (const announcement of groupAnnouncements) {
          announcement.sentAt = new Date(announcement.sentAt)
          if (announcement.sentAt >= noEarlierThan) {
            announcementsList.push(announcement)
          }
        }
      }
    }

    // sort the announcements by date
    announcementsList.sort((a, b) => {
      return a.sentAt.getTime() - b.sentAt.getTime()
    })
    // if the maxCount is smaller than the number of announcements, return the first maxCount announcements
    if (maxCount && announcementsList.length > maxCount) {
      return announcementsList.slice(0, maxCount)
    }

    return announcementsList
  }
})
