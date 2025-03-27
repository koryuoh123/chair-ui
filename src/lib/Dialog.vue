<template>
    <template v-if="visible">
        <Teleport to="body">
            <div class="chair-dialog-overlay" @click="() => { if (props.closeOnClickOverlay) { onCloseDialog() } }">
            </div>
            <div class="chair-dialog-wrapper">
                <div class="chair-dialog">
                    <header>
                        <slot name="title"></slot>
                        <div class="chair-dialog-close" @click="onCloseDialog">x</div>
                    </header>
                    <main>
                        <slot></slot>
                    </main>
                    <footer>
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>
</template>
<script setup lang='ts'>
import { ref, watch } from 'vue';


const props = withDefaults(defineProps<{
    closeOnClickOverlay?: boolean;// 是否在点击遮罩层时关闭对话框
    beforeClose?: () => void;// 用户想要自己控制关闭的时机
}>(), {
    closeOnClickOverlay: true
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
<style lang='scss' scoped>
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
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    .chair-dialog {
        background-color: #fff;
        border-radius: 10px;
        border: 1px solid #ccc;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 300px;
        width: 300px;
        padding: 10px;

        >header {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #333;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            .chair-dialog-close {
                position: absolute;
                right: 0;
                top: 0;
                cursor: pointer;

            }
        }

        >main {
            width: 100%;
            flex-grow: 1;
            height: 0;
        }

        >footer {
            width: 100%;
            display: flex;
        }
    }
}
</style>