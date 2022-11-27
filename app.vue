<script lang="ts" setup>
useHead({
  title: 'App',
  link: [
    { rel: 'preconnect', href: 'https://rsms.me/' },
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
  ]
})

const client = useClient()
console.log(await client.query('hello'))
console.log(await client.query('announcements', {
    userId: 2,
    maxCount: 5,
    noEarlierThan: new Date('2022-11-01T11:16:01')
}))
console.log(await client.query('eventDetails', {eventId: 1}))
console.log(await client.query('userEvents', {userId: 0}))
console.log(await client.query('user', {userId: "0056g000005JD9wAAG"}))

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

  --dark-green: #00565A;
  --dark-blue: #093254;
  --green: #3FA947;
  --lime-green: #92C83E;
  --spring-green:#00734F;
  --light-blue: #00BFDF;
  --purple: #73308C;
  --orange:#F36C21;

}
@supports (font-variation-settings: normal) {
  :root {
    font-family: Arial, sans-serif;
  }
}
</style>
