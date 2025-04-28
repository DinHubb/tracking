import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline';
import TheTimeline from './pages/TheTimeline.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import type { Component } from 'vue';

export const PAGE_TIMELINE = 'timeline';
export const PAGE_ACTIVITIES = 'activities';
export const PAGE_PROGRESS = 'progress';
export const HOURS_IN_DAY = 24;

export type PageItem = {
  page: typeof TheTimeline | typeof TheActivities | typeof TheProgress;
  icon: Component;
};

export const NAV_CONFIG = {
  [PAGE_TIMELINE]: {
    page: TheTimeline,
    icon: ClockIcon,
  },
  [PAGE_ACTIVITIES]: {
    page: TheActivities,
    icon: ListBulletIcon,
  },
  [PAGE_PROGRESS]: {
    page: TheProgress,
    icon: ChartBarIcon,
  },
} as const;

export type PageKey = keyof typeof NAV_CONFIG;
