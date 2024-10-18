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
        v-for="(item, index) in filteredItems"
        :key="index"
        class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
        @click="[selectItem(item['username']), setUserId(item['id'])]"
      >
        <div
          class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100"
        >
          <div class="w-full items-center flex">
            <div class="mx-2">{{ item["username"] }}</div>
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
    data: {
      type: Object,
      required: true,
    },
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
    setUserId: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const items = computed(() => props.data);
    const filteredItems = computed(() => {
      return items.value.data.slice(0, 100).filter((item) =>
        item.username
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
