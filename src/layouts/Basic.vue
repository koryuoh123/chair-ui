<template>
    <div class="wrapper">
        <Topnav class="topnav" />
        <div class="content">
            <Asidenav v-if="asideVisible" />
            <RouterView />
        </div>
    </div>

</template>

<script setup lang="ts">
import Topnav from '@/components/Topnav.vue'
import Asidenav from '@/components/Asidenav.vue'
import { RouterLink, RouterView } from 'vue-router'
import { ref, provide, onMounted } from 'vue'
const asideVisible = ref(true)
provide('asideVisible', asideVisible)

onMounted(() => {
    const cw = document.documentElement.clientWidth
    if (cw <= 500) {
        asideVisible.value = false
    } else {
        asideVisible.value = true
    }
})


</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    // position: relative;
    height: 100%;

    >.topnav {
        z-index: 500;
    }

    >.content {
        width: 100%;
        display: flex;
        // height: calc(100% - 50px);
        z-index: 400;


        background: #181627;
        height: 0;
        flex-grow: 1;
        ;
        overflow: hidden;
    }
}
</style>