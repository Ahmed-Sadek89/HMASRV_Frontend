<template>
  <div
    class="mt-2 w-full bg-white flex border border-gray-200 rounded"
    @click="setIsOpenMenu()"
  >
    <input
      :id="label"
      required
      class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
      v-model="inputValue"
      @input="emitSearch"
    />
    <div
      class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
    >
      <button
        :class="[
          'cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none flex items-center justify-center',
          isOpenMenu ? 'rotate-180' : 'rotate-0',
        ]"
        type="button"
      >
        <search-icon />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import SearchIcon from "./SearchIcon.vue";

export default defineComponent({
  name: "DropDownInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    setIsOpenMenu: {
      type: Function,
      required: true,
    },
    isOpenMenu: {
      type: Boolean,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  components: {
    SearchIcon
  },
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      },
    });

    const emitSearch = () => {
      emit("search", inputValue.value);
    };

    return {
      inputValue,
      emitSearch,
    };
  },
});
</script>
