<script setup lang="ts">
import TimelineItem from '@/components/TimelineItem.vue';
import { generateTimelineItems } from '@/functions';

const timelineItems = generateTimelineItems();
</script>
<template>
  <div class="flex flex-col flex-1 overflow-y-auto">
    <ul class="mt-7">
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-items="timelineItem"
      />
    </ul>
  </div>
</template>
