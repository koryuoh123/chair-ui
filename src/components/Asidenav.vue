<template>
    <div class="asidenav">
        <RouterLink to="/doc/button">button</RouterLink>
        <RouterLink to="/doc/switch">switch</RouterLink>
        <RouterLink to="/doc/dialog">dialog</RouterLink>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
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
    asideVisible.value = false
})
</script>

<style scoped lang="scss">
.asidenav {
    width: 200px;
    height: 100%;
    background-color: #efefef;
    color: white;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    z-index: 2;
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0009;
    z-index: 1;
    display: none;
}

@media (max-width:500px) {
    .asidenav {
        position: fixed;
        left: 0;
        top: 50px;
    }

    .mask {
        display: inline-block;
    }
}
</style>