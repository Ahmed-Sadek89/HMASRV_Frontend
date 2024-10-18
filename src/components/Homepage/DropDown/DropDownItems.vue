<template>
  <div
    :class="[
      'absolute shadow bg-white top-100 z-40 w-full left-0 rounded max-h-select overflow-y-auto',
      isOpenMenu ? 'block' : 'hidden',
    ]"
  >
    <div class="flex flex-col w-full">
      <!-- Filter items based on the search term -->
      <div
        v-for="item in filteredItems"
        :key="item"
        class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
        @click="selectItem(item)"
      >
        <div
          class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100"
        >
          <div class="w-full items-center flex">
            <div class="mx-2">Jack John {{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "DropDownItems",
  props: {
    isOpenMenu: {
      type: Boolean,
      required: true,
    },
    selectItem: {
      type: Function,
      required: true,
    },
    searchTerm: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const items = Array.from({ length: 10 }, (_, i) => i + 1);

    const filteredItems = computed(() => {
      return items.filter((item) =>
        `Jack John ${item}` // update it
          .toLowerCase()
          .includes(props.searchTerm.toLowerCase())
      );
    });

    return {
      filteredItems,
    };
  },
});
</script>
