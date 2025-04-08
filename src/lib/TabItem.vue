<template>
    <slot></slot>
</template>
<script setup lang='ts'>
defineOptions({
    name: 'chair-tab-item',
})
const props = withDefaults(defineProps<{
    name: string | number
    title?: string
}>(), {
    name: 0
})


</script>
<style lang='scss'></style>