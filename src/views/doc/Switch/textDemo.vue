<demo>## 文字描述<br/><br/><p>使用 <code>active-text</code> 属性与 <code>inactive-text</code> 属性来设置开关的文字描述。</p><p>你也可以通过 <code>text-visible</code> 属性来控制文字描述是否显示。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <Switch v-model="checked" active-text="开启" inactive-text="关闭"></Switch>

            <Switch v-model="checked" theme="success" active-text="是" inactive-text="否"></Switch>

            <Switch v-model="checked" theme="warning" active-text="Pay by month" inactive-text="Pay by year"></Switch>
        </div>
        <p>不展示文字</p>
        <div class="demolist">
            <Switch v-model="checked" :text-visible="false">Default</Switch>
        </div>
    </div>

</template>

<script setup lang='ts'>
import Switch from '@/lib/Switch.vue'
import { ref } from 'vue'
const checked = ref(false)
</script>
<style lang='scss' scoped></style>