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
            <td colspan="2">Everett Friedman</td>
            <td>
              <RplButton
                label="08:00-15:00"
                id="present-button"
                v-on:click="hello"
              />
            </td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td>
              <RplButton
                label="35"
                variant="outlined"
                id="total-hours-button"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2">Ethel Terry</td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td>
              <RplButton
                label="35"
                variant="outlined"
                id="total-hours-button"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2">Andrew Fisher</td>
            <td><RplButton label="ABSENT" id="absent-button" /></td>
            <td><RplButton label="ABSENT" id="absent-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td>
              <RplButton
                label="21"
                variant="outlined"
                id="partial-total-hours-button"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2">Jessie Montes</td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td>
              <RplButton
                label="35"
                variant="outlined"
                id="total-hours-button"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2">Bryan Erickson</td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-13:00" id="partial-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td><RplButton label="08:00-15:00" id="present-button" /></td>
            <td>
              <RplButton
                label="32"
                variant="outlined"
                id="partial-total-hours-button"
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
  methods: {
    hello() {
      return "test";
    },
  },
  data() {
    return {
      value: [5, 80],
      days: [
        {
          name: "Everett Friedman",
          mon: "08:00 - 15:00",
          tues: "08:00 - 14:00",
          type: "present-button",
        },
        {
          name: "Ethel Terry",
          mon: "08:00 - 12:00",
          type: "partial-button",
        },
        {
          name: "Andrew Fisher",
          mon: "08:00 - 15:00",
        },
        {
          name: "Jessie Montes",
          mon: "08:00 - 15:00",
        },
        {
          name: "Bryan Erickson",
          mon: "08:00 - 15:00",
        },
      ],
    };
  },
};
</script>

<script setup>
import { RplButton } from "@dpc-sdp/ripple-ui-core/vue";
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
