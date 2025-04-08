<demo>## 基础用法<br/><br/><p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p><p>需要设置 <code>model-value / v-model</code> 属性，它接收 <code>Boolean</code>，当为 <code>true</code>  时显示 Dialog。 Dialog 分为两个部分：<code>body</code> 和 <code>footer</code>，<code>footer</code> 需要具名为 <code>footer</code> 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 <code>before-close</code> 的用法。</p> <p>默认是点击对话框外部会关闭，但你也可以通过 <code>close-on-click-overlay</code> 属性来控制。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <div>
                <chair-button @click="visible = !visible">Click to open the Dialog</chair-button>
            </div>

            <chair-dialog v-model="visible" title="Tips" width="50%" top="40vh" :before-close="beforeClose">
                <span>This is a message</span>
                <template #footer>
                    <div class="footer">
                        <chair-button size="small" @click="visible = false">Cencel</chair-button>
                        <chair-button size="small" theme="primary" @click="visible = false">Confirm</chair-button>
                    </div>
                </template>
            </chair-dialog>
        </div>
        <p>close-on-click-overlay 设置为false</p>
        <div class="demolist">
            <div>
                <chair-button @click="visible2 = !visible2" theme="info">Click Overlay</chair-button>
            </div>
            <chair-dialog v-model="visible2" title="Tips" width="50%" top="40vh" :close-on-click-overlay="false">
                <span>This is a message</span>
                <template #footer>
                    <div class="footer">
                        <chair-button size="small" @click="visible2 = false">Cencel</chair-button>
                        <chair-button size="small" theme="primary" @click="visible2 = false">Confirm</chair-button>
                    </div>
                </template>
            </chair-dialog>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const visible = ref(false)
const visible2 = ref(false)
const beforeClose = () => {
    window.alert('beforeClose')
    visible.value = false
}

</script>
<style lang='scss' scoped>
.footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
</style>