<script>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import { RplBreadcrumbs, RplButton } from "@dpc-sdp/ripple-ui-core/vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import "@dpc-sdp/ripple-ui-core/style";
import "@dpc-sdp/ripple-ui-core/style/components";
//import "vuetify/styles";
import RecordAttendance from "./views/RecordAttendance.vue";
import ScreenNavigation from "./components/ScreenNavigation.vue";

export default {
  components: {
    Breadcrumbs,
    Navigation,
    ScreenNavigation,
    RplBreadcrumbs,
    RplButton,
    RecordAttendance,
  },
};
</script>

<template>
  <div class="app-screen">
    <img
      id="navbar"
      src="./assets/images/header-pattern-shape.png"
      width="300"
    />
    <ScreenNavigation id="screenNav" />
    <Navigation id="navbar" />
  </div>
  <ModalsContainer />
  <RouterView />
</template>

<style scoped>
.app-screen {
  display: grid;
  height: 10vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 0.2fr;
  grid-template-areas:
    "screenNav screenNav screenNav screenNav screenNav screenNav screenNav screenNav screenNav screenNav screenNav screenNav"
    "navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar";
}

#screenNav {
  margin-left: 2.5rem;
  margin-bottom: 2.5rem;
  grid-area: screenNav;
}

#navbar {
  margin-left: -0.5rem;
  margin-top: -2.5rem;
  grid-area: navbar;
}
</style>
