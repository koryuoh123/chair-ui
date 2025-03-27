<template>
    <div class="demo-wrapper">
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
    border: 1px dashed red;
}
</style>