<script lang="ts" setup>
interface Props {
  country: string;
}

const props = defineProps<Props>();
</script>

<template>
  <svg
    v-if="props.country === 'GB'"
    class="rounded-[1px]"
    viewBox="0 0 60 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="60" height="30" fill="#012169" />
    <path d="M0 0 60 30M60 0 0 30" stroke="#ffffff" stroke-width="6" />
    <path d="M0 0 60 30M60 0 0 30" stroke="#c8102e" stroke-width="3" />
    <path d="M30 0v30M0 15h60" stroke="#ffffff" stroke-width="10" />
    <path d="M30 0v30M0 15h60" stroke="#c8102e" stroke-width="6" />
  </svg>

  <svg
    v-else-if="props.country === 'IE'"
    class="rounded-[1px]"
    viewBox="0 0 60 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="60" height="30" fill="#ffffff" />
    <rect width="20" height="30" fill="#169b62" />
    <rect x="40" width="20" height="30" fill="#ff883e" />
  </svg>

  <span
    v-else
    class="inline-flex items-center justify-center rounded-[1px] bg-gray-400 text-[8px] font-bold uppercase text-white"
  >
    {{ props.country }}
  </span>
</template>
