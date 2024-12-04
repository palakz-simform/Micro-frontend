<template>
    <RemoteUser />
</template>
<script setup>
  import { defineAsyncComponent } from 'vue';
  const RemoteUser = defineAsyncComponent(() =>
    import('user/User')
  );
</script>