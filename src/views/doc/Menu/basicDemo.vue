<demo> # 基础用法 <p>最小菜单单位是 <code>MenuItem</code> 组件,如果是多级菜单，则可以使用<code>SubMenu</code> 组件嵌套实现</p></demo>
<template>

    <div class="demo-block">
        <div class="demolist">
            <Menu background>
                <MenuItem>
                Meat
                </MenuItem>
                <SubMenu>
                    <template #title>
                        Fruits
                    </template>
                    <MenuItem>apple</MenuItem>
                    <MenuItem>banana</MenuItem>
                    <SubMenu>
                        <template #title>
                            Fruits
                        </template>
                        <MenuItem>apple</MenuItem>
                        <MenuItem>banana</MenuItem>

                    </SubMenu>
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
    </div>
</template>
<script setup lang='ts'>
import Menu from '@/lib/Menu.vue'
import SubMenu from '@/lib/SubMenu.vue'
import MenuItem from '@/lib/MenuItem.vue'
</script>
<style lang='scss' scoped></style>
