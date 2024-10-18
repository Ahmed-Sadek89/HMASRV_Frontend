<template>
  <div class="w-full flex items-end justify-end mb-5">
    <div class="flex items-center gap-5 flex-wrap">
      <router-link
        :to="{ name: 'home' }"
        :class="[
          'text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2 capitalize transition duration-300 text-sm',
        ]"
        >Create a new task</router-link
      >
      <router-link
        :to="{ name: 'list' }"
        :class="[
          'text-white bg-teal-700 hover:bg-teal-800 rounded-lg px-5 py-2 capitalize transition duration-300 text-sm',
        ]"
        >Show List</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>