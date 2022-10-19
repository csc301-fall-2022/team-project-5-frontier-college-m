<script lang="ts" setup>
useHead({
  title: 'App'
})

const client = useClient()
console.log(await client.query('hello'))
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
