<script lang="ts" setup>
const content =
  'Come help university students in need! Join them in creating a volunteer app for Frontier College, bring your Salesforce knowledge with you! They’ll be ne...'

definePageMeta({
  title: 'My Programs',
  showBack: false
})
</script>

<template>
  <div class="flex flex-col flex-nowrap justify-center items-center">
    <div>
      <div w:bg="green" class="card-wrapper" style="display: inline-block">
        <div class="heading-text today-text">Today</div>
        <NuxtLink to="/programs/test">
          <FCProgramCard
            date="2022-10-24 8:00pm"
            title="Volunteer App Design Session"
            :content="content"
          />
        </NuxtLink>
        <NuxtLink to="/programs/test">
          <FCProgramCard
            date="2022-10-24 8:00pm"
            title="Volunteer App Design Session"
            :content="content"
          />
        </NuxtLink>
      </div>

      <div class="card-wrapper">
        <div class="heading-text">Upcoming</div>
        <NuxtLink to="/programs/test">
          <FCProgramCard
            style="background-color: #e1e1e1"
            date="2022-10-24 8:00pm"
            title="Volunteer App Design Session"
            :content="content"
          />
        </NuxtLink>
        <NuxtLink to="/programs/test">
          <FCProgramCard
            style="background-color: #e1e1e1"
            date="2022-10-24 8:00pm"
            title="Volunteer App Design Session"
            :content="content"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  display: block;
  width: fit-content;
  border-radius: 10px;
  margin: 10px;
  opacity: 0.8;
}

.heading-text {
  font-size: 24px;
  font-weight: 700;
  margin-left: 15px;
  margin-top: 5px;
}
.today-text {
  color: white;
}
</style>
