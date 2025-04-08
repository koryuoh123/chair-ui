<demo>## 禁用状态<br/><br/><p>设置 <code>disabled</code> 属性，接受一个<code>Boolean</code>，设置 <code>true</code> 即可禁用。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <chair-switch v-model="checked" disabled></chair-switch>

            <chair-switch v-model="checked2"></chair-switch>

        </div>
    </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue'
const checked = ref(true)
const checked2 = ref(false)
</script>
<style lang='scss' scoped></style>