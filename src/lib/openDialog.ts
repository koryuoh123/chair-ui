import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'

export const openDialog = (options: any) => {
  const { title, content, footer } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const root = createApp({
    render() {
      return h(
        Dialog,
        {
          modelValue: true,
          'onUpdate:modelValue': (value: boolean) => {
            if (!value) {
              root.unmount()
            }
          },
        },
        {
          title,
          default: content,
          footer,
        },
      )
    },
  })
  root.mount(div)
}
