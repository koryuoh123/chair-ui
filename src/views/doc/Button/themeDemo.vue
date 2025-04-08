<demo>## 主题<br/><br/><p>使用<code>theme</code> 来定义按钮样式。也可以通过 <code>color</code> 来自定义按钮颜色。
</p></demo>
<template>
    <div class="demo-block">

        <p>默认提供的样式</p>

        <div class="demolist">
            <chair-button>Default</chair-button>
            <chair-button theme="primary">Primary</chair-button>
            <chair-button theme="success">Success</chair-button>
            <chair-button theme="warning">Warning</chair-button>
            <chair-button theme="danger">Danger</chair-button>
            <chair-button theme="info">Info</chair-button>
        </div>

        <p>自定义颜色</p>

        <div class="demolist">
            <chair-button color="#b91bb9">Modified Color</chair-button>
        </div>
    </div>
</template>
<script setup lang='ts'>
</script>
<style lang='scss' scoped></style>