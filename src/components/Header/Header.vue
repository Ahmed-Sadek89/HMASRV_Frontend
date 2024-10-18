
<template>
  <nav class="bg-white  dark:bg-teal-700">
    <div
      class="flex flex-wrap gap-y-5 items-center justify-between w-full py-7 px-3 sm:px-0 sm:container"
    >
      <router-link
        :to="{ name: 'home' }"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="../../assets/logo.png" class="h-8" alt="HMASRV Logo" />
        <span class="self-center text-xl font-semibold text-white"
          >HMASRV</span
        >
      </router-link>
      <div class="w-full block md:w-auto" id="navbar-default">
        <ul class="flex flex-wrap items-center gap-x-4">
          <Link name="home" path="/" />
          <Link name="list" path="/list" />
          <Link name="statistics" path="/statistics" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" >
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Link from "./Link.vue";

export default defineComponent({
  name: "Header",
  components: {
    Link,
  },
  setup() {
    const route = useRoute();

    const isActive = (path: string) => route.path === path;
    return { isActive };
  },
});
</script>