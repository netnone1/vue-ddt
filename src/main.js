import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
app.use(ElementPlus)
import '@supermap/iclient3d-vue-for-webgl/lib/theme/index.css'
import webgl3d from "@supermap/iclient3d-vue-for-webgl"
app.use(webgl3d)  

const app = createApp(App)

app.use(router)

app.mount('#app')
