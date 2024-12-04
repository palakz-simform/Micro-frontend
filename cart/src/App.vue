<template>
  <div
    v-if="items.length === 0"
    class="flex items-center justify-center bg-blue-100 w-full h-[100vh]"
  >
    <p class="text-4xl text-blue-700">Cart Is Empty</p>
  </div>
  <div v-else class="flex relative bg-blue-100 h-[100vh]">
    <Cart class="w-[60%]" />
    <OrderSummary class="absolute bottom-[15%] left-[60%]" />
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart";
import Cart from "./components/Cart.vue";
import OrderSummary from "@/components/OrderSummary.vue";
const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);
</script>
