<template>
    <Switch v-model="v" />
    <div>{{ v }}</div>
</template>

<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';

const v = ref(false)
// const toggle = () => {
//     value.value = !value.value;
// };
</script>

<style scoped></style>