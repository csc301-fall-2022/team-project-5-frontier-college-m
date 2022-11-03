import { createRootRouter } from './createRouter'
import { prisma } from './prisma'
import { td2Data } from '~~/shared/d2-dummy-data'

export const router = createRootRouter().query('hello', {
  async resolve() {
    return await prisma.user.count()
  }
})

// the input is {userID: number, maxCount: number, noEarlierThan: Date}
export const announcementsRouter = router.query('announcements', {
  async resolve(req) {
    const maxCount = req.ctx.maxCount
    const userID = req.ctx.userID
    const noEarlierThan = req.ctx.noEarlierThan

    // Find the group IDs of the user
    const userGroups: { [id: number]: string } = td2Data.userGroups[userID]
    const groupIDs = Object.keys(userGroups).map((id) => parseInt(id))

    const announcementsList = []
    let count = 0

    // Find the announcements for each groupID and add it to the list
    // Only if the noEarlierThan and maxCount constraint is satisfied
    for (const groupID of groupIDs) {
      const announcements = td2Data.eventAnnouncements[groupID]

      if (announcements) {
        for (const announcement of announcements) {
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
    return await announcementsList
  }
})
