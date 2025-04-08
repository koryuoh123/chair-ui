<demo>## 加载状态<br/><br/><p>设置 <code>loading</code> 属性，接受一个<code>Boolean</code>，设置 <code>true</code> 即加载中状态。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <chair-switch v-model="checked" loading></chair-switch>

            <chair-switch v-model="checked" :text-visible="false" loading theme="warning"></chair-switch>
        </div>

    </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue'
const checked = ref(true)
</script>
<style lang='scss' scoped></style>