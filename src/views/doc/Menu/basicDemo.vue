<demo> # 基础用法 <p>最小菜单单位是 <code>MenuItem</code> 组件,如果是多级菜单，则可以使用<code>SubMenu</code> 组件嵌套实现</p></demo>
<template>

    <div class="demo-block">
        <div class="demolist">
            <chair-menu background>
                <chair-menu-item>
                    Meat
                </chair-menu-item>
                <chair-sub-menu>
                    <template #title>
                        Fruits
                    </template>
                    <chair-menu-item>apple</chair-menu-item>
                    <chair-menu-item>banana</chair-menu-item>
                    <chair-sub-menu>
                        <template #title>
                            Fruits
                        </template>
                        <chair-menu-item>apple</chair-menu-item>
                        <chair-menu-item>banana</chair-menu-item>

                    </chair-sub-menu>
                </chair-sub-menu>
                <chair-sub-menu>
                    <template #title>
                        Animals
                    </template>
                    <chair-menu-item>dog</chair-menu-item>
                    <chair-menu-item>cat</chair-menu-item>
                </chair-sub-menu>
            </chair-menu>
        </div>
    </div>
</template>
<script setup lang='ts'>

</script>
<style lang='scss' scoped></style>
