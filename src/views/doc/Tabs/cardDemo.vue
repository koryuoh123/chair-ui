<demo>## 卡片风格的标签<br/><br/><p>你可以设置具有卡片风格的标签。</p><p>只需要设置 <code>type</code> 属性为 <code>card</code> 就可以使选项卡改变为标签风格。</p></demo>
<template>
    <div class="demo-block">
        <div class="demolist">
            <Tabs v-model="tabModel1" class="demo-tabs" type="card">
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