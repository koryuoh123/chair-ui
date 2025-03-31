<template>
    <div class="home-wrapper">
        <Topnav />
        <div class="content">
            这是首页
            <div>
                <RouterLink to="/components">开始</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Topnav from '@/components/Topnav.vue'
import Asidenav from '@/components/Asidenav.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.home-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .content {
        display: flex;
        justify-content: center;
        align-items: center;

        background: #030014;

        flex-grow: 1;
        height: 0;
        width: 100%;
    }
}
</style>