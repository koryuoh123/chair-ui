<template>
    <Button @click="clickEvent" @focus="focusEvent">你好</Button>
</template>

<script setup lang="ts">
import Button from '@/lib/Button.vue';
import { ref } from 'vue';

const clickEvent = () => {
    console.log('click');
}
const focusEvent = () => {
    console.log('focus');
}
</script>

<style scoped></style>