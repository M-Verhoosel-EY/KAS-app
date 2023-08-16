<template>

    <v-card>
      <v-card-text>
        <v-range-slider v-model="value" strict></v-range-slider>
      </v-card-text>
    </v-card>
  
</template>

<script>
export default {
  data() {
    return {
      value: [20, 40],
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
</style>
