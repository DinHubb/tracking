import type { Component } from 'vue';

export interface MenuNav {
  timeline: Component;
  activities: Component;
  progress: Component;
}

export interface Timeline {
  hour: number;
}
