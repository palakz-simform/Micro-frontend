import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useCartStore = defineStore('cart',() =>{
    const items = ref([])
    const addToCart = (pizza)  => {
        const existingItem = items.value.find((item) => item.id === pizza.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            items.value.push(pizza);
        }
    }
    const removeFromCart = (id) => {
        items.value = items.value.filter(item => item.id!== id)
    }

    return {items, addToCart, removeFromCart}
});
