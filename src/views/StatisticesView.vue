<template>
  <div class="px-2 md:px-0 md:container py-10">
    <links />
    <statistics-table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Links from "../components/Statistics/Links.vue";
import StatisticsTable from "../components/Statistics/StatisticsTable.vue";

export default defineComponent({
  components: { Links, StatisticsTable },
  setup() {},
});
</script>