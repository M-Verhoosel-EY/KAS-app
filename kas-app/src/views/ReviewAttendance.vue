<template>
  <div class="review-attendance">
    <div id="teacher-details">
      <RplNavCard title="Mrs. Smith">
        <p id="role-text">Teacher</p>
        <img
          src="../assets/images/profile-placeholder.jpeg"
          width="120"
          style="border-radius: 4px"
        />
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
          id="ignore-hover-button"
          class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
        >
          <div class="grey-square"></div>
          Class 1B
        </button>
        <button
          id="ignore-hover-button"
          class="institution rpl-type-h3-fixed rpl-u-padding-8 rpl-u-margin-b-4"
        >
          <div class="grey-square"></div>
          Class 1C
        </button>
        <button
          id="ignore-hover-button"
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
        <div style="float: right; margin: 5rem 0">
          <RplButton
            label="SAVE"
            id="action-buttons"
          />
          <RplButton
            label="SUBMIT WEEKLY ATTENDANCE"
            id="action-buttons"
            @click="() => TogglePopup('submitReviewedAttendanceTrigger')"
          />
        </div>
      </RplNavCard>
    </div>
    <Popup
      v-if="popupTriggers.submitReviewedAttendanceTrigger"
      :TogglePopup="() => TogglePopup('submitReviewedAttendanceTrigger')"
    >
      <div>
        <h3 class="rpl-type-h3-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
          SUBMIT WEEKLY ATTENDANCE ​
        </h3>
        <p class="rpl-type-p rpl-type-weight-bold" style="margin-bottom: 3rem">
          WEEK 10
        </p>
      </div>
      <p class="rpl-type-p" style="margin-bottom: 3rem">
        You understand that by submitting this weekly attendance...
      </p>
      <RplButton
        label="BACK"
        style="margin-right: 15rem; padding-right: 5rem; padding-left: 5rem"
        @click="TogglePopup('submitReviewedAttendanceTrigger')"
      />
      <RplButton
        label="SUBMIT"
        style="padding-right: 5rem; padding-left: 5rem"
        @click="TogglePopup('submitReviewedAttendanceTrigger')"
      />
    </Popup>
  </div>
</template>

<script>
import ReviewCalendar from "../components/ReviewCalendar.vue";
import {
  RplNavCard,
  RplButton,
  RplIcon,
  RplChip,
} from "@dpc-sdp/ripple-ui-core/vue";
import { ref } from "vue";
import Popup from "../components/Popup.vue";

export default {
  setup() {
    const popupTriggers = ref({
      submitReviewedAttendanceTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      Popup,
      popupTriggers,
      TogglePopup,
    };
  },
  components: {
    ReviewCalendar,
    RplButton,
    RplChip,
    RplIcon,
    RplNavCard,
    Popup,
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .review-attendance {
    margin-top: 4rem;
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
