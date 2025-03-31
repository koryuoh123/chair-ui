<template>
    <div class="home-wrapper">
        <Topnav />
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
                <div class="start-button">
                    <span class="chair-button-decoration-border"></span>
                    <RouterLink to="/components">GET STARTED
                    </RouterLink>
                </div>
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
import Topnav from '@/components/Topnav.vue'
import Asidenav from '@/components/Asidenav.vue'
import { RouterLink, RouterView } from 'vue-router'
import SvgIcon from '@/components/SvgIcon.vue'
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
            height: 300px;
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

            .start-button {
                background-color: #030014;
                margin-top: 10vh;

                position: relative;
                display: flex;


                &:hover {

                    .chair-button-decoration-border:before,
                    .chair-button-decoration-border:after,
                    &:before,
                    &:after {
                        width: calc(95% / 2);
                        height: calc(90% / 2);
                        background-color: #fff;

                        box-shadow: 0 0 5px #9384E5, 0 0 5px #9384E5, inset 0 0 5px #9384E5, inset 0 0 5px #9384E5;
                    }

                    a {
                        color: #cfc9f1;
                        text-shadow: 0 0 10px #9384E5, 0 0 20px #9384E5, 0 0 80px #9384E5, 0 0 60px #9384E5;

                    }
                }

                &:before,
                &:after,
                .chair-button-decoration-border:before,
                .chair-button-decoration-border:after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background-color: #9384E5;
                    transition: .5s;
                    z-index: 1;
                }

                .chair-button-decoration-border:before {
                    top: -2px;
                    left: -2px;
                }

                .chair-button-decoration-border:after {
                    top: -2px;
                    right: -2px;
                }

                &:before {
                    bottom: -2px;
                    left: -2px;
                }

                &:after {
                    bottom: -2px;
                    right: -2px;
                }

                a {

                    padding: 4px 30px;
                    // border-radius: 5px;
                    background-color: inherit;
                    text-decoration: none;
                    z-index: 2;
                    color: #9384E5;

                    letter-spacing: 0.1em;
                    font-size: 2rem;
                    font-weight: 500;
                    font-family: 'titleBlack';
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