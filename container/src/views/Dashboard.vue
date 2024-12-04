<template>
  <RemoteDashboard />
</template>
<script setup>
import { defineAsyncComponent } from "vue";
const RemoteDashboard = defineAsyncComponent(() =>
  import("dashboard/Dashboard")
);
</script>
