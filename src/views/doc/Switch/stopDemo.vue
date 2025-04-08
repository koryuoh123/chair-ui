<demo>## 阻止切换<br/><br/><p>设置 <code>beforeChange</code> 属性，若返回 <code>false</code   de> 或者返回 <code>Promise</code> 且被 <code>reject</code>，则停止切换。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <chair-switch v-model="checked" :loading="loading" :before-change="syncSwitch"></chair-switch>

            <chair-switch v-model="checked2" :loading="loading2" theme="warning"
                :before-change="syncSwitch2"></chair-switch>
        </div>

    </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue'
const checked = ref(true)
const loading = ref(false)
const syncSwitch = () => {
    return new Promise((resolve, reject) => {
        loading.value = true
        setTimeout(() => {
            loading.value = false
            reject(false)
        }, 1000)
    }) as Promise<boolean>
}

const checked2 = ref(false)
const loading2 = ref(false)
const syncSwitch2 = () => {
    return new Promise((resolve, reject) => {
        loading2.value = true
        setTimeout(() => {
            loading2.value = false
            resolve(true)
        }, 1000)
    }) as Promise<boolean>
}
</script>
<style lang='scss' scoped></style>