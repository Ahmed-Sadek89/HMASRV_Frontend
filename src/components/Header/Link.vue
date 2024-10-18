<template>
  <li>
    <router-link
      :to="{ name: name }"
      :class="[
        'hover:text-white capitalize transition duration-300 text-lg',
        isActive(path) ? 'text-white' : 'text-black',
      ]"
      >{{ name }}</router-link
    >
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup() {
    const route = useRoute();

    const isActive = (path: string) => route.path === path;
    return { isActive };
  },
});
</script>

<style scoped>
</style>