<template>
    <div class="markdown-body demo-wrapper ">
        <Markdown>{{ `# Dialog 对话框\n<p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>` }}
        </Markdown>
        <div>
            <Demo :component="basicDemo" />
        </div>
        <div>
            <Demo :component="headerDemo" />
        </div>
        <div>
            <Demo :component="nestDemo" />
        </div>
    </div>
</template>
<script setup lang='ts'>
import Dialog from '@/lib/Dialog.vue';
import Button from '@/lib/Button.vue';
import { h, ref } from 'vue';
import { openDialog } from '@/lib/openDialog';
import Demo from '@/components/Demo.vue';
import basicDemo from '@/views/doc/Dialog/basicDemo.vue';
import headerDemo from '@/views/doc/Dialog/headerDemo.vue';
import nestDemo from '@/views/doc/Dialog/nestDemo.vue';
// 实验性功能，使用showDialog函数直接打开对话框
// const showDialog = () => {
//     openDialog({
//         title: () => h('h1', '标题'), // 可以是返回h函数来构造节点
//         content: () => '内容', // 可以是返回h函数来构造节点
//         footer: () => '底部', // 可以是返回h函数来构造节点
//     })
// }

</script>
<style lang='scss' scoped>
@use '@/views/doc/demoDoc.scss' as *;
</style>