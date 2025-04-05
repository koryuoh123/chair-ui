<template>
    <div class="markdown-body demo-wrapper ">
        <Markdown>{{ `# Menu 菜单\n<p>为网站提供导航功能的菜单。</p>` }}
        </Markdown>
        <div>
            <Demo :component="basicDemo" />
        </div>
    </div>


</template>
<script setup lang='ts'>

import { onMounted, ref } from 'vue'
import Demo from '@/components/Demo.vue'
import basicDemo from '@/views/doc/Menu/basicDemo.vue'
onMounted(() => {

})
</script>
<style lang='scss' scoped>
@use '@/views/doc/demoDoc.scss'
</style>