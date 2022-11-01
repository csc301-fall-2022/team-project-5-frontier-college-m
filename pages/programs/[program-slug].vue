<script lang="ts" setup>
const desc =
  'Come help university students in need! Join them in creating a volunteer app for Frontier College, bring your Salesforce knowledge with you! They’ll be needing you!'

definePageMeta({
  title: 'Event Info',
  showBack: true
})
</script>

<template>
  <div class="flex flex-col flex-nowrap justify-center items-center">
    <h1>Design Session</h1>
    <div class="event-tags-wrapper">
      <div>
        <FCTag text="09:00 January 15 2023" icon="fe:calendar" w:bg="yellow" />
        <FCTag text="1 Billion Street" icon="fe:location" w:bg="purple" />
      </div>
      <FCFileButton text="Event Files" />
    </div>

    <h2>Description</h2>
    <div class="desc-text">{{ desc }}</div>

    <h2>Staff</h2>
    <FCStaffCard name="Alice N. Chain" role="Organizer" w:bg="pink" />
    <FCStaffCard name="Campbell S. Oup" role="Volunteer" />
    <FCStaffCard name="John A. Wendys" role="Volunteer" />
  </div>
</template>

<style scoped>
.event-tags-wrapper {
  display: flex;
}

h1 {
  font-size: 24px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

h2 {
  font-size: 14px;
  font-weight: 700;
  margin: 15px;
}

.desc-text {
  font-size: 11px;
  margin: 15px;
  max-width: 322px;
}
</style>
