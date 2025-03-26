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
    background-color: blue;
    border-radius: calc($h / 2);
    position: relative;
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: calc($h2 / 2);
}

.checked>span {
    left:calc(100% - #{$h2} - 2px);
}
</style>