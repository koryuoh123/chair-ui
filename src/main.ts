import './lib/index.scss'
import './assets/main.css'
import 'github-markdown-css/github-markdown-dark.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register' // 自动注册所有SVG图标
import SvgIcon from '@/components/SvgIcon.vue'
import Markdown from '@/components/Markdown.vue'
import chairLoading from '@/directives/chair-loading'

import Button from '@/lib/Button.vue'
import Switch from '@/lib/Switch.vue'
import Dialog from '@/lib/Dialog.vue'
import Tabs from '@/lib/Tabs.vue'
import TabItem from '@/lib/TabItem.vue'
import Menu from '@/lib/Menu.vue'
import SubMenu from '@/lib/SubMenu.vue'
import MenuItem from '@/lib/MenuItem.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('SvgIcon', SvgIcon) // 全局注册组件，大小写要区分
app.component('Markdown', Markdown) // 全局注册组件，大小写要区分
app.directive('chair-loading', chairLoading) // 全局注册指令

app.component('ChairButton', Button)
app.component('ChairSwitch', Switch)
app.component('ChairDialog', Dialog)
app.component('ChairTabs', Tabs)
app.component('ChairTabItem', TabItem)
app.component('ChairMenu', Menu)
app.component('ChairSubMenu', SubMenu)
app.component('ChairMenuItem', MenuItem)

app.mount('#app')
