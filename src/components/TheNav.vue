<script setup lang="ts">
import { NAV_CONFIG } from '@/constants';
import NavItem from './NavItem.vue';
import type { NavigateEmits } from '@/types/emits';
import type { CurrentPageProps } from '@/types/props';

defineProps<CurrentPageProps>();
const emit = defineEmits<NavigateEmits>();
</script>
<template>
  <nav class="sticky bottom-0 bg-white z-10 border-t">
    <ul class="flex items-center">
      <NavItem
        v-for="(item, page) in NAV_CONFIG"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-slate-200': currentPage === page }"
        @click="emit('navigate', page)"
      >
        <component :is="item.icon" class="w-6 h-6" />
        <span>{{ page }}</span>
      </NavItem>
    </ul>
  </nav>
</template>
