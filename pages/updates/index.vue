<script lang="ts" setup>

definePageMeta({
  title: 'Updates',
  showBack: false
})

const announcements: {
    title: string;
    description: string;
}[] = [
    {title:'title1', description: 'descript1'}, 
    {title:'title2', description: 'descript2'},
    {title:'title2', description: 'descript2'}
]

    
</script>

<template>
  <div class="flex flex-col flex-nowrap justify-center items-center">
    <div v-for="announcement in announcements" :key="announcement.title" class="announcement">
        <FCAnnouncementCard
            :title="announcement.title"
            :text="announcement.description"
        />
    </div>
  </div>
</template>

<style scoped>
    .announcement{
        padding-top: 20px;
    }
</style>