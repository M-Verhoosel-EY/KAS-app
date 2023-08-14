<script>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import { RplBreadcrumbs } from "@dpc-sdp/ripple-ui-core/vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import "@dpc-sdp/ripple-ui-core/style";
import "@dpc-sdp/ripple-ui-core/style/components";
export default {
  components: {
    Breadcrumbs,
    Navigation,
    RplBreadcrumbs,
  },
};
</script>

<template>
  <div><Navigation /></div>
  <div><Breadcrumbs /></div>
  <ol class="rpl-type-list-ol">
    <li><RouterLink to="/">Login</RouterLink></li>
    <li><RouterLink to="/enrolment">Enrolment</RouterLink></li>
    <li><RouterLink to="/record-attendance">Record attendance</RouterLink></li>
    <li><RouterLink to="/review-attendance">Review attendance</RouterLink></li>
  </ol>
  <!-- <header>
    <div class="rpl-grid">
      <div class="rpl-col-12"><u>Header</u></div>
    </div>
    <div class="wrapper">
      <Navigation />
      <HelloWorld msg="You did it!" />
      <RplButton>My Button!</RplButton>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/enrolment">Enrolment</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>
