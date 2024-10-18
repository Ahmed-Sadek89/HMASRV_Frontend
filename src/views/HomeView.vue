<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <homepage-logo />
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" method="POST" @submit="handleSubmit">
        <drop-down
          label="Admin name"
          :data="adminUser"
          :setUserId="setAdminId"
        />
        <title-input />
        <description-input />
        <drop-down
          label="Assigned User"
          :data="assignedUser"
          :setUserId="setAssignedId"
        />
        <submit-btn />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import HomepageLogo from "../components/Homepage/HomepageLogo.vue";
import DropDown from "../components/Homepage/DropDown/DropDown.vue";
import TitleInput from "../components/Homepage/TitleInput.vue";
import DescriptionInput from "../components/Homepage/DescriptionInput.vue";
import SubmitBtn from "../components/Homepage/SubmitBtn.vue";
import { useStore } from "vuex";
import axios from "axios";
import { BASE_URL } from "../assets/env";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    HomepageLogo,
    DropDown,
    TitleInput,
    DescriptionInput,
    SubmitBtn,
  },
  setup() {
    const router = useRouter()
    const { state,dispatch } = useStore();

    const adminUser = computed(() => {
      return state.adminUserState;
    });
    const assignedUser = computed(() => {
      return state.assignedUserState;
    });

    const admin_id = ref(null);
    const assigned_id = ref(null);

    const setAdminId = (value: number) => (admin_id.value = value);
    const setAssignedId = (value: number) => (assigned_id.value = value);

    const handleSubmit = async (e: HTMLFormElement) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      formData.append("created_by", admin_id.value);
      formData.append("assigned_to", assigned_id.value);

      try {
        await axios.post(`${BASE_URL}/task`, formData)
        .then(res => {
          if (res.status === 201) {
            router.push('/list')
          }
        })
      } catch (error) {
        console.error("Failed to submit the form:", error);
      }
    };
    return { setAdminId, setAssignedId, handleSubmit, adminUser, assignedUser };
  },
});
</script>