<template>
    <div class="chair-menu" :class="{ 'default-background': background }">
        <slot></slot>
    </div>
</template>
<script setup lang='ts'>
const props = withDefaults(defineProps<{
    background?: boolean
}>(), {
    background: true
})
</script>
<style lang='scss'>
.chair-menu {
    display: flex;
    align-items: center;
    gap: 16px;

    padding-left: 1em;
    padding-right: 1em;

    &.default-background {
        height: 45px;
        background-color: #1D1A2F;
        font-size: 16px;
    }
}
</style>