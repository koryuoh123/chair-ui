<demo>## 主题<br/><br/><p>使用<code>theme</code> 来定义开关样式。<br/><br/>也可以通过 <code>mainColor</code> 和 <code>subColor</code> 来自定义开关颜色。
</p></demo>
<template>
    <div class="demo-block">

        <p>默认提供的样式</p>

        <div class="demolist">
            <chair-switch theme="primary" v-model="checked">Primary</chair-switch>
            <chair-switch theme="success" v-model="checked">Success</chair-switch>
            <chair-switch theme="warning" v-model="checked">Warning</chair-switch>
            <chair-switch theme="danger" v-model="checked">Danger</chair-switch>
            <chair-switch theme="info" v-model="checked">Info</chair-switch>
        </div>

        <p>自定义颜色</p>

        <div class="demolist">
            <chair-switch mainColor="#b91bb9" subColor="pink" v-model="checked">Modified Color</chair-switch>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
const checked = ref(false)
</script>
<style lang='scss' scoped></style>