<script setup>
import { ModalsContainer, useModal } from "vue-final-modal";
import ModalConfirmPlainCss from "./ModalConfirmPlainCss.vue";
import { RplButton } from "@dpc-sdp/ripple-ui-core/vue";
import DropDown from "./DropDown.vue";

const { open, close } = useModal({
  component: ModalConfirmPlainCss,
  attrs: {
    title: "Edit Attendance",
    onConfirm() {
      close();
    },
  },
  slots: {
    default: "<DropDown/>",
  },
});
</script>

<script>
export default {
  data() {
    return {
      title: "Open Me",
    };
  },
};
</script>

<template>
  <RplButton @click="open" style="width: 15rem">
    {{ title }}
  </RplButton>

  <ModalsContainer />
</template>
