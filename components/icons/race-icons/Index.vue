<script lang="ts" setup>
import { computed } from "vue"
import type { Component } from "vue"
import type { RaceType } from "@/schemas/RaceSchema"
import Gallop from "@/components/icons/race-icons/Gallop.vue"
import Dogs from "@/components/icons/race-icons/Dogs.vue"
import Jumping from "@/components/icons/race-icons/Jumping.vue"
import Trot from "@/components/icons/race-icons/Trot.vue"

interface Props {
  type: RaceType
  active: boolean
  inverted?: boolean
}

const props = defineProps<Props>()

const fillClass = computed(() => {
  if (props.inverted) {
    return "fill-white";
  }

  return props.active ? "fill-txt-main" : "fill-sta-inactive";
});

const raceTypeToIcon: Record<RaceType, Component> = {
  T: Trot,
  G: Gallop,
  D: Dogs,
  J: Jumping,
}
</script>

<template>
  <component
    :is="raceTypeToIcon[props.type]"
    class="h-5 w-10"
    :class="fillClass"
  ></component>
</template>