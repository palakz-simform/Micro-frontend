<template>
  <div class="mt-4 p-4 w-[40%]">
    <div class="relative">
      <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
      <div class="px-8">
        <div class="flex justify-between text-md">
          <p>Total MRP:</p>
          <p>Rs. {{ total }}</p>
        </div>
        <div class="flex justify-between text-md">
          <p>Discount on MRP:</p>
          <p>- Rs. 100</p>
        </div>
        <div class="flex justify-between text-md">
          <p>Platform Fee:</p>
          <p>Rs. 20</p>
        </div>
        <div class="flex justify-between text-md">
          <p>Shipping Fee:</p>
          <p>Rs. 50</p>
        </div>
        <div
          class="flex justify-between text-lg font-bold border-t-2 border-blue-400 my-2 py-2"
        >
          <p>Total Amount:</p>
          <p>Rs. {{ total + 20 + 50 }}</p>
        </div>
      </div>
      <button
        class="absolute right-5 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Place order
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);

const total = computed(() =>
  items.value.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
);
</script>
