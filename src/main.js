import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css' // CSS global

createApp(App).use(router).mount('#app')
