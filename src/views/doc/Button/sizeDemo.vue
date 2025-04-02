<demo>## 调整尺寸<br/><br/><p>使用 <code>size</code> 来定义按钮大小。</p></demo>

<template>
    <div class="demolist">
        <!-- small -->
        <Button size="small">Small</Button>
        <!-- default -->
        <Button>Default</Button>
        <!-- large -->
        <Button size="large">Large</Button>
    </div>
</template>

<script setup lang='ts'>
import Button from '@/lib/Button.vue'
</script>
<style lang='scss' scoped>
.demolist {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 12px;
}
</style>