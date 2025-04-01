<template>
    <div class="markdown-body demo-wrapper ">

        <div>
            <Markdown>{{ `# 按钮\n<p>常用的操作按钮</p>` }}
            </Markdown>
            <Markdown>{{ `## 大小\n<p>使用
                    <code>size</code> 来定义按钮大小。
                </p>` }}
            </Markdown>
            <sizeDemo />
            <pre v-text="sizeDemo._sourceCodeTitle"></pre>
            <pre v-text="sizeDemo._sourceCode"></pre>
        </div>

        <div>
            <Markdown>{{ `## 主题\n<p>使用
                    <code>theme</code> 来定义按钮样式。也可以通过 <code>color</code> 来自定义按钮颜色。
                </p>` }}
            </Markdown>

            <div class="demolist">
                <Button @click="clickEvent" @focus="focusEvent" theme="primary">Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" theme="success">Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" theme="warning">Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" theme="danger">Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" theme="info">Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" color="purple">Button</Button>
            </div>
        </div>

        <div>
            <Markdown>{{ `## 禁用\n<p>使用
                    <code>disabed</code> 来定义按钮是否被禁用。
                </p>` }}
            </Markdown>
            <div class="demolist">
                <Button @click="clickEvent" @focus="focusEvent" disabled>Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" disabled theme="success">Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" disabled theme="warning">Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" disabled theme="danger">Button</Button>
            </div>
        </div>
        <div>
            <Markdown>{{ `## 加载中\n<p>使用
                    <code>loading</code> 来定义按钮是否正在加载。
                </p>` }}
            </Markdown>
            <div class="demolist">
                <Button @click="clickEvent" @focus="focusEvent" theme="primary" loading>Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" theme="success" loading>Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" theme="warning" loading>Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" theme="danger" loading>Button</Button>
                <Button @click="clickEvent" @focus="focusEvent" theme="info" loading>Button</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/lib/Button.vue';
import { onMounted, ref } from 'vue';
import sizeDemo from '@/views/doc/Button/sizeDemo.vue'
onMounted(() => {
    console.log(sizeDemo)
})
/**
 * click
 * focus
 * theme 主题
 * size 大小
 */
const clickEvent = () => {

}
const focusEvent = () => {

}
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
        // padding-left: 1em;
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