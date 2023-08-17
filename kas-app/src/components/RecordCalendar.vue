<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th></th>
        <th></th>
        <th></th>
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
      <tr v-for="item in desserts" :key="item.name">
        <td colspan="4">{{ item.name }}</td>
        <td>
          <v-btn variant="outlined" id="present-button"> Present</v-btn>
        </td>
        <td>
          <v-btn variant="outlined" id="partial-button"> Partial </v-btn>
        </td>
        <td>
          <v-btn variant="outlined" id="absent-button" style=""> Absent </v-btn>
        </td>
        <td colspan="9">
          <v-range-slider v-model="value" :id="item.name" strict
            ></v-range-slider
          >
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
//import "vuetify/styles";
export default {
  data() {
    return {
      value: [5, 80],
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
