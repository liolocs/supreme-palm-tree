<script lang="ts" setup>
import { RACE_TYPE_ORDER } from "@/lib/constants"
import { useActiveRaceTypes } from "@/lib/useActiveRaceTypes"
import RaceButton from "@/components/race-button/RaceButton.vue"
import type { Race } from "@/schemas/RaceSchema";

interface Props {
  races: Race[];
}

defineProps<Props>();

const { activeRaceTypes, toggleRaceType } = useActiveRaceTypes();
</script>

<template>
  <main class="flex flex-col px-4 py-8 bg-gray-200 h-screen">
    <div class="flex justify-center">
      <div class="flex rounded-lg bg-white w-auto">
        <RaceButton
          v-for="raceType in RACE_TYPE_ORDER"
          :key="raceType"
          :type="raceType"
          :active="activeRaceTypes.includes(raceType)"
          @toggle="toggleRaceType(raceType)"
        />
      </div>
    </div>
  </main>
</template>