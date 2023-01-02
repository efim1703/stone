<template>
    <div class="portfolio-card">
        <div class="portfolio-card-image">
            <img :src="getPath(portfolioCard.pictureName)" :alt="`portfolio image  ${ portfolioCard.id }`">
            <div class="portfolio-card-text">
                <h3 class="portfolio-card-text-title">{{ portfolioCard.title }}</h3>
                <p class="portfolio-card-text-caption">{{ portfolioCard.caption }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PortfolioCard',
        props: {
            portfolioCard: {
                type: Object,
                require: true
            }
        },
        methods: {
            getPath(fileName) {
                return `/portfolios/${ fileName }.png`;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .portfolio-card {
        position: relative;

        .portfolio-card:hover {
            .portfolio-card-text {
                opacity: 0;
            }
        }

        &-text {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            left: 0;
            opacity: 0;

            transition: opacity .3s ease;

            &-title {
                font-size: 24px;
                font-weight: 601;
                margin-bottom: 10px;
            }

            &-caption {
                font-size: 10px;
                font-weight: 800;
                text-transform: uppercase;
            }
        }

        &-image {
            position: relative;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;

                transition: all .5s ease;
            }
        }

        &:hover {
            cursor: pointer;

            .portfolio-card-text {
                opacity: 1;
            }

            .portfolio-card-image img {
                filter: brightness(40%);
            }
        }
    }
</style>
