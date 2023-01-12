<template>
    <div class="card-page">
        <div class="container">
            <img
                src="http://localhost:3000/_nuxt/assets/img/cards/cardImage1.png"
                alt="Card image"
                class="card-page-image"
            >
            <div class="card-page-info">
                <h1 class="h1-title">{{ cardFiller.title }}</h1>
                <div class="card-page-info-brand">
                    <p>Брэнд: {{ card.brand }}</p>
                    <p>Страна: {{ card.country }}</p>
                    <p>Материал: {{ card.material }}</p>
                </div>
                <h2 class="h2-title">{{ cardFiller.description }}</h2>
                <p class="card-page-info-text">
                    Для расчёта стоимости изделия из искуственного камня {{ cardFiller.title }}
                    в Москве и Московской области <a>!заполните заявку на сайте!</a>, либо свяжитесь с
                    нами по телефону <a href="tel:83333334444">8 333 333 44 44</a>. Менеджер проконсультирует вас, произведёт примерный расчет
                    стоимости и назначит выезд замерщика на удобное для вас время
                </p>
                <div :class="['card-page-price-wrapper d-flex', { 'stroke': cardFiller.discountPrice }]">
                    <p class="card-page-price">${{ cardFiller.price }}</p>
                    <p v-if="cardFiller.discountPrice" class="card-page-new-price">${{ cardFiller.discountPrice }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cardPage',
        created() {
            this.fetchCard()
        },
        data() {
          return {
              cardFiller: {
                  id: 1,
                  rating: 2,
                  title: 'Larunen Nalson paln',
                  description: 'Очень классный камень, очень красиво светится',
                  price: '68.00',
                  discountPrice: '34.00',
                  imageName: 'cardImage1'
              },
              card: {}
          }
        },
        methods: {
            async fetchCard() {
                const { data } = await this.$axios.get(`/api/materials/get/${ this.$route.params.id }`)
                this.card = data.data.materials[0]
                console.log(...data.data.materials)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-page {
        margin: 124px 0;

        @media (max-width: 425px) {
            margin-top: 148px;
        }

        &-info {
            display: flex;
            justify-content: space-around;
            flex-direction: column;

            @media (max-width: 1040px) {
                row-gap: 28px;
            }

            @media (max-width: 768px) {
                text-align: center;
                row-gap: 20px;
            }

            .h1-title {
                margin-bottom: 0;
                color: $action;
            }

            &-brand {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .h2-title {
                line-height: 24px;
                font-size: 24px;
            }

            &-text {
                font-size: 18px;
                line-height: 28px;
            }

            .card-page-price-wrapper {
                font-weight: 800;
                font-size: 32px;
                line-height: 23px;
                gap: 5px;
                align-items: flex-end;

                @media (max-width: 768px) {
                    margin: 0 auto;
                }

                .card-page-new-price {
                    color: $sale;
                }
            }

            a {
                text-decoration: underline;
            }

            .stroke .card-page-price {
                font-weight: 500;
                font-size: 28px;
                line-height: 20px;
                text-decoration-line: line-through;
            }
        }

        .container {
            display: flex;
            gap: 40px;

            @media (max-width: 1040px) {
                flex-direction: column;
            }

            @media (max-width: 768px) {
                row-gap: 20px;
            }

            img {
                height: 500px;

                @media (max-width: 1040px) {
                    height: 100%;
                }
            }
        }
    }
</style>
