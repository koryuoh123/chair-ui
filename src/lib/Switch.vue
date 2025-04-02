<template>
    <div ref="buttonRef" class="chair-switch-wrapper" size="medium"
        :class="{ [`chair-theme-${props.theme}`]: props.theme, checked, }" :style="{
            '--main-color': mainColor,
            '--sub-color': subColor,
            '--buttonbg': buttonbg
        }">
        <div class="chair-switch" @click="toggle" :class="{

            disabled: props.disabled,
            loading: props.loading
        }" :disabled="props.disabled">
            <div class="block-wrapper">
                <div class="uncheck-block">
                    <div class="icon">
                        <!-- <SvgIcon iconName="mistake-icon" /> -->
                    </div>
                </div>
                <div class="checked-block">
                    <div class="icon">
                        <!-- <SvgIcon iconName="correct-icon" /> -->
                    </div>
                </div>
            </div>

        </div>
        <div class="chair-switch-decoration">
            {{ checked }}
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
    checked.value = !checked.value;
};


const props = withDefaults(defineProps<{
    theme?: string;
    disabled?: boolean;// 既要禁用原生button的事件，又要添加禁用样式
    loading?: boolean;
    mainColor?: string; // 添加自定义颜色属性
    subColor?: string; // 添加自定义颜色属性
}>(), {
    theme: 'primary',

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
        min-width: calc($height + 15px);
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
            border-color: color-mix(in srgb, var(--main-color, $sub-color) 80%, white);
            box-shadow: 0 0 5px var(--main-color, $sub-color), 0 0 5px var(--main-color, $sub-color), inset 0 0 5px var(--main-color, $sub-color), inset 0 0 5px var(--main-color, $sub-color);

            .icon {
                &:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 60%;
                    width: 3px;
                    height: 100%;
                    background-color: color-mix(in srgb, var(--main-color, $sub-color) 80%, white);
                    rotate: 45deg;
                    border-radius: 2px;
                }

                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 10%;
                    width: 3px;
                    height: 50%;
                    background-color: color-mix(in srgb, var(--main-color, $sub-color) 80%, white);
                    rotate: -45deg;
                    border-radius: 2px;
                }
            }
        }
    }

    .chair-switch {
        border-color: color-mix(in srgb, var(--main-color, $sub-color) 80%, white);
        box-shadow: 0 0 5px var(--main-color, $sub-color), 0 0 5px var(--main-color, $sub-color), inset 0 0 5px var(--main-color, $sub-color), inset 0 0 5px var(--main-color, $sub-color);



        .uncheck-block {
            background-color: var(--main-color, $sub-color);
            color: color-mix(in srgb, $main-color 95%, white);

        }

        .checked-block {
            background-color: $main-color;
            // color: $sub-color;
            color: color-mix(in srgb, $sub-color 95%, white);

        }

        .icon {
            &:before {
                content: '';
                position: absolute;
                bottom: -2%;
                left: 34%;
                width: 3px;
                height: 110%;
                background-color: $main-color;
                rotate: 45deg;
                border-radius: 2px;

            }

            &:after {
                content: '';
                position: absolute;
                bottom: -2%;
                left: 34%;
                width: 3px;
                height: 110%;
                background-color: $main-color;
                rotate: -45deg;
                border-radius: 2px;

            }
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
    cursor: pointer;
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

            .icon {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}

.chair-switch-wrapper {

    display: flex;

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
        @include size-style(18px, 32px, 2px);
    }


}
</style>