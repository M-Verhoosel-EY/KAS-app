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
            style="margin-top: 1.5rem"
            label="Detail B"
            variant="default"
            url="https://vic.gov.au"
          />
        </div>
        <div class="grey-line-attendance"></div>
        <button
          @click="selectClass('Class 1A')"
          class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
          id="selected-button"
        >
          <div class="grey-square"></div>
          Class 1A
        </button>
        <button
          @click="selectClass('Class 1B')"
          class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
        >
          <div class="grey-square"></div>
          Class 1B
        </button>
        <button
          class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
        >
          <div class="grey-square"></div>
          Class 1C
        </button>
        <button
          class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
        >
          <div class="grey-square"></div>
          Class 2A
        </button>
      </RplNavCard>
    </div>
    <div id="class-content">
      <RplNavCard>
        <h2>{{ className }} - Attendance</h2>
        <img
          src="../assets/images/profile-placeholder.jpeg"
          id="profile-image"
          width="120"
        />
        <ul id="test-name">
          <p>
            <strong>{{ className }}</strong>
          </p>
          <p>Year 1A</p>
        </ul>
        <div style="margin-top: 4rem">
          <div style="display: inline-block">
            <CalendarDaysIcon
              style="
                color: #0052c2;
                width: 4rem;
                justify-content: center;
                display: flex;
                justify-content: center;
              "
            />
          </div>
          <DatePicker style="width: fit-content" />
        </div>
        <RecordCalendar />
        <div>
          <RplButton id="action-buttons">Save</RplButton>
          <RplButton id="action-buttons">Submit Attendance</RplButton>
        </div>
      </RplNavCard>
    </div>
  </div>
</template>

<script>
import DatePicker from "../components/DatePicker.vue";
export default {
  props: ["className"],
  data() {
    return {
      className: "Class 1A",
    };
  },
  methods: {
    selectClass: function (name) {
      this.className = name;
    },
  },
};
</script>

<script setup>
import {
  RplNavCard,
  RplButton,
  RplIcon,
  RplChip,
} from "@dpc-sdp/ripple-ui-core/vue";
import RecordCalendar from "../components/RecordCalendar.vue";
import { CalendarDaysIcon } from "@heroicons/vue/24/solid";
</script>

<style>
#action-buttons {
  margin: 5rem 4rem 0 0;
  width: 35rem;
}
.rpl-card__content {
  max-width: 100rem;
}
.children-names {
  list-style-type: none;
}
#calendar-icon {
  margin: 2.5rem 0;
  padding: 0;
  display: block;
}
.grey-line-attendance {
  border-bottom: 1px solid lightgray;
  margin-bottom: 2rem;
}
#role-text {
  margin: 1rem 0;
}
#profile-image {
  border-radius: 50%;
  display: inline-block;
  margin-right: 1rem;
  margin-top: 2rem;
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
