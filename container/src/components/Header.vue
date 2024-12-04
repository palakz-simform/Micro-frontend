<template>
    <header class="bg-blue-500 text-white p-4 flex justify-between items-center">
        <router-link :to="{name: 'Dashboard'}">
            <h1 class="text-2xl font-bold">Pizza Shop</h1>
        </router-link>
        <div class="flex items-center space-x-4">
            <router-link :to="{name: 'User'}">
                <button class="text-white">
                    <i class="fas fa-user"></i>
                </button>
            </router-link>
            <router-link :to="{name: 'Cart'}">
                <CartIcon />
            </router-link>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import CartIcon from 'cart/CartIcon'
const pizzaInCart = ref(0)

document.addEventListener('AddToCart', (event) => {
  pizzaInCart.value++
});
document.addEventListener('RemoveFromCart', (event) => {
  pizzaInCart.value--
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
