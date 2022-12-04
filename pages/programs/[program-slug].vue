<script lang="ts" setup>
// day number mapping
const days: { [day: number]: string } = {
  0: 'Mon',
  1: 'Tue',
  2: 'Wed',
  3: 'Thu',
  4: 'Fri',
  5: 'Sat',
  6: 'Sun'
}

function upperFirst(str: string) {
  if (str.length > 0) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return str
}

const route = useRoute()

const currEventId: string = route.params.programslug.toString()
const client = useClient()
const eventDetails = await client.query('eventDetails', {
  eventId: currEventId
})

const eventInfo = {
  id: eventDetails?.programId,
  name: eventDetails?.name,
  type: 'recurring',
  recurrence: eventDetails?.programOfferingSchedule,
  location: eventDetails?.locationLabel,
  description: eventDetails?.description,
  goals: eventDetails?.goals
}

// Handle null description/goal
if (eventInfo.description && eventInfo.goals) {
  eventInfo.description += '\n\nGoals: ' + eventInfo.goals.replaceAll(';', ', ')
} else if (eventInfo.goals) {
  eventInfo.description = '\n\nGoals: ' + eventInfo.goals.replaceAll(';', ', ')
} else if (eventInfo.description) {
  eventInfo.goals = 'There are no goals for this program.'
} else {
  eventInfo.description = 'There is no description for this program.'
}

let eventDays = ''
const daysOfWeek: number[] = eventInfo.recurrence.daysOfWeek
// create text for days of week tag
for (let i = 0; i < daysOfWeek.length; i++) {
  eventDays += days[daysOfWeek[i]]

  if (i !== daysOfWeek.length - 1) {
    eventDays += ', '
  }
}

definePageMeta({
  title: 'Event Info',
  showBack: true
})
</script>

<template>
  <div class="flex flex-col flex-nowrap justify-center items-center">
    <h1>{{ eventInfo.name }}</h1>
    <div class="event-tags-wrapper">
      <div>
        <FCTag
          v-if="eventInfo.type == 'recurring'"
          :text="upperFirst(eventInfo.recurrence.interval)"
          icon="fe:loop"
          color="var(--light-blue)"
        />
        <FCTag
          v-if="eventInfo.type == 'recurring'"
          :text="eventDays"
          icon="fe:calendar"
          color="var(--lime-green)"
        />
        <FCTag
          :text="eventInfo.location"
          icon="fe:location"
          color="var(--purple)"
          style="color: white"
        />
      </div>

      <a target="_self" href="https://www.dropbox.com/">
        <FCFileButton text="Event Files" />
      </a>
    </div>

    <h2>Description</h2>
    <div class="desc-text">{{ eventInfo.description }}</div>

    <!-- <h2>Staff</h2>
    <FCStaffCard
      name="Alice N. Chain"
      role="Organizer"
      color="var(--lime-green)"
    />
    <FCStaffCard
      name="Campbell S. Oup"
      role="Volunteer"
      color="var(--light-blue)"
    />
    <FCStaffCard name="Joe Mama" role="Volunteer" color="var(--light-blue)" /> -->
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
  color: white;
}

h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 15px;
  color: white;
}

.desc-text {
  font-size: 16px;
  margin: 15px;
  max-width: 322px;
  color: white;
}
</style>
