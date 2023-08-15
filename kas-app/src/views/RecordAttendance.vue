<template>
  <div class="record-attendance">
    <div id="teacher-details">
      <RplNavCard title="Mrs. Smith">
        <p id="role-text">Teacher</p>
        <img src="../assets/images/profile-placeholder.jpeg" width="120" />
        <div class="sb-container" id="teacher-tags">
          <RplChip
            label="Location"
            variant="default"
            url="https://vic.gov.au"
          />
          <RplChip label="Hours" variant="default" url="https://vic.gov.au" />
          <RplChip
            label="Detail A"
            variant="default"
            url="https://vic.gov.au"
          />
          <RplChip
            label="Detail B"
            variant="default"
            url="https://vic.gov.au"
          />
        </div>
        <div class="grey-line"></div>
        <RplButton class="class-button" label="Class 1A" icon-name="icon-add" />
        <RplButton class="class-button" label="Class 1B" icon-name="icon-add" />
        <RplButton class="class-button" label="Class 1C" icon-name="icon-add" />
      </RplNavCard>
    </div>
    <div id="class-content">
      <RplNavCard title="Class 1A - Attendance">
        <img
          src="../assets/images/profile-placeholder.jpeg"
          id="profile-image"
          width="120"
        />
        <ul id="test-name">
          <p><strong>Teacher Name</strong></p>
          <p>Year 1A</p>
        </ul>
        <RplIcon
          name="icon-calendar-lined"
          colour="default"
          id="calendar-icon"
        />
        <div class="rpl-document__content">
          <span
            class="rpl-document__name rpl-type-p rpl-type-weight-bold rpl-u-focusable-inline"
          >
            Monday 4th AUG
          </span>
        </div>
        <li v-for="(item, index) in items" class="children-names">
          {{ item.message }}
        </li>
      </RplNavCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const items = ref([
  { message: "Everett Friedman" },
  { message: "Ethel Terry" },
  { message: "Andrew Fisher" },
  { message: "Jessie Montes" },
  { message: "Bryan Erickson" },
]);

import { RplPrimaryNav } from "@dpc-sdp/ripple-ui-core/vue";
import image from "../assets/images/vic-gov.png";
import {
  RplNavCard,
  RplButton,
  RplIcon,
  RplChip,
} from "@dpc-sdp/ripple-ui-core/vue";
</script>

<style>
.children-names {
  list-style-type: none;
}
#calendar-icon {
  margin: 2.5rem 0;
  padding: 0;
  display: block;
}
.grey-line {
  border-bottom: 1px solid lightgray;
}
#role-text {
  margin: 1rem 0;
}
#profile-image {
  border-radius: 50%;
  display: inline-block;
  margin-right: 1rem;
}
#test-name {
  display: inline-block;
  vertical-align: top;
  margin-top: 3rem;
}
#teacher-tags {
  margin: 2rem 0;
}
.class-button {
  display: block;
  margin-top: 1.5rem;
}
#grid-box {
  margin: 2rem 5rem;
}
#title {
  margin-bottom: 1.5rem;
}
@media (min-width: 1024px) {
  .record-attendance {
    display: grid;
    height: 80vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 0.2fr 0.3fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "teacher-details teacher-details teacher-details class-content class-content class-content class-content class-content class-content class-content class-content class-content"
      "teacher-details teacher-details teacher-details class-content class-content class-content class-content class-content class-content class-content class-content class-content"
      "teacher-details teacher-details teacher-details class-content class-content class-content class-content class-content class-content class-content class-content class-content";
  }
  #teacher-title {
    grid-area: teacher-title;
    margin: 1.5rem 1.5rem;
  }
  #teacher-details {
    grid-area: teacher-details;
    margin: 1.5rem 1.5rem;
    height: 100%;
  }
  #class-content {
    grid-area: class-content;
    margin: 1.5rem 1.5rem;
  }
}
</style>
