<demo>## 禁用<br/><br/><p>你可以使用<code>disabed</code> 来定义按钮是否被禁用。</p><p>使用 <code>disabled</code> 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p></demo>
<template>
    <div class="demolist">
        <Button disabled>Primary</Button>

        <Button disabled theme="success">Success</Button>

        <Button disabled theme="warning">Warning</Button>

        <Button disabled theme="danger">Danger</Button>

        <Button disabled theme="info">Info</Button>
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