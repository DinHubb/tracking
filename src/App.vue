<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheNav from './components/TheNav.vue';
import { computed, ref } from 'vue';

import { getNormalizePageHash } from './functions';
import { NAV_CONFIG } from './constants';
import type { PageKey } from './constants';

const currentPageHash = ref<PageKey>(getNormalizePageHash());
const currentPage = computed(() => NAV_CONFIG[currentPageHash.value].page);
</script>

<template>
  <TheHeader :current-page="currentPageHash" @navigate="currentPageHash = $event" />
  <main class="flex flex-col h-full flex-1 overflow-hidden">
    <component :is="currentPage" />
  </main>
  <TheNav :current-page="currentPageHash" @navigate="currentPageHash = $event" />
</template>
