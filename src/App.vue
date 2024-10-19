<template>
  <div class="relative h-screen">
    <Header />
    <section className="h-[calc(100vh-6rem)]">
      <router-view />
    </section>
  </div>
</template>


<script lang="ts" >
import { defineComponent, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Header from "./components/Header/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    // Fetch data when the component is mounted
    onMounted(() => {
      store.dispatch("getAdminUsers");
      store.dispatch("getAssignedUsers");
      store.dispatch("getTopAssignedUsers");
    });
    watch(
      () => route.query.page,
      (newPage) => {
        const page = Number(newPage) || 1;
        store.dispatch("getTasks", page);
      }
    );
  },
});
</script>
