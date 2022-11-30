<script lang="ts" setup>
const props = defineProps<{
  title: string
  text: string
  textcolor: string
  color: string
  link: string
}>()
</script>

<template>
  <NuxtLink :to="link">
    <div class="arrowcard">
      <h1>{{ props.title }}</h1>
      <div class="text">{{ text }}</div>
      <Icon name="fe:arrow-right" />
    </div>
  </NuxtLink>
</template>

<style scoped>
h1 {
  color: v-bind(textcolor);
  margin-top: 10px;
  margin-left: 16px;
  float: left;
  font-size: 20px;
  font-weight: 700;
}
.text {
  color: v-bind(textcolor);
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 5px;
  margin-left: 16px;
  float: left;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  width: 224px;
  line-height: 14px;
  height: 56px;
}
.arrowcard {
  margin: 16px;
  position: relative;
  width: 328px;
  height: 118px;
  border-radius: 10px;
  background: v-bind(color);
}

.icon {
  margin-top: 5px;
  margin-right: 19px;
  width: 24px;
  height: 24px;
  float: right;
}
</style>
