<script setup lang="ts">
import IconLogo from 'icons/IconLogo.vue'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const menuNav: menuNav = [
  {
    name: 'Timeline',
  },
  { name: 'Activities' },
  { name: 'Progress' },
]
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a href="#"><IconLogo /></a>
    <a href="#">
      <div v-if="false" class="flex items-center gap-1">
        <span> Day complete! </span>
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>Progress<span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>

  <main class="flex flex-col flex-1">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, cum? Officiis voluptatem nihil
    itaque earum tenetur soluta possimus ea natus cum debitis quos in nobis facilis consequatur,
    culpa, totam iste.
  </main>
  <nav class="sticky bottom-0 bg-white z-10 p-3">
    <ul class="">
      <li></li>
    </ul>
  </nav>
</template>
