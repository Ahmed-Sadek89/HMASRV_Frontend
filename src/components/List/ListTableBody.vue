<template>
  <tbody>
    <tr
      class="bg-teal-700 border-b border-gray-700 hover:bg-gray-50 hover:text-black"
      v-for="(item, index) in data"
      :key="index"
    >
      <td class="px-6 py-4">{{item["id"]}}</td>
      <td class="px-6 py-4">{{item["title"]}}</td>
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {{item["description"]}}
      </th>
      <td class="px-6 py-4"> {{item["admin_user"]}}</td>
      <td class="px-6 py-4">{{item["assigned_user"]}}</td>
      <td class="px-6 py-4">{{item["created_at"]}}</td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>