<script lang="ts" setup>
import {type RaceType} from "@/schemas/RaceSchema"
import RaceIcon from "@/components/race-icons/Index.vue"

interface Props {
  type: RaceType
  checked: boolean
}

const props = defineProps<Props>()
</script>

<template>
<label :for="props.type" class="w-[64px] p-4">
  <RaceIcon :type="props.type"></RaceIcon>

  <input :id="props.type" type="checkbox" :checked="props.checked" class="hidden" aria-hidden="true">
</label>

</template>