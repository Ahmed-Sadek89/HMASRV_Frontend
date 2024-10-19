<template>
  <div class="px-2 md:px-0 md:container py-10">
    <links />
    <list-table :tasks="tasks" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Links from "../components/List/Links.vue";
import ListTable from "../components/List/ListTable.vue";

export default defineComponent({
  components: { Links, ListTable },
  setup() {
    const { state } = useStore();

    const tasks = computed(() => {
      return state.taskState?.data;
    });

    return { tasks };
  },
});
</script>