<template>
    <div class="topnav">
        <SvgIcon iconName="aside-icon" class="aside" @click="toggleAsideVisible"></SvgIcon>
        <div class="logo" v-if="!isHome">
            <img src="@/assets/imgs/logo2.png" alt="logo" />
            <div class="text">chair</div>
        </div>
        <div class="menu" :style="{ marginRight: isHome ? 'auto' : 'unset' }">
            <Menu :background="false">
                <MenuItem v-if="!isHome">
                <RouterLink to="/">Home</RouterLink>
                </MenuItem>
                <MenuItem>
                Guide
                </MenuItem>
                <SubMenu>
                    <template #title>Components</template>
                    <MenuItem>
                    <RouterLink to="/components/button">Button</RouterLink>
                    </MenuItem>
                    <MenuItem>
                    <RouterLink to="/components/switch">Switch</RouterLink>
                    </MenuItem>
                    <MenuItem>
                    <RouterLink to="/components/dialog">Dialog</RouterLink>
                    </MenuItem>
                    <MenuItem>
                    <RouterLink to="/components/tabs">Tabs</RouterLink>
                    </MenuItem>
                    <MenuItem>
                    <RouterLink to="/components/menu">Menu</RouterLink>
                    </MenuItem>
                </SubMenu>
                <MenuItem>Resources</MenuItem>
            </Menu>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, inject, computed } from 'vue'

import SvgIcon from '@/components/SvgIcon.vue'
import Menu from '@/lib/Menu.vue'
import SubMenu from '@/lib/SubMenu.vue'
import MenuItem from '@/lib/MenuItem.vue'

const asideVisible = inject<Ref<boolean>>('asideVisible', ref(false))
const toggleAsideVisible = () => {
    asideVisible.value = !asideVisible.value
}

import { useRoute } from 'vue-router'

const route = useRoute();
const isHome = computed(() => route.path === '/')

</script>

<style scoped lang="scss">
.topnav {
    $basic-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    color: $basic-color;
    width: 100%;
    height: 60px;

    background: #141124;
    background: linear-gradient(90deg, rgba(21, 18, 37, 1) 0%, rgba(32, 28, 52, 0.969625350140056) 50%, rgba(21, 18, 37, 1) 100%);

    border-bottom: 1px solid #2B283E;

    >.logo {
        position: absolute;
        left: 4em;
        padding: 1em;
        height: 70px;
        width: auto;
        display: flex;
        align-items: center;
        gap: 0.2em;

        >img {
            height: 100%;
        }

        .text {
            font-style: italic;
            font-size: 16px;
            color: #f7f6fbd5;
            font-weight: bold;

            //         background-clip: text;
            //   -webkit-background-clip: text;
            //   color: transparent;
            //   background-image: linear-gradient(180deg, #FFFFFF 45%, #4C81E7 100%)
        }
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
        // position: absolute;
        // left: 35%;
        margin-left: auto;

        a {
            width: 100%;
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