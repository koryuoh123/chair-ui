<template>
    <template v-if="visible">
        <div class="chair-dialog-overlay" @click="close"></div>
        <div class="chair-dialog-wrapper">
            <div class="chair-dialog">
                <header>
                    <slot name="title"></slot>
                    <div class="chair-dialog-close" @click="close">x</div>
                </header>
                <main>
                    <slot name="default"></slot>
                </main>
                <footer>
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </template>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
defineOptions({
    inheritAttrs: false
})

const visible = defineModel<boolean>({ required: true, default: false })
const close = () => {
    visible.value = false
}
</script>
<style lang='scss' scoped>
.chair-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

.chair-dialog-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;

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