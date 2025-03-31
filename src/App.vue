<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Chair from './components/Chair.vue'
import { onMounted, onUnmounted } from 'vue'
// 如果视口小于1024px，则设置html的font-size为100vw/1024*16
const handleResize = () => {
  const width = document.documentElement.clientWidth
  if (width < 1000) {
    if (width < 600) {
      document.documentElement.style.fontSize = `${width / 800 * 16}px`
    } else {

      document.documentElement.style.fontSize = `${width / 1024 * 16}px`
    }
  } else {
    document.documentElement.style.fontSize = '16px'
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped></style>
