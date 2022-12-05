<script lang="ts" setup>
definePageMeta({
  title: 'Updates',
  showBack: false
})

const announcementStore = useAnnouncementStore()
announcementStore.updateLastChecked()

const refetch = async () => {
  announcementStore.announcements = []
  await announcementStore.fetchAnnouncements()
}
</script>

<template>
  <div class="container">
    <div class="flex justify-end">
      <button class="refresh-button" @click.prevent="refetch">
        Refresh
        <Icon name="feather:refresh-cw" />
      </button>
    </div>
    <div class="flex flex-col flex-nowrap justify-center items-center">
      <div
        v-for="announcement in announcementStore.announcements"
        :key="announcement.Id"
        class="announcement"
      >
        <FCAnnouncementCard
          :title="announcement.Title"
          :text="announcement.Body"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: 328px;
}
.announcement {
  padding-top: 20px;
}

.refresh-button {
  color: white;
  margin: 20px 0 10px auto;
  right: 0;
}
</style>
