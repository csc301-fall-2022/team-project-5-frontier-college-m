<script lang="ts" setup>
useHead({
  title: 'United for Literacy',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Poppins'
    }
  ]
})

const announcementStore = useAnnouncementStore()

await announcementStore.fetchAnnouncements()

const client = useClient()
console.log(await client.query('hello'))
// console.log(
//   await client.query('announcements', {
//     userId: '003Au000005YI4mIAG',
//     maxCount: 5,
//     noEarlierThan: new Date('2022-11-01T11:16:01')
//   })
// )

console.log(
  await client.query('eventDetails', { eventId: 'a26Au00000008tdIAA' })
)
console.log(await client.query('userEvents', { userId: '003Au000005D9H7IAK' }))
console.log(await client.query('user', { userId: '003Au000005YI4mIAG' }))
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  background-color: var(--black);
  font-family: 'Poppins', Arial, sans-serif;
}

:root {
  --dark-green: #00565a;
  --dark-blue: #093254;
  --green: #3fa947;
  --lime-green: #92c83e;
  --spring-green: #00734f;
  --light-blue: #00bfdf;
  --purple: #73308c;
  --orange: #f36c21;
  --gray: #4d4d4d;
  --black: #2b2b2b;
}
</style>
