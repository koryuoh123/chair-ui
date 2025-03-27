<template>
    <!-- <slot></slot> -->
    <!-- <template v-for="item in tabItems" :key="item?.props?.name">
        <component :is="item" />
    </template> -->
    <div class="chair-tabs-wrapper">
        <div class="chair-tabs-nav">
            <div class="chair-tabs-nav-item" :class="{ active: currentTab === index }" v-for="(item, index) in tabItems"
                :key="item?.props?.name" @click="currentTab = index">
                {{ item?.props?.name }}
            </div>
        </div>
        <div class="chair-tabs-content">
            <component :is="tabItems[currentTab]"></component>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { computed, ref, useSlots } from 'vue';
import TabItem from './TabItem.vue';
const slots = useSlots();
if (slots?.default?.()?.length) {
    slots.default().forEach(tag => {
        if (tag.type !== TabItem) {
            throw new Error('Tabs 的子元素必须是 TabItem');
        }
    })
}
const tabItems = computed(() => {
    return slots?.default?.()?.filter(tag => tag.type === TabItem) || []
})
const currentTab = ref(0)

const setCurrentTab = (indexOrName: number | string) => {
    tabItems.value.forEach((item, index) => {
        if (typeof indexOrName === 'number') {
            currentTab.value = indexOrName
        } else {
            if (item?.props?.name === indexOrName) {
                currentTab.value = index
            }
        }
    })
}
defineExpose({
    setCurrentTab
})
</script>
<style lang='scss'>
.chair-tabs-wrapper {
    height: 500px;
    width: 600px;

    display: flex;
    flex-direction: column;

    .chair-tabs-nav {
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .chair-tabs-nav-item {
            height: 100%;
            width: 100px;
            border: 1px solid #000;
            display: flex;
            justify-content: center;
            align-items: center;

            &.active {
                background-color: #000;
                color: #fff;
            }
        }
    }

    .chair-tabs-content {
        flex: 1;
        border: 1px solid #000;
    }
}
</style>