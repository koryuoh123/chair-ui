<demo>## 大小<br/><br/><p>使用 <code>size</code> 来定义按钮大小。</p></demo>

<template>
    <div class="demolist">
        <!-- small -->
        <Button size="small">Button</Button>
        <!-- default -->
        <Button>Button</Button>
        <!-- large -->
        <Button size="large">Button</Button>
    </div>
</template>

<script setup lang='ts'>
import Button from '@/lib/Button.vue'
</script>
<style lang='scss' scoped></style>