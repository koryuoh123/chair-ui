<demo>## 文字描述<br/><br/><p>使用 <code>active-text</code> 属性与 <code>inactive-text</code> 属性来设置开关的文字描述。</p><p>你也可以通过 <code>text-visible</code> 属性来控制文字描述是否显示。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <chair-switch v-model="checked" active-text="开启" inactive-text="关闭"></chair-switch>

            <chair-switch v-model="checked" theme="success" active-text="是" inactive-text="否"></chair-switch>

            <chair-switch v-model="checked" theme="warning" active-text="Pay by month"
                inactive-text="Pay by year"></chair-switch>
        </div>
        <p>不展示文字</p>
        <div class="demolist">
            <chair-switch v-model="checked" :text-visible="false">Default</chair-switch>
        </div>
    </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue'
const checked = ref(false)
</script>
<style lang='scss' scoped></style>