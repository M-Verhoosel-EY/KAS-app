<template>
  <div id="screenNav">
    <div class="sb-container" id="teacher-tags" style="display: inline-block">
      <a href="/welcome"><h1 class="horizontal-items">Welcome</h1></a>
      <InformationCircleIcon
        class="information-icon"
        @click="() => TogglePopup('screen1Trigger')"
      />
      <a href="/enrolment"><h1 class="horizontal-items">Screen 1</h1></a>

      <InformationCircleIcon
        class="information-icon"
        @click="() => TogglePopup('screen2Trigger')"
      />
      <a href="/record-attendance"
        ><h1 class="horizontal-items">Screen 2</h1></a
      >
      <InformationCircleIcon
        class="information-icon"
        @click="() => TogglePopup('screen3Trigger')"
      />

      <a href="/review-attendance"
        ><h1 class="horizontal-items">Screen 3</h1></a
      >
      <Popup
        v-if="popupTriggers.screen1Trigger"
        :TogglePopup="() => TogglePopup('screen1Trigger')"
      >
        <h3 class="rpl-type-h3-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
          Linking an enrolled child to a kindergarten class ​
        </h3>
        <p class="rpl-type-p">
          <strong>Context:</strong> In this screen we aim to simulate the time
          where an authorised user of a kindergarten institution (could be an
          administrator and/or teacher) has a list of children that have been
          enrolled at their institution and are in the process of linking
          children to specific classes.
        </p>
        <div style="display: flex; width: 100rem; margin-top: 3rem">
          <p
            class="rpl-type-p rpl-type-weight-bold"
            style="display: inline-block; margin-right: 5rem"
          >
            User Story: The ability for an authorised user at a kindergarten
            institution to link an enrolled child to a specific class.​
          </p>
          <p class="rpl-type-label-small">Potentially tracing to Epic 1.4</p>

          <img
            src="../assets/images/screen1_epic.png"
            width="200"
            style="display: inline-block"
          />
        </div>
        <div>
          <p class="rpl-type-p">
            <strong>Key Assumptions:</strong> In this scenario, we have
            assumed:​
          </p>
          <ul class="rpl-type-list-ul">
            <li>
              Children have been enrolled in the system (we have identified 5
              children in this demo)​
            </li>
            <li>
              The classes, their sizing and location is existing (while multiple
              classes exist on the screen, we have chosen only one for the
              purposes of interaction)
            </li>
            <li>The classes are linked to a teacher</li>
          </ul>
        </div>
        <div>
          <p class="rpl-type-p">
            <strong>Scenario Run Through:</strong> Here we invite users to put
            themselves in the role of an authorised user at this kindergarten
            institution. Navigating left to right:​
          </p>
          <ol class="rpl-type-list-ol">
            <li>
              Logging in as the authorised user, the user is able to see the
              details of the institution they represent and various location
              that they may operate across. For the purpose of this demo, we
              have locked this selection. We anticipate that some institutions
              run several sites across the state and this may act as an easy way
              for users to quickly navigate to the right class especially if
              they (the institution) is running centralised operations (out of
              one site for all sites).
            </li>
            <li>
              The authorised user then selects the class they wish to enrol the
              enrolled child in. Here we have assumed that enrolment has taken
              place and children are enrolled in institutions in the first
              instance, then location, then class (as a hierarchy). For the
              purpose of this demonstration, the selection of classes have been
              locked.​
            </li>
            <li>
              The authorised user then begins to build the class based on the
              number of enrolled children at their institution. Here we
              anticipate they (authorised user) can select and or search for a
              child record and then simply add to the class. Furthermore,
              children can be removed from the class structure. The objective
              here is to set the class structure for which attendance will need
              to be recorded against. While we are representing basic add and
              remove functionality,
              <u>and you may wish to interact with this basic functionality</u>,
              we acknowledge that further complexity around class sizing (e.g.
              how many children can make up a class), class demographics
              (social, linguistic and cultural diversity) and/or linked student
              to teacher ratios may all play as factors and subsequent rules
              required to built into this system in order to fulfill the
              appropriate BRDs within the linked Milestone.​
            </li>
          </ol>
        </div>
        <div>
          <h2 class="rpl-type-h2-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
            When you have finished interacting with this screen, feel free to
            select ‘Screen 2’ at the top of the screen
          </h2>
        </div>
        <RplButton @click="TogglePopup('screen1Trigger')" id="close-button"
          >Close</RplButton
        >
      </Popup>
      <!-- <div>------BREAK-------</div> -->
      <Popup
        v-if="popupTriggers.screen2Trigger"
        :TogglePopup="() => TogglePopup('screen2Trigger')"
      >
        <h3 class="rpl-type-h3-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
          Recording enrolled children’s daily attendance at a kindergarten
          class​
        </h3>
        <p class="rpl-type-p">
          <strong>Context:</strong> In this screen we aim to simulate the time
          where an authorised user (perhaps a teacher) is recording the
          attendance of their class (marking the roll). We will work with DE to
          understand the anticipated frequency of capturing attendance, for the
          purpose of this screen we have assumed a daily capture of attendance.​
        </p>
        <div style="display: flex; width: 100rem; margin-top: 3rem">
          <p
            class="rpl-type-p rpl-type-weight-bold"
            style="display: inline-block; margin-right: 5rem"
          >
            User Story: The ability for an authorised user at a kindergarten
            institution to record daily attendance​
          </p>
          <p class="rpl-type-label-small">Potentially tracing to Epic 3.9</p>
          <img
            src="../assets/images/screen2_epic.png"
            width="200"
            style="display: inline-block"
          />
        </div>

        <div>
          <p class="rpl-type-p">
            <strong>Key Assumptions:</strong> In this scenario, we have
            assumed:​
          </p>
          <ul class="rpl-type-list-ul">
            <li>
              Children have already been enrolled and are attending class​
            </li>
            <li>
              The enrolled child has already been linked with the appropriate
              class​
            </li>
            <li>
              The teacher is marking daily attendance at the end of the day​
            </li>
          </ul>
        </div>
        <div>
          <p class="rpl-type-p">
            <strong>Scenario Run Through:</strong> Here we invite users to put
            themselves in the role of an authorised user (teacher of the class)
            at this kindergarten institution. Navigating left to right:​
          </p>
          <ol class="rpl-type-list-ol">
            <li>
              Logging in as the authorised user (teacher), the user is able to
              see the details linked to their profile (e.g. the institution for
              which they work at and the classes that they teach/ assigned to).
              For the purpose of this demo, we have locked this selection to a
              single class for which attendance is being recorded against. We
              anticipate there may be further complexity and rules around
              teacher to student ratios and how many classes a teacher can
              feasibly teach.​
            </li>
            <li>
              The teacher, then navigates to the specific class pane where the
              details of the class are given alongside a list of enrolled
              children. By default we have anticipated that the students listed
              here have no status assigned until the user makes a selection
              (e.g. attendance or absent). Only once when a decision of
              attendance per student is made for the day (against all child
              record) can the teacher ‘submit’ the daily attendance.​
            </li>
            <li>
              Here we invite the user (you) to fill in an attendance status of
              each of the enrolled children in this class. At a high level we
              have assumed four distinct attendance statuses:​
            </li>
            <ul class="rpl-type-list-ul">
              <li>
                1. “Attended” – the child has attended in full for the duration
                of the day required –here we have assumed full attendance is a 6
                hour day (based on a 30 hour week). The objective here was to
                try to make it easy for users to single click attendance if the
                child was attending as the agreed schedule.​
              </li>
              <li>
                2. “Partial” – the child has attended only a portion of the
                required hours in the day, here the teacher has the ability to
                record the ‘in’ and ‘out’ times – here we have assumed this
                requirement to accommodate a time where a child needs to be
                picked up early for legitimate reasons (e.g. attending a
                vaccination etc.)​
              </li>
              <li>
                3. “Absent” – the child did not attend for the duration of the
                day. For the purpose of this demonstration we have kept this
                status as the inverse of attendance, however, we note that
                absenteeism can probably fall into several more detailed
                branches of statuses where a record of absent for legitimate
                and/or non-legitimate reasons may be required in the data
                capture. ​
              </li>
            </ul>
            <li>
              Upon marking an attendance status against each child in the class,
              the user then presses submit, here we anticipate a disclaimer of
              sorts to ‘pop-up’ to remind the user of their responsibility of
              what they are submitting to ensure it is true and accurate etc.​
            </li>
          </ol>
        </div>
        <div>
          <h2 class="rpl-type-h2-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
            When you have finished interacting with this screen, feel free to
            select ‘Screen 3’ at the top of the screen
          </h2>
        </div>
        <RplButton @click="TogglePopup('screen2Trigger')" id="close-button"
          >Close</RplButton
        >
      </Popup>
      <!-- <div>------BREAK-------</div> -->
      <Popup
        v-if="popupTriggers.screen3Trigger"
        :TogglePopup="() => TogglePopup('screen3Trigger')"
      >
        <h3 class="rpl-type-h3-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
          Reviewing weekly class attendance and formally submitting the time to
          DE.​
        </h3>
        <p class="rpl-type-p">
          <strong>Context:</strong> In this screen we aim to simulate the time
          where an authorised user (perhaps a head teacher and/or institution
          administrator) reviews the captured attendance for a class over a week
          period, once checked, then submits the weekly attendance sheet to DE
          via the system.​
        </p>
        <div style="display: flex; width: 100rem; margin-top: 3rem">
          <p
            class="rpl-type-p rpl-type-weight-bold"
            style="display: inline-block; margin-right: 5rem"
          >
            User Story: The ability for an authorised user at a kindergarten
            institution review and adjust recorded weekly attendance of a child
            in the enrolled class.​
          </p>
          <p class="rpl-type-label-small">Potentially tracing to Epic 3.10</p>
          <img
            src="../assets/images/screen3_epic.png"
            width="200"
            style="display: inline-block"
          />
        </div>
        <div>
          <p class="rpl-type-p">
            <strong>Key Assumptions:</strong> In this scenario, we have
            assumed:​
          </p>
          <ul class="rpl-type-list-ul">
            <li>
              Daily attendance has been recorded for an entire week at a class
              for each student​
            </li>
            <li>
              DE requires attendance to be submitted at a ‘per-week’ frequency​
            </li>
            <li>
              To encourage greater compliance, a teacher has their daily
              attendance capture reviewed by an authorised user within the
              institution before submitting to DE.​
            </li>
          </ul>
        </div>
        <div>
          <p class="rpl-type-p">
            <strong>Scenario Run Through:</strong> Here we invite users to put
            themselves in the role of an authorised user (head teacher/
            institution administrator) at this kindergarten institution.
            Navigating left to right:​
          </p>
          <ol class="rpl-type-list-ol">
            <li>
              Logging in as the authorised user, the user is again able to see
              the details linked to their profile (e.g. the institution for
              which they work at and the classes that they teach/ assigned to
              review). For the purpose of this demo, we have locked this
              selection to a single class to review the week of attendance. We
              anticipate there may be further complexity and rules around
              frequency of reviews and classes a user is able to review.​
            </li>
            <li>
              The authorised user, then navigates to the specific weekly
              attendance pane where the details of the class are given alongside
              a list of enrolled children and their attendance across the week –
              here we have assumed full attendance is 6 hours a day Monday to
              Friday, totalling 30 hours a week. ​
            </li>
            <li>
              Here we have supported basic functionality where a child’s
              attendance needs to be edited based on incorrect entry or
              information received at a later date. Here the user is able to
              select the row of the child record and update any of the days
              (based on the same statuses outline in screen 2)​
            </li>
            <li>
              Once the authorised user has reviewed the weekly attend, the
              “submit” button for weekly attended is pressed, for which we
              anticipate a disclaimer of sorts reminding the user of their
              responsibility to ensure true and accurate record submission is
              displayed.​
            </li>
          </ol>
        </div>
        <div>
          <h2 class="rpl-type-h2-fixed rpl-u-margin-b-4 rpl-u-margin-t-4">
            When you have finished interacting with this screen, feel free to
            select ‘Welcome’ at the top of the screen
          </h2>
        </div>
        <RplButton @click="TogglePopup('screen3Trigger')" id="close-button"
          >Close</RplButton
        >
      </Popup>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Popup from "./Popup.vue";
import { InformationCircleIcon } from "@heroicons/vue/24/solid";
import { RplButton } from "@dpc-sdp/ripple-ui-core/vue";

export default {
  setup() {
    const popupTriggers = ref({
      screen1Trigger: false,
      screen2Trigger: false,
      screen3Trigger: false,
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
    Popup,
    RplButton,
    InformationCircleIcon,
  },
};
</script>

<style scoped>
#close-button {
  float: right;
  padding-left: 5rem;
  padding-right: 5rem;
}
.horizontal-items {
  display: inline-block;
  margin-right: 5rem;
}
p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.information-icon {
  margin-bottom: -1rem;
  width: 3rem;
  color: #0052c2;
  margin-right: 1rem;
}
.information-icon:hover {
  cursor: pointer;
}
</style>
