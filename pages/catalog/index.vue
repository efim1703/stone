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
            <div class="catalog-main">
                <dropdown-select
                    :items-list="sortList"
                    :title="sortTitle"
                    @item-checked="itemChecked($event)"
                    class="catalog-main-dropdown"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import DropdownSelect from '@/components/ui/DropdownSelect.vue';

    export default {
        name: 'index',
        components: { DropdownSelect },
        data() {
            return {
                sortList: [
                    { id:1, name: 'По возрастанию цены', checked: false },
                    { id:2, name: 'По убыванию цены', checked: false },
                    { id:3, name: 'По дате', checked: false },
                    { id:4, name: 'По популярности', checked: false },
                ]
            }
        },
        methods: {
            clearArray(array) {
                array.map(item => item.checked = false)
            },
            itemChecked(id) {
                if (this.sortList.find( el => el.id === id).checked === true) {
                    this.clearArray(this.sortList)
                    return
                }
                this.clearArray(this.sortList)
                this.sortList.find( el => el.id === id).checked = true
            }
        },
        computed: {
            sortTitle: function() {
                return this.sortList.find( el => el.checked === true)?.name ?? 'Сортивка по умолчанию'
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

        &-main {
            &-dropdown {
                float: right;
            }
        }

        @media (max-width: 768px) {
            margin-top: 152px;
        }
    }
</style>
