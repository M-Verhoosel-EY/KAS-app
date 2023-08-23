<script>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import { RplBreadcrumbs } from "@dpc-sdp/ripple-ui-core/vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import "@dpc-sdp/ripple-ui-core/style";
import "@dpc-sdp/ripple-ui-core/style/components";
//import "vuetify/styles";
import RecordAttendance from "./views/RecordAttendance.vue";
export default {
  components: {
    Breadcrumbs,
    Navigation,
    RplBreadcrumbs,
    RecordAttendance,
  },
};
</script>

<template>
  <div class="app-screen">
    <Navigation id="navbar" />
  </div>
  <ModalsContainer />
  <RouterView />
</template>

<script setup>
import { ModalsContainer } from "vue-final-modal";
</script>

<style scoped>
.app-screen {
  display: grid;
  height: 10vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 0.2fr;
  grid-template-areas: "navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar";
}

#navbar {
  margin-left: -0.5rem;
  margin-top: -2.5rem;
  grid-area: navbar;
}
</style>
