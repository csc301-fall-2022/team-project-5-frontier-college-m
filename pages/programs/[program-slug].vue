<script lang="ts" setup>

// day number mapping
const days: {[day: number]: string} = 
{0: 'Mon',
1: 'Tue',
2: 'Wed',
3: 'Thu',
4: 'Fri',
5: 'Sat',
6: 'Sun'}

function upperFirst(str: string) {
  if (str.length > 0) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return str
}

const route = useRoute()

const currEventId = +route.params.programslug
const client = useClient()
const eventInfo = await client.query("eventDetails", {eventId: currEventId})

let eventDays = ""
const daysOfWeek: number[] = eventInfo.recurrence.daysOfWeek
// create text for days of week tag
for (let i = 0; i < daysOfWeek.length; i++) {
  eventDays += days[daysOfWeek[i]]
  
  if (i !== daysOfWeek.length - 1) {
    eventDays += ", "
  }
 
}

definePageMeta({
  title: 'Event Info',
  showBack: true
})
</script>

<template>
  <div class="flex flex-col flex-nowrap justify-center items-center">
    <h1>{{eventInfo.name}}</h1>
    <div class="event-tags-wrapper">
      <div>
        <FCTag v-if="eventInfo.type == 'recurring'" :text="upperFirst(eventInfo.recurrence.interval)" icon="fe:loop" w:bg="light-blue" />
        <FCTag v-if="eventInfo.type == 'recurring'" :text="eventDays" icon="fe:calendar" w:bg="yellow" />
        <FCTag :text="eventInfo.location" icon="fe:location" w:bg="purple" />
      </div>
      <FCFileButton text="Event Files" />
    </div>

    <h2>Description</h2>
    <div class="desc-text">{{ eventInfo.description }}</div>

    <h2>Staff</h2>
    <FCStaffCard name="Alice N. Chain" role="Organizer" w:bg="pink" />
    <FCStaffCard name="Campbell S. Oup" role="Volunteer" />
    <FCStaffCard name="Joe Mama" role="Volunteer" />
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
