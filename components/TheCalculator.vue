<template>
 <div class="wrapper">
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
               class="radio-btn"
               title="ПРЯМАЯ"
               text-center
               :active="numberFormIsActive === 1"
               @click="numberFormIsActive = 1"
           />
           <CustomButton
               class="radio-btn"
               title="Г-ОБРАЗНАЯ"
               text-center
               :active="numberFormIsActive === 2"
               @click="numberFormIsActive = 2"
           />
           <CustomButton
               class="radio-btn"
               title="П-ОБРАЗНАЯ"
               text-center
               :active="numberFormIsActive === 3"
               @click="numberFormIsActive = 3"
           />
         </div>
       </div>
       <div class="body d-flex ">
         <div class="body-img">
           <img :src="require(`@/assets/svg/calculator${ numberFormIsActive }.svg`)" width="100%">
         </div>
         <div class="body-text d-flex flex-column align-center">
           <span>Укажите размеры (в мм)</span>
           <div class="inputs">

           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import CustomButton from "~/components/ui/CustomButton.vue";

export default {
  name: "TheCalculator",
  components: {CustomButton},
  data() {
    return {
      numberFormIsActive: 1
    }
  },
  methods: {

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
          width: calc(100%/3 - 4px/3);
          border-radius: 0px;
          text-align: center;
        }
      }
    }

    .body {
      &-img {
        width: 50%;
      }

      &-text {
        width: 50%;

        span {
          font-weight: 700;
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