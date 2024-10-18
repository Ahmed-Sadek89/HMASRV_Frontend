<template>
  <div class="flex flex-col items-center relative">
    <div class="w-full">
      <label
        class="block text-sm font-medium leading-6 text-gray-900"
        :for="label"
        >{{ label }}</label
      >
    </div>
    <!-- Emit the search term -->
    <drop-down-input
      :label="label"
      :isOpenMenu="isOpenMenu"
      v-model="selectedValue"
      :setIsOpenMenu="setIsOpenMenu"
      @search="searchTerm = $event"
    />
    <!-- Pass search term -->
    <drop-down-items
      :setUserId="setUserId"
      :isOpenMenu="isOpenMenu"
      :selectItem="selectItem"
      :searchTerm="searchTerm"
      :data="data"
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
    data: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    setUserId: {
      type: Function,
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

    const selectItem = (value: string) => {
      selectedValue.value = value;
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
