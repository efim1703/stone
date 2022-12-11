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
              <custom-button title="Расчитать стоимость">
<!--                <template v-slot:icon>-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g><g><path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" fill="#ffffff" data-original="#000000" class=""/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg>-->
<!--                </template>-->
              </custom-button>
            </div>
          </div>
        </div>
        <div class="title-section-right">
          qq2
        </div>
      </div>
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
          font-size: 40px
        }
    }
    &-right {
      width: 60%;
      height: 100%;
    }
  }
}
</style>
