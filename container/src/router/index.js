import { createRouter, createWebHistory } from 'vue-router'
// import Dashboard from "../views/Dashboard.vue"
// import Cart from "../views/Cart.vue"
// import User from "../views/User.vue"
const routes = [{
    path: '/',
    name: 'Dashboard',
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import("../views/Cart.vue"),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import("../views/User.vue"),
  }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
  })
export default router