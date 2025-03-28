<template>
    <slot></slot>
</template>
<script setup lang='ts'>
const props = withDefaults(defineProps<{
    name: string | number
    title?: string
}>(), {
    name: 0
})


</script>
<style lang='scss'></style>