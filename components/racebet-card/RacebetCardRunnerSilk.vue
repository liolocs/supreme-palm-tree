<script lang="ts" setup>
import { silkUrl } from "@/lib/raceFormat";

interface Props {
  silk?: string;
  name: string;
}

const props = defineProps<Props>();
</script>

<template>
  <img
    v-if="props.silk"
    :src="silkUrl(props.silk)"
    :alt="`${props.name} silk`"
    class="h-6 w-6 shrink-0"
  >
</template>
