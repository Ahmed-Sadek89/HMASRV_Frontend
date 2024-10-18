<template>
  <tbody>
    <tr
      class="bg-teal-700 border-b border-gray-700 hover:bg-gray-50 hover:text-black"
      v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
      :key="item"
    >
      <td class="px-6 py-4">Silver</td>
      <td class="px-6 py-4">Laptop</td>
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        Apple MacBook Pro 17" {{ item }}
      </th>
      <td class="px-6 py-4">$2999</td>
      <td class="px-6 py-4">Edit</td>
      <td class="px-6 py-4">11/12/2024</td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>