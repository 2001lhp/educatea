import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/main.scss'
import pinia from './stores'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(pinia).use(router).mount('#app')
