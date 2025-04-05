<demo>## 主题<br/><br/><p>使用<code>theme</code> 来定义开关样式。<br/><br/>也可以通过 <code>mainColor</code> 和 <code>subColor</code> 来自定义开关颜色。
</p></demo>
<template>
    <div class="demo-block">

        <p>默认提供的样式</p>

        <div class="demolist">
            <Switch theme="primary" v-model="checked">Primary</Switch>
            <Switch theme="success" v-model="checked">Success</Switch>
            <Switch theme="warning" v-model="checked">Warning</Switch>
            <Switch theme="danger" v-model="checked">Danger</Switch>
            <Switch theme="info" v-model="checked">Info</Switch>
        </div>

        <p>自定义颜色</p>

        <div class="demolist">
            <Switch mainColor="#b91bb9" subColor="pink" v-model="checked">Modified Color</Switch>
        </div>
    </div>
</template>
<script setup lang='ts'>
import Switch from '@/lib/Switch.vue'
import { ref } from 'vue'
const checked = ref(false)
</script>
<style lang='scss' scoped></style>