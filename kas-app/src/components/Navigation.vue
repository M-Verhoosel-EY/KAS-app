<script setup>
import { RplPrimaryNav } from "@dpc-sdp/ripple-ui-core/vue";
import image from "../assets/images/vic-gov.png";
</script>

<template>
  <div>
    <div id="navbar">
      <RplPrimaryNav
        class="rpl-primary-nav__primary-logo-image"
        :primary-logo="{
          href: 'http://vic.gov.au',
          src: image,
          printsrc: '../assets/images/vic-gov.png',
          altText: 'VIC.GOV.AU',
        }"
        :showQuickExit="false"
      />
    </div>
  </div>
</template>
