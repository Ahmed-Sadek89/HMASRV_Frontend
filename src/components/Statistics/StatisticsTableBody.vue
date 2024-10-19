<template>
  <tbody>
    <tr
      class="bg-teal-700 border-b border-gray-700 hover:bg-gray-50 hover:text-black"
      v-for="(user, index) in topAssigned"
      :key="index"
    >
      <td class="px-6 py-4 text-center">{{ user["username"] }}</td>
      <th
        class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap"
      >
        {{ user["number_of_tasks"] }}
      </th>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const { state } = useStore();

    const topAssigned = computed(() => {
      return state.toAssignedUserState?.data;
    });
    return { topAssigned };
  },
});
</script>