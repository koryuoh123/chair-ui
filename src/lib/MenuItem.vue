<template>
    <div class="chair-menu-item">
        <slot></slot>
    </div>

</template>
<script setup lang='ts'>
import { inject, useAttrs } from 'vue';
defineOptions({
    name: 'chair-menu-item',
})
const props = withDefaults(defineProps<{

}>(), {

})



</script>
<style lang='scss'>
.chair-menu-item {
    color: var(--chair-color-menu-text);
    font-size: 16px;
    display: flex;
    // justify-content: center;
    padding: 4px 12px;
    border-radius: 4px;
    // cursor: pointer;

    &:hover {
        background: #2C293C;
        color: #fff;
    }
}
</style>