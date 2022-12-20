<template>
  <div class="page">
    <TitleSection />
    <div class="container back p-relative">
      <AboutUs />
      <Portfolio />
    </div>
    <EmailForm/>
    <div class="container">
      <TopCards />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    async fetch() {
      const data = JSON.stringify({limit:3, offset:0})
      const response = await this.$axios.post("/api/projects/get", {limit:3, offset:0});
      console.log(response.data.data.projects)
      // return { response };
    },
    data() {
      return {
        pagination: {
          limit: 30,
          offset: 0
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.page {
  overflow: hidden;
  padding-bottom: 200px;

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
  .back {
    &:before {
      content: '';
      background-image: url("@/assets/img/about-us-background2.png");
      width: 310px;
      height: 1216px;
      left: -180px;
      top: 120px;
      position: absolute;
      z-index: -1;
    }
    &:after {
      content: '';
      background-image: url("@/assets/img/about-us-background1.png");
      width: 347px;
      height: 1242px;
      right: -200px;
      top: 20px;
      position: absolute;
      z-index: -1;
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
