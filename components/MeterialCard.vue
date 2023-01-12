<template>
    <div @click="directToCardPage(card)" class="card">
        <div class="p-relative">
            <img class="card-image" :src="require(`@/assets/img/cards/${ card.imageName }.png`)" alt="Material card image">
            <div
                class="btn-add-in-favorites opacity-zero flex-center"
                @click.stop
                @click="changeFavoriteStatus()"
            >
                <svg v-if="!isFavorite" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="36" height="36" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" enable-background="red"><g><g><g><path d="M489.338,94.229C452.804,34.557,401.883,21.708,365.6,21.437c-30.941-0.206-61.602,8.653-88.573,25.664L256,60.273    l-20.988-13.147C208.003,30.09,177.373,21.197,146.4,21.437C110.116,21.709,59.196,34.558,22.662,94.23    c-29.455,48.109-30.231,105.169-2.131,156.551c21.733,39.74,55.447,71.461,88.05,102.138c5.743,5.403,11.166,10.506,16.563,15.688    c20.223,19.418,40.701,38.142,60.506,56.249c19.669,17.982,40.008,36.578,59.964,55.74l10.386,9.972l10.388-9.972    c19.956-19.161,40.295-37.756,59.964-55.74c19.804-18.107,40.283-36.831,60.506-56.249c5.396-5.181,10.82-10.284,16.563-15.688    c32.603-30.676,66.316-62.398,88.05-102.138C519.569,199.399,518.792,142.338,489.338,94.229z M465.152,236.389    c-19.445,35.555-51.393,65.614-82.288,94.685c-5.545,5.217-11.278,10.611-16.784,15.898c-19.958,19.164-40.3,37.762-59.971,55.748    c-16.418,15.011-33.298,30.444-50.112,46.346c-16.814-15.903-33.693-31.335-50.111-46.346    c-19.671-17.985-40.013-36.584-59.971-55.748c-5.506-5.287-11.239-10.681-16.784-15.898c-30.896-29.07-62.843-59.13-82.288-94.685    c-22.803-41.697-22.294-87.805,1.397-126.501c23.559-38.48,56.66-58.149,98.382-58.461c0.319-0.002,0.633-0.003,0.952-0.003    c24.887,0,49.57,7.277,71.475,21.095l36.95,23.146l36.99-23.171c22.145-13.969,47.195-21.268,72.387-21.066    c41.722,0.312,74.823,19.981,98.382,58.461C487.447,148.584,487.956,194.691,465.152,236.389z" fill="currentColor" data-original="#000000"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="36" height="36" x="0" y="0" viewBox="0 0 485 485" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M343.611,22.543c-22.614,0-44.227,5.184-64.238,15.409c-13.622,6.959-26.135,16.205-36.873,27.175  c-10.738-10.97-23.251-20.216-36.873-27.175c-20.012-10.225-41.625-15.409-64.239-15.409C63.427,22.543,0,85.97,0,163.932  c0,55.219,29.163,113.866,86.678,174.314c48.022,50.471,106.816,92.543,147.681,118.95l8.141,5.261l8.141-5.261  c40.865-26.406,99.659-68.479,147.681-118.95C455.837,277.798,485,219.151,485,163.932C485,85.97,421.573,22.543,343.611,22.543z" fill="currentColor" data-original="#000000"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg>
            </div>
        </div>
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
import {mapActions} from 'vuex'

export default {
    name: "CardComponent",
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isFavorite: false
        }
    },
    methods: {
        ...mapActions(['addFavoriteMaterial', 'removeFavoriteMaterial']),
        changeFavoriteStatus() {
            if (this.isFavorite) {
                this.removeFavoriteMaterial(this.card)
            } else {
                this.addFavoriteMaterial(this.card)
            }

            this.isFavorite = !this.isFavorite
        },
        directToCardPage(card) {
            this.$router.push({ path:`catalog/${ card.id }` });
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
    cursor: pointer;

    &-image {
        width: 100%;
    }

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

    .btn-add-in-favorites {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $red !important;
        transition: 0.5s;
    }

    &:hover .btn-add-in-favorites {
        opacity: 1;
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
