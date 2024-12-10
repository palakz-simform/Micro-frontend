<template>
  <div class="border-r-2 border-blue-400 p-4">
    <div
      v-if="items.length === 0"
      class="flex items-center justify-center bg-blue-100 h-[100vh]"
    >
      <p class="text-4xl text-blue-700">Cart Is Empty</p>
    </div>
    <div v-else class="flex flex-col gap-4 max-h-[90%] overflow-auto">
      <div
        class="p-4 bg-white mx-2 rounded-lg shadow-md flex flex-col gap-2"
        v-for="pizza in items"
        :key="pizza.id"
      >
        <h3 class="text-lg font-semibold">{{ pizza.name }}</h3>
        <p class="text-sm text-gray-600">Price: Rs. {{ pizza.price }}</p>
        <p class="text-sm text-gray-600">Quantity: {{ pizza.quantity }}</p>
        <p class="text-sm text-gray-600">
          Ingredients: {{ pizza.ingredients.join(", ") }}
        </p>
        <button
          @click="removeFromCart(pizza)"
          class="self-start mt-2 bg-red-500 hover:bg-red-600 text-white font-medium py-1.5 px-4 rounded"
        >
          Remove from cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);

const removeFromCart = (pizza) => {
  cartStore.removeFromCart(pizza.id);
  const event = new CustomEvent("removeFromCart", {
    detail: pizza.id,
  });
  window.dispatchEvent(event);
};
</script>
