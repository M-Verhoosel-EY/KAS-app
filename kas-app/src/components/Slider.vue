<template>
  <v-range-slider v-model="value" strict></v-range-slider>
</template>

<script>
export default {
  data() {
    return {
      value: [5, 85],
    };
  },
};
</script>
