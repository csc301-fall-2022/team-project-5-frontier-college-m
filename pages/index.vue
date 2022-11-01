<script lang="ts" setup>
definePageMeta({
  title: 'Frontier College',
  showBack: false
})

const name = 'Greg'
const title = 'New Position Openings'
const content =
  'Come one come all to the grand opening of FIFTEEN new ' +
  'position openings on the job board! These non-profits need your help to ' +
  'better the community, so get blah blah blah blah blah blah blah blah ' +
  'blah blahblah blahblah blahblah blah'
</script>

<template>
  <div class="flex flex-col flex-nowrap justify-center items-center">
    <div class="welcome-card">
      <h1>Welcome, {{ name }}!</h1>
    </div>

    <div class="immediate-announcements">
      <FCAnnouncementCard :title="title" :text="content" />
      <FCViewAll />
    </div>

    <div class="arrow-cards">
      <FCArrowCard
        title="My Assigned Programs"
        :text="content"
        color="#98BF1E"
      />
      <FCArrowCard title="Group Chat" :text="content" color="#FECE3A" />
      <FCArrowCard title="Community Portal" :text="content" color="#EA7123" />
    </div>

    <!-- <div class="whitebar"></div> -->
  </div>
</template>

<style scoped>
* {
  font-family: 'Inter';
}

.whitebar {
  position: absolute;
  width: 7px;
  height: 416px;
  left: 273px;
  top: 339px;

  background: #ffffff;
}

.welcome-card {
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
  width: 360px;
  height: 210px;
  left: 0px;
  top: 114px;

  background: #e1e1e1;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.arrow-cards {
  position: relative;
}
</style>
