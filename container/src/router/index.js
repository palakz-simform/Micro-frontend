import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/',
    name: 'User',
    component: () => import("../views/User.vue"),
  }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
  })
export default router