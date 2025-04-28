<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<template>
  <li class="w-full">
    <a
      v-bind="$attrs"
      class="flex items-center flex-col gap-2 p-2 hover:bg-gray-100 rounded text-xs capitalize"
    >
      <slot></slot>
    </a>
  </li>
</template>
