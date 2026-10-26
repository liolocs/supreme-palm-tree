<script lang="ts" setup>
import { computed } from "vue";
import { RACE_TYPE_ORDER } from "@/lib/constants"
import { useActiveRaceTypes } from "@/lib/useActiveRaceTypes"
import { selectNextRace } from "@/lib/selectNextRace";
import RaceButton from "@/components/race-selection/race-button/RaceButton.vue"
import type { Race } from "@/schemas/RaceSchema";
import NextRaceCard from "@/components/next-race-card/NextRaceCard.vue";
import RaceSelection from "@/components/race-selection/RaceSelection.vue";

interface Props {
  races: Race[];
}

const props = defineProps<Props>();

console.log({
  races: props.races,
});

const { activeRaceTypes } = useActiveRaceTypes();
 
const nextRace = computed(() =>
  selectNextRace({ races: props.races, activeRaceTypes: activeRaceTypes.value })
);
</script>

<template>
  <main class="flex flex-col px-4 py-8 bg-gray-200 h-screen">
    <div class="flex flex-col items-center gap-12">
      <RaceSelection />

      <NextRaceCard v-if="nextRace" :race="nextRace" />
    </div>
  </main>
</template>