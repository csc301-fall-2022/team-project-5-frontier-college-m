<script lang="ts" setup>

definePageMeta({
  title: 'Frontier College',
  showBack: false
})

// The link for the community portal
const communityLink = "https://unitedforliteracy.my.site.com/customerservice/" + 
"login?sfdcIFrameOrigin=null"

// Placeholder text
const content = "Zach sent you 100 new messages: Hey man its been like 20" + 
                " days and you still haven't responded, please there is no" + 
                "way you cannot see this I can see you going online but you " +
                "aren't responding pls"

const currUser = 2
const client = useClient()
// Obtain the name of the current user (right now fixed on user 2)
// TODO: Frontend team pls update calling convention
const name = await (
  await client.query('user', {userId: "003Au000005YI4mIAG"})).name

// Obtain the announcements for this user
const announcement = await (await client.query('announcements', {
    userId: currUser,
    maxCount: 1,
    noEarlierThan: new Date('2022-11-01T11:16:01')
}))[0]

// Obtain the assigned program events for this user
const events = await (await client.query('userEvents', 
  {userId: currUser})).events

// Check if the events list if empty, otherwise, obtain the first one
let eventContent = ""
if (events.length === 0) {
  eventContent = "No upcoming programs"
} else {
  const eventData = await client.query('eventDetails', {eventId: 1})
  eventContent = eventData.name + ": " + eventData.description
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
      <FCViewAll />
    </div>

    <div class="arrow-cards">
      <FCArrowCard
        title="My Assigned Programs"
        :text="eventContent"
        textcolor="black"
        color="var(--lime-green)"
        link="/programs"
      />
      <FCArrowCard 
        title="Group Chat" 
        :text="content" 
        textcolor="black"
        color="var(--green)"
        link=""
      />
      <FCArrowCard
        title="Community Portal" 
        :text="content"
        textcolor="white"
        color="var(--dark-green)"
        :link="communityLink"
      />
    </div>
    <body></body>
    </div>
</template>

<style scoped>
template, body{
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
}
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
  height: 210px;
  left: 0px;
  top: 114px;

  background: var(--gray);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.arrow-cards {
  position: relative;
}
</style>
