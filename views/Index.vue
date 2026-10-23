<script lang="ts" setup>
import RaceButton from "@/components/race-button/RaceButton.vue";
import type { Race } from "@/schemas/RaceSchema";

interface Props {
  races: Race[];
}

const props = defineProps<Props>();

console.log({ race: props.races });
</script>

<template>
  <main class="flex flex-col px-4 py-8 bg-gray-200 h-screen">
    <div class="flex justify-center">
      <div class="flex rounded-lg bg-white w-auto">
        <RaceButton
          type="T"
          :checked="false"
        />
        <RaceButton
          type="J"
          :checked="false"
        />
        <RaceButton
          type="G"
          :checked="false"
        />
        <RaceButton
          type="D"
          :checked="false"
        />
      </div>
    </div>
  </main>
</template>
