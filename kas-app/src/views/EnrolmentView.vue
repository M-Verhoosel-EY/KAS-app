<template>
  <div class="enrolement">
    <h1>This is the enrolment page</h1>
    <div class="rpl-grid">
      <div class="rpl-col-10 rpl-col-start-2">
        <div class="rpl-grid">
          <div class="rpl-col-2">
            <RplNavCard
            title="Institution Details"
          >
            <template #meta></template>
            <p
              class=""
            >
              Funding for public-facing small businesses to purchase equipment and
              upgrades to improve ventilation and reduce the spread of COVID-19 and
              boost customer confidence.
            </p>
            </RplNavCard>
          </div>
          <div class="rpl-col-4 rpl-col-start-3">
            <RplNavCard
            title="Class Details"
          >
            <template #meta></template>
            <p
              class=""
            >
              Funding for public-facing small businesses to purchase equipment and
              upgrades to improve ventilation and reduce the spread of COVID-19 and
              boost customer confidence.
            </p>
            </RplNavCard>
          </div>
          <div class="rpl-col-4 rpl-col-start-7">
            <RplNavCard
            title="Child Details"
          >
            <template #meta></template>
            <p
              class=""
            >
              Funding for public-facing small businesses to purchase equipment and
              upgrades to improve ventilation and reduce the spread of COVID-19 and
              boost customer confidence.
            </p>
            </RplNavCard>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
  import { RplNavCard } from "@dpc-sdp/ripple-ui-core/vue";
</script>


<style>
@media (min-width: 1024px) {
  .enrolment {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
