<script lang="ts" setup>

const date = new Date()
date.setHours(0, 0, 0, 0)
// today's day of the week in sample data format
const currDay = (date.getDay() + 6) % 7

// convert Date to a string
function getDateStr(date: Date) {
  return date.getFullYear().toString() + "-"
  + (date.getMonth() + 1).toString().padStart(2, '0') + "-"
  + date.getDate().toString().padStart(2, '0')
}

// return the day of the week that is closest to today
function closestUpcoming(days: number[], day: number) {
  let minDist = 7
  let closestDay = day
  for (let i = 0; i < days.length; i++) {
    const dist = (days[i] - currDay) % 7
    if (dist < minDist) {
      minDist = dist
      closestDay = days[i]
    }
  }
  return closestDay
}

const currDate = getDateStr(date)

// set currUser to premade user
const currUser = '003Au000005YI4mIAG'
const client = useClient()

const eventIds: string[] = (await client.query("userEvents", {userId: currUser})).events

const todayEventsInfo: {
    id: string;
    name: any;
    type: any;
    recurrence: any;
    location: any;
    description: any;
    goals: any;
}[] = []
const upcomingEventsInfo: {
    id: string;
    name: any;
    type: any;
    recurrence: any;
    location: any;
    description: any;
    goals: any;
}[] = []

const upcomingDates: {[id: string]: string} = {}

// set events that are happening today and those that are upcoming
for (let i = 0; i < eventIds.length; i++) {
  const eventInfo = await client.query("eventDetails", {eventId: eventIds[i]})
  if (!eventInfo) {
    continue
  }
  const simplifiedEvent = {
    id: eventIds[i],
    name: eventInfo.name,
    type: 'recurring',
    recurrence: eventInfo.programOfferingSchedule,
    location: eventInfo.locationLabel,
    description: eventInfo.description, 
    goals: eventInfo.goals
  }

  // Handle null description/goal
  if (simplifiedEvent.description && simplifiedEvent.goals) {
    simplifiedEvent.description += '\n\nGoals: ' + simplifiedEvent.goals
  } else if (simplifiedEvent.goals) {
    simplifiedEvent.description = '\n\nGoals: ' + simplifiedEvent.goals
  } else if (simplifiedEvent.description) {
    simplifiedEvent.goals = "There are no goals for this program."
  } else {
    simplifiedEvent.description = "There is no description for this program."
  }

  if (eventInfo.programOfferingSchedule.daysOfWeek.includes(currDay)) {
    todayEventsInfo.push(simplifiedEvent)
  } else {
    upcomingEventsInfo.push(simplifiedEvent)
    
    const day = (closestUpcoming(eventInfo.programOfferingSchedule.daysOfWeek, currDay) + 1) % 7

    const date = new Date()
    date.setDate(date.getDate() + (day + 7 - date.getDay()) % 7)
    upcomingDates[simplifiedEvent.id] = getDateStr(date)
  }
  
}

definePageMeta({
  title: 'My Programs',
  showBack: false
})
</script>

<template>
  <div class="flex flex-col flex-nowrap justify-center items-center">
    <div>
      <div w:bg="green" class="card-wrapper" style="display: inline-block; background-color: var(--gray);">
        <div class="heading-text today-text">Today</div>
        <div v-if="todayEventsInfo.length == 0" class="today-text no-program-text">No programs today!</div>
        <NuxtLink v-for="event in todayEventsInfo" :key="event.id" :to="'/programs/' + event.id">
          <FCProgramCard 
          :date="currDate" 
          :title="event.name"
          :content="event.description"
          contentcolor="var(--black)"
          datecolor="var(--black)">
          </FCProgramCard>
        </NuxtLink>
      </div>

      <div class="card-wrapper">
        <div class="heading-text">Upcoming</div>
        <div v-if="upcomingEventsInfo.length == 0" class="no-program-text">No upcoming programs!</div>
        <NuxtLink  v-for="event in upcomingEventsInfo" :key="event.id" :to="'/programs/' + event.id">
          <FCProgramCard
            style="background-color: var(--dark-green);"
            :date="upcomingDates[event.id]"
            :title="event.name"
            :content="event.description"
            contentcolor= "white"
            datecolor="var(--light-blue)"
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
  min-height: 20vh;
  border-radius: 10px;
  margin: 10px;
  opacity: 0.8;
}

.heading-text {
  font-size: 24px;
  font-weight: 700;
  margin-left: 15px;
  margin-top: 5px;
  color: white;
}
.today-text {
  color: white;
}

.no-program-text {
  margin-left: 15px;
  width: 289px;
  color: white;
}
</style>
