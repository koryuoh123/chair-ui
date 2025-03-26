<template>
    <Switch v-model="checked" />
</template>

<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';

const checked = ref(false)

</script>

<style scoped></style>