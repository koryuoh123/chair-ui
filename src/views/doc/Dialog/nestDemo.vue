<demo>## 嵌套的对话框<br/><br/><p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。</p><p>通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 如果必须要在一个对话框内展示另一个对话框，可以将内部嵌套的对话框属性 append-to-body 设置为 true，嵌套的对话框将附加到 body 而不是其父节点，这样两个对话框都可以被正确地渲染。</p></demo>

<template>
    <div class="demo-block">
        <div class="demolist">
            <div>
                <chair-button @click="visible = !visible"> dialog</chair-button>
            </div>

            <chair-dialog v-model="visible" width="50%" title="dialog1">
                <div style="margin-top:30px;">
                    <chair-button theme="success" @click="visible2 = !visible2">open another dialog</chair-button>
                </div>
                <chair-dialog v-model="visible2" width="220px" append-to-body title="dialog2" top="30vh">
                    <span> This is dialog content2. </span>
                </chair-dialog>
            </chair-dialog>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const visible = ref(false)
const visible2 = ref(false)


</script>
<style lang='scss' scoped>
.my-header-class {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>