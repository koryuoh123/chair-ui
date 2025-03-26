<template>
    <div class="btncontainer" :size="size">
        <button v-bind="rest" class="chair-button" :class="{ [`theme-${props.theme}`]: props.theme }">
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

const props = withDefaults(defineProps<{
    theme?: string;
}>(), {
    theme: ''
});


</script>

<style lang="scss">
$bw: 80px;
$bh: 30px;
$radius: 4px;

.btncontainer {
    display: block;

    &[size="small"] {
        .chair-button {
            width: calc($bw - 20px);
            height: calc($bh - 5px);
        }
    }

    &[size="large"] {
        .chair-button {
            width: calc($bw + 20px);
            height: calc($bh + 5px);
        }
    }

    .chair-button {
        width: $bw;
        height: $bh;
        border: 1px solid gray;
        background: #fff;
        white-space: nowrap;
        border-radius: $radius;

        // 相同class并排时，给出间隔
        &+& {
            margin-left: 8px;
        }

        // firefox不会生效
        &:focus {
            outline: none;
        }

        // firefox会生效
        &::-moz-focus-inner {
            border: 0;
        }

        &.theme-primary {
            // background-color: blue;
            color: var(--color-text-primary);
            border-color: var(--color-text-primary);
        }

        &.theme-danger {
            // background-color: red;
            color: var(--color-text-danger);
            border-color: var(--color-text-danger);
        }
    }

}
</style>