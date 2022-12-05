import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

type ApiAnnouncement = {
  Id: string
  ProgramId: string
  CreatedDate: string
  Title: string
  Body: string
}

type Announcement = {
  Id: string
  ProgramId: string
  CreatedDate: Date
  Title: string
  Body: string
}

export const useAnnouncementStore = defineStore('announcements', {
  state: () => ({
    announcements: [] as Announcement[],
    lastChecked: useStorage('announcements-last-checked', null as Date | null)
  }),
  actions: {
    async fetchAnnouncements() {
      const client = useClient()

      const announcements = (await client.query('announcements', {
        userId: '003Au000005YI4mIAG',
        maxCount: 5,
        noEarlierThan: new Date('2022-11-01T11:16:01')
      })) as ApiAnnouncement[]

      const parsedAnnouncements = announcements.map((a) => ({
        ...a,
        CreatedDate: new Date(a.CreatedDate)
      }))
      this.announcements = parsedAnnouncements
    },
    updateLastChecked() {
      this.lastChecked = new Date()
    }
  },
  getters: {
    showNotification: (state) => {
      return (
        state.lastChecked === null ||
        state.lastChecked < state.announcements[0]?.CreatedDate
      )
    }
  },
  hydrate(state) {
    // @ts-ignore
    state.lastChecked = useStorage(
      'announcements-last-checked',
      null as Date | null
    )
  }
})
