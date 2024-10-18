<template>
  <div class="flex flex-col items-center relative">
    <div class="w-full">
      <label
        class="block text-sm font-medium leading-6 text-gray-900"
        :for="label"
        >{{label}}</label
      >
    </div>
    <!-- Emit the search term -->
    <drop-down-input
      :label="label"
      :name="name"
      :isOpenMenu="isOpenMenu"
      v-model="selectedValue"
      :setIsOpenMenu="setIsOpenMenu"
      @search="searchTerm = $event"
    />
    <!-- Pass search term -->
    <drop-down-items
      :isOpenMenu="isOpenMenu"
      :selectItem="selectItem"
      :searchTerm="searchTerm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DropDownInput from "./DropDownInput.vue";
import DropDownItems from "./DropDownItems.vue";

export default defineComponent({
  name: "DropDown",
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  components: {
    DropDownInput,
    DropDownItems,
  },
  setup() {
    const selectedValue = ref("");
    const isOpenMenu = ref(false);
    const searchTerm = ref("");

    const setIsOpenMenu = () => {
      isOpenMenu.value = !isOpenMenu.value;
    };

    const selectItem = (value: number) => {
      selectedValue.value = `Item ${value}`;
      isOpenMenu.value = false;
    };

    return {
      isOpenMenu,
      setIsOpenMenu,
      selectedValue,
      selectItem,
      searchTerm,
    };
  },
});
</script>
