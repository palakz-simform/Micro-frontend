<template>
    <div class="bg-blue-50 min-h-screen py-8">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            class="p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between"
            v-for="pizza in pizzaList"
            :key="pizza.id"
          >
            <div>
              <h3 class="text-xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-100 pb-2">
                {{ pizza.name }}
              </h3>
              <p class="text-gray-700 mb-2">Price: <span class="font-bold">Rs. {{ pizza.price }}</span></p>
              <p class="text-sm text-gray-600 mb-4">Ingredients: {{ pizza.ingredients.join(", ") }}</p>
            </div>
            <div class="flex items-center justify-between mt-4">
              <button
                v-if="!isInCart(pizza)"
                @click="addToCart(pizza)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Add to Cart
              </button>
              <div v-else class="flex items-center">
                <button
                  @click="decreaseQuantity(pizza)"
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  -
                </button>
                <span class="mx-4 text-gray-800 font-semibold">{{ getQuantity(pizza) }}</span>
                <button
                  @click="addToCart(pizza)"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "cart/CartStore";
const cartStore = useCartStore();
import {storeToRefs} from 'pinia'
const {items} = storeToRefs(cartStore)
const pizzaList = ref([
  {
    id: 1,
    name: "Margherita",
    price: 120.00,
    ingredients: ["Tomato sauce", "Mozzarella", "Fresh basil"],
  },
  {
    id: 2,
    name: "Pepperoni",
    price: 140.00,
    ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni"],
  },
  {
    id: 3,
    name: "Hawaiian",
    price: 130.00,
    ingredients: ["Tomato sauce", "Mozzarella", "Ham", "Pineapple"],
  },
  {
    id: 4,
    name: "Paneer Lover's",
    price: 160.00,
    ingredients: ["Tomato sauce", "Mozzarella", "Paneer"],
  },
  {
    id: 5,
    name: "Veggie",
    price: 130.00,
    ingredients: [
      "Tomato sauce",
      "Mozzarella",
      "Mushrooms",
      "Onions",
      "Bell peppers",
    ],
  },
  {
    id: 6,
    name: "Roasted Veggie",
    price: 140.00,
    ingredients: [
      "Tomato sauce",
      "Mozzarella",
      "Roasted eggplant",
      "Roasted zucchini",
      "Red bell pepper",
    ],
  },
  {
    id: 7,
    name: "Mushroom Truffle",
    price: 150.99,
    ingredients: [
      "Truffle oil",
      "Mozzarella",
      "Sauteed mushrooms",
      "Fresh thyme",
    ],
  },
  {
    id: 8,
    name: "Artichoke Delight",
    price: 140.00,
    ingredients: [
      "Tomato sauce",
      "Mozzarella",
      "Artichoke hearts",
      "Spinach",
      "Feta cheese",
    ],
  },
]);

const addToCart = (pizza) => {
  cartStore.addToCart({
    ...pizza,
    quantity: 1,
  });
};

const decreaseQuantity = (pizza) => {
  const existingItem = items.value.find((item) => item.id === pizza.id);
  if (existingItem && existingItem.quantity > 1) {
    existingItem.quantity--;
  } else {
    removeFromCart(pizza);
  }
};

const removeFromCart = (pizza) => {
  cartStore.removeFromCart(pizza.id);
};

const isInCart = (pizza) => {
  return items.value.some((item) => item.id === pizza.id);
};

const getQuantity = (pizza) => {
  const item = items.value.find((item) => item.id === pizza.id);
  return item ? item.quantity : 0;
};
</script>
