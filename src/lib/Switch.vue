<template>
    <div ref="buttonRef" class="chair-switch-wrapper" size="medium" :class="{
        [`chair-theme-${props.theme}`]: props.theme,
        checked,
        disabled: props.disabled,
        loading: props.loading
    }" :style="{
        '--main-color': mainColor,
        '--sub-color': subColor,
        '--buttonbg': buttonbg
    }" @click="toggle">
        <div v-if="props.loading" v-chair-loading="{ visible: props.loading, color: mainColor, color2: subColor }"
            style="margin-right: 10px;"></div>
        <div class="chair-switch">
            <div class="block-wrapper">
                <div class="uncheck-block">
                    <div class="icon-wrapper">
                        <slot name="inactive-icon">
                            <SvgIcon iconName="mistake-icon" />
                        </slot>

                    </div>
                </div>
                <div class="checked-block">
                    <div class="icon-wrapper">
                        <slot name="active-icon">
                            <SvgIcon iconName="correct-icon" />
                        </slot>


                    </div>
                </div>
            </div>

        </div>
        <div class="chair-switch-decoration" v-if="props.textVisible">
            {{ switchText }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useAttrs } from 'vue';

// 使用了defineModel宏，可以在模板中使用v-model指令，省略了emit和props
const checked = defineModel<boolean>({
    required: true,
    default: false
});
const toggle = () => {
    if (props.beforeChange) {
        // 判断是否返回promise

        const result = props.beforeChange();
        if (result instanceof Promise) {
            result.then((res) => {
                if (res) {
                    checked.value = !checked.value;
                }
            });
        } else if (result === true) {
            checked.value = !checked.value;
        }
    } else {

        if (props.disabled || props.loading) return;
        checked.value = !checked.value;
    }
};


const props = withDefaults(defineProps<{
    theme?: string;
    disabled?: boolean;// 既要禁用原生button的事件，又要添加禁用样式
    loading?: boolean;
    mainColor?: string; // 添加自定义颜色属性
    subColor?: string; // 添加自定义颜色属性
    activeText?: string;
    inactiveText?: string;
    textVisible?: boolean;
    beforeChange?: () => boolean | Promise<boolean>;
}>(), {
    theme: 'primary',
    activeText: 'Open',
    inactiveText: 'Close',
    textVisible: true,
});
// 展示的text
const switchText = computed(() => {
    return checked.value ? props.activeText : props.inactiveText;
});
// 计算实际使用的颜色，在scss中用--buton-color可获取
const mainColor = computed(() => {
    if (props.mainColor) {
        return props.mainColor;
    }
    // 如果没有自定义颜色，则使用主题对应的CSS变量
    const themeMap: Record<string, string> = {
        primary: 'var(--color-text-primary)',
        success: 'var(--chair-success-color)',
        warning: 'var(--chair-warning-color)',
        danger: 'var(--color-text-danger)',
        info: 'var(--chair-info-color)',

    };
    return themeMap[props.theme] || themeMap.primary;
});
const subColor = computed(() => {
    if (props.subColor) {
        return props.subColor;
    }
    return '#181627';
});
const buttonRef = ref<HTMLButtonElement>();
function getActualBgColor(e) {
    let currentElement = e
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
@mixin size-style($font-size, $height, $border-width) {
    height: $height;
    min-width: calc($height + 20px);

    .chair-switch-decoration {
        bottom: 1px;
        left: $height;
        min-width: calc($height + 2px);
        font-size: $font-size;
        border-width: $border-width;
    }

    .chair-switch {
        padding: 0;
        height: $height;
        width: $height;
        font-size: $font-size;
        border-radius: 50%;
        border: 2px solid transparent;

        .block-wrapper {
            width: $height;
            height: calc($height * 2);
            top: -2px;
            left: -2px;

            .icon {
                height: calc($height / 2);
                width: calc($height / 2);
            }
        }
    }
}

@mixin theme-style($sub-color, $main-color) {
    &.checked {
        .chair-switch {
            // border-color: color-mix(in srgb, var(--main-color, $sub-color) 80%, white);
            // box-shadow: 0 0 5px var(--main-color, $sub-color), 0 0 5px var(--main-color, $sub-color), inset 0 0 5px var(--main-color, $sub-color), inset 0 0 5px var(--main-color, $sub-color);
        }
    }

    .chair-switch {
        border-color: color-mix(in srgb, var(--main-color, $sub-color) 80%, white);
        box-shadow: 0 0 5px var(--main-color, $sub-color), 0 0 5px var(--main-color, $sub-color), inset 0 0 5px var(--main-color, $sub-color), inset 0 0 5px var(--main-color, $sub-color);



        .uncheck-block {

            background-color: $main-color;
            color: color-mix(in srgb, $sub-color 95%, white);
        }

        .checked-block {
            background-color: var(--main-color, $sub-color);
            color: color-mix(in srgb, $main-color 95%, white);

        }
    }

    .chair-switch-decoration {

        border-color: var(--main-color, $sub-color);
        color: var(--main-color, $main-color);
    }

    &.checked {
        .chair-switch-decoration {
            border-color: var(--main-color, $sub-color);
            color: var(--main-color, $sub-color);
        }
    }
}

.chair-switch {

    position: relative;
    overflow: hidden;

    .block-wrapper {
        position: absolute;
        display: flex;
        flex-direction: column;
        transition: all 250ms;

        .checked-block,
        .uncheck-block {
            flex-grow: 1;
            position: relative;

            .icon-wrapper {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}

.chair-switch-wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;

    &.loading {
        cursor: not-allowed;
        opacity: 0.7;
    }

    &.disabled {
        cursor: not-allowed;
        // pointer-events: none;
        opacity: 0.7;
    }

    &.checked {
        .block-wrapper {
            transform: translateY(-50%);
        }
    }

    .chair-switch-decoration {
        border-bottom: 1px solid;
        padding-left: .3em;
        line-height: 1.5em;
    }

    &.chair-theme-primary {
        @include theme-style(var(--color-text-primary), var(--sub-color, --buttonbg));
    }

    &.chair-theme-success {
        @include theme-style(var(--chair-success-color), var(--sub-color, --buttonbg));
    }

    &.chair-theme-warning {
        @include theme-style(var(--chair-warning-color), var(--sub-color, --buttonbg));
    }

    &.chair-theme-danger {
        @include theme-style(var(--color-text-danger), var(--sub-color, --buttonbg));
    }

    &.chair-theme-info {
        @include theme-style(var(--chair-info-color), var(--sub-color, --buttonbg));
    }

    &[size="small"] {
        @include size-style(16px, 25px, 1px);
    }

    &[size="medium"] {
        @include size-style(18px, 30px, 2px);
    }

    &[size="large"] {
        @include size-style(22px, 36px, 2px);
    }


}
</style>