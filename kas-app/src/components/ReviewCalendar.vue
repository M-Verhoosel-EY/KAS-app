<template>
  <div class="rpl-table">
    <div class="rpl-table__scroll-container" tabindex="0">
      <table style="width: 400rem">
        <thead>
          <tr>
            <th colspan="2">Name</th>
            <th id="column-header-text">Monday</th>
            <th id="column-header-text" style="text-align: center">Tuesday</th>
            <th id="column-header-text">Wednesday</th>
            <th id="column-header-text">Thursday</th>
            <th id="column-header-text">Friday</th>
            <th id="column-header-text">Total Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2" class="rpl-type-label" style="width: 10rem">
              Aria Chang
            </td>
            <td v-for="(day, index) in chloeAttendance" :key="day.id">
              <DropDown
                v-bind:title="chloeAttendance[index].title"
                v-bind:checkOutChild="chloeAttendance[index].checkOutChild"
                v-bind:childArray="chloeAttendance"
                v-bind:dayIndex="index"
                id="dropdown"
                v-bind:style="[{ backgroundColor: day.color }]"
                @changeCheckIn="
                  ChangeInTime($event), passIndex(index, chloeAttendance)
                "
                @changeCheckOut="
                  ChangeOutTime($event), passIndex(index, chloeAttendance)
                "
              />
            </td>
            <td>
              <RplButton
                id="1A"
                v-bind:style="[
                  chloeAttendance[0].summedHours >= 30
                    ? { borderColor: '#74dc44' }
                    : { borderColor: '#ffeb3b' },
                ]"
                :label="chloeAttendance[0].summedHours"
                variant="outlined"
                style="width: 15rem; height: 5rem; color: black"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" class="rpl-type-label">Kirra Mununjali</td>
            <td v-for="(day, index) in ethelAttendance" :key="day.id">
              <DropDown
                v-bind:title="ethelAttendance[index].title"
                v-bind:checkOutChild="ethelAttendance[index].checkOutChild"
                v-bind:childArray="ethelAttendance"
                v-bind:dayIndex="index"
                id="dropdown"
                v-bind:style="[{ backgroundColor: day.color }]"
                @changeCheckIn="
                  ChangeInTime($event), passIndex(index, ethelAttendance)
                "
                @changeCheckOut="
                  ChangeOutTime($event), passIndex(index, ethelAttendance)
                "
              />
            </td>
            <td>
              <RplButton
                v-bind:style="[
                  ethelAttendance[0].summedHours >= 30
                    ? { borderColor: '#74dc44' }
                    : { borderColor: '#ffeb3b' },
                ]"
                :label="ethelAttendance[0].summedHours"
                variant="outlined"
                id="total-hours-button"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" class="rpl-type-label">Malik Khan</td>
            <td v-for="(day, index) in andrewAttendance" :key="day.id">
              <DropDown
                v-bind:title="andrewAttendance[index].title"
                v-bind:checkOutChild="andrewAttendance[index].checkOutChild"
                v-bind:childArray="andrewAttendance"
                v-bind:dayIndex="index"
                id="dropdown"
                v-bind:style="[{ backgroundColor: day.color }]"
                @changeCheckIn="
                  ChangeInTime($event), passIndex(index, andrewAttendance)
                "
                @changeCheckOut="
                  ChangeOutTime($event), passIndex(index, andrewAttendance)
                "
              />
            </td>
            <td>
              <RplButton
                v-bind:style="[
                  andrewAttendance[0].summedHours >= 30
                    ? { borderColor: '#74dc44' }
                    : { borderColor: '#ffeb3b' },
                ]"
                :label="andrewAttendance[0].summedHours"
                variant="outlined"
                id="total-hours-button"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" class="rpl-type-label">Jessie Montes</td>
            <td v-for="(day, index) in jessieAttendance" :key="day.id">
              <DropDown
                v-bind:title="jessieAttendance[index].title"
                v-bind:checkOutChild="jessieAttendance[index].checkOutChild"
                v-bind:childArray="jessieAttendance"
                v-bind:dayIndex="index"
                id="dropdown"
                v-bind:style="[{ backgroundColor: day.color }]"
                @changeCheckIn="
                  ChangeInTime($event), passIndex(index, jessieAttendance)
                "
                @changeCheckOut="
                  ChangeOutTime($event), passIndex(index, jessieAttendance)
                "
              />
            </td>
            <td>
              <RplButton
                v-bind:style="[
                  jessieAttendance[0].summedHours >= 30
                    ? { borderColor: '#74dc44' }
                    : { borderColor: '#ffeb3b' },
                ]"
                :label="jessieAttendance[0].summedHours"
                variant="outlined"
                id="total-hours-button"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" class="rpl-type-label">Levi Lucas</td>
            <td v-for="(day, index) in bryanAttendance" :key="day.id">
              <DropDown
                v-bind:title="bryanAttendance[index].title"
                v-bind:checkOutChild="bryanAttendance[index].checkOutChild"
                v-bind:childArray="bryanAttendance"
                v-bind:dayIndex="index"
                id="dropdown"
                v-bind:style="[{ backgroundColor: day.color }]"
                @changeCheckIn="
                  ChangeInTime($event), passIndex(index, bryanAttendance)
                "
                @changeCheckOut="
                  ChangeOutTime($event), passIndex(index, bryanAttendance)
                "
              />
            </td>
            <td>
              <RplButton
                v-bind:style="[
                  bryanAttendance[0].summedHours >= 30
                    ? { borderColor: '#74dc44' }
                    : { borderColor: '#ffeb3b' },
                ]"
                :label="bryanAttendance[0].summedHours"
                variant="outlined"
                id="total-hours-button"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">
              <RplButton
                label="SAVE"
                id="test-button"
                style="margin-right: 5rem; width: 15rem"
              />
              <RplButton label="SUBMIT WEEKLY ATTENDANCE" id="test-button" />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCalendar",
  components: {
    DropDown,
  },
  data() {
    return {
      checkInTime: "09:00",
      checkOutTime: "15:00",
      totalTime: "00:00",
      attended: "#74dc44",
      partial: "#ffeb3b",
      colorIndicator: "",
      totalHours: 0,
      sumHours: 0,
      totalWeekTime: 0,
      dayOfWeek: 0,
      index: 0,
      child: "testChild",
      ethelAttendance: [
        {
          total: 4,
          id: 1,
          attendance: "partial",
          color: "#ffeb3b",
          title: "09:00",
          checkOutChild: "14:00",
          summedHours: 23,
        },
        {
          total: 6,
          id: 2,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 6,
          id: 3,
          attendance: "partial",
          color: "#ffeb3b",
          title: "11:00",
          checkOutChild: "14:00",
        },
        {
          total: 6,
          id: 4,
          attendance: "partial",
          color: "#ffeb3b",
          title: "10:00",
          checkOutChild: "13:00",
        },
        {
          total: 6,
          id: 5,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
      ],
      chloeAttendance: [
        {
          total: 6,
          id: 1,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
          summedHours: 30,
        },
        {
          total: 6,
          id: 2,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 6,
          id: 3,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 6,
          id: 4,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 6,
          id: 5,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
      ],
      andrewAttendance: [
        {
          total: 6,
          id: 1,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
          summedHours: 24,
        },
        {
          total: 0,
          id: 2,
          attendance: "absent",
          color: "#ff9d9d",
          title: "ABSENT",
          checkOutChild: "",
        },
        {
          total: 6,
          id: 3,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 6,
          id: 4,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 6,
          id: 5,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
      ],
      jessieAttendance: [
        {
          total: 3,
          id: 1,
          attendance: "partial",
          color: "#ffeb3b",
          title: "09:00",
          checkOutChild: "12:00",
          summedHours: 23,
        },
        {
          total: 6,
          id: 2,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 6,
          id: 3,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 6,
          id: 4,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 4,
          id: 5,
          attendance: "attended",
          color: "#ffeb3b",
          title: "09:00",
          checkOutChild: "13:00",
        },
      ],
      bryanAttendance: [
        {
          total: 6,
          id: 1,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
          summedHours: 18,
        },
        {
          total: 6,
          id: 2,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 6,
          id: 3,
          attendance: "attended",
          color: "#74dc44",
          title: "09:00",
          checkOutChild: "15:00",
        },
        {
          total: 0,
          id: 4,
          attendance: "absent",
          color: "#ff9d9d",
          title: "ABSENT",
          checkOutChild: "",
        },
        {
          total: 0,
          id: 5,
          attendance: "absent",
          color: "#ff9d9d",
          title: "ABSENT",
          checkOutChild: "",
        },
      ],
    };
  },
  methods: {
    ChangeInTime({ timeIn, childArray, dayIndex, timeOut }) {
      childArray[dayIndex].title = timeIn;
      childArray[dayIndex].checkOutChild = timeOut;
      this.checkInTime = timeIn;
      this.checkOutTime = timeOut;
    },
    ChangeOutTime({ timeOut, childArray, dayIndex, timeIn }) {
      childArray[dayIndex].title = timeIn;
      childArray[dayIndex].checkOutChild = timeOut;
      this.checkInTime = timeIn;
      this.checkOutTime = timeOut;
    },
    handleAbsent() {},
    hourDifference(index, child) {
      let a = moment(`2016-06-06T${this.checkInTime}`);
      let b = moment(`2016-06-06T${this.checkOutTime}`);
      a.format("DD/MM/YYYY hh:mm:ss");
      this.totalTime = b.diff(a, "hours");
      if (isNaN(this.totalTime)) {
        console.log("found a boggy");
        this.totalTime = 0;
      }
      console.log(this.totalTime);
      console.log(index);
      this.passIndex(index, child);
    },
    passIndex(index, child) {
      this.index = index;
      this.child = child;
      console.log((this.child[index].total = this.totalTime));
      console.log(this.child);
      this.showHours(index, child);
    },
    showHours(newValue, child) {
      console.log("value of child in show hours", child);
      let sum = 0;
      this.child.forEach((item, index) => {
        sum += item.total;
        if (newValue === index) {
          if (this.child[newValue].total > 5) {
            this.child[newValue].attendance = "attended";
            this.child[newValue].color = "#74dc44";
          } else if (
            this.child[newValue].total < 8 &&
            this.child[newValue].total > 0
          ) {
            this.child[newValue].attendance = "partial";
            this.child[newValue].color = "#ffeb3b";
          } else if (this.child[newValue].total < 0) {
            this.child[newValue].color = "rgba(0, 0, 0, 0.12)";
          } else {
            this.child[newValue].attendance = "absent";
            this.child[newValue].color = "#ff9d9d";
          }
        }
      });
      this.child[0].summedHours = sum;
    },
  },
  watch: {
    checkInTime() {
      this.hourDifference(this.index, this.child);
    },
    checkOutTime() {
      this.hourDifference(this.index, this.child);
    },
  },
};
</script>

<script setup>
import { RplButton } from "@dpc-sdp/ripple-ui-core/vue";
import DropDown from "./DropDown.vue";
import moment from "moment";
</script>

<style scoped>
#dropdown {
  border-radius: 4px;
  padding: 0.5rem;
}
#column-header-text {
  text-align: center;
}

#child-name {
  width: 15rem;
}
#total-hours-button {
  color: black;
  border-color: black;
  width: 15rem;
  height: 5rem;
}
</style>
