<template>
  <div>
    <label for="Title" class="block text-sm font-medium leading-6 text-gray-900"
      >Title</label
    >
    <div class="mt-2">
      <input
        id="Title"
        name="title"
        type="text"
        required
        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleInput",
  setup() {
    return {};
  },
});
</script>
