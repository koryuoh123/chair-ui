import type { App } from 'vue'
import './index.scss'
import 'virtual:svg-icons-register'

import chairLoading from '@/directives/chair-loading'

import Button from './Button.vue'
import Switch from './Switch.vue'
import Dialog from './Dialog.vue'
import Tabs from './Tabs.vue'
import TabItem from './TabItem.vue'
import Menu from './Menu.vue'
import SubMenu from './SubMenu.vue'
import MenuItem from './MenuItem.vue'

// 所有可用组件
const components = {
  Button,
  Switch,
  Dialog,
  Tabs,
  TabItem,
  Menu,
  SubMenu,
  MenuItem,
}

const install = (app: App, componentNames: string[] = []) => {
  // 如果没有指定组件，则注册所有组件
  const componentsToRegister =
    componentNames && componentNames.length > 0
      ? componentNames.map((name) => components[name as keyof typeof components])
      : Object.values(components)

  componentsToRegister.forEach((component) => {
    if (component) {
      app.component(component.name as string, component)
    }
  })

  app.directive('chair-loading', chairLoading) // 全局注册指令
}

export default install
