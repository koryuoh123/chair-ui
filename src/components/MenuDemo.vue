<template>
    <div class="demo-wrapper">

        <Menu>
            <MenuItem>
            Meat
            </MenuItem>
            <SubMenu>
                <template #title>
                    Fruits
                </template>
                <MenuItem>apple</MenuItem>
                <MenuItem>banana</MenuItem>
            </SubMenu>
            <SubMenu>
                <template #title>
                    Animals
                </template>
                <MenuItem>dog</MenuItem>
                <MenuItem>cat</MenuItem>
            </SubMenu>
        </Menu>
    </div>
</template>
<script setup lang='ts'>
import Menu from '@/lib/Menu.vue'
import SubMenu from '@/lib/SubMenu.vue'
import MenuItem from '@/lib/MenuItem.vue'
import { onMounted, ref } from 'vue'

onMounted(() => {

})
</script>
<style lang='scss' scoped>
.demo-wrapper {
    display: flex;
    flex-direction: column;
    padding: 4px 12px;
}
</style>