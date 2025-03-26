<template>
    <div class="button-container">
        <h1>
            button文档
        </h1>
        <div class="content">
            <ButtonDemo />
        </div>
    </div>

</template>

<script setup lang="ts">
import ButtonDemo from '@/components/ButtonDemo.vue';

</script>

<style scoped lang="scss">
.button-container {
    display: flex;
    flex-direction: column;

    >.content {
        // border: 1px solid red;

    }
}
</style>