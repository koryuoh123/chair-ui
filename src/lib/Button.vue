<template>
    <div class="chair-button-container" :size="size">
        <button v-bind="rest" class="chair-button" :class="{
            [`chair-theme-${props.theme}`]: props.theme,
            disabled: props.disabled,
            loading: props.loading
        }" :disabled="props.disabled">
            <SvgIcon v-if="props.loading" iconName="loading-icon" class="loading-icon" />
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
import SvgIcon from '@/components/SvgIcon.vue';
/**
 * 通过useAttrs获取父组件传递的属性
 * 通过解构获取size属性，然后通过rest获取剩余属性
 */
import { useAttrs, ref, computed } from 'vue';
/**
 * 为开发者优化，使属性可以响应式变化
 */
const attrs = useAttrs();
const size = computed(() => attrs.size as string); // 响应式获取 size
const rest = computed(() => {
    const { size, ...otherAttrs } = attrs;
    return otherAttrs;
});

const props = withDefaults(defineProps<{
    theme?: string;
    disabled?: boolean;// 既要禁用原生button的事件，又要添加禁用样式
    loading?: boolean;
}>(), {
    theme: '',
    disabled: false,
    loading: false
});


</script>

<style lang="scss">
$bw: 80px;
$bh: 30px;
$radius: 4px;
$hpadding: 4px;
$wpadding: 6px;

.chair-button-container {
    display: block;

    &[size="small"] {
        .chair-button {
            // width: calc($bw - 20px);
            // height: calc($bh - 5px);
            min-width: calc($bw - 20px);
            padding: calc($hpadding - 1px) calc($wpadding - 1px);
        }
    }

    &[size="large"] {
        .chair-button {
            // width: calc($bw + 20px);
            // height: calc($bh + 5px);
            min-width: calc($bw + 20px);
            padding: calc($hpadding + 1px) calc($wpadding + 1px);
        }
    }

    .chair-button {
        min-width: $bw;
        padding: $hpadding $wpadding;
        // height: $bh;
        border: 1px solid gray;
        background: #fff;
        white-space: nowrap;
        border-radius: $radius;
        cursor: pointer;

        // 禁用
        &.disabled {
            background: #ccc;
            color: #000;
            cursor: not-allowed;
            // pointer-events: none;
        }

        // loading--要看出不能点击的感觉，要屏蔽事件
        &.loading {
            // cursor: progress;
            pointer-events: none;
            opacity: 0.5;
            display: flex;
            align-items: center;
            justify-content: center;

            .loading-icon {
                height: 1em;
                width: 1em;
                display: inline-block;
                margin-right: 4px;
                animation: chair-spin 1s linear infinite;
            }
        }

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

        &.chair-theme-primary {
            // background-color: blue;
            color: var(--color-text-primary);
            border-color: var(--color-text-primary);
        }

        &.chair-theme-danger {
            // background-color: red;
            color: var(--color-text-danger);
            border-color: var(--color-text-danger);
        }
    }

}

@keyframes chair-spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>