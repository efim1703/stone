<template>
    <div class="title-section">
        <div class="container d-flex full-height">
            <div class="title-section-left d-flex align-center">
                <div class="info">
                    <div class="h1-title">
                        Делаем изделия из
                        искуственного камня
                        на любой вкус
                    </div>
                    <div class="info-button">
                        <custom-button title="Расчитать стоимость" arrow></custom-button>
                    </div>
                </div>
            </div>
            <div class="title-section-right d-flex">
                <img class="img first" src="@/assets/img/title-img1.png">
                <img class="img second" src="@/assets/img/title-img2.png">
                <img class="img third" src="@/assets/img/title-img3.png">
            </div>
        </div>
    </div>
</template>

<script>
    import CustomButton from '@/components/ui/CustomButton.vue';


    export default {
        name: 'TitleSection',
        components: { CustomButton },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .title-section {
        height: 764px;
        background: linear-gradient(0deg, rgba(35, 38, 45, 0.9), rgba(35, 38, 45, 0.9)), url('@/assets/img/background.jpg');
        backdrop-filter: blur(5px);
        padding-top: 84px;

        &-left {
            width: 40%;
            height: 100%;

            .info-text {
                font-weight: 700;
                font-size: 40px;
                margin-bottom: 28px;
            }
        }

        &-right {
            width: 60%;
            height: 100%;
            position: relative;

            .img {
                background-size: cover;
                position: absolute;

                &.first {
                    bottom: -64px;
                    left: -160px;
                    width: 830.4px;
                    height: auto;
                    animation: slide-first-img 2s ease-out;
                }

                &.second {
                    bottom: 160px;
                    left: 342px;
                    width: 448.7px;
                    height: auto;
                    animation: slide-second-img 2.5s ease-out;
                }

                &.third {
                    bottom: 160px;
                    left: 620px;
                    width: 448.7px;
                    height: auto;
                    animation: slide-third-img 3s ease-out;
                }
            }

            @keyframes slide-first-img {
                0% {
                    opacity: 0;
                    transform: translateX(50%);
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes slide-second-img {
                0% {
                    opacity: 0;
                    transform: translateX(50%);
                }
                40% {
                    opacity: 0;
                    transform: translateX(50%);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            @keyframes slide-third-img {
                0% {
                    opacity: 0;
                    transform: translateX(50%);
                }
                51.4% {
                    opacity: 0;
                    transform: translateX(50%);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        }

        @media (max-width: 1024px) {
            &-right {
                width: 40%;

                .img {
                    &.first {
                        margin: auto auto 24px 0;
                        width: calc(1038px * 0.7);
                        height: calc(950px * 0.7);
                        animation: none;
                    }

                    &.second {
                        display: none;
                    }

                    &.third {
                        display: none;

                    }
                }

            }
        }
        @media (max-width: 768px) {
            &-right {
                display: none;
            }
            &-left {
                width: 80%;
                margin: 0 auto;

                .info-text {
                    text-align: center;
                }

                .info-button button {
                    margin: 0 auto;
                }
            }
        }
        @media (max-width: 425px) {
            &-left .info-text {
                font-size: 32px;
            }
        }
    }


</style>
