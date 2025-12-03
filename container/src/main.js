import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index'
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)

// Make router globally available for microfrontends
window.vueRouter = router;
app.mount('#app')
