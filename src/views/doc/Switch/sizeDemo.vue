<demo>## 调整尺寸<br/><br/><p>使用 <code>size</code> 来定义开关大小。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <!-- small -->
            <Switch size="small" v-model="checked">Small</Switch>
            <!-- default -->
            <Switch v-model="checked">Default</Switch>
            <!-- large -->
            <Switch size="large" v-model="checked">Large</Switch>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Switch from '@/lib/Switch.vue'
import { ref } from 'vue'
const checked = ref(false)
</script>
<style lang='scss' scoped></style>