<script setup lang="ts">
import type { NavigateEmits } from '@/types/emits';
import IconLogo from './icons/IconLogo.vue';
import TheHeaderProgress from './TheHeaderProgress.vue';
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants';
import type { CurrentPageProps } from '@/types/props';

defineProps<CurrentPageProps>();
const emit = defineEmits<NavigateEmits>();
</script>
<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a :href="`#${PAGE_TIMELINE}`" @click="emit('navigate', PAGE_TIMELINE)"><IconLogo /></a>
    <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
  </header>
</template>
