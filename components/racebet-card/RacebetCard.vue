<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  href?: string;
}

const props = defineProps<Props>();

const tag = computed(() => (props.href ? "a" : "div"));
</script>

<template>
  <component
    :is="tag"
    :href="props.href"
    class="flex w-[260px] flex-col border-[3px] border-race-surface bg-white"
  >
    <slot />
  </component>
</template>
