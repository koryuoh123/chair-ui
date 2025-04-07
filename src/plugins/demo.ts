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

      // 直接从文件中提取template部分
      const templateStart = file.indexOf('<template>')
      const templateEnd = file.lastIndexOf('</template>') + '</template>'.length
      if (templateStart !== -1 && templateEnd !== -1) {
        main = file.slice(templateStart, templateEnd)
      }

      // 处理掉"demo"块的导入
      code = code.replace('import block0', '// import block0')

      // 在导出前插入代码
      const exportIndex = code.indexOf('export default')
      if (exportIndex === -1) {
        return { code }
      }

      const beforeExport = code.slice(0, exportIndex)
      const afterExport = code.slice(exportIndex)

      const modifiedCode = `${beforeExport}_sfc_main.__sourceCode = ${JSON.stringify(main)};\n_sfc_main.__sourceCodeTitle = ${JSON.stringify(title)};\n${afterExport}`

      return {
        code: modifiedCode,
      }
    },
  }
}
