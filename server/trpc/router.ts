import { z } from 'zod'
import { createRootRouter, createRouter } from './createRouter'
import { td2Data } from '~/shared/d2-dummy-data'

const helloRouter = createRouter().query('hello', {
  resolve() {
    return 'Hello'
  }
})

/**
 * Return a list
 * the input is {userID: number, maxCount: number, noEarlierThan: Date}
 */
const announcementsRouter = createRouter().query('announcements', {
  input: z.any(),
  resolve(req) {
    const maxCount = req.input.maxCount
    const userID = req.input.userID
    const noEarlierThan = req.input.noEarlierThan

    // Find the group IDs of the user
    const userGroups: { [userId: number]: any } = td2Data.userGroups
    const groupIDs: number[] = Object.keys(userGroups[userID]).map((id) =>
      parseInt(id)
    )

    const announcementsList = []
    let count = 0

    // Find the announcements for each groupID and add it to the list
    // Only if the noEarlierThan and maxCount constraint is satisfied
    const announcements: { [eventId: number]: any } = td2Data.eventAnnouncements
    for (const groupID of groupIDs) {
      const userAnnouncements = announcements[groupID]
      if (userAnnouncements) {
        for (const announcement of userAnnouncements) {
          announcement.sentAt = new Date(announcement.sentAt)
          if (announcement.sentAt < noEarlierThan) {
            continue
          }
          announcementsList.push(announcement)
          count++
          if (count >= maxCount) {
            break
          }
        }

        if (count >= maxCount) {
          break
        }
      }
    }

    return announcementsList
  }
})

export const router = createRootRouter()
  .merge(helloRouter)
  .merge(announcementsRouter)
