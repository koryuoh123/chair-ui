<demo>## 加载中<br/><br/><p>使用<code>loading</code> 来定义按钮是否正在加载。</p></demo>
<template>
    <div class="demo-block">
        <div class="demolist">

            <chair-button loading>Default</chair-button>

            <chair-button theme="primary" loading>Primary</chair-button>

            <chair-button theme="success" loading>Success</chair-button>

            <chair-button theme="warning" loading>Warning</chair-button>

            <chair-button theme="danger" loading>Danger</chair-button>

            <chair-button theme="info" loading>Info</chair-button>


        </div>
        <p>你可以通过loading-icon插槽来覆盖loading的图标</p>
        <div class="demolist">
            <chair-button theme="info" loading>
                <template #loading-icon>
                    <!-- 替换成需要的元素 -->
                    <SvgIcon iconName="loading-icon" style="width: .8em; height: .8em;" />
                </template>
                Info</chair-button>
        </div>
    </div>
</template>
<script setup lang='ts'>
</script>
<style lang='scss' scoped></style>