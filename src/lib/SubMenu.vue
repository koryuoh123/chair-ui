<template>
    <div class="chair-sub-menu" ref="parentMenuRef" @mouseleave="onMouseLeave">
        <div class="chair-sub-menu-title" @mouseenter="onMouseEnter">
            <slot name="title"></slot>
            <SvgIcon :iconName="parentIsHorizontal ? 'arrow-right-icon' : 'arrow-down-icon'"
                class="chair-sub-menu-title-icon" :class="{ 'rotate-180': subMenuVisible }" />
        </div>
        <Transition name="submenu">
            <div class="chair-sub-menu-items-wrapper" v-if="subMenuVisible"
                :class="{ 'horizontal': parentIsHorizontal }" ref="subMenuWrapperRef" @mouseenter="onMouseInSubMenu"
                @mouseleave="onMouseOutSubMenu">
                <slot></slot>
            </div>
        </Transition>
    </div>

</template>
<script setup lang='ts'>
import { computed, nextTick, onMounted, onBeforeMount, ref, useSlots, provide, inject, getCurrentInstance } from 'vue';
import MenuItem from './MenuItem.vue';
import SubMenu from './SubMenu.vue';
import SvgIcon from '@/components/SvgIcon.vue';

const props = withDefaults(defineProps<{
    type?: string

}>(), {
    type: 'default',

})

// 注入父组件提供的 isHorizontal 值
const parentIsHorizontal = inject('isHorizontal', false)

// 提供 isHorizontal 值给子组件
provide('isHorizontal', true)

const slots = useSlots();

// 过滤到的合法的tabItem组件
const menuItems = computed(() => {
    return slots?.default?.()?.filter(tag => tag.type === MenuItem) || []
})

const subMenuVisible = ref(false)

const mouseIsHovingOnParentSubMenu = ref(false)

// 鼠标移入时，显示子菜单，鼠标移出时，如果鼠标在子菜单内，则不关闭，否则关闭
// 用一个函数计算子菜单出现的位置
const subMenuWrapperRef = ref<HTMLElement>()
const parentMenuRef = ref<HTMLElement>()
const instance = getCurrentInstance();// 需要放到这里才能获取到值

const calculateSubMenuPosition = () => {
    const parentRect = parentMenuRef.value?.getBoundingClientRect()
    const subMenuRect = subMenuWrapperRef.value?.getBoundingClientRect()
    if (!parentRect || !subMenuRect || !subMenuWrapperRef.value) {
        throw new Error('parentMenuRef or subMenuWrapperRef is not found')
        return
    }
    // 要显示的子菜单
    const subMenuWidth = subMenuRect.width
    // 父级
    const parentWidth = parentRect.width
    const parentHeight = parentRect.height
    const parentRight = parentRect.right
    // 要显示的子菜单的左上角位置
    const subMenuTop = parentRect.top

    if (parentIsHorizontal) {

        // 看看右边够不够位置，如果不够，则显示在左边
        // 右边位置 = parentRight
        if ((window.innerWidth - parentRight) > (subMenuWidth + 10)) {
            console.log('右边够位置')
            subMenuWrapperRef.value.style.left = `${parentWidth + 5}px`
        } else {
            console.log('右边不够位置')
            subMenuWrapperRef.value.style.left = `${-subMenuWidth - 5}px`
        }




    } else {
        subMenuWrapperRef.value.style.minWidth = `${parentWidth}px`
        subMenuWrapperRef.value.style.left = `5px`
        subMenuWrapperRef.value.style.top = `${parentHeight + 10}px`

    }
    // 延迟100ms，让子菜单显示出来，避免空间不够时子菜单撑开了body形成滚动条闪烁
    setTimeout(() => {
        parentMenuRef.value.style.overflow = 'visible'
    }, 100)
}

let timer: any = null;
const onMouseEnter = () => {
    // console.log(`鼠标移入  ${instance.uid}`);

    if (!subMenuVisible.value) {
        subMenuVisible.value = true;
        nextTick(() => {
            calculateSubMenuPosition();
        })
    }
    // 先清除之前的定时器
    if (timer) {
        clearInterval(timer)
    }
}
const onMouseLeave = () => {
    // console.log(`鼠标移出  ${instance.uid}`);

    // 先清除之前的定时器
    if (timer) {
        clearInterval(timer)
    }

    // 创建新的定时器
    timer = setInterval(() => {
        // 如果鼠标不在子菜单内，则关闭子菜单
        if (!mouseInSubMenu.value) {
            subMenuVisible.value = false
            clearInterval(timer)
            timer = null
        }
    }, 300)
}

const mouseInSubMenu = ref(false)
const onMouseInSubMenu = () => {
    // console.log(`鼠标移入  ${instance.uid}`);

    mouseInSubMenu.value = true;
}
const onMouseOutSubMenu = () => {
    // console.log(`鼠标移出  ${instance.uid}`, mouseInSubMenu.value);

    mouseInSubMenu.value = false;
}


</script>
<style lang='scss'>
.chair-sub-menu {
    position: relative;
    color: var(--color-menu-text);
    overflow: hidden;
    font-size: inherit;
    z-index: 100;

    .chair-sub-menu-title {
        color: inherit;
        font-size: inherit;
        display: flex;
        align-items: center;
        padding: 4px 12px;
        // justify-content: center;

        &:hover {
            color: #fff;
        }

        .chair-sub-menu-title-icon {
            color: inherit;
            height: 1.2em;
            width: 1.2em;
            transition: transform 0.2s ease-in-out;
            margin-left: auto;


            &.rotate-180 {
                transform: rotate(180deg);
            }
        }
    }



    .chair-sub-menu-items-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: var(--color-bg-dark);
        min-width: 100px;
        border-radius: 4px;
        border: 1px solid #2B293A;

    }
}

// 添加过渡动画样式
.submenu-enter-active,
.submenu-leave-active {
    transition: all 0.3s ease;
}

.submenu-enter-from,
.submenu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.submenu-enter-to,
.submenu-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>