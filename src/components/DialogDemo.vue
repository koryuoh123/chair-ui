<template>
    <div class="demo-wrapper">
        <h1>dialog文档</h1>
        <div><button @click="visible = !visible">toogle</button></div>

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
</template>
<script setup lang='ts'>
import Dialog from '@/lib/Dialog.vue';
import Button from '@/lib/Button.vue';
import { ref } from 'vue';

const visible = ref(false)

const beforeClose = () => {
    console.log('beforeClose')
    visible.value = false
}

</script>
<style lang='scss' scoped>
.demo-wrapper {
    width: 100%;
    border: 1px dashed red;
}
</style>