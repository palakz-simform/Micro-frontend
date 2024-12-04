<template>
  <div
    v-if="items.length === 0"
    class="flex items-center justify-center bg-blue-100 w-full h-[100vh]"
  >
    <p class="text-4xl text-blue-700">Cart Is Empty</p>
  </div>
  <div v-else class="flex relative bg-blue-100 h-[100vh]">
    <Cart class="w-[60%]" />
    <div>
      <UserInfo />
      <OrderSummary class="absolute" />
    </div>
  </div>
</template>
<script setup>
import UserInfo from "user/UserInfo";
import Cart from "cart/Cart";
import OrderSummary from "cart/OrderSummary";

import { useCartStore } from "cart/CartStore";
const cartStore = useCartStore();
import { storeToRefs } from "pinia";
const { items } = storeToRefs(cartStore);
</script>
