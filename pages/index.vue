<script lang="ts" setup>
  const name = 'Greg'
  const title = 'New Position Openings'
  const content = "Come one come all to the grand opening of FIFTEEN new " +
  "position openings on the job board! These non-profits need your help to " +
  "better the community, so get blah blah blah blah blah blah blah blah " +
  "blah blahblah blahblah blahblah blah"
</script>

<template>
  <div>
    <div class="temporary-header">
    </div>

    <div class="welcome-card">
      <h1>Welcome, {{ name }}!</h1>
    </div>

    <div class="immediate-announcements">
      <FCAnnouncementCard :title=title :text="content"/>
      <FCViewAll/>
    </div>

    <div class="arrow-cards">
      <FCArrowCard title='My Assigned Programs' :text="content" color="#98BF1E"/>
      <FCArrowCard title='Group Chat' :text="content" color="#FECE3A"/>
      <FCArrowCard title='Community Portal' :text="content" color="#EA7123"/>
    </div>

    <div class="whitebar"></div>
  </div>
</template>
<style scoped>
  * {
    font-family: 'Inter';
    font-style: normal;
  }

  .whitebar{
    position: absolute;
    width: 7px;
    height: 416px;
    left: 273px;
    top: 339px;

    background: #FFFFFF;
  }

 .temporary-header{
  width: 360px;
  height: 55px;
  left: 0px;
  top: 0px;
  background: #005954;
 }
 .welcome-card{
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  padding: 13px;
  width: 360px;
  height: 59px;
  left: 0px;
  top: 56px;
 }

 .immediate-announcements{
  padding-top: 25px;
  text-align: center;
  width: 360px;
  height: 210px;
  left: 0px;
  top: 114px;

  background: #E1E1E1;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
 }

 .arrow-cards{
  position: relative;
 }
</style>
