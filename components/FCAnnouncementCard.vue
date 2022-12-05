<script lang="ts" setup>
const props = defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <div class="announcementcard">
    <h1>{{ props.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="text" v-html="text"></div>
  </div>
</template>

<style scoped>
h1 {
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

.text {
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 24px;
  margin-left: 18px;
  margin-right: 18px;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  height: 48px;
  color: white;
}

.announcementcard {
  color: black;
  background: linear-gradient(
    180deg,
    var(--light-blue) 0%,
    var(--light-blue) 38%,
    var(--black) 35%,
    var(--black) 100%
  );
  display: inline-block;
  width: 328px;
  height: 134px;
  left: 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
