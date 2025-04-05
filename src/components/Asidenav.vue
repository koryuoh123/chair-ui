<template>
    <div class="asidenav">
        <div>
            <RouterLink to="/home">
                <h2>Home 首页</h2>
            </RouterLink>
        </div>
        <div>
            <RouterLink to="/guide">
                <h2>Guide 指南</h2>
            </RouterLink>
        </div>
        <div>
            <h2>Components 组件</h2>
        </div>
        <div>
            <RouterLink to="/components/button">button 按钮</RouterLink>
        </div>
        <div>

            <RouterLink to="/components/switch">switch 开关</RouterLink>
        </div>
        <div>

            <RouterLink to="/components/dialog">dialog 对话框</RouterLink>
        </div>
        <div>

            <RouterLink to="/components/tabs">tabs 标签页</RouterLink>
        </div>
        <div>

            <RouterLink to="/components/menu">menu 菜单</RouterLink>
        </div>
    </div>
    <div class="mask" v-if="asideVisible" @click="toggleAsideVisible"></div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, inject } from 'vue'
import { RouterLink } from 'vue-router'
import router from '@/router/index'

const asideVisible = inject<Ref<boolean>>('asideVisible', ref(false))

const toggleAsideVisible = () => {
    asideVisible.value = false
}

router.afterEach(() => {
    const width = document.documentElement.clientWidth
    if (width <= 500) {
        asideVisible.value = false
    }
})
</script>

<style scoped lang="scss">
.asidenav {
    width: 200px;
    height: 100%;
    color: var(--color-text-light-1);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background-color: var(--color-bg-dark-dialog);
    border-right: 1px solid #2B283E;
    padding: 16px;

    a {
        color: inherit;
        text-decoration: none;
        font-size: 16px;
        width: 100%;
        height: 100%;
        display: block;


        &:hover {
            color: var(--color-text-light-2);
        }
    }

    .router-link-active {
        color: var(--color-text-primary);
    }

    h2 {
        color: inherit;
        font-weight: bold;
        font-size: 18px;
        // cursor: pointer;

        // &:hover {
        //     color: var(--color-text-light-2);
        // }
    }

    div {
        padding: 6px 0;
        width: 100%;
    }
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0009;

    display: none;
}

@media (max-width:500px) {
    .asidenav {
        position: fixed;
        left: 0;
        top: 50px;
        z-index: 999;
    }

    .mask {
        display: inline-block;
        z-index: 998;
    }
}
</style>