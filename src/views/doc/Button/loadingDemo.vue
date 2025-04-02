<demo>## 加载中<br/><br/><p>使用<code>loading</code> 来定义按钮是否正在加载。</p></demo>
<template>
    <div class="demolist">
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
</template>
<script setup lang='ts'>
import Button from '@/lib/Button.vue'
</script>
<style lang='scss' scoped>
p {
    line-height: 42px;
    letter-spacing: 1.5px;
    color: var(--color-text-light-1);
}

.demolist {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    padding-bottom: 12px;
}
</style>