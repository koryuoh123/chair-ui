<template>
    <svg :class="svgClass">
        <use :xlink:href="`#icon-${iconName}`"></use>
    </svg>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    iconName: { type: String, required: true },  // 图标名称
    svgClass: { type: String, default: 'icon' }   // 自定义样式类
});

</script>
<style lang="scss" scoped>
.icon {
    font-size: inherit;
    fill: currentColor;
}

.auto-size {
    height: 100%;
    width: 100%;
    font-size: inherit;
    fill: currentColor;
}
</style>