<template>
  <div class="about-us">
    <h3 class="h-subtitle">Почему выбрали именно нас</h3>
    <h2 class="h-title">Чрезвычайно высокий стандарт удовлетворенности клиентов</h2>
    <div class="about-us-list">
      <AboutUsItem
        v-for="(card,index) in cardList"
        :card = "card"
        :key = "index"
      />
    </div>

  </div>
</template>

<script>
  import AboutUsItem from "~/components/AboutUs/AboutUsItem.vue";

  export default {
    name: 'AboutUs',
    components: { AboutUsItem },
    data() {
      return {
        cardList: [
          {
            title: 'Полный сервис',
            caption: 'Выполняем выезды на замеры: изготовку, доставку и установку изделий',
            svgName: 'table'
          },
          {
            title: '>20 лет',
            caption: 'Наша компания в большом бизнесе больше 20 лет',
            svgName: 'age'
          },
          {
            title: 'Гарантия',
            caption: 'Гарантия качества нашего товара 1 год.',
            svgName: 'garant'
          },
          {
            title: 'Ассортимент',
            caption: 'Мы предоставляем широкий ассортимент камня в нашем каталоге.',
            svgName: 'assortment'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-us {
    padding: 10% 0;

    &-list {
      display: flex;
    }
  }

  .h-subtitle {
    margin-bottom: 10px;
  }

  .h-title {
    display: inline-block;
    width: 70%;
    margin-bottom: 40px;
  }

  @media (max-width: 1024px) {
    .h-title {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .about-us {
      text-align: center;

      &-list {
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
</style>
