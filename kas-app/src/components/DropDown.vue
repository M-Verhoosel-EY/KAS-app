<template>
  <div>
    <vue-file-toolbar-menu
      :content="my_menu"
      :menu_height="4"
      style="justify-content: center; width: 20rem"
    />
  </div>
</template>

<script>
import VueFileToolbarMenu from "vue-file-toolbar-menu";

export default {
  components: { VueFileToolbarMenu },

  data() {
    return { checkin: "Checkin", checkout: "Checkout" };
  },
  methods: {
    passCheckInEvent(timeIn) {
      this.$emit("changeCheckIn", timeIn);
      this.checkin = timeIn;
    },
    passCheckOutEvent(timeOut) {
      this.$emit("changeCheckOut", timeOut);
      this.checkout = timeOut;
    },
    handleAbsent(absent) {
      this.$emit("absentAttendance", absent);
      this.checkin = absent;
      this.checkout = "";
    },
  },

  computed: {
    my_menu() {
      return [
        {
          text: this.checkin,
          menu: [
            {
              text: "08:00",
              click: () => this.passCheckInEvent("08:00"),
            },
            { text: "09:00", click: () => this.passCheckInEvent("09:00") },
            { text: "10:00", click: () => this.passCheckInEvent("10:00") },
            { text: "11:00", click: () => this.passCheckInEvent("11:00") },
            { text: "12:00", click: () => this.passCheckInEvent("12:00") },
            { text: "13:00", click: () => this.passCheckInEvent("13:00") },
            { text: "14:00", click: () => this.passCheckInEvent("14:00") },
            { text: "15:00", click: () => this.passCheckInEvent("15:00") },
            { text: "16:00", click: () => this.passCheckInEvent("16:00") },
            {
              text: "ABSENT",
              click: () => {
                this.handleAbsent("ABSENT");
                this.passCheckInEvent("ABSENT");
              },
            },
          ],
        },
        {
          text: this.checkout,
          menu: [
            {
              text: "08:00",
              click: () => this.passCheckOutEvent("08:00", 8),
            },
            { text: "09:00", click: () => this.passCheckOutEvent("09:00") },
            { text: "10:00", click: () => this.passCheckOutEvent("10:00") },
            { text: "11:00", click: () => this.passCheckOutEvent("11:00") },
            { text: "12:00", click: () => this.passCheckOutEvent("12:00") },
            { text: "13:00", click: () => this.passCheckOutEvent("13:00") },
            { text: "14:00", click: () => this.passCheckOutEvent("14:00") },
            { text: "15:00", click: () => this.passCheckOutEvent("15:00") },
            { text: "16:00", click: () => this.passCheckOutEvent("16:00") },
            { text: "ABSENT", click: () => this.handleAbsent("ABSENT") },
          ],
        },
      ];
    },
  },
};
</script>
