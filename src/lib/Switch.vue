<template>
    <button :class="{ checked }" @click="toggle"><span></span></button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
const toggle = () => {
    checked.value = !checked.value;
};
</script>

<style scoped lang="scss">
$h: 22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h * 2;
    border: none;
    background-color: #DCDFE6;
    border-radius: calc($h / 2);
    position: relative;
    transition: background-color .250ms; // 250ms一般用这个数
    cursor: pointer;
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: calc($h2 / 2);
    transition: left 250ms;
}

button.checked>span {
    left:calc(100% - #{$h2} - 2px);
}

button.checked {
    background-color: #409EFF;
}

button:focus {
    outline: none;
}
</style>