<template>
  <div class="rpl-table">
    <div class="rpl-table__scroll-container" tabindex="0">
      <table style="width: 400rem">
        <thead>
          <tr>
            <th colspan="2">Name</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th class="text-left" style="text-align: center">Total Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(child, index) in children" :key="children.id">
            <td colspan="2" class="rpl-type-label">{{ child.name }}</td>
            <td>
              <RplButton
                label="Present"
                id="present-button"
                @click="present('6', index)"
              />
            </td>
            <td>
              <RplButton
                label="Absent"
                id="absent-button"
                @click="absent('0', index)"
              />
            </td>
            <td><RplButton label="Partial" id="partial-button" /></td>
            <td></td>
            <td></td>
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
      attendance: [, , , ,],
      children: [
        {
          id: 1,
          name: "Chloe Friedman",
          hours: "0",
        },
        {
          id: 2,
          name: "Ethel Terry",
        },
        {
          id: 3,
          name: "Andrew Fisher",
        },
        {
          id: 4,
          name: "Jessie Montes",
        },
        {
          id: 5,
          name: "Bryan Erickson",
        },
      ],
    };
  },
  methods: {
    present(hours, index) {
      this.attendance[index] = hours;
    },
    absent(hours, index) {
      this.attendance[index] = hours;
    },
  },
};
</script>

<script setup>
import { RplButton } from "@dpc-sdp/ripple-ui-core/vue";
</script>

<style>
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
</style>
