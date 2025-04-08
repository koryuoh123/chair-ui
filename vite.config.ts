import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import path from 'path'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { demoPlugin } from './src/plugins/demo'
import { resolve } from 'node:path'

import type { UserConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    base: './',
    plugins: [
      vue(),
      demoPlugin(),
      // vueDevTools(),
      createSvgIconsPlugin({
        iconDirs: [
          path.resolve(process.cwd(), 'src/assets/svgs'),
          path.resolve(process.cwd(), 'src/lib/icons'),
        ], // SVG存放路径
        symbolId: 'icon-[dir]-[name]', // ID命名规则
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
  if (mode === 'lib') {
    config.build = {
      outDir: 'src/lib/dist',
      lib: {
        entry: resolve(__dirname, 'src/lib/main.ts'),
        name: 'chair-ui',
        // 将添加适当的扩展名后缀
        fileName: 'chair-ui',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖
          // 提供一个全局变量,不需要打包vue
          globals: {
            vue: 'Vue',
          },
        },
      },
    }
  }
  return config
})
