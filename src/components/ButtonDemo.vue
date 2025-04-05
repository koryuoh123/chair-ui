<template>
    <div class="markdown-body demo-wrapper ">
        <Markdown>{{ `# Button 按钮\n<p>常用的操作按钮</p>` }}
        </Markdown>
        <div>
            <Demo :component="sizeDemo" />
        </div>
        <div>
            <Demo :component="themeDemo" />
        </div>
        <div>
            <Demo :component="disabledDemo" />
        </div>
        <div>
            <Demo :component="loadingDemo" />
        </div>
    </div>
</template>

<script setup lang="ts">

import Demo from '@/components/Demo.vue'
import sizeDemo from '@/views/doc/Button/sizeDemo.vue'
import themeDemo from '@/views/doc/Button/themeDemo.vue'
import disabledDemo from '@/views/doc/Button/disabledDemo.vue'
import loadingDemo from '@/views/doc/Button/loadingDemo.vue'


</script>

<style scoped lang="scss">
@use '@/views/doc/demoDoc.scss';
</style>