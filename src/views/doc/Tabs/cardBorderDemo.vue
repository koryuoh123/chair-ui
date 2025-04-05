<demo>## 带有边框的卡片风格<br/><br/><p>你还可以设置标签页为带有边框的卡片</p><p>将 <code>type</code> 设置为 <code>border-card</code> </p></demo>
<template>
    <div class="demo-block">
        <div class="demolist">
            <Tabs v-model="tabModel1" class="demo-tabs" type="border-card">
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