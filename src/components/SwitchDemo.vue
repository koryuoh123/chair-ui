<template>
    <div class="markdown-body demo-wrapper ">
        <Markdown>{{ `# Switch 开关\n<p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>` }}
        </Markdown>
        <div>
            <Demo :component="sizeDemo" />
        </div>
        <div>
            <Demo :component="themeDemo" />
        </div>
        <div>
            <Demo :component="textDemo" />
        </div>
        <div>
            <Demo :component="iconDemo" />
        </div>
        <div>
            <Demo :component="disabledDemo" />
        </div>
        <div>
            <Demo :component="loadingDemo" />
        </div>
        <div>
            <Demo :component="stopDemo" />
        </div>
    </div>
</template>

<script setup lang="ts">

import Demo from '@/components/Demo.vue'
import textDemo from '@/views/doc/Switch/textDemo.vue'
import themeDemo from '@/views/doc/Switch/themeDemo.vue'
import sizeDemo from '@/views/doc/Switch/sizeDemo.vue'
import iconDemo from '@/views/doc/Switch/iconDemo.vue'
import disabledDemo from '@/views/doc/Switch/disabledDemo.vue'
import loadingDemo from '@/views/doc/Switch/loadingDemo.vue'
import stopDemo from '@/views/doc/Switch/stopDemo.vue'
</script>

<style scoped lang="scss">
@use '@/views/doc/demoDoc.scss';
</style>