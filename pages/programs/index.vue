<script lang="ts" setup>
  const content = 'Come help university students in need! Join them in creating a volunteer app for Frontier College, bring your Salesforce knowledge with you! They’ll be ne...'

  definePageMeta({
    title: 'My Programs',
    showBack: false
  })
</script>

<template>
  <div>
      <div>
        <div w:bg="green" class="card-wrapper" style="display: inline-block;">
          <div class="heading-text today-text ">Today</div>
          <FCProgramCard date="2022-10-24 8:00pm" title='Volunteer App Design Session' :content="content" />
          <FCProgramCard date="2022-10-24 8:00pm" title='Volunteer App Design Session' :content="content" />
        </div>

        <div class="card-wrapper">
          <div class="heading-text">Upcoming</div>
          <FCProgramCard style="background-color: #E1E1E1;" date="2022-10-24 8:00pm" title='Volunteer App Design Session' :content="content" />
          <FCProgramCard style="background-color: #E1E1E1;" date="2022-10-24 8:00pm" title='Volunteer App Design Session' :content="content" />
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
