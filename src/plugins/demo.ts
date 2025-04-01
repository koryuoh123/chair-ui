import type { Plugin } from 'vite'
import { parse } from '@vue/compiler-sfc'
import fs from 'fs'

/**
 * 对于有<demo>块的组件，认为是一个提供展示源代码的文件，* demo块为标题，其他内容为源代码
 * 最后直接抛出一个立即执行函数的对象，不是组件
 */
export function demoPlugin(): Plugin {
  let title = ''
  let main = ''
  return {
    name: 'vite-plugin-demo',
    transform(code, id) {
      if (!id.endsWith('.vue')) return null
      const file = fs.readFileSync(id, 'utf-8')
      const { descriptor } = parse(file)
      const demo = descriptor.customBlocks.find((block) => block.type === 'demo')
      if (!demo) {
        return null
      }
      title = demo?.content || ''
      if (demo?.map?.sourcesContent) {
        // demo?.map?.sourcesContent.splice(0, 1)
        main = demo?.map?.sourcesContent?.join('') || ''
        main = main.slice(main.indexOf('<template>'), main.length + 1)
      }
      // console.log(main)
      // 处理掉"demo"块,不解析
      code = code.replace('import block0', '// import block0')

      code =
        code.slice(0, code.indexOf('_name')) +
        `_sourceCode:${JSON.stringify(main)},__sourceCodeTitle:${JSON.stringify(title)},` +
        code.slice(code.indexOf('_name'), code.length + 1)

      return {
        code,
      }
    },
  }
}
