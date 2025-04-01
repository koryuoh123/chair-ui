<template>
    <p class="markdown-body" v-html="content"></p>
</template>
<script setup lang='ts'>
import { marked } from 'marked';
import { useSlots, computed } from 'vue';
// content从slot中拿
const slots = useSlots()
const content = computed(() => {
    const slot = slots.default?.()
    console.log(slot);

    if (slot?.length) {
        let c = ''
        try {
            // 改成深遍历slot
            const deepTraversal = (item: any) => {
                if (typeof item.children === 'object') {
                    item.children.forEach(deepTraversal)
                } else {
                    c += marked(item.children as string)
                }
            }
            slot.forEach(deepTraversal)
        } catch (error) {

        }
        return c
    }
    return ''
})

</script>
<style lang='scss' scoped>
p {
    color: inherit;
    font-size: inherit;
}
</style>