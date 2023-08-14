<script setup>
import { RplPrimaryNav } from "@dpc-sdp/ripple-ui-core/vue";
import image from "../assets/images/vic-gov.png";
</script>

<template>
  <RplPrimaryNav
    :primary-logo="{
      href: '#',
      src: image, 
      printsrc: '../assets/images/vic-gov.png',
      altText: 'VIC.GOV.AU',
    }"
    :items="[
      {
        id: '1',
        text: 'First level A',
        url: '#',
      },
      {
        id: '2',
        text: 'First level B',
        url: '#',
      },
    ]"
    :showQuickExit="false"
  />
</template>
