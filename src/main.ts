import './lib/index.scss'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register' // 自动注册所有SVG图标
import SvgIcon from '@/components/SvgIcon.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('SvgIcon', SvgIcon) // 全局注册组件，大小写要区分

app.mount('#app')
