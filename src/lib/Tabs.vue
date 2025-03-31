<template>
    <div class="chair-tabs-wrapper" :class="{ [`chair-tabs-nav-${props.type}`]: props.type }">
        <div class="chair-tabs-nav" ref="sliderWrapperRef">
            <div class="chair-tabs-nav-item" :ref="(el: any) => { if (currentTab === index) currentTabRef = el }"
                :class="{ active: currentTab === index }" v-for="(item, index) in tabItems" :key="item?.props?.name"
                @click="onTabClick(index, item?.props?.name)">
                {{ item?.props?.name }}

            </div>
            <div class="chair-tabs-nav-slider" ref="sliderRef"></div>
        </div>
        <div class="chair-tabs-content">
            <component :is="tabItems[currentTab]"></component>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { computed, ref, useSlots, watchEffect } from 'vue';
import TabItem from './TabItem.vue';
// 用户希望管理的model，如果无指定name，则用下标。
const vmodel = defineModel<number | string>({ required: true })
const props = withDefaults(defineProps<{
    type?: string
}>(), {
    type: 'default'
})

const slots = useSlots();
if (slots?.default?.()?.length) {
    slots.default().forEach(tag => {
        if (tag.type !== TabItem) {
            throw new Error('Tabs 的子元素必须是 TabItem');
        }
    })
}
// 过滤到的合法的tabItem组件
const tabItems = computed(() => {
    return slots?.default?.()?.filter(tag => tag.type === TabItem) || []
})
// 组件内部实际管理的当前tab的model，固定为下标
const currentTab = computed(() => {
    let result = 0;
    tabItems.value.forEach((item, index) => {
        if (typeof vmodel.value === 'number') {
            result = vmodel.value
        } else {
            if (item?.props?.name === vmodel.value) {
                result = index
            }
        }
    })
    return result;//兜底
})
// currentTab下标变化时，这个组件实例也会变化
const currentTabRef = ref<HTMLDivElement>()
// 用户点击tab时修改用户端的model，处理为名称或者下标
const onTabClick = (index: number, name?: string) => {
    if (name) {
        vmodel.value = tabItems.value.findIndex(item => item?.props?.name === name)
    } else {
        vmodel.value = index
    }
}

// 实现default的选中下划线滑动动画效果
const sliderWrapperRef = ref<HTMLDivElement>()
const sliderRef = ref<HTMLDivElement>()
// todo 有时候会有ui稿需要修改下划线的长度，为了让下划线能居中对应，需要修改left的计算方式，目前用increment简单实现，暂不考虑开放配置
watchEffect(() => {
    if (props.type === 'default') {
        // width是元素宽度。left是距离视口的距离
        const { width, left } = currentTabRef.value?.getBoundingClientRect?.() || { width: 0, left: 0 }
        // watchEffect在挂载之前就会运行
        if (sliderRef.value) {
            const { left: left2 } = sliderWrapperRef.value?.getBoundingClientRect?.() || { width: 0, left: 0 }
            const increment = 0; // 下划线的增量
            sliderRef.value.style.width = `${width + increment}px`
            sliderRef.value.style.left = `${left - left2 - (increment) / 2}px`
        }
    }
})

defineExpose({

})
</script>
<style lang='scss'>
// 帮我写一个.chair-tabs-content的通用样式，用scss语法，方便我后面用@include
@mixin chair-tabs-content {
    flex: 1;
    padding: 8px 20px;
    // border: 1px solid red;
}

.chair-tabs-wrapper {
    height: 500px;
    width: 600px;

    display: flex;
    flex-direction: column;

    .chair-tabs-nav {

        min-height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .chair-tabs-nav-item {
            padding: 4px 12px;
            height: 100%;
            min-width: 72px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }

    &.chair-tabs-nav-card {
        .chair-tabs-nav-item {

            border: 1px solid transparent;

            &.active {
                color: var(--color-text-primary);
                border-color: var(--color-primary);

            }
        }

        .chair-tabs-content {
            @include chair-tabs-content;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        }
    }

    &.chair-tabs-nav-default {


        .chair-tabs-nav {
            position: relative;
            border-bottom: 1px solid var(--chair-border-color);

            .chair-tabs-nav-item {
                &.active {
                    color: var(--color-text-primary);
                    // border-bottom: 1px solid var(--color-text-primary);
                }
            }

            .chair-tabs-nav-slider {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background-color: var(--color-text-primary);
                transition: all 0.3s ease-in-out;
            }
        }

        .chair-tabs-content {
            @include chair-tabs-content;
        }
    }

}
</style>