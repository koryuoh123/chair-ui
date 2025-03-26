<template>
    <div class="switch-container">
        <h1>
            switch文档
        </h1>
        <div class="content">
            <SwitchDemo />
        </div>
    </div>

</template>

<script setup lang="ts">
import SwitchDemo from '@/components/SwitchDemo.vue';

</script>

<style scoped lang="scss">
.switch-container {
    display: flex;
    flex-direction: column;

    >.content {
        // border: 1px solid red;

    }
}
</style>