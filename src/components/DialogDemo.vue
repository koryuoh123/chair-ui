<template>
    <div class="demo-wrapper">
        <div>
            <h1>dialog文档</h1>
            <div><Button @click="visible = !visible">toogle</Button></div>
        </div>
        <Dialog v-model="visible" :before-close="beforeClose">
            <template #title>
                <h1>标题</h1>
            </template>
            <div>内容</div>
            <template #footer>
                <Button>取消</Button>
                <Button>确定</Button>
            </template>
        </Dialog>
        <div>
            <h1>实验性功能</h1>
            <Button @click="showDialog">showDialog</Button>
        </div>
    </div>




</template>
<script setup lang='ts'>
import Dialog from '@/lib/Dialog.vue';
import Button from '@/lib/Button.vue';
import { h, ref } from 'vue';
import { openDialog } from '@/lib/openDialog';

const visible = ref(false)

const beforeClose = () => {
    console.log('beforeClose')
    visible.value = false
}
// 实验性功能，使用showDialog函数直接打开对话框
const showDialog = () => {
    openDialog({
        title: () => h('h1', '标题'), // 可以是返回h函数来构造节点
        content: () => '内容', // 可以是返回h函数来构造节点
        footer: () => '底部', // 可以是返回h函数来构造节点
    })
}

</script>
<style lang='scss' scoped>
.demo-wrapper {
    width: 100%;
    border: 1px dashed red;
    display: flex;
    flex-direction: column;
}
</style>