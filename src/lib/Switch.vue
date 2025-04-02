<template>
    <button class="chair-switch" @click="toggle" :class="{
        checked,
        [`chair-theme-${props.theme}`]: props.theme,
        disabled: props.disabled,
        loading: props.loading
    }" :style="{
        '--theme-color': themeColor,
        '--buttonbg': buttonbg
    }" :disabled="props.disabled"><span></span></button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// 使用了defineModel宏，可以在模板中使用v-model指令，省略了emit和props
const checked = defineModel<boolean>({
    required: true,
});
const toggle = () => {
    checked.value = !checked.value;
};

const props = withDefaults(defineProps<{
    theme?: string;
    disabled?: boolean;// 既要禁用原生button的事件，又要添加禁用样式
    loading?: boolean;
    color?: string; // 添加自定义颜色属性
}>(), {
    theme: 'default',
});
// 计算实际使用的颜色，在scss中用--buton-color可获取
const themeColor = computed(() => {
    if (props.color) {
        return props.color;
    }
    // 如果没有自定义颜色，则使用主题对应的CSS变量
    const themeMap: Record<string, string> = {
        primary: 'var(--color-text-primary)',
        success: 'var(--chair-success-color)',
        warning: 'var(--chair-warning-color)',
        danger: 'var(--color-text-danger)',
        info: 'var(--chair-info-color)'
    };
    return themeMap[props.theme] || themeMap.primary;
});
let buttonbg = ref('')
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.chair-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background-color: #DCDFE6;
    border-radius: calc($h / 2);
    position: relative;
    transition: background-color .250ms; // 250ms一般用这个数
    cursor: pointer;

    >span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background-color: white;
        border-radius: calc($h2 / 2);
        transition: all 250ms;
    }
}

.chair-switch.checked {
    background-color: #409EFF;

    >span {
        left:calc(100% - #{$h2} - 2px);
    }
}

.chair-switch:focus {
    outline: none;
}

// 鼠标按住变胖的动画
.chair-switch.checked:active {
    >span {
        width: $h2 + 4px;
        margin-left: -4px;
    }
}
</style>