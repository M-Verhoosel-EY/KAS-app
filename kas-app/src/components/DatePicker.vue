<template>
  <VueDatePicker
    v-model="date"
    position="left"
    :enable-time-picker="false"
    :disabled-week-days="[6, 0]"
    :format="DD / MM / yyyy"
    :text-input="true"
    auto-apply
    style="
      display: inline-block;
      position: absolute;
      margin-left: 2rem;
      margin-top: 1rem;
    "
  >
    <template #trigger>
      <p
        class="rpl-document__name rpl-type-p rpl-type-weight-bold rpl-u-focusable-inline"
      >
        {{ format(date) }}
      </p>
    </template>
  </VueDatePicker>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import moment from "moment";

export default {
  components: { VueDatePicker },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<script setup>

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
</script>
