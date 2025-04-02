<template>
    <div class="markdown-body demo-wrapper">
        <Switch v-model="checked" />
    </div>
</template>

<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';

const checked = ref(false)

</script>

<style scoped lang="scss">
.demo-wrapper {
    width: 100%;
    height: 100%;
    padding: 0px 24px 12px 36px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    color: var(--color-text-light-1);
}
</style>