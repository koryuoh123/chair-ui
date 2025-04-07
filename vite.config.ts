import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import path from 'path'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { demoPlugin } from './src/plugins/demo'

// https://vite.dev/config/
export default defineConfig({
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
})
