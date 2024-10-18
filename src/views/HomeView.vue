<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <homepage-logo />
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" method="POST" @submit="handleSubmit">
        <drop-down label="Admin name" name="created_by" />
        <title-input />
        <description-input />
        <drop-down label="Assigned User" name="assigned_to" />
        <submit-btn />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomepageLogo from "../components/Homepage/HomepageLogo.vue";
import DropDown from "../components/Homepage/DropDown/DropDown.vue";
import TitleInput from "../components/Homepage/TitleInput.vue";
import DescriptionInput from "../components/Homepage/DescriptionInput.vue";
import SubmitBtn from "../components/Homepage/SubmitBtn.vue";

export default defineComponent({
  components: {
    HomepageLogo,
    DropDown,
    TitleInput,
    DescriptionInput,
    SubmitBtn,
  },
  setup() {
    const handleSubmit = (e: HTMLFormElement) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const created_by = formData.get("created_by");
      const title = formData.get("title");
      const description = formData.get("description");
      const assigned_to = formData.get("assigned_to");

      console.log({ created_by, title, description, assigned_to });
    };
    return { handleSubmit };
  },
});
</script>