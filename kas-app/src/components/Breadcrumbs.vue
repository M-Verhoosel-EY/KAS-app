<script setup>
import { RplBreadcrumbs } from "@dpc-sdp/ripple-ui-core/vue";
</script>

<template>
  <div class="sb-container">
    <RplBreadcrumbs
      :items="[
        {
          text: 'Login',
          url: '/',
        },
        {
          text: 'Enrolment',
          url: 'http://127.0.0.1:5173/enrolment',
        },
        {
          text: 'Record Attendance',
          url: '/record-attendance',
        },
        {
          text: 'Review Attendance',
          url: 'review-attendance',
        },
      ]"
    />
  </div>
</template>

<style scoped>
.sb-container {
  margin-top: 0.5rem;
}
</style>
