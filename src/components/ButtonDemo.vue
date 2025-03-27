<template>
    <h2>大小</h2>
    <div class="demolist">
        <Button @click="clickEvent" @focus="focusEvent" size="small">你好</Button>
        <Button @click="clickEvent" @focus="focusEvent">你好</Button>
        <Button @click="clickEvent" @focus="focusEvent" size="large">你好</Button>
    </div>
    <h2>主题</h2>
    <div class="demolist">
        <Button @click="clickEvent" @focus="focusEvent">你好</Button>
        <Button @click="clickEvent" @focus="focusEvent" theme="primary">你好</Button>
        <Button @click="clickEvent" @focus="focusEvent" theme="danger">你好</Button>
    </div>
    <h2>禁用</h2>
    <div class="demolist">
        <Button @click="clickEvent" @focus="focusEvent" disabled>你好</Button>
    </div>
    <h2>loading</h2>
    <div class="demolist">
        <Button @click="clickEvent" @focus="focusEvent" loading>你好</Button>
    </div>
</template>

<script setup lang="ts">
import Button from '@/lib/Button.vue';
import { ref } from 'vue';
/**
 * click
 * focus
 * theme 主题
 * size 大小
 */
const clickEvent = () => {
    console.log('click');
}
const focusEvent = () => {
    console.log('focus');
}
</script>

<style scoped lang="scss">
.demolist {
    display: flex;
    justify-content: space-around;
}
</style>