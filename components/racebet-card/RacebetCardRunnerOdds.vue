<script lang="ts" setup>
import { formatOdds } from "@/lib/raceFormat";

interface Props {
  odds: number;
}

const props = defineProps<Props>();
</script>

<template>
  <span
    class="shrink-0 rounded-[2px] bg-linear-to-b from-odds-from to-odds-to px-4 py-1 text-sm font-bold text-txt-main"
  >
    {{ formatOdds(props.odds) }}
  </span>
</template>
