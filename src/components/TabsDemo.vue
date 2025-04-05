<template>

    <div class="markdown-body demo-wrapper ">
        <Markdown>{{ `# Tabs 标签页\n<p>分隔内容上有关联但属于不同类别的数据集合。</p>` }}
        </Markdown>
        <div>
            <Demo :component="basicDemo" />
        </div>
        <div>
            <Demo :component="cardDemo" />
        </div>
        <div>
            <Demo :component="cardBorderDemo" />
        </div>
    </div>

</template>
<script setup lang='ts'>
import Demo from '@/components/Demo.vue'
import basicDemo from '@/views/doc/Tabs/basicDemo.vue'
import cardDemo from '@/views/doc/Tabs/cardDemo.vue'
import cardBorderDemo from '@/views/doc/Tabs/cardBorderDemo.vue'
</script>
<style lang='scss' scoped>
@use '@/views/doc/demoDoc.scss';
</style>