<template>
  <div class="rpl-table">
    <div class="rpl-table__scroll-container" tabindex="0">
      <table style="width: 400rem">
        <thead>
          <tr>
            <th colspan="2">Name</th>
            <th id="column-header-text">MON</th>
            <th id="column-header-text" style="text-align: center">TUES</th>
            <th id="column-header-text">WED</th>
            <th id="column-header-text">THUR</th>
            <th id="column-header-text">FRI</th>
            <th id="column-header-text">Total Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2" class="rpl-type-label">Chloe Friedman</td>
            <td v-for="(day, index) in chloeAttendance" :key="day.id">
              <DropDown
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
                    : { borderColor: 'black' },
                ]"
                :label="chloeAttendance[0].summedHours"
                variant="outlined"
                style="width: 15rem; height: 5rem; color: black"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" class="rpl-type-label">Ethel Terry</td>
            <td v-for="(day, index) in ethelAttendance" :key="day.id">
              <DropDown
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
                :label="ethelAttendance[0].summedHours"
                variant="outlined"
                id="total-hours-button"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" class="rpl-type-label">Andrew Fisher</td>
            <td v-for="(day, index) in andrewAttendance" :key="day.id">
              <DropDown
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
                :label="jessieAttendance[0].summedHours"
                variant="outlined"
                id="total-hours-button"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" class="rpl-type-label">Bryan Erickson</td>
            <td v-for="(day, index) in bryanAttendance" :key="day.id">
              <DropDown
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
  data() {
    return {
      checkInTime: "00:00",
      checkOutTime: "00:00",
      totalTime: "00:00",
      attended: "#74dc44",
      colorIndicator: "",
      totalHours: 0,
      sumHours: 0,
      totalWeekTime: 0,
      dayOfWeek: 0,
      index: 0,
      child: "testChild",
      ethelAttendance: [
        { total: 0, id: 1, attendance: "", color: "", summedHours: 0 },
        { total: 0, id: 2, attendance: "", color: "" },
        { total: 0, id: 3, attendance: "", color: "" },
        { total: 0, id: 4, attendance: "", color: "" },
        { total: 0, id: 5, attendance: "", color: "" },
      ],
      chloeAttendance: [
        { total: 0, id: 1, attendance: "", color: "", summedHours: 0 },
        { total: 0, id: 2, attendance: "", color: "" },
        { total: 0, id: 3, attendance: "", color: "" },
        { total: 0, id: 4, attendance: "", color: "" },
        { total: 0, id: 5, attendance: "", color: "" },
      ],
      andrewAttendance: [
        { total: 0, id: 1, attendance: "", color: "", summedHours: 0 },
        { total: 0, id: 2, attendance: "", color: "" },
        { total: 0, id: 3, attendance: "", color: "" },
        { total: 0, id: 4, attendance: "", color: "" },
        { total: 0, id: 5, attendance: "", color: "" },
      ],
      jessieAttendance: [
        { total: 0, id: 1, attendance: "", color: "", summedHours: 0 },
        { total: 0, id: 2, attendance: "", color: "" },
        { total: 0, id: 3, attendance: "", color: "" },
        { total: 0, id: 4, attendance: "", color: "" },
        { total: 0, id: 5, attendance: "", color: "" },
      ],
      bryanAttendance: [
        { total: 0, id: 1, attendance: "", color: "", summedHours: 0 },
        { total: 0, id: 2, attendance: "", color: "" },
        { total: 0, id: 3, attendance: "", color: "" },
        { total: 0, id: 4, attendance: "", color: "" },
        { total: 0, id: 5, attendance: "", color: "" },
      ],
    };
  },
  methods: {
    ChangeInTime(checkInTime) {
      this.checkInTime = checkInTime;
    },
    ChangeOutTime(checkOutTime) {
      this.checkOutTime = checkOutTime;
    },
    handleAbsent() {},
    hourDifference(index, child) {
      console.log("value of child in hour difference: ", child);
      console.log("checkInTime: ", this.checkInTime);
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
      console.log("value of child in show hours", child[0].summedHours);
      let sum = 0;
      this.child.forEach((item, index) => {
        console.log("index in forEach: ", index);
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
            this.child[newValue].color = "white";
          } else {
            this.child[newValue].attendance = "absent";
            this.child[newValue].color = "#ff9d9d";
          }
        }
      });
      this.child[0].summedHours = sum;
      //this.sumHours = sum;
      console.log("total hours: ", this.child[0].summedHours);
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
import { ref } from "vue";
import { RplButton } from "@dpc-sdp/ripple-ui-core/vue";
import DropDown from "./DropDown.vue";
import moment from "moment";
</script>

<style>
#column-header-text {
  text-align: center;
}

#child-name {
  width: 15rem;
}
#present-button {
  background-color: #74dc44;
  border-color: #74dc44;
  color: black;
  width: 15rem;
}
#total-hours-button {
  color: black;
  border-color: #74dc44;
  width: 15rem;
}
#partial-total-hours-button {
  color: black;
  border-color: #ffeb3b;
  width: 15rem;
}
#absent-button {
  background-color: #ff9d9d;
  border-color: #fd9d9d;
  color: black;
  width: 15rem;
}
#partial-button {
  background-color: #f9e062;
  border-color: #f9e062;
  width: 15rem;
  color: black;
}
</style>
