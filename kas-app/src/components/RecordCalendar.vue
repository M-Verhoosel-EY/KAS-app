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
            <th class="text-left">8.00am</th>
            <th class="text-left">9.00am</th>
            <th class="text-left">10.00am</th>
            <th class="text-left">11.00am</th>
            <th class="text-left">12.00pm</th>
            <th class="text-left">1.00pm</th>
            <th class="text-left">2.00pm</th>
            <th class="text-left">3.00pm</th>
            <th class="text-left">4.00pm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">Everett Friedman</td>
            <td><RplButton label="Present" id="present-button" /></td>
            <td><RplButton label="Partial" id="partial-button" /></td>
            <td><RplButton label="Absent" id="absent-button" /></td>
            <td colspan="9">
              <Slider />
            </td>
          </tr>
          <tr>
            <td colspan="2">Ethel Terry</td>
            <td><RplButton label="Present" id="present-button" /></td>
            <td><RplButton label="Partial" id="partial-button" /></td>
            <td><RplButton label="Absent" id="absent-button" /></td>
            <td colspan="9">
              <Slider />
            </td>
          </tr>
          <tr>
            <td colspan="2">Andrew Fisher</td>
            <td><RplButton label="Present" id="present-button" /></td>
            <td><RplButton label="Partial" id="partial-button" /></td>
            <td><RplButton label="Absent" id="absent-button" /></td>
            <td colspan="9">
              <Slider />
            </td>
          </tr>
          <tr>
            <td colspan="2">Jessie Montes</td>
            <td><RplButton label="Present" id="present-button" /></td>
            <td><RplButton label="Partial" id="partial-button" /></td>
            <td><RplButton label="Absent" id="absent-button" /></td>
            <td colspan="9">
              <Slider />
            </td>
          </tr>
          <tr>
            <td colspan="2">Bryan Erickson</td>
            <td><RplButton label="Present" id="present-button" /></td>
            <td><RplButton label="Partial" id="partial-button" /></td>
            <td><RplButton label="Absent" id="absent-button" /></td>
            <td colspan="9">
              <Slider />
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
      value: [5, 85],
      desserts: [
        {
          name: "Everett Friedman",
          calories: 159,
        },
        {
          name: "Ethel Terry",
          calories: 237,
        },
        {
          name: "Andrew Fisher",
          calories: 262,
        },
        {
          name: "Jessie Montes",
          calories: 305,
        },
        {
          name: "Bryan Erickson",
          calories: 356,
        },
      ],
    };
  },
};
</script>

<script setup>
import { RplButton } from "@dpc-sdp/ripple-ui-core/vue";
import Slider from "./Slider.vue";
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
