<template>
    <div class="chair-button-container" :size="size">
        <button ref="buttonRef" v-bind="rest" class="chair-button" :class="{
            [`chair-theme-${props.theme}`]: props.theme,
            disabled: props.disabled,
            loading: props.loading
        }" :style="{
            '--theme-color': themeColor,
            '--buttonbg': buttonbg
        }" :disabled="props.disabled">

            <span class="chair-button-decoration-border">

            </span>
            <span class="chair-button-text-content"
                :style="{ pointerEvents: (props.disabled || props.loading) ? 'none' : 'auto' }">

                <div v-if="props.loading" class="loading-icon-wrapper">
                    <slot name="loading-icon">
                        <!-- 如果没传插槽就展示这个 -->
                        <div class="loading-icon"
                            v-chair-loading="{ visible: props.loading, color: themeColor, color2: buttonbg }"></div>
                    </slot>
                </div>

                <slot></slot>
            </span>

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
import { useAttrs, ref, computed, onMounted, nextTick } from 'vue';
/**
 * 为开发者优化，使属性可以响应式变化
 */
const attrs = useAttrs();
const size = computed(() => attrs.size || 'medium' as string); // 响应式获取 size
const rest = computed(() => {
    const { size, ...otherAttrs } = attrs;
    return otherAttrs;
});

const props = withDefaults(defineProps<{
    theme?: string;
    disabled?: boolean;// 既要禁用原生button的事件，又要添加禁用样式
    loading?: boolean;
    color?: string; // 添加自定义颜色属性
    buttonClass?: string;
}>(), {
    theme: 'default',
    disabled: false,
    loading: false,
    color: '' // 默认为空
});

// 计算实际使用的颜色，在scss中用--buton-color可获取
const themeColor = computed(() => {
    if (props.color) {
        return props.color;
    }
    // 如果没有自定义颜色，则使用主题对应的CSS变量
    const themeMap: Record<string, string> = {
        default: 'var(--color-text-light-1)',
        primary: 'var(--color-text-primary)',
        success: 'var(--chair-success-color)',
        warning: 'var(--chair-warning-color)',
        danger: 'var(--color-text-danger)',
        info: 'var(--chair-info-color)'
    };
    return themeMap[props.theme] || themeMap.default;
});

const buttonRef = ref<HTMLButtonElement>();
function getActualBgColor(e: HTMLElement) {
    let currentElement: HTMLElement | null = e;
    while (currentElement) {
        const bgColor = window.getComputedStyle(currentElement).background
        if (bgColor !== 'transparent' && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box') {
            // debugger
            return bgColor;
        }
        currentElement = currentElement.parentElement;
    }
    return 'white'; // 默认返回白色（浏览器默认背景）
}
let buttonbg = ref('')
onMounted(() => {
    if (buttonRef.value) {
        buttonbg.value = getActualBgColor(buttonRef.value);
    }
})
</script>

<style lang="scss">
$bw: 80px;
$bh: 30px;
$radius: 4px;
$hpadding: 6px;
$wpadding: 18px;


// 定义主题混合器
@mixin theme-style($color) {
    &.loading {
        pointer-events: none;
        opacity: 0.7;

        .chair-button-text-content {
            display: flex;
            align-items: center;
            justify-content: center;

            .loading-icon-wrapper {
                margin-right: 4px;
                animation: chair-spin 1.5s linear infinite;
            }

            .loading-icon {
                height: .8em;
                width: .8em;
                // display: inline-block;

                // animation: chair-spin 1s linear infinite;


            }
        }

    }

    .chair-button-text-content {
        color: var(--theme-color, $color);
    }

    &:hover:not(.disabled),
    &.loading {
        .chair-button-text-content {
            color: color-mix(in srgb, var(--theme-color, $color) 40%, white);
            text-shadow: 0 0 1px var(--theme-color, $color), 0 0 1px var(--theme-color, $color), 0 0 1px var(--theme-color, $color), 0 0 1px var(--theme-color, $color);
        }

        .chair-button-decoration-border:before,
        .chair-button-decoration-border:after &:before,
        &:after {
            background-color: color-mix(in srgb, var(--theme-color, $color) 80%, white);
            box-shadow: 0 0 5px var(--theme-color, $color), 0 0 5px var(--theme-color, $color), inset 0 0 5px var(--theme-color, $color), inset 0 0 5px var(--theme-color, $color);
        }
    }

    &:before,
    &:after,
    .chair-button-decoration-border:before,
    .chair-button-decoration-border:after {
        background-color: var(--theme-color, $color);
    }
}

// 定义size混合器
@mixin size-style($font-size, $min-width, $hpadding, $wpadding, $decoration-border-width) {
    .chair-button {
        font-size: $font-size;

        &:before,
        &:after,
        .chair-button-decoration-border:before,
        .chair-button-decoration-border:after {
            content: '';
            display: inline-block;
            position: absolute;
            width: $decoration-border-width;
            height: $decoration-border-width;
            transition: .5s;
            // z-index: 1;

        }



        .chair-button-text-content {
            min-width: calc($bw);
            padding: calc($hpadding) calc($wpadding);
        }

        &.loading {
            .chair-button-text-content {
                padding: calc($hpadding) calc($wpadding) calc($hpadding) calc($wpadding - 5px);
            }

        }
    }
}

.chair-button-container {
    display: block;

    // 相同class并排时，给出间隔
    &+& {
        margin-left: 3px;
    }

    /**
     * size方面的样式
     */
    &[size="small"] {
        @include size-style(15px, $bw - 30px, $hpadding - 2px, $wpadding - 8px, 8px);
    }

    &[size="medium"] {
        @include size-style(16px, $bw, $hpadding, $wpadding, 10px);
    }

    &[size="large"] {
        @include size-style(18px, $bw + 20px, $hpadding + 2px, $wpadding + 5px, 12px);
    }

    .chair-button {
        background: var(--buttonbg);
        // background-color: var(--buttonbg);
        cursor: pointer;
        border: none;
        position: relative;
        display: flex;

        // 禁用
        &.disabled {
            opacity: 0.7;
            cursor: not-allowed;

            &:before,
            &:after,
            .chair-button-decoration-border:before,
            .chair-button-decoration-border:after {
                filter: opacity(.25);
            }
        }





        // firefox不会生效
        &:focus {
            outline: none;
        }

        // firefox会生效
        &::-moz-focus-inner {
            border: 0;
        }



        .chair-button-text-content {
            background: inherit;
            // background-color: inherit;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            text-decoration: none;
            z-index: 2;
            letter-spacing: 0.1em;
            white-space: nowrap;

        }

        // 主题样式
        &.chair-theme-default {
            @include theme-style(var(--color-text-light-1));
        }

        &.chair-theme-primary {
            @include theme-style(var(--color-text-primary));
        }

        &.chair-theme-success {
            @include theme-style(var(--chair-success-color));
        }

        &.chair-theme-warning {
            @include theme-style(var(--chair-warning-color));
        }

        &.chair-theme-danger {
            @include theme-style(var(--color-text-danger));
        }

        &.chair-theme-info {
            @include theme-style(var(--chair-info-color));
        }

        &:hover:not(.disabled),
        &.loading {

            .chair-button-decoration-border:before,
            .chair-button-decoration-border:after,


            &:before,
            &:after {
                width: calc(95% / 2);
                height: calc(90% / 2);
            }


        }



        .chair-button-decoration-border:before {
            top: -2px;
            left: -2px;
        }

        .chair-button-decoration-border:after {
            top: -2px;
            right: -2px;
        }

        &:before {
            bottom: -2px;
            left: -2px;
        }

        &:after {
            bottom: -2px;
            right: -2px;
        }
    }
}
</style>