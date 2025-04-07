<template>
    <Teleport :disabled="!props.appendToBody" to="body">
        <Transition name="fade">
            <div v-if="visible" class="chair-dialog-overlay"
                @click="() => { if (props.closeOnClickOverlay) { onCloseDialog() } }">
            </div>
        </Transition>
        <Transition name="zoom">
            <div v-if="visible" class="chair-dialog-wrapper" :style="{ width: props.width, top: props.top }">
                <div class="chair-dialog">
                    <div class="chair-dialog-header">
                        <slot name="header">
                            <div class="chair-dialog-title">{{ title }}</div>
                        </slot>
                        <div v-if="props.showClose" class="chair-dialog-close" @click="onCloseDialog">
                            <SvgIcon iconName="mistake-icon" svgClass="auto-size" />
                        </div>
                    </div>
                    <div class="chair-dialog-body">
                        <slot></slot>
                    </div>
                    <div class="chair-dialog-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
<script setup lang='ts'>
import { ref, watch } from 'vue';


const props = withDefaults(defineProps<{
    closeOnClickOverlay?: boolean;// 是否在点击遮罩层时关闭对话框
    beforeClose?: () => void;// 用户想要自己控制关闭的时机
    title?: string;// 标题
    width?: string;// 宽度
    top?: string;// 距离顶部的距离
    showClose?: boolean;// 是否显示关闭按钮
    appendToBody?: boolean;// 是否将对话框附加到 body 而不是其父节点
}>(), {
    closeOnClickOverlay: true,
    title: '',
    width: '500px',
    top: '15vh',
    showClose: true,
    appendToBody: false
})

// 基础功能，显示关闭
const visible = defineModel<boolean>({ required: true, default: false })

const onCloseDialog = () => {
    // 如果用户想要自己控制关闭的时机，则调用用户的方法
    if (props.beforeClose?.()) { /*无后续*/ }
    else {
        visible.value = false
    }
}


</script>
<style lang='scss'>
// 遮罩层动画
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

// 对话框动画
.zoom-enter-active,
.zoom-leave-active {
    transition: all 0.3s ease;
}

.zoom-enter-from,
.zoom-leave-to {
    opacity: 0;
    transform: translate(-50%, -20px) scale(0.9);
}

.zoom-enter-to,
.zoom-leave-from {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
}

.chair-dialog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
}

.chair-dialog-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    top: 15vh;
    width: 500px;

    .chair-dialog {
        background-color: var(--color-bg-dark-dialog);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 150px;
        padding: 18px;


        >.chair-dialog-header {
            width: 100%;
            // height: 50px;
            padding: 0 0 8px 0;

            display: flex;
            color: var(--color-text-light-1);
            // align-items: center;
            position: relative;
            // border: 1px solid red;

            .chair-dialog-title {
                font-size: 18px;
                font-weight: 600;
                color: var(--color-text-light-1);
            }

            .chair-dialog-close {
                position: absolute;
                right: 0;
                top: 0;
                cursor: pointer;
                color: var(--color-text-light-2);
                height: 14px;
                width: 14px;
                transition: color 0.3s;

                &:hover {
                    color: var(--color-text-primary);
                }
            }
        }

        >.chair-dialog-body {
            width: 100%;
            flex-grow: 1;
            height: 0;
            font-size: 14px;
            color: var(--color-text-light-1);
            overflow: auto;
        }

        >.chair-dialog-footer {
            width: 100%;
            display: flex;
        }
    }
}
</style>