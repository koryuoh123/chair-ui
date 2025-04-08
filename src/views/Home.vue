<template>
    <div class="home-wrapper">
        <div class="content">
            <div class="decoration"></div>
            <div class="introduce-wrapper">

                <div class="project-name">
                    <div class="logo">
                        <img src="@/assets/imgs/logo2.png" alt="logo" />
                    </div>
                    Chair UI
                </div>
                <div class="project-description">Simple and easy to use</div>
                <div class="project-description">A Vue 3 based component library</div>
                <chair-button class="start-button" size="large" @click="handleStart">
                    GET STARTED
                </chair-button>
            </div>
            <div class="technology-wrapper">
                <div class="grid-wrapper">
                    <div class="grid-logo">
                        <SvgIcon iconName="vuelogo-icon" />
                    </div>
                    <div class="grid-item grid-item-title">Vue 3</div>
                    <div class="grid-item grid-item-description">Use Vue3 Composition API</div>
                </div>
                <div class="grid-wrapper">
                    <div class="grid-logo">
                        <SvgIcon iconName="typescript-icon" />
                    </div>
                    <div class="grid-item grid-item-title">TypeScript</div>
                    <div class="grid-item grid-item-description">Source code written in TypeScript (non-strict check)
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import router from '@/router'

// 如果视口小于1024px，则设置html的font-size为100vw/1024*16
const handleResize = () => {
    const width = document.documentElement.clientWidth
    if (width < 1000) {
        if (width < 600) {
            document.documentElement.style.fontSize = `${width / 1024 * 16}px`
        } else {
            document.documentElement.style.fontSize = `${width / 1024 * 16}px`
        }
    } else {
        document.documentElement.style.fontSize = '16px'
    }
}

onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

const handleStart = () => {
    router.push('/guide')
}
</script>

<style scoped lang="scss">
.home-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    // overflow: hidden;


    .content {

        display: flex;
        flex-direction: column;
        // justify-content: center;
        // align-items: center;

        background: linear-gradient(180deg, rgba(27, 23, 45, 0.98) 0%, rgba(3, 0, 20, 1) 20%);

        flex-grow: 1;
        height: 0;
        width: 100%;
        position: relative;
        // overflow: hidden;

        .decoration {
            position: absolute;
            top: 10px;
            left: 10%;
            width: 80%;
            height: 30%;
            background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0);
            background-size: 40px 40px;
            pointer-events: none;
            z-index: 0;
        }

        .introduce-wrapper {
            margin-top: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 80%;
            max-width: 1024px;
            margin-left: auto;
            margin-right: auto;
            min-height: 300px;

            // border: 1px dashed #ffffff33;


            .project-name {
                font-family: 'titleBlack';
                font-size: 6.25rem;
                font-weight: normal;
                letter-spacing: 0.1em;
                text-shadow: 0 0 5px #9384E5, 0 0 2px #9384E5, 0 0 2px #9384E5, 0 0 2px #9384E5;
                // 字体描边
                -webkit-text-stroke: 1px #ffffff45;
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
                background-image: linear-gradient(90deg, #B8B5D1 0%, #7E6DE6 100%);
                margin-bottom: 7vh;
                display: flex;
                align-items: center;
                gap: 1.5rem;

                .logo {
                    height: 8rem;

                    img {
                        height: 100%;
                    }
                }
            }

            .project-description {

                font-size: 20px;
                // font-weight: 500;
                letter-spacing: 0.1em;
                text-shadow: 0 0 2px #a497e580;
                // 字体描边
                -webkit-text-stroke: 1px #ffffff45;
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
                background-image: linear-gradient(180deg, #BAB3DB 0%, #9D91DD 100%);
                margin-bottom: 2rem;
            }

            :deep(.start-button) {
                background: #030014;
                margin-top: 10vh;
                font-size: 2rem;

                a {
                    font-size: 2rem;
                }

            }
        }

        .technology-wrapper {
            position: absolute;
            bottom: 6.25rem;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            width: 100%;


            .grid-wrapper {
                width: 29rem;
                display: grid;
                grid-template-areas:
                    "logo item1"
                    "logo item2";
                grid-template-columns: 3.75rem 25rem;
                grid-template-rows: 2rem 4rem;

                .grid-logo {
                    grid-area: logo;
                    align-self: center;
                    margin-bottom: 1.5rem;

                    svg {
                        width: 100%;
                        height: 100%;
                    }
                }

                .grid-item {
                    font-size: 1.25rem;
                    letter-spacing: 0.1em;
                    text-shadow: 0 0 2px #a497e580;
                    // 字体描边
                    -webkit-text-stroke: 1px #ffffff45;
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                    background-image: linear-gradient(180deg, #BAB3DB 0%, #9D91DD 100%);

                    &.grid-item-title {
                        grid-area: item1;
                        align-self: flex-end;
                        padding-left: 1em;
                    }

                    &.grid-item-description {
                        grid-area: item2;
                        padding-left: 1em;
                    }
                }
            }
        }
    }
}
</style>