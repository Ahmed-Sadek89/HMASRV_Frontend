<template>
  <div class="relative h-screen">
    <Header />
    <section className="h-[calc(100vh-6rem)]">
      <router-view />
    </section>
  </div>
</template>


<script lang="ts" >
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import Header from "./components/Header/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const store = useStore();

    // Fetch data when the component is mounted
    onMounted(() => {
      store.dispatch("getAdminUsers");
      store.dispatch("getAssignedUsers");
    });
  },
});
</script>
