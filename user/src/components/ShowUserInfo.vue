<template>
  <div class="p-4 rounded-lg max-w-lg mx-auto">
    <h2 class="text-xl font-semibold mb-4">User Details</h2>
    <div class="space-y-4">
      <div>
        <p class="font-semibold text-gray-700">Name:</p>
        <p class="text-gray-600">{{ user.name }}</p>
      </div>
      <div>
        <p class="font-semibold text-gray-700">Address:</p>
        <p class="text-gray-600">{{ user.address }}</p>
      </div>
      <div>
        <p class="font-semibold text-gray-700">Phone:</p>
        <p class="text-gray-600">{{ user.phone }}</p>
      </div>
      <div>
        <p class="font-semibold text-gray-700">Email:</p>
        <p class="text-gray-600">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user.js";
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>
