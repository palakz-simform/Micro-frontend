<template>
  <div class="flex relative bg-blue-100 h-[100vh]">
    <Cart class="w-[60%]" />
    <div>
      <UserInfo />
      <OrderSummary class="absolute" />
    </div>
  </div>
</template>
<script setup>
import UserInfo from "user/UserInfo";
import Cart from "cart/Cart";
import OrderSummary from "cart/OrderSummary";
</script>
