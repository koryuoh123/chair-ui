<demo>## 带有边框的卡片风格<br/><br/><p>你还可以设置标签页为带有边框的卡片</p><p>将 <code>type</code> 设置为 <code>border-card</code> </p></demo>
<template>
    <div class="demo-block">
        <div class="demolist">
            <chair-tabs v-model="tabModel1" class="demo-tabs" type="border-card">
                <chair-tab-item name="User">User</chair-tab-item>
                <chair-tab-item name="Config">Config</chair-tab-item>
                <chair-tab-item name="Role">Role</chair-tab-item>

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