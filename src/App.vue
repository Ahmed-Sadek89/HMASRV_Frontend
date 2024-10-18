<template>
  <div class="relative h-screen">
    <Header />
    <section className="h-[calc(100vh-6rem)]">
      <router-view />
    </section>
  </div>
</template>


<script lang="ts" setup>
import Header from "./components/Header/Header.vue"
</script>
