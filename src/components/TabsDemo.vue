<template>
    <Tabs ref="tabsRef">
        <Tab-item name="first">1</Tab-item>
        <Tab-item name="second">2</Tab-item>
        <Tab-item name="third">3</Tab-item>
    </Tabs>
</template>
<script setup lang='ts'>
import Tabs from '@/lib/Tabs.vue'
import TabItem from '@/lib/TabItem.vue'
import { onMounted, ref } from 'vue'
const tabsRef = ref<InstanceType<typeof Tabs>>()
onMounted(() => {
    tabsRef.value?.setCurrentTab(0)
})
</script>
<style lang='scss' scoped></style>