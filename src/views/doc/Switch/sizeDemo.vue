<demo>## 调整尺寸<br/><br/><p>使用 <code>size</code> 来定义开关大小。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <chair-switch size="small" v-model="checked"></chair-switch>
            <chair-switch v-model="checked"></chair-switch>
            <chair-switch size="large" v-model="checked"></chair-switch>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const checked = ref(false)
</script>
<style lang='scss' scoped></style>