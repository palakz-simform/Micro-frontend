<template>
  <div class="flex relative bg-blue-100 h-[100vh]">
    <Cart class="w-[60%]" />
    <OrderSummary class="absolute bottom-[15%] left-[60%]" />
  </div>
</template>
<script setup>
import Cart from "./components/Cart.vue";
import OrderSummary from "@/components/OrderSummary.vue";
</script>
