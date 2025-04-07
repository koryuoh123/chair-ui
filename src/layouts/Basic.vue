<template>
    <div class="wrapper">
        <Topnav class="topnav" />
        <div class="content">
            <Asidenav />
            <div class="main">
                <RouterView />
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import Topnav from '@/components/Topnav.vue'
import Asidenav from '@/components/Asidenav.vue'
import { RouterLink, RouterView } from 'vue-router'
import { ref, provide, onMounted } from 'vue'
import router from '@/router'
const asideVisible = ref(false)
provide('asideVisible', asideVisible)

router.afterEach(() => {
    const width = document.documentElement.clientWidth
    if (width <= 500) {
        // console.log(asideVisible?.value)
        if (asideVisible?.value) {
            asideVisible.value = false
        }
    }
})
onMounted(() => {
    const cw = document.documentElement.clientWidth
    if (cw <= 500) {
        asideVisible.value = false
    } else {
        asideVisible.value = true
    }
    window.addEventListener('resize', () => {

        if (cw <= 500) {
            asideVisible.value = false
        } else {
            asideVisible.value = true
        }
    })
})


</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;

    >.topnav {
        z-index: 500;
    }

    >.content {
        width: 100%;
        display: flex;
        z-index: 400;
        background: #181627;
        height: 0;
        flex-grow: 1;
        overflow: hidden;

        .main {
            flex-grow: 1;
            width: 0;
            height: 100%;
        }
    }
}
</style>