<script lang="ts" setup>
definePageMeta({
  showBack: false,
  home: true
})

// The link for the community portal
const communityLink =
  'https://unitedforliteracy.my.site.com/customerservice/' +
  'login?sfdcIFrameOrigin=null'


// const currUser = 2
const client = useClient()
// Obtain the name of the current user (right now fixed on user 2)
// TODO: Frontend team pls update calling convention
const name = await(
  await client.query('user', {
    userId: '003Au000005YI4mIAG'
  })
).name

// Obtain the announcements for this user
// const announcement = await(
//   await client.query('announcements', {
//     userId: currUser,
//     maxCount: 1,
//     noEarlierThan: new Date('2022-11-01T11:16:01')
//   })
// )[0]
const announcement = {
  title: 'Midterm Study Session',
  description:
    'Midterm study session will be held in the Chem building. Attendees will receive a secret token they can use on the exam for an automatic 10% grade boost.'
}

// Obtain the assigned program events for this user
const events = await(
  await client.query('userEvents', { userId: '003Au000005YI4mIAG' })
).events

// Check if the events list if empty, otherwise, obtain the first one
let eventContent = 'No upcoming programs'
if (events.length === 0) {
  eventContent = 'No upcoming programs'
} else {
  const eventData = await client.query('eventDetails', {
    eventId: 'a26Au00000008tdIAA'
  })

  if (eventData?.description === null) {
    eventContent =
      eventData.name + ', Goals: ' + eventData.goals.replace(/;/g, ', ')
  } else if (eventData?.description != null) {
    eventContent = eventData.name + ': ' + eventData.description
  }
}
</script>

<template>
  <div class="flex flex-col flex-nowrap justify-center items-center">
    <div class="welcome-card">
      <h1>Welcome, {{ name }}!</h1>
    </div>

    <div class="immediate-announcements">
      <FCAnnouncementCard
        :title="announcement.title"
        :text="announcement.description"
      />
      <NuxtLink to="/updates">
        <FCViewAll />
      </NuxtLink>
    </div>

    <div class="arrow-cards">
      <FCArrowCard
        title="Assigned Programs"
        :text="eventContent"
        textcolor="black"
        color="var(--lime-green)"
        link="/programs"
      />
      <FCArrowCard
        title="Community Portal"
        text="View your volunteer hours and testimonials"
        textcolor="white"
        color="var(--dark-green)"
        :link="communityLink"
      />
    </div>
  </div>
</template>

<style scoped>
.welcome-card {
  color: white;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  padding: 13px;
  width: 360px;
  height: 59px;
  left: 0px;
  top: 56px;
}

.immediate-announcements {
  padding-top: 25px;
  text-align: center;
  width: 100vw;
  min-width: 360px;
  height: 234px;
  left: 0px;
  top: 114px;

  background: var(--gray);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.arrow-cards {
  position: relative;
}
</style>
