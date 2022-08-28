<script setup>
import { RouterLink, RouterView } from "vue-router";

import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />

  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 1s ease-in-out;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
