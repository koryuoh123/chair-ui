<demo>## 自定义头部<br/><br/><p> <code>header</code> 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 title 属性，或使用 titleId 插槽属性来指定哪些元素应该读取为对话框标题。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <div>
                <chair-button @click="visible = !visible">Open Dialog</chair-button>
            </div>

            <chair-dialog v-model="visible" width="300px" :show-close="false">
                <span> This is dialog content.</span>
                <template #header>
                    <div class="my-header-class">
                        <h1>my header</h1>
                        <chair-button theme="info" @click="handleClose" size="small">X</chair-button>
                    </div>

                </template>
            </chair-dialog>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const visible = ref(false)
const handleClose = () => {
    visible.value = false
}

</script>
<style lang='scss' scoped>
.my-header-class {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
        line-height: 5px;
    }

}
</style>