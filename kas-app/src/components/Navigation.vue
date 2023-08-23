<script setup>
import { RplPrimaryNav } from "@dpc-sdp/ripple-ui-core/vue";
import image from "../assets/images/vic-gov.png";
</script>

<template>
  <div>
    <img
      id="navbar"
      src="../assets/images/header-pattern-shape.png"
      width="300"
    />
    <div id="navbar">
      <RplPrimaryNav
        class="rpl-primary-nav__primary-logo-image"
        :primary-logo="{
          href: 'http://vic.gov.au',
          src: image,
          printsrc: '../assets/images/vic-gov.png',
          altText: 'VIC.GOV.AU',
        }"
        :items="[
          {
            id: '1',
            text: 'Welcome',
            url: '/welcome',
          },
          {
            id: '2',
            text: 'Enrolment',
            url: '/enrolment',
          },
          {
            id: '3',
            text: 'Record Attendance',
            url: '/record-attendance',
          },
          {
            id: '4',
            text: 'Review Attendance',
            url: '/review-attendance',
          },
        ]"
        :showQuickExit="false"
      />
    </div>
  </div>
</template>
