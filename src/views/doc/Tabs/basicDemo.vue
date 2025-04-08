<demo>## 基础用法<br/><br/><p>基础的、简洁的标签页。</p><p>Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 <code>value</code> 属性来指定当前选中的标签页。</p></demo>
<template>
    <div class="demo-block">
        <div class="demolist">
            <chair-tabs v-model="tabModel1" class="demo-tabs">
                <chair-tab-item name="User">User</chair-tab-item>
                <chair-tab-item name="Config">Config</chair-tab-item>
                <chair-tab-item name="Role">Role</chair-tab-item>
                <chair-tab-item name="Task">Task</chair-tab-item>
            </chair-tabs>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
const tabModel1 = ref('User')

</script>
<style lang='scss' scoped>
.demo-tabs :deep(.chair-tabs-content) {
    font-size: 30px;
}
</style>