<template>
    <div class="markdown-body demo-wrapper ">
        <Markdown>{{ `# 指南` }}
        </Markdown>
        <Markdown>{{ `## 介绍 \n<p>Chair UI是一款基于 Vue3 和 TypeScript的UI组件库。</p>
            \n<p>该组件库其实是我为了总结自己这几年的技术经验而写的，全程亲手编写，尽量不采用第三方库，包括您现在看到的这个官网也几乎都是我写的。</p>
            <p>此项目旨在交流学习，所以不太建议您在生产环境中使用。</p>` }}
        </Markdown>
        <Markdown>{{ `## 安装 \n<p>打开终端运行下列命令：</p> <code>npm install chair-ui</code>或者<code>yarn add chair-ui</code>` }}
        </Markdown>
        <Markdown>{{ `## 开始使用 \n <p>在vue3中使用本库，在main.ts里注册组件，即可全局使用</p>
            \n<p>` }}
        </Markdown>
        <div style="margin-top: -40px;">
            <pre class="language-html" v-html="code"></pre>
        </div>
    </div>
</template>

<script setup lang='ts'>
// @ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import guide from './guide.ts'
const code = Prism.highlight(guide, Prism.languages.javascript, 'javascript')

</script>
<style lang='scss' scoped>
@use "@/views/doc/demoDoc.scss";

.language-html {
    background-color: #1a1a1a;
}
</style>