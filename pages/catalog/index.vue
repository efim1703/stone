<template>
    <div class="catalog">
        <div class="container">
            <div class="catalog-title">
                <h3 class="h-subtitle">Каталог</h3>
                <h1 class="h1-title">Каталог искусственного камня</h1>
                <p>В нашем каталоге представлены более 1000 цветов искусственного камня для кухни, ванной и других
                    помещений вашего дома с различными эффектами, цветовыми вариантами и текстурами самых популярных
                    производителей и коллекций. Вся продукция находится в наличии на складе или будет доставлена в
                    кратчашие
                    сроки.
                </p>
                <p>Вы можете заказать изделие из материала или приобрести листы искусственного камня.</p>
            </div>
            <div class="catalog-brands">FILLER</div>
            <div class="catalog-sort">
                <custom-button
                    @click="isTable=!isTable"
                    title="Фильтр"
                    class="catalog-sort-button"
                />
                <dropdown-select
                    :items-list="sortList"
                    :title="sortTitle"
                    @item-checked="itemChecked($event)"
                    class="catalog-sort-dropdown"
                />
            </div>
            <div class="catalog-body">
                <div v-if="isTable" class="catalog-body-filters">
                    <dropdown-checkbox
                        v-for="item in checkboxList"
                        :key="item.id"
                        :title="item.title"
                        :items-list="item.list"
                    />
                </div>
                <div class="catalog-body-list">
                    <MeterialCard
                        v-for="card in cardList"
                        :key="card.id"
                        :card="card"
                        class="catalog-body-list-item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DropdownSelect from '@/components/ui/DropdownSelect.vue';
    import DropdownCheckbox from "@/components/ui/DropdownCheckbox.vue";
    import AppRadio from "@/components/ui/AppRadio.vue";
    import CustomButton from "@/components/ui/CustomButton";
    import customBreakpoint from '@/mixins/customBreakpoint'

    export default {
        name: 'index',
        components: {CustomButton, AppRadio, DropdownCheckbox, DropdownSelect},
        mixins: [ customBreakpoint ],
        data() {
            return {
                isOpen: false,
                sortList: [
                    {id: 1, name: 'по возрастанию цены', checked: false},
                    {id: 2, name: 'по убыванию цены', checked: false},
                    {id: 3, name: 'по дате', checked: false},
                    {id: 4, name: 'по популярности', checked: false},
                ],
                checkboxList: [
                    {
                        id: 1,
                        title: 'Раздел',
                        list: [
                            {id: 1, name: 'Раздел 1', checked: false},
                            {id: 2, name: 'Раздел 2', checked: false},
                            {id: 3, name: 'Раздел 3', checked: false},
                            {id: 4, name: 'Раздел 4', checked: false},
                        ]
                    },
                    {
                        id: 2,
                        title: 'Бренд',
                        list: [
                            {id: 5, name: 'Бренд 1', checked: false},
                            {id: 6, name: 'Бренд 2', checked: false},
                            {id: 7, name: 'Бренд 3', checked: false},
                            {id: 8, name: 'Бренд 4', checked: false},
                        ]
                    },
                    {
                        id: 3,
                        title: 'Страна',
                        list: [
                            {id: 9, name: 'Страна 1', checked: false},
                            {id: 10, name: 'Страна 2', checked: false},
                            {id: 11, name: 'Страна 3', checked: false},
                            {id: 12, name: 'Страна 4', checked: false},
                        ]
                    },
                ],
                countryList: [
                    {id: 1, name: 'Страна 1', checked: false},
                    {id: 2, name: 'Страна 2', checked: false},
                    {id: 3, name: 'Страна 3', checked: false},
                    {id: 4, name: 'Страна 4', checked: false},
                ],
                cardList: [
                    {
                        id: 1,
                        rating: 2,
                        title: 'Larunen Nalson paln',
                        price: '68.00',
                        imageName: 'cardImage1'
                    },
                    {
                        id: 2,
                        rating: 3,
                        title: 'Larunen Nalson paln',
                        price: '18.00',
                        discountPrice: '9.00',
                        imageName: 'cardImage1'
                    },
                    {
                        id: 3,
                        rating: 4,
                        title: 'Larunen Nalson paln',
                        price: '168.00',
                        discountPrice: '9.00',
                        imageName: 'cardImage1'
                    },
                    {
                        id: 4,
                        rating: 5,
                        title: 'Larunen Nalson paln',
                        price: '34.00',
                        imageName: 'cardImage1'
                    },
                    {
                        id: 5,
                        rating: 5,
                        title: 'Larunen Nalson paln',
                        price: '34.00',
                        imageName: 'cardImage1'
                    },
                    {
                        id: 6,
                        rating: 5,
                        title: 'Larunen Nalson paln',
                        price: '34.00',
                        imageName: 'cardImage1'
                    },
                    {
                        id: 7,
                        rating: 5,
                        title: 'Larunen Nalson paln',
                        price: '34.00',
                        imageName: 'cardImage1'
                    },
                    {
                        id: 8,
                        rating: 5,
                        title: 'Larunen Nalson paln',
                        price: '34.00',
                        imageName: 'cardImage1'
                    },
                    {
                        id: 9,
                        rating: 5,
                        title: 'Larunen Nalson paln',
                        price: '34.00',
                        imageName: 'cardImage1'
                    },
                ]
            }
        },
        methods: {
            clearArray(array) {
                array.map(item => item.checked = false)
            },
            itemChecked(id) {
                if (this.sortList.find(el => el.id === id).checked === true) {
                    this.clearArray(this.sortList)
                    return
                }
                this.clearArray(this.sortList)
                this.sortList.find(el => el.id === id).checked = true
            }
        },
        computed: {
            sortTitle: function () {
                return this.sortList.find(el => el.checked === true)?.name ?? 'по умолчанию'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .catalog {
        margin-top: 124px;

        &-title {
            width: 75%;

            p {
                margin-bottom: 28px;

                @media (max-width: 768px) {
                    margin-bottom: 8px;
                }
            }

            @media (max-width: 1024px) {
                width: 100%;
            }

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        &-brands {
            background: red;
            height: 102px;
            width: 100%;
            margin-bottom: 28px;

            @media (max-width: 768px) {
                margin-bottom: 12px;
            }
        }

        &-sort {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;

            @media (max-width: 768px) {
                margin-bottom: 12px;
            }

            &-button {
               display: none;

                @media (max-width: 768px) {
                    display: block;
                }
            }

            &-dropdown {
                justify-self: right;
                z-index: 5;
            }
        }


        &-body {
            display: flex;
            column-gap: 40px;

            @media (max-width: 768px) {
                flex-wrap: wrap;
            }

            &-filters {
                width: 25%;

                @media (max-width: 768px) {
                    width: 100%;
                }
            }

            &-list {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                &-item {
                    width: calc(100% / 4 - 60px / 3);
                    margin-bottom: 40px;

                    @media (max-width: 1024px) {
                        width: calc(100% /2 - 20px);
                    }

                    @media (max-width: 768px) {
                        width: 100%;
                        margin-bottom: 20px;
                    }
                }
            }
        }

        @media (max-width: 768px) {
            margin-top: 124px;
        }
    }
</style>
