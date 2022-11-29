<script lang="ts" setup>
    const props = defineProps<{
    title: string
    text: string
    }>()
</script>

<template>
  <div class="announcementcard">
    <h1>{{ props.title }}</h1>
    <div class="text"> {{ text }}</div>
  </div>
</template>


<style scoped>
    h1{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 10px;
      margin-left: 13px;
      margin-right: 13px;
      text-align: left;
      font-weight: 700;
      font-size: 20px;
    }

    .text{
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top: 7px;
      margin-left: 13px;
      margin-right: 13px;
      text-align: left;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      height: 42px;
    }

    .announcementcard{
      color: black;
      background: var(--light-blue);
      display: inline-block;
      width: 328px;
      height: 110px;
      left: 16px;
      border-radius: 10px;
    }
</style>