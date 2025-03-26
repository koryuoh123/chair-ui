<template>
    <div class="btncontainer">
        <button v-bind="$attrs">
            <slot></slot>
        </button>
    </div>
</template>

<script setup lang="ts">
/**
 * 默认会将父组件绑定的事件都绑定到根元素【透传Attributes]
 * 但不希望绑到div上，而是button上，所以通过inheritAttrs: false来禁用这个特性
 * 然后通过v-bind="$attrs"将父组件绑定的属性绑定到button上
 **/
defineOptions({
    inheritAttrs: false
})
</script>

<style scoped lang="scss">
.btncontainer {
    border: 1px solid red;
}
</style>