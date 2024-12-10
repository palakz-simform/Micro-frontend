<template>
  <button class="text-white flex items-center justify-center relative">
    <span
      class="absolute -top-[15px] -right-[15px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
      >{{ items.reduce((acc, curr) => acc + curr.quantity, 0) }}</span
    >
    <i class="fas fa-shopping-cart"></i>
  </button>
</template>
<script setup>
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);
window.addEventListener("addToCart", (event) => {
  cartStore.addToCart(event.detail);
});
window.addEventListener("removeFromCart", (event) => {
  cartStore.removeFromCart(event.detail);
});
</script>
