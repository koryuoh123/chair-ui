<template>
    <div class="asidenav">
        <RouterLink to="/components/button">button</RouterLink>
        <RouterLink to="/components/switch">switch</RouterLink>
        <RouterLink to="/components/dialog">dialog</RouterLink>
        <RouterLink to="/components/tabs">tabs</RouterLink>
        <RouterLink to="/components/menu">menu</RouterLink>
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
    // justify-content: center;
    background-color: #181627;
    border-right: 1px solid #2B283E;

    a {
        color: inherit;
        text-decoration: none;
        font-size: 20px;
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