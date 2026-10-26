<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { formatRemainingTime } from "@/lib/raceFormat";

interface Props {
  postTime: number;
}

const COUNTDOWN_REFRESH_MS = 30_000;

const props = defineProps<Props>();

const now = ref(Date.now());

const remainingTime = computed(() =>
  formatRemainingTime({ postTime: props.postTime, now: now.value }),
);

let ticker: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  now.value = Date.now();

  ticker = setInterval(() => {
    now.value = Date.now();
  }, COUNTDOWN_REFRESH_MS);
});

onUnmounted(() => clearInterval(ticker));
</script>

<template>
  <span class="shrink-0 text-xs text-white">
    {{ remainingTime }}
  </span>
</template>
