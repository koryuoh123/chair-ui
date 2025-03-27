<template>
    <slot></slot>
</template>
<script setup lang='ts'>
const props = withDefaults(defineProps<{
    name: string | number
}>(), {
    name: 0
})


</script>
<style lang='scss'></style>