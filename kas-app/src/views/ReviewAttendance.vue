<template>
  <div class="review-attendance">
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
        <div class="grey-line-attendance"></div>
        <button
          class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
          id="selected-button"
        >
          <div class="grey-square"></div>
          Class 1A
        </button>
        <button
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
    <div id="class-attendance">
      <RplNavCard title="Class 1A - Weekly Attendance">
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
          style="width: 50px"
          name="icon-calendar-lined"
          colour="default"
          id="calendar-icon"
        />
        <div class="rpl-document__content">
          <span
            class="rpl-document__name rpl-type-p rpl-type-weight-bold rpl-u-focusable-inline"
          >
            WEEK 10
          </span>
        </div>
        <ReviewCalendar />
      </RplNavCard>
    </div>
  </div>
</template>

<script setup>
import ReviewCalendar from "../components/ReviewCalendar.vue";
import {
  RplNavCard,
  RplButton,
  RplIcon,
  RplChip,
} from "@dpc-sdp/ripple-ui-core/vue";
</script>

<style>
@media (min-width: 1024px) {
  .review-attendance {
    display: grid;
    height: 80vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 0.2fr 0.3fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "teacher-details teacher-details teacher-details class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance"
      "teacher-details teacher-details teacher-details class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance"
      "teacher-details teacher-details teacher-details class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance class-attendance";
  }
  #class-attendance {
    grid-area: class-attendance;
    margin: 1.5rem 1.5rem;
    height: 100%;
  }
  .rpl-card__content {
    max-width: fit-content;
  }
}
</style>
