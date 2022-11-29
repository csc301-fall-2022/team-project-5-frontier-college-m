<script lang="ts" setup>
useHead({
  title: 'United for Literacy',
  link: [
    { rel: 'preconnect', href: 'https://rsms.me/' },
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
  ]
})

const client = useClient()
console.log(await client.query('hello'))
console.log(
  await client.query('announcements', {
    userId: 2,
    maxCount: 5,
    noEarlierThan: new Date('2022-11-01T11:16:01')
}))
console.log(await client.query('eventDetails', {eventId: 1}))
console.log(await client.query('userEvents', {userId: 0}))
console.log(await client.query('user', {userId: "003Au000005YI4mIAG"}))

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  font-family: Arial, sans-serif;

  --dark-green: #00565a;
  --dark-blue: #093254;
  --green: #3fa947;
  --lime-green: #92c83e;
  --spring-green: #00734f;
  --light-blue: #00bfdf;
  --purple: #73308c;
  --orange: #f36c21;
  --gray:#4D4D4D;
  --black:#2B2B2B;
}
@supports (font-variation-settings: normal) {
  :root {
    font-family: Arial, sans-serif;
  }
}
</style>
