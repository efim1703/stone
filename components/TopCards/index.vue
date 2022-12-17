<template>
 <div class="top-cards">
   <h3 class="h-subtitle">Наш самый продаваемый продукт</h3>
   <div class="title-wrapper d-flex justify-between align-center">
     <h2 class="h-title">Остальное вы можете посмотреть по ссылке</h2>
     <CustomButton
       class="top-cards-button"
       title="Продолжить просмотр"
       arrow
     />
   </div>
   <div class="top-cards-list d-flex justify-between">
     <CardComponent
       v-for="card in topCardsList"
       :key="card.index"
       :card="card"
       class="top-cards-list-item"
     />
   </div>
 </div>
</template>

<script>
  import CustomButton from "@/components/ui/CustomButton.vue";

  export default {
    name: "TopCards",
    components: { CustomButton },
    data() {
      return {
        topCardsList: [
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
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-cards {
    padding: 10% 0;

    .title-wrapper {
      margin-bottom: 2%;

      .h-title {
        margin-right: 10%;
      }
    }

    &-button {
      height: fit-content;
      :deep(.title) {
        width: 200px;
      }
    }

    &-list {
      flex-wrap: wrap;

      &-item {
        width: calc(100%/4 - 160px/3);
      }
    }
  }

  @media (max-width: 1024px) {
    .top-cards {
      text-align: center;
      .h-subtitle {
        margin-bottom: 2%;
      }

      .title-wrapper {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .h-title {
          width: 100%;
          margin: 0 0 2%;
        }
      }

      &-list {
        margin-top: 20px;
        grid-gap: 20px;

        &-item {
          width: calc(100%/2 - 40px/2);
        }
      }
    }
  }

  @media (max-width: 375px) {
    .top-cards-list-item {
      width: 100%;
    }
  }
</style>

