<demo>## 禁用<br/><br/><p>你可以使用<code>disabed</code> 来定义按钮是否被禁用。</p><p>使用 <code>disabled</code> 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p></demo>
<template>
    <div class="demo-block">
        <div class="demolist">
            <chair-button disabled>Default</chair-button>

            <chair-button disabled theme="primary">Primary</chair-button>

            <chair-button disabled theme="success">Success</chair-button>

            <chair-button disabled theme="warning">Warning</chair-button>

            <chair-button disabled theme="danger">Danger</chair-button>

            <chair-button disabled theme="info">Info</chair-button>
        </div>
    </div>
</template>
<script setup lang='ts'>
</script>
<style lang='scss' scoped></style>