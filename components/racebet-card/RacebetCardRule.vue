<script lang="ts" setup>
type Orientation = "horizontal" | "vertical";

interface Props {
  orientation?: Orientation;
}

const ORIENTATION_CLASS: Record<Orientation, string> = {
  horizontal: "h-px bg-white/20",
  vertical: "h-3 w-px bg-white/25",
};

const props = withDefaults(defineProps<Props>(), { orientation: "horizontal" });
</script>

<template>
  <div :class="ORIENTATION_CLASS[props.orientation]" />
</template>
