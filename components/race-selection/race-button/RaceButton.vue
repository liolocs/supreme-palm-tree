<script lang="ts" setup>
import { type RaceType } from "@/schemas/RaceSchema"
import RaceIcon from "@/components/icons/race-icons/Index.vue"

interface Props {
  type: RaceType
  active: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{ toggle: [] }>()
</script>

<template>
  <label :for="props.type" class="w-[70px] p-4 hover:cursor-pointer hover:bg-gray-100">
    <RaceIcon :type="props.type" :active="props.active"></RaceIcon>

    <input
      :id="props.type"
      type="checkbox"
      :checked="props.active"
      class="hidden"
      aria-hidden="true"
      @change="emit('toggle')"
    >
  </label>
</template>