<demo>## 加载中<br/><br/><p>使用<code>loading</code> 来定义按钮是否正在加载。</p></demo>
<template>
    <div class="demo-block">
        <div class="demolist">

            <Button loading>Default</Button>
            <Button theme="primary" loading>Primary</Button>

            <Button theme="success" loading>Success</Button>

            <Button theme="warning" loading>Warning</Button>

            <Button theme="danger" loading>Danger</Button>

            <Button theme="info" loading>Info</Button>


        </div>
        <p>你可以通过loading-icon插槽来覆盖loading的图标</p>
        <div class="demolist">
            <Button theme="info" loading>
                <template #loading-icon>
                    <SvgIcon iconName="loading-icon" style="width: .8em; height: .8em;" />
                </template>
                Info</Button>
        </div>
    </div>
</template>
<script setup lang='ts'>
import Button from '@/lib/Button.vue'
</script>
<style lang='scss' scoped></style>