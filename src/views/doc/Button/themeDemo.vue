<demo>## 主题<br/><br/><p>使用<code>theme</code> 来定义按钮样式。也可以通过 <code>color</code> 来自定义按钮颜色。
</p></demo>
<template>
    <div class="theme-demo">

        <p>默认提供的样式</p>

        <div class="demolist">
            <Button theme="primary">Primary</Button>
            <Button theme="success">Success</Button>
            <Button theme="warning">Warning</Button>
            <Button theme="danger">Danger</Button>
            <Button theme="info">Info</Button>
        </div>

        <p>自定义颜色</p>

        <div class="demolist">
            <Button color="#b91bb9">Modified Color</Button>
        </div>
    </div>
</template>
<script setup lang='ts'>
import Button from '@/lib/Button.vue'
</script>
<style lang='scss' scoped>
.theme-demo {
    display: flex;
    flex-direction: column;

    p {
        line-height: 42px;
        letter-spacing: 1.5px;
        color: var(--color-text-light-1);
    }
}

.demolist {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    padding-bottom: 12px;
}
</style>