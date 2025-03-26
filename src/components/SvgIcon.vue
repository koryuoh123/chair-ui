<template>
    <svg :class="svgClass">
        <use :xlink:href="`#icon-${iconName}`"></use>
    </svg>
</template>

<script setup>
defineProps({
    iconName: { type: String, required: true },  // 图标名称
    svgClass: { type: String, default: 'icon' }   // 自定义样式类
});

</script>
<style lang="scss" scoped>
.icon {
    height: 24px;
    width: 24px;
    fill: currentColor;
}
</style>