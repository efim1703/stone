<!--<template>-->
<!--    <div class="wrapper">-->
        <div class="container">
            <h3 class="h-subtitle">Калькултяор</h3>
            <h2 class="h-title">Рассчитайте стоимость ваего изделия из искусственного камня</h2>
            <div class="calculator">
                <div class="header">
                    <div class="header-title">
                        ВЫБЕРИТЕ ФОРМУ СТОЛЕШНИЦЫ
                    </div>
                    <div class="header-radio d-flex align-center justify-between ">
                        <CustomButton
                            v-for="(name, index) of typeNames"
                            :key="index"
                            class="radio-btn"
                            :title="name"
                            text-center
                            :active="numberFormIsActive === index + 1"
                            @click="changeType(index + 1)"
                        />
                    </div>
                </div>
                <div class="body d-flex ">
                    <div class="body-img">
                        <img :src="require(`@/assets/svg/calculator${ numberFormIsActive }.svg`)" width="100%">
                    </div>
                    <div class="body-inputs d-flex flex-column align-center" v-if="step">
                        <span>Укажите размеры (в мм)</span>
                        <div class="input-list d-flex">
                            <InputSize
                                v-for="(item, index) of getActiveInputSizeList"
                                :key="index"
                                :title="item.title"
                                @input="item.value = $event"
                                :value="item.value"
                                class="input-list-item"
                            />
                        </div>
                    </div>
                    <div class="body-inputs d-flex flex-column align-center">
                        <span>Укажите размеры (в мм)</span>
                        <div class="input-list d-flex">
                            <InputSize
                                v-for="(item, index) of getActiveInputSizeList"
                                :key="index"
                                :title="item.title"
                                @input="item.value = $event"
                                :value="item.value"
                                class="input-list-item"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "@/components/ui/CustomButton.vue";
import InputSize from "@/components/ui/InputSize.vue";

export default {
    name: "TheCalculator",
    components: {CustomButton, InputSize},
    data() {
        return {
            typeNames: [
                'ПРЯМАЯ',
                'Г-ОБРАЗНАЯ',
                'П-ОБРАЗНАЯ',
            ],
            numberFormIsActive: 1,
            inputSizeList1: [
                { title: 'Сторона А', value: 600 },
                { title: 'Сторона B', value: 3000 },
            ],
            inputSizeList2: [
                { title: 'Сторона А', value: 1000 },
                { title: 'Сторона B', value: 3000 },
                { title: 'Сторона C', value: 600 },
                { title: 'Сторона D', value: 600 },
            ],
            inputSizeList3: [
                { title: 'Сторона А', value: 1000 },
                { title: 'Сторона B', value: 3000 },
                { title: 'Сторона C', value: 2000 },
                { title: 'Сторона D', value: 1800 },
                { title: 'Сторона F', value: 600 },
                { title: 'Сторона E', value: 600 },
                { title: 'Глубина столешницы', value: 600 },
            ]
        }
    },
    computed: {
      getActiveInputSizeList() {
          const activeArr = 'inputSizeList' + this.numberFormIsActive
          return this[activeArr]
      }
    },
    methods: {
        changeType(numberType) {
            this.numberFormIsActive = numberType
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    .calculator {
        width: 100%;

        .header {
            width: 100%;
            margin-top: 60px;

            &-title {
                font-weight: 600;
                font-size: 30px;
            }

            &-radio {
                margin: 40px 0 60px;

                .radio-btn {
                    width: calc(100% / 3 - 4px / 3);
                    border-radius: 0px;
                    text-align: center;
                }
            }
        }

        .body {
            &-img {
                width: 50%;
            }

            &-inputs {
                width: 50%;

                span {
                    font-size: 20px;
                    font-weight: 700;
                }

                .input-list {
                    width: 100%;
                    margin-top: 16px;
                    flex-wrap: wrap;

                    &-item {
                        flex: 1 1 calc(100%/2);
                        text-align: center;
                        margin-bottom: 8px;
                    }
                }
            }
        }
    }

    .container {
        margin: 120px auto 100px;
    }

    .h-subtitle {
        margin-bottom: 10px;
    }
}
</style>