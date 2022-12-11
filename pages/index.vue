<template>
  <div class="page">
    <div class="title-section">
      <div class="container d-flex full-height">
        <div class="title-section-left d-flex align-center">
          <div class="info">
            <div class="info-text">
              Делаем изделия из
              искуственного камня
              на любой вкус
            </div>
            <div class="info-button">
              <custom-button title="Расчитать стоимость" arrow>
                <template v-slot:icon>
                </template>
              </custom-button>
            </div>
          </div>
        </div>
        <div class="title-section-right d-flex">
          <img class="img first" src="@/assets/img/title-img1.png" >
          <img class="img second" src="@/assets/img/title-img2.png" >
          <img class="img third" src="@/assets/img/title-img3.png" >
        </div>
      </div>
    </div>
    <div class="section" style="height: 1000px">

    </div>
  </div>
</template>

<script>
import CustomButton from "~/components/ui/CustomButton.vue";

export default {
  name: 'IndexPage',
  components: {CustomButton},
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  overflow-x: hidden;

  .title-section {
    height: 764px;
    background: linear-gradient(0deg, rgba(35, 38, 45, 0.9), rgba(35, 38, 45, 0.9)), url('@/assets/img/background.jpg');
    backdrop-filter: blur(5px);
    padding-top: 84px;

    &-left {
      width: 40%;
      height: 100%;
      .info-text {
          font-weight: 700;
          font-size: 40px;
          margin-bottom: 28px;
        }
    }
    &-right {
      width: 60%;
      height: 100%;

      .img {
        background-size: cover;
        &.first {
          margin: auto auto -64px -160px;
          width: calc(1038px * 0.8);
          height: calc(950px * 0.8);
          animation: first-img  2s;
        }
        &.second {
          margin: auto auto 160px -328px;
          width: calc(641px * 0.7);
          height: calc(556px * 0.7);
          animation: second-img 2.5s ;

        }
        &.third {
          margin: auto auto 160px -168px;
          width: calc(641px * 0.7);
          height: calc(556px * 0.7);
          animation: third-img 3s ;
        }
      }
    }
  }
}

@keyframes first-img {
  0% {
    margin-left: 300px;
    opacity: 0;
  }
  100% {
    margin-left: -160px;
    opacity: 1;
  }
}
@keyframes second-img {
  0% {
    margin-left: -228px;
    opacity: 0;
  }
  40% {
    margin-left: -228px;
    opacity: 0;
  }
  100% {
    margin-left: -328px;
    opacity: 1;
  }
}
@keyframes third-img {
  0% {
    margin-left: -68px;
    opacity: 0;
  }
  51.4% {
    margin-left: -68px;
    opacity: 0;
  }
  100% {
    margin-left: -168px;
    opacity: 1;
  }
}
</style>
