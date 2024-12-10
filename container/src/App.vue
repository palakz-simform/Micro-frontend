<template>
  <Header />
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>
