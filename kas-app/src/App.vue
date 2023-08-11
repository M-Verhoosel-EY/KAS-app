<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "./components/Navigation.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import { RplButton } from "@dpc-sdp/ripple-ui-core/vue";
import "@dpc-sdp/ripple-ui-core/style";
import "@dpc-sdp/ripple-ui-core/style/components";
</script>

<template>
  <div><Navigation /></div>
  <div><Breadcrumbs /></div>
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

<style scoped>
</style>
