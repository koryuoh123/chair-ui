<template>
    <div class="markdown-body demo-wrapper ">
        <Markdown>{{ `# 按钮\n<p>常用的操作按钮</p>` }}
        </Markdown>
        <div>
            <Demo :component="sizeDemo" />
        </div>
        <div>
            <Demo :component="themeDemo" />
        </div>
        <div>
            <Demo :component="disabledDemo" />
        </div>
        <div>
            <Demo :component="loadingDemo" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/lib/Button.vue';
import { onMounted, ref } from 'vue';
import Demo from '@/components/Demo.vue'
import sizeDemo from '@/views/doc/Button/sizeDemo.vue'
import themeDemo from '@/views/doc/Button/themeDemo.vue'
import disabledDemo from '@/views/doc/Button/disabledDemo.vue'
import loadingDemo from '@/views/doc/Button/loadingDemo.vue'


</script>

<style scoped lang="scss">
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-thumb {
    background-color: #574A5B;
    border-radius: 10px;
    transition: all .2s ease-in-out;
}

.demo-wrapper {
    width: 100%;
    height: 100%;
    padding: 0px 24px 12px 36px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    color: var(--color-text-light-1);

    .demolist {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding-top: 12px;
    }

    :deep() {

        h1,
        h2 {

            color: var(--color-text-light-1);
            // text-indent: 1em;
        }

        p {
            font-size: 16px;
        }
    }

}
</style>