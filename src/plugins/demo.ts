import type { Plugin } from 'vite'
import { parse } from '@vue/compiler-sfc'
import fs from 'fs'

/**
 * 对于有<demo>块的组件，认为是一个提供展示源代码的文件，* demo块为标题，其他内容为源代码
 * 最后直接抛出一个立即执行函数的对象，不是组件
 */
export function demoPlugin(): Plugin {
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

      const title = demo?.content || ''
      let main = ''

      if (demo?.map?.sourcesContent) {
        main = demo?.map?.sourcesContent?.join('') || ''
        main = main.slice(main.indexOf('<template>'))
      }

      // 处理掉"demo"块的导入
      code = code.replace('import block0', '// import block0')

      // 找到正确的位置插入代码
      const nameIndex = code.indexOf('_name')
      if (nameIndex === -1) {
        return { code }
      }

      const beforeName = code.slice(0, nameIndex)
      const afterName = code.slice(nameIndex)

      const modifiedCode = `${beforeName}_sourceCode:${JSON.stringify(main)},__sourceCodeTitle:${JSON.stringify(title)},${afterName}`

      return {
        code: modifiedCode,
        map: null,
      }
    },
  }
}
