<template>
    <div class="topnav">
        <SvgIcon iconName="aside-icon" class="aside" @click="toggleAsideVisible"></SvgIcon>
        <div class="logo">logo</div>
        <div class="menu">
            <RouterLink to="/" class="btn">返回</RouterLink>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, inject } from 'vue'
const asideVisible = inject<Ref<boolean>>('asideVisible', ref(false))
const toggleAsideVisible = () => {
    asideVisible.value = !asideVisible.value
}
</script>

<style scoped lang="scss">
.topnav {
    $basic-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: $basic-color;
    width: 100%;
    height: 50px;


    >.logo {
        margin-right: auto;
        padding: 1em;
    }

    >.aside {
        display: none;
        color: $basic-color;
        cursor: pointer;
        height: 16px;
        width: 16px;
        margin-left: 1em;
    }

    >.menu {
        display: flex;
        padding-right: 1em;

        .btn {
            color: $basic-color;
        }
    }

    @media (max-width:500px) {
        >.logo {
            margin-left: auto;
            margin-right: auto;
        }

        >.aside {
            display: inline-block;
        }

        >.menu {
            display: none;
        }
    }
}
</style>