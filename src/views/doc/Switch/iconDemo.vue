<demo>## 自定义图标<br/><br/><p>使用 <code>active-action</code> 和 <code>inactive-action</code> 插槽来添加图标。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <Switch v-model="checked" active-text="显示" inactive-text="隐藏">
                <template #active-icon>
                    <SvgIcon iconName="visible-icon" />
                </template>
                <template #inactive-icon>
                    <SvgIcon iconName="invisible-icon" />
                </template>
            </Switch>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Switch from '@/lib/Switch.vue'
import { ref } from 'vue'
const checked = ref(false)
</script>
<style lang='scss' scoped></style>