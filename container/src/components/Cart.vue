<template>
    <RemoteCart />
</template>
<script setup>
  import { defineAsyncComponent } from 'vue';
  const RemoteCart = defineAsyncComponent(() =>
    import('cart/Cart')
  );
</script>