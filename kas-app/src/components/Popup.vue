<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["TogglePopup"],
};
</script>

<script setup>
import { RplButton } from "@dpc-sdp/ripple-ui-core/vue";
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  .popup-inner {
    background: white;
    padding: 32px;
    width: auto;
    margin: 0 5rem;
  }
}
</style>
