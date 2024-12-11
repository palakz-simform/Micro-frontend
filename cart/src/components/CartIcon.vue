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
import { onBeforeUnmount } from "vue";
import { storeToRefs } from "pinia";
import PubSub from "pubsub-js";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);
const addToCartSubscription = PubSub.subscribe("addToCart", (_, data) => {
  cartStore.addToCart(data);
});

const removeFromCartSubscription = PubSub.subscribe(
  "removeFromCart",
  (_, data) => {
    cartStore.removeFromCart(data);
  }
);

onBeforeUnmount(() => {
  PubSub.unsubscribe(addToCartSubscription);
  PubSub.unsubscribe(removeFromCartSubscription);
});
</script>
