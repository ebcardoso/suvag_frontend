import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// Instance of pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// Mounting the app
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
