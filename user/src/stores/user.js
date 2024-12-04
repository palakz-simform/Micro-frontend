import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore("user", () => {
  const user = ref({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "9999999999",
    address: "123 Main St, Anytown, USA",
  });
  return { user };
});
