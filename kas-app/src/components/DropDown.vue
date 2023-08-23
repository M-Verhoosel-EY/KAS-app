<template>
  <div>
    <vue-file-toolbar-menu
      :content="my_menu"
      style="width: 20rem; justify-content: center"
    />
  </div>
</template>

<script>
import VueFileToolbarMenu from "vue-file-toolbar-menu";

export default {
  props: ["title", "childArray", "dayIndex", "checkOutChild"],
  components: { VueFileToolbarMenu },

  data() {
    return {
      checkin: "09:00",
      checkout: "15:00",
      outAbsent: "ABSENT",
    };
  },
  methods: {
    passCheckInEvent(timeIn) {
      console.log("time in value: ", timeIn);
      this.$emit("changeCheckIn", {
        timeIn: timeIn,
        timeOut: this.checkOutChild,
        childArray: this.childArray,
        dayIndex: this.dayIndex,
      });
      this.checkin = timeIn;
    },
    passCheckOutEvent(timeOut, timeIn) {
      /* if ((timeIn = "ABSENT")) {
        this.title = "";
      } */
      this.$emit("changeCheckOut", {
        timeIn: this.title,
        timeOut: timeOut,
        childArray: this.childArray,
        dayIndex: this.dayIndex,
      });
      this.checkout = timeOut;
    },
    handleAbsent(absent) {
      //this.$emit("absentAttendance", absent);
      this.checkin = "";
      this.checkout = "";
    },
    handleAbsentOut(absent) {
      this.checkout = "";
      this.checkin = "";
    },
  },

  computed: {
    my_menu() {
      return [
        {
          menu_height: 225,
          text: this.title,
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
                this.passCheckOutEvent("ABSENT");
              },
            },
          ],
        },
        {
          menu_height: 225,
          color: "red",
          text: this.checkOutChild,
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
            {
              text: "ABSENT",
              click: () => {
                this.handleAbsentOut("ABSENT");
                this.passCheckInEvent("ABSENT");
                this.passCheckOutEvent("ABSENT");
              },
            },
          ],
        },
      ];
    },
  },
};
</script>

<style>
.bar[data-v-55e77a37] .bar-button.open:hover {
  color: var(--bar-button-open-color, #0052c2);
  background: var(--bar-button-open-bkg, rgba(0, 0, 0, 0.12));
}
</style>
