<template>
    <Transition name="slide">
        <div class="asidenav" v-if="asideVisible">
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
                <RouterLink to="/components/button">Button 按钮</RouterLink>
            </div>
            <div>
                <RouterLink to="/components/switch">Switch 开关</RouterLink>
            </div>
            <div>
                <RouterLink to="/components/dialog">Dialog 对话框</RouterLink>
            </div>
            <div>
                <RouterLink to="/components/tabs">Tabs 标签页</RouterLink>
            </div>
            <div>
                <RouterLink to="/components/menu">Menu 菜单</RouterLink>
            </div>
        </div>
    </Transition>
    <Transition name="fade">
        <div class="mask" v-if="asideVisible" @click="toggleAsideVisible"></div>
    </Transition>

</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, inject, computed, watch, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import router from '@/router/index'


const asideVisible = inject<Ref<boolean>>('asideVisible')

const toggleAsideVisible = () => {
    if (asideVisible?.value) {
        asideVisible.value = false
    }
}


</script>

<style scoped lang="scss">
@media (max-width:500px) {

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform 0.3s ease;
    }

    .slide-enter-from,
    .slide-leave-to {
        transform: translateX(-100%);
    }
}

.asidenav {
    width: 200px;
    height: 100%;
    color: var(--chair-color-text-light-1);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background-color: var(--chair-bg-dark-dialog);
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
            color: var(--chair-color-text-light-2);
        }
    }

    .router-link-active {
        color: var(--chair-color-text-primary);
    }

    h2 {
        color: inherit;
        font-weight: bold;
        font-size: 18px;
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
        transition: all 0.3s ease;
        position: fixed;
        left: 0px;
        top: 50px;
        z-index: 999;
    }

    .mask {
        display: inline-block;
        z-index: 998;
    }
}
</style>