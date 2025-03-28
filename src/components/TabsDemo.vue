<template>
    <div class="demo-wrapper">
        <h1>默认样式</h1>
        <Tabs v-model="tabModel1">
            <Tab-item name="first">1</Tab-item>
            <Tab-item name="second">2</Tab-item>
            <Tab-item name="third33333">3</Tab-item>
        </Tabs>
        <h1>card样式</h1>
        <Tabs v-model="tabModel2" type="card">
            <Tab-item name="first">1</Tab-item>
            <Tab-item name="second">2</Tab-item>
            <Tab-item name="third">3</Tab-item>
        </Tabs>
    </div>
</template>
<script setup lang='ts'>
import Tabs from '@/lib/Tabs.vue'
import TabItem from '@/lib/TabItem.vue'
import { onMounted, ref } from 'vue'
const tabsRef = ref<InstanceType<typeof Tabs>>()
const tabModel1 = ref(0)
const tabModel2 = ref('second')
onMounted(() => {

})
</script>
<style lang='scss' scoped>
.demo-wrapper {
    display: flex;
    flex-direction: column;

}
</style>