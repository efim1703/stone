<template>
    <div class="card">
        <img :src="require(`@/assets/img/cards/${ card.imageName }.png`)" alt="Изображение материала">
        <div class="card-rating d-flex justify-center">
            <img
                v-for="rating in card.rating"
                src="@/assets/svg/star.svg"
                alt="star rating icon"
            />
        </div>
        <h3 class="card-title">{{ card.title }}</h3>
        <div :class="['card-price-wrapper d-flex justify-center', { 'stroke': card.discountPrice }]">
            <p class="card-price">${{ card.price }}</p>
            <p v-if="card.discountPrice" class="card-new-price">${{ card.discountPrice }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            card: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: center;

        &-rating {
            gap: 4px;

            img {
                width: 15px;
                flex-direction: row;
            }
        }

        .card-price-wrapper {
            font-weight: 800;
            font-size: 18px;
            line-height: 23px;
            gap: 5px;
            align-items: flex-end;

            .card-new-price {
                color: $sale;
            }
        }

        h3 {
            font-size: 14px;
            font-weight: 400;
        }
    }

    .stroke .card-price {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-decoration-line: line-through;
    }

    @media (max-width: 1024px) {
        .card {
            gap: 5px;
        }
    }
</style>
