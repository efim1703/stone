<template>
<div class="wrapper">
  <div class="container d-flex">
    <div class="left-block d-flex align-center">
      <div class="icon flex-center"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 479.058 479.058" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" fill="currentColor" data-original="#000000" class=""/></g></svg></div>
      <div class="text">Оставьте свою почту и мы предложим вам <span class="sale">скидку до 20%</span></div>
    </div>
    <div class="right-block d-flex align-center">
      <input type="text" class="input" placeholder="Введите вашу почту">
      <custom-button title="Отправить" color-reverse></custom-button>
    </div>
  </div>
</div>
</template>

<script>
import CustomButton from "~/components/ui/CustomButton.vue";

export default {
  name: "EmailForm",
  components: {CustomButton}
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 24px 0;
  height: 100px;
  box-sizing: border-box;
  background: $primary;

  .left-block {
    width: 50%;
    .icon {
      color: $action;
      svg {
        width: 46px;
        height: 36px;
        path {
          margin-right: auto;
        }
      }
    }
    .text {
      font-weight: 800;
      font-size: 20px;
      margin-left: 14px;
      .sale {
        color: $sale;
      }
    }
  }

  .right-block {
    width: 50%;
    margin-left: 16px;
    .input {
      background: $dark;
      border-radius: 100px;
      color: #fff;
      width: 100%;
      padding: 14px 34px;
      font-size: 14px;
      &::placeholder {
        color: $light;
      }
    }
    button {
      margin-left: 16px;
    }
  }

}
@media (max-width: 1024px) {
  .wrapper {
    height: fit-content;
    .container {
      flex-direction: column;
      align-items: center;
      .left-block {
        width: 80%;
        flex-direction: column;
        align-items: center;
        .text {
          text-align: center;
          margin: 0 0 12px;
        }
      }
      .right-block {
        flex-direction: column;
        align-items: center;
        button {
          margin: 12px 0;
        }
      }
      div {
        margin-left: 0;
      }
    }
  }
}
</style>