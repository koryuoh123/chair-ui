<demo>## 卡片风格的标签<br/><br/><p>你可以设置具有卡片风格的标签。</p><p>只需要设置 <code>type</code> 属性为 <code>card</code> 就可以使选项卡改变为标签风格。</p></demo>
<template>
    <div class="demo-block">
        <div class="demolist">
            <chair-tabs v-model="tabModel1" class="demo-tabs" type="card">
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