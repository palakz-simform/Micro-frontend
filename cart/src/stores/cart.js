import { defineStore } from 'pinia';
export const useCartStore = defineStore('cart',{
    state: () => ({
        items: [],
      }),
      actions: {
        addToCart(pizza) {
            const existingItem = this.items.find((item) => item.id === pizza.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push(pizza);
            }
        },
        removeFromCart(id){
            this.items = this.items.filter(item => item.id!== id)
        },
        updateCart(products){
            this.items = products;
        }
    }
});
