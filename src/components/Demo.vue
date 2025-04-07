<template>
    <div class="demo markdown-body">
        <Markdown>{{ component.__sourceCodeTitle }}</Markdown>

        <div class="demo-container">
            <div class="demo-component">
                <component :is="props.component" />
            </div>
            <div class="demo-sourcecode">
                <div class="btns">
                    <SvgIcon iconName="code-icon" class="icon" @click="toggleCode"></SvgIcon>
                </div>
                <Transition name="slide">
                    <div v-if="codeVisible" class="code-content">
                        <pre class="language-html" v-html="html"></pre>
                        <div class="hidecode-btn" @click="toggleCode">
                            <SvgIcon iconName="arrow-down-icon" class="svg"></SvgIcon>隐藏源代码
                        </div>
                    </div>
                </Transition>
            </div>
        </div>


    </div>
</template>
<script setup lang='ts'>
import { computed, ref } from 'vue';
import Button from '@/lib/Button.vue'
import Markdown from './Markdown.vue';
// @ts-ignore
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

const props = defineProps<{
    component: any
}>()
const codeVisible = ref(false)

const toggleCode = () => {
    codeVisible.value = !codeVisible.value
}
const html = computed(() => {
    if (props.component && props.component.__sourceCode) {
        // @ts-ignore
        return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    } else
        return ''
})
</script>
<style lang='scss' scoped>
@use 'sass:color';

.demo {
    display: flex;
    flex-direction: column;
    // gap: 12px;

    .demo-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
        border: 1px solid #3a3849;
        border-radius: 4px;
        background-color: color.adjust(#201e30, $lightness: -2%);

        .demo-component {
            padding: 24px;
            // overflow-x: hidden;
        }
    }

    .demo-sourcecode {
        border-top: 1px solid #3a3849;

        .btns {
            display: flex;
            justify-content: flex-end;
            padding: 8px;


            .icon {
                width: 20px;
                height: 20px;
                cursor: pointer;
                color: #B6C9DC;
                transition: all .3s ease-in-out;

                &:hover {
                    background-color: #B6C9DC33;
                }
            }
        }

        .hidecode-btn {
            width: 100%;
            padding: 8px 24px;
            background-color: #201e30;
            color: var(--color-text-light-1);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .svg {
                height: 24px;
                width: 24px;
                transform: rotate(180deg);
            }
        }
    }

    .language-html {
        background-color: #1a1a1a;
    }
}

.demolist {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    // padding-left: 1em;
    padding-top: 12px;
}

/* 修改过渡动画样式为纯滚动效果 */
.slide-enter-active,
.slide-leave-active {
    transition: max-height 0.2s ease-in;
    overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
    max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
    max-height: 600px;
    /* 设置一个足够大的值 */
}

.code-content {
    overflow: hidden;
}
</style>