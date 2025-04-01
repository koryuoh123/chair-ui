<template>
    <div class="markdown-body demo-wrapper ">
        <h2>大小</h2>
        <div class="demolist">
            <Button @click="clickEvent" @focus="focusEvent" size="small">Button</Button>
            <Button @click="clickEvent" @focus="focusEvent">Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" size="large">Button</Button>
        </div>
        <h2>主题</h2>
        <div class="demolist">
            <Button @click="clickEvent" @focus="focusEvent" theme="primary">Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" theme="success">Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" theme="warning">Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" theme="danger">Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" theme="info">Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" theme="info" color="red">Button</Button>
        </div>
        <h2>禁用</h2>
        <div class="demolist">
            <Button @click="clickEvent" @focus="focusEvent" disabled>Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" disabled theme="success">Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" disabled theme="warning">Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" disabled theme="danger">Button</Button>
        </div>
        <h2>加载中</h2>
        <div class="demolist">
            <Button @click="clickEvent" @focus="focusEvent" theme="primary" loading>Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" theme="success" loading>Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" theme="warning" loading>Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" theme="danger" loading>Button</Button>
            <Button @click="clickEvent" @focus="focusEvent" theme="info" loading>Button</Button>
        </div>
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

}
const focusEvent = () => {

}
</script>

<style scoped lang="scss">
.demolist {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    // justify-content: space-around;
    padding-left: 1em;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-thumb {
    background-color: #574A5B;
    border-radius: 10px;
    transition: all .2s ease-in-out;
}

.demo-wrapper {
    width: 100%;
    height: 100%;
    margin: 30px 12px 12px 12px;
    overflow: auto;



    h2 {
        color: var(--color-text-light-1);
        margin-bottom: 1em;
        text-indent: 1em;

    }
}
</style>