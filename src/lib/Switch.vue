<template>
    <button class="chair-switch" :class="{ checked }" @click="toggle"><span></span></button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 使用了defineModel宏，可以在模板中使用v-model指令，省略了emit和props
const checked = defineModel<boolean>({
    required: true,
});
const toggle = () => {
    checked.value = !checked.value;
};

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