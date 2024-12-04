<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50"
  >
    <div
      class="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg max-w-md w-full"
    >
      <h2 class="text-3xl font-extrabold text-gray-900 mb-4">
        User Information
      </h2>
      <form class="w-full">
        <div class="mb-5">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name:</label
          >
          <input
            v-model="user.name"
            type="text"
            id="name"
            class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition duration-300 ease-in-out hover:ring-2 hover:ring-indigo-400"
            placeholder="John Doe"
          />
        </div>
        <div class="mb-5">
          <label for="address" class="block text-sm font-medium text-gray-700"
            >Address:</label
          >
          <textarea
            v-model="user.address"
            id="address"
            class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition duration-300 ease-in-out hover:ring-2 hover:ring-indigo-400"
            placeholder="123 Street, City, State, ZIP"
          ></textarea>
        </div>
        <div class="mb-5">
          <label for="phone" class="block text-sm font-medium text-gray-700"
            >Phone:</label
          >
          <input
            v-model="user.phone"
            type="text"
            id="phone"
            class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition duration-300 ease-in-out hover:ring-2 hover:ring-indigo-400"
            placeholder="123-456-7890"
          />
        </div>
        <div class="mb-5">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email:</label
          >
          <input
            v-model="user.email"
            type="email"
            id="email"
            class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 transition duration-300 ease-in-out hover:ring-2 hover:ring-indigo-400"
            placeholder="john.doe@example.com"
          />
        </div>
        <button
          @click="(e) => e.preventDefault()"
          class="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user.js";
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>
