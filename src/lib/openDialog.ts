import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'

export const openDialog = (options: any) => {
  const { title, content, footer } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  // 创建一个vue的根实例
  const app = createApp({
    render() {
      // 创建一个Dialog组件
      return h(
        Dialog,
        {
          modelValue: true, // v-model
          'onUpdate:modelValue': (value: boolean) => {
            if (!value) {
              app.unmount()
              document.body.removeChild(div)
            }
          }, // v-model更新事件
          // 还有props，比如onClickOverlay,beforeClose等等
        },
        // 插槽
        {
          title,
          default: content,
          footer,
        },
      )
    },
  })
  // 挂载到div上
  app.mount(div)
}
