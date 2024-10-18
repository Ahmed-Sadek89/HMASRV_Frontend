<template>
  <div class="px-2 md:px-0 md:container py-10">
    <links />
    <list-table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Links from "../components/List/Links.vue";
import ListTable from "../components/List/ListTable.vue";

export default defineComponent({
  components: { Links, ListTable },
  setup() {
    return {};
  },
});
</script>