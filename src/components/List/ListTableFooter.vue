<template>
  <nav
    class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
    aria-label="Table navigation"
  >
    <span
      class="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto"
      >Showing <span class="font-semibold text-gray-400">1-10</span> of
      <span class="font-semibold text-gray-400">1000</span></span
    >
    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
      <li>
        <router-link
          :to="{ name: 'list', query: { page: previousPage } }"
          class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white border border-gray-300 rounded-s-lg hover:bg-teal-700 hover:text-gray-200 bg-teal-800"
          >Previous</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'list', query: { page: nextPage } }"
          class="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 rounded-e-lg hover:bg-teal-700 hover:text-gray-200 bg-teal-800"
          >Next</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();

    const currentPage = computed(() => {
      const page = Number(route.query.page);
      return isNaN(page) || page < 1 ? 1 : page;
    });

    const previousPage = computed(() =>
      currentPage.value > 1 ? currentPage.value - 1 : 1
    );
    const nextPage = computed(() => currentPage.value + 1);

    return { previousPage, nextPage };
  },
});
</script>
