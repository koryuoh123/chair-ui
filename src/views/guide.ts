const guide = `import { createApp } from 'vue'
import App from './App.vue'

// 引入样式
import "chair-ui/style.css"

const app = createApp(App)

// 全量引入组件
import chairUi from "chair-ui"
app.use(chairUi)

/*
 *按需引入组件，注意大小写。
 * Button,Switch,Dialog,Tabs,TabItem,Menu,SubMenu,MenuItem
 */ 

// app.use(chairUi, ['Button'])

app.mount('#app')
`

export default guide
