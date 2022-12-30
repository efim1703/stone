<template>
    <div class="portfolio">
        <h3 class="h-subtitle">Наш проект</h3>
        <h2 class="h-title">Изучите дизайн наших кухонь</h2>
        <p class="portfolio-text">Изучите готовые кухни некоторых наших клиентов и посмотрите, как они создали кухню
            своей мечты, получая идеи для своей собственной</p>
        <div class="portfolio-list">
            <portfolio-card
                v-for="(portfolioCard, index) in portfolioCardList"
                :key='index'
                :portfolioCard='portfolioCard'
                class="portfolio-list-item"
            />
        </div>
    </div>
</template>

<script>
import PortfolioCard from "~/components/Portfolio/PortfolioCard.vue";

export default {
    name: 'Portfolio',
    components: {PortfolioCard},
    data() {
        return {
            portfolioCardList: [
                {
                    title: 'Проект Кухни 12',
                    caption: 'Богемный/модерн',
                    pictureName: 'portfolioImage2'
                },
                {
                    title: 'Проект Кухни 12',
                    caption: 'Богемный/модерн',
                    pictureName: 'portfolioImage3'
                },
                {
                    title: 'Проект Кухни 12',
                    caption: 'Богемный/модерн',
                    pictureName: 'portfolioImage1'
                },
                {
                    title: 'Проект Кухни 12',
                    caption: 'Богемный/модерн',
                    pictureName: 'portfolioImage4'
                },
                {
                    title: 'Проект Кухни 12',
                    caption: 'Богемный/модерн',
                    pictureName: 'portfolioImage5'
                },
                {
                    title: 'Проект Кухни 12',
                    caption: 'Богемный/модерн',
                    pictureName: 'portfolioImage6'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.portfolio {
    padding: 0 0 10%;
    text-align: center;

    & > *:not(:last-child) {
        margin-bottom: 2%;
    }

    &-list {
        display: flex;
        gap: 25px;
        flex-wrap: wrap;
        justify-content: space-between;

        &-item {
            width: calc(100% / 3 - 50px / 3);

            @media (max-width: 1024px) {
                width: calc(100% / 2 - 25px / 2);
            }

            @media (max-width: 768px) {
                width: calc(100% - 50px);
                margin: 0 auto;
            }
        }
    }

    p {
        color: $light;
        width: 50%;
        margin: 0 auto;
    }
}

@media (max-width: 1024px) {
    .portfolio {
        &-list {
            margin-top: 20px;
        }

        p {
            width: 80%;
        }
    }
}

@media (max-width: 768px) {
    .portfolio {
        p {
            width: 95%;
        }
    }
}
</style>
