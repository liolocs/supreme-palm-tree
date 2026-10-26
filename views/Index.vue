<script lang="ts" setup>
import { computed } from "vue";
import { RACE_TYPE_ORDER } from "@/lib/constants"
import { useActiveRaceTypes } from "@/lib/useActiveRaceTypes"
import { selectNextRace } from "@/lib/selectNextRace";
import RaceButton from "@/components/race-button/RaceButton.vue"
import type { Race } from "@/schemas/RaceSchema";
import NextRaceCard from "@/components/next-race-card/NextRaceCard.vue";

interface Props {
  races: Race[];
}

const props = defineProps<Props>();

console.log({
  races: props.races,
});

const { activeRaceTypes, toggleRaceType } = useActiveRaceTypes();

const nextRace = computed(() =>
  selectNextRace({ races: props.races, activeRaceTypes: activeRaceTypes.value })
);
</script>

<template>
  <main class="flex flex-col px-4 py-8 bg-gray-200 h-screen">
    <div class="flex flex-col items-center gap-12">
      <div class="flex rounded-lg bg-white w-auto">
        <RaceButton
          v-for="raceType in RACE_TYPE_ORDER"
          :key="raceType"
          :type="raceType"
          :active="activeRaceTypes.includes(raceType)"
          @toggle="toggleRaceType(raceType)"
        />
      </div>

      <div>
        <NextRaceCard v-if="nextRace" :race="nextRace" />
      </div>
    </div>
  </main>
</template>