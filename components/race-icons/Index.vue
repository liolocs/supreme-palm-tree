<script lang="ts" setup>
import type { Component } from "vue"
import type { RaceType } from "@/schemas/RaceSchema"
import Gallop from "@/components/race-icons/Gallop.vue"
import Dogs from "@/components/race-icons/Dogs.vue"
import Jumping from "@/components/race-icons/Jumping.vue"
import Trot from "@/components/race-icons/Trot.vue"

interface Props {
  type: RaceType
}

const props = defineProps<Props>()

const raceTypeToIcon: Record<RaceType, Component> = {
  T: Trot,
  G: Gallop,
  D: Dogs,
  J: Jumping,
}
</script>

<template>
  <component :is="raceTypeToIcon[props.type]" class="h-5 w-10"></component>
</template>
