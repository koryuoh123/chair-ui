<template>
    <Topnav />
    <div class="content">
        这是首页
        <div>
            <RouterLink to="/doc">开始</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import Topnav from '@/components/Topnav.vue'
import Asidenav from '@/components/Asidenav.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.content {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>