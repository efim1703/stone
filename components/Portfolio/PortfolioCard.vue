<template>
  <div
    class="portfolio-card"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
    <div
      :class="['portfolio-card-text', { hovering: isHovering }]"
    >
      <h3 class="portfolio-card-text-title">{{ portfolioCard.title }}</h3>
      <p class="portfolio-card-text-caption">{{ portfolioCard.caption }}</p>
    </div>
    <div :class="['portfolio-card-image', { hovering: isHovering }]">
      <img src="@/assets/img/portfolios/portrfolioImage1.png" alt="portfolio image 1">
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
        console.log(require(`@/assets/img/portfolios/${fileName}.png`))
        return require(`@/assets/img/portfolios/${fileName}.png`);
      }
    },
    data() {
      return {
        isHovering: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .portfolio-card {
    flex-basis: 30%;
    position: relative;

    &-text {
      position: absolute;
      top: 40%;
      right: 0;
      left: 0;
      z-index: 10;
      opacity: 0;

      transition: opacity .1s ease;

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
      z-index: 5;
      min-height: 190px;

      img {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        object-fit: cover;

        transition: all .25s ease;
      }
    }

    .hovering {
      opacity: 1;

      img {
        filter: brightness(40%);
      }
    }
  }

  @media (max-width: 1024px) {
    .portfolio-card {
      flex-basis: 45%;
    }
  }

  @media (max-width: 768px) {
    .portfolio-card {
      margin: 0 auto;
      flex-basis: 95%;
    }
  }

</style>
