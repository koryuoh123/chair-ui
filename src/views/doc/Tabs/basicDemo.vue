<demo>## 基础用法<br/><br/><p>基础的、简洁的标签页。</p><p>Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 <code>value</code> 属性来指定当前选中的标签页。</p></demo>
<template>
    <div class="demo-block">
        <div class="demolist">
            <Tabs v-model="tabModel1" class="demo-tabs">
                <Tab-item name="User">User</Tab-item>
                <Tab-item name="Config">Config</Tab-item>
                <Tab-item name="Role">Role</Tab-item>
                <Tab-item name="Task">Task</Tab-item>

            </Tabs>
        </div>
    </div>
</template>
<script setup lang='ts'>
import Tabs from '@/lib/Tabs.vue'
import TabItem from '@/lib/TabItem.vue'
import { ref } from 'vue'
const tabModel1 = ref('User')

</script>
<style lang='scss' scoped>
.demo-tabs :deep(.chair-tabs-content) {
    font-size: 30px;
}
</style>