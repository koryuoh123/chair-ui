<template>
    <div class="chair-menu" :class="{ 'default-background': props.background }">
        <slot></slot>
    </div>
</template>
<script setup lang='ts'>
defineOptions({
    name: 'chair-menu',
})
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
        background-color: var(--chair-bg-dark-1);
        font-size: 16px;
    }
}
</style>