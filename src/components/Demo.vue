<template>
    <div class="demo markdown-body">
        <Markdown>{{ component.__sourceCodeTitle }}</Markdown>
        <div class="demo-component">
            <component :is="props.component" />
        </div>
        <div class="demo-sourcecode">
            <Button theme="info" size="small" @click="toggleCode">查看代码</Button>
        </div>
        <pre v-text="component.__sourceCode"></pre>

    </div>
</template>
<script setup lang='ts'>
import { computed, ref } from 'vue';
import Button from '@/lib/Button.vue'
import Markdown from './Markdown.vue';
const props = defineProps<{
    component: Object
}>()
const codeVisible = ref(false)

const toggleCode = () => {
    codeVisible.value = !codeVisible.value
}
const html = computed(() => {
    if (props.component && props.component.__sourceCode) {

        return props.component.__sourceCode
    } else
        return ''
})
</script>
<style lang='scss' scoped>
.demo {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .demo-sourcecode {}
}

.demolist {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    // padding-left: 1em;
    padding-top: 12px;
}
</style>