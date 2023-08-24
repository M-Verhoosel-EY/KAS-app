<template>
  <div class="rpl-table">
    <div class="rpl-table__scroll-container" tabindex="0">
      <table style="width: 400rem">
        <thead>
          <tr>
            <th class="rpl-type-label" colspan="2">Name</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th class="rpl-type-label" style="text-align: center">
              Total Hours
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(child, index) in children" :key="children.id">
            <td colspan="2" class="rpl-type-label">{{ child.name }}</td>
            <td>
              <RplButton
                label="PRESENT"
                id="present-button"
                @click="present('6', index)"
              />
            </td>
            <td>
              <RplButton
                label="ABSENT"
                id="absent-button"
                @click="absent('0', index)"
              />
            </td>
            <td>
              <RplButton
                label="PARTIAL"
                id="partial-button"
                @click="partial(index), hourDifference(index)"
              />
            </td>
            <td></td>
            <td></td>
            <td>
              <div v-if="partialIsVisible[index]">
                <p>Check In: 09:00</p>
                <p>Check Out: 13:00</p>
              </div>
            </td>
            <td></td>
            <td
              class="rpl-type-label rpl-type-weight-bold"
              style="text-align: center"
            >
              {{ attendance[index] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalTime: "",
      attendance: [, , , ,],
      partialIsVisible: [false, false, false, false, false],
      children: [
        {
          id: 1,
          name: "Aria Chang",
        },
        {
          id: 2,
          name: "Kirra Mununjali",
        },
        {
          id: 3,
          name: "Malik Khan",
        },
        {
          id: 4,
          name: "Jessie Montes",
        },
        {
          id: 5,
          name: "Levi Lucas",
        },
      ],
    };
  },
  methods: {
    present(hours, index) {
      this.attendance[index] = hours;
      if (this.partialIsVisible[index]) {
        this.partialIsVisible[index] = false;
      }
    },
    absent(hours, index) {
      this.attendance[index] = hours;
      if (this.partialIsVisible[index]) {
        this.partialIsVisible[index] = false;
      }
    },
    partial(index) {
      this.partialIsVisible[index] = !this.partialIsVisible[index];
    },
    hourDifference(index) {
      let a = moment("2016-06-06T09:00:00");
      let b = moment("2016-06-06T13:00:00");
      a.format("DD/MM/YYYY hh:mm:ss");
      this.totalTime = b.diff(a, "hours");
      this.attendance[index] = this.totalTime;
    },
  },
};
</script>

<script setup>
import { RplButton } from "@dpc-sdp/ripple-ui-core/vue";
import moment from "moment";
</script>

<style scoped>
@media (min-width: 1024px) {
  .review-attendance {
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
}
.v-btn.v-btn--density-default#present-button {
  color: #4caf50;
}
.v-btn.v-btn--density-default#present-button:hover {
  color: #4caf50;
}
.v-btn__content {
  color: black;
  font-size: 12px;
}
.v-btn.v-btn--density-default#partial-button {
  color: #ffeb3b;
}
.v-btn.v-btn--density-default#absent-button {
  color: #f44336;
}
.v-btn.v-btn--density-default#save-button {
  color: #f44336;
}
.v-table__wrapper {
  width: fit-content;
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
