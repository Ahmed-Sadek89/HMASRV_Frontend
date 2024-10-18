<template>
  <div class="relative overflow-x-auto sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
     <statistics-table-header />
      <statistics-table-body />
    </table>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
import StatisticsTableBody from "./StatisticsTableBody.vue";
import StatisticsTableHeader from "./StatisticsTableHeader.vue";

export default defineComponent({
  components: {
    StatisticsTableHeader,
    StatisticsTableBody
    
  },
  setup() {},
})
</script>
