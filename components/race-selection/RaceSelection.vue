<script lang="ts" setup>
import { RACE_TYPE_ORDER } from '@/lib/constants';
import { useActiveRaceTypes } from '@/lib/useActiveRaceTypes';
import RaceButton from "@/components/race-selection/race-button/RaceButton.vue" 

const { activeRaceTypes, toggleRaceType } = useActiveRaceTypes();
</script>

<template>
  <div class="flex rounded-lg bg-white w-auto">
    <RaceButton
      v-for="raceType in RACE_TYPE_ORDER"
      :key="raceType"
      :type="raceType"
      :active="activeRaceTypes.includes(raceType)"
      @toggle="toggleRaceType(raceType)"
    />
  </div>
</template>