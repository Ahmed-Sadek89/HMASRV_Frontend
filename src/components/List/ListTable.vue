<template>
  <div class="relative overflow-x-auto sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
     <list-table-header />
      <list-table-body />
    </table>
    <list-table-footer />
  </div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
import ListTableHeader from "./ListTableHeader.vue";
import ListTableBody from "./ListTableBody.vue";
import ListTableFooter from "./ListTableFooter.vue";

export default defineComponent({
  components: {
    ListTableHeader,
    ListTableBody,
    ListTableFooter,
  },
  setup() {},
})
</script>
