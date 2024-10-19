<template>
  <div class="relative overflow-x-auto sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <list-table-header />
      <list-table-body :data="data" />
    </table>
    <list-table-footer :total="total" />
  </div>
</template>

<script  lang="ts">
import { computed, defineComponent } from "vue";
import ListTableHeader from "./ListTableHeader.vue";
import ListTableBody from "./ListTableBody.vue";
import ListTableFooter from "./ListTableFooter.vue";

export default defineComponent({
  components: {
    ListTableHeader,
    ListTableBody,
    ListTableFooter,
  },
  props: {
    tasks: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const data = computed(() => {
      return props.tasks.data;
    });
    const total = computed(() => {
      return props.tasks.total;
    });
    console.log({ total: total.value });
    return {
      data,
      total
    };
  },
});
</script>
