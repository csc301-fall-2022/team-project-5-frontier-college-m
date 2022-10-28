<script lang="ts" setup>
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <button>{{ props.text }}</button>
</template>
