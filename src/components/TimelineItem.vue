<script setup lang="ts">
import type { Timeline } from '@/types/type';

const props = defineProps<{
  timelineItems: Timeline;
}>();
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <a
      href="#"
      :class="[
        'absolute -top-4 left-1/2 -translate-x-1/2  px-2 font-mono text-lg rounded',
        props.timelineItems.hour === new Date().getHours()
          ? 'bg-purple-900 font-medium text-white'
          : 'bg-gray-100 text-gray-500',
      ]"
    >
      {{ timelineItems.hour }} : 00
    </a>
  </li>
</template>
