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
console.log(await client.query('user', {userId: 2}))
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
  font-family: 'Inter', sans-serif;
}
@supports (font-variation-settings: normal) {
  :root {
    font-family: 'Inter var', sans-serif;
  }
}
</style>
