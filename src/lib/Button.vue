<template>
    <div class="btncontainer" :size="size">
        <button v-bind="rest">
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
/**
 * 通过useAttrs获取父组件传递的属性
 * 通过解构获取size属性，然后通过rest获取剩余属性
 */
import { useAttrs, ref, computed } from 'vue';
/**
 * 为开发者优化，使属性可以响应式变化
 */
const attrs = useAttrs();
const size = computed(() => attrs.size); // 响应式获取 size
const rest = computed(() => {
    const { size, ...otherAttrs } = attrs;
    return otherAttrs;
});

</script>

<style scoped lang="scss">
.btncontainer {
    border: 1px solid red;

    &[size="large"] {
        button {
            font-size: 20px;
        }
    }
}
</style>