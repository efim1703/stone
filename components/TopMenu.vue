<template>
<header class="top-menu">
  <div class="background" @click="clickByBackdround" v-if="showBurgerDrawer"></div>
  <div class="container d-flex flex-column">
    <div class="top-menu--header">
      <div class="contacts d-flex">
        <div class="contacts__block d-flex align-center">
          <div class="icon flex-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 479.058 479.058" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" fill="#ffffff" data-original="#000000" class=""/></g></svg>
          </div>
          <a href="mailto: example@mail.ru">Email:  gevorg@stol.ru</a>
        </div>
        <div class="contacts__block d-flex align-center">
          <div class="icon email flex-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="m511.451 382.243c-2.467-25.485-23.565-35.105-55.5-49.666-18.545-8.456-41.626-18.98-70.969-35.924a16 16 0 0 0 -18.668 1.93c-49.919 44.651-109.043 27.289-145.494-9.725-36.357-36.918-52.736-96.176-7.372-145.34a16 16 0 0 0 2.119-18.809c-13.054-22.755-22.369-43.074-29.853-59.4-14.516-31.665-25-54.544-48.334-62.542-23.437-8.033-53.226.658-118.053 34.441a35.094 35.094 0 0 0 -18.79 35.005c10.355 97.987 64.254 203.287 147.877 288.887 40.574 41.536 87.252 77 134.986 102.544 51.5 27.564 103.544 43.78 154.683 48.2q1.6.138 3.176.138a34.86 34.86 0 0 0 32-20.713l3.236-7.128c25.37-55.851 36.946-81.341 34.956-101.898zm-64.086 88.664-3.24 7.135a3.046 3.046 0 0 1 -3.283 1.921c-189.365-16.358-387.88-216.151-408.483-411.112a3.018 3.018 0 0 1 1.756-3.269c32.409-16.89 67.137-33.531 86.044-33.531a21.206 21.206 0 0 1 6.842.983c10.341 3.545 18.012 20.277 29.623 45.606 6.674 14.56 14.751 32.182 25.659 52.124-21.39 27.071-30.912 58.523-27.606 91.619 3.221 32.234 18.613 63.815 43.342 88.926 24.757 25.139 56.155 41.044 88.408 44.783a128.391 128.391 0 0 0 14.794.862c27.752 0 54.14-9.218 77.461-27.089 26.244 14.614 47.79 24.438 63.992 31.825 26.844 12.24 36.294 17.106 36.926 23.635 1.165 12.039-11.407 39.721-32.235 85.582z" fill="#ffffff" data-original="#000000"/></g></svg>
          </div>
          <a href="tel: +79894343201">Phone:  +7 989 434 32 01</a>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="top-menu--footer align-center">
      <div class="logo">
        <span>СТОЛЕШНИЦА</span>
      </div>
      <nav :class="['navigation', { 'burger-status': isLaptoop}]" v-if="!isLaptoop || (isLaptoop && showBurgerDrawer)">
        <nuxt-link to="/" active-class="active" exact>ГЛАВНАЯ</nuxt-link>
        <nuxt-link to="portfolio" active-class="active">ПОРТФОЛИО</nuxt-link>
        <nuxt-link to="catalog" active-class="active">КАТАЛОГ</nuxt-link>
        <nuxt-link to="about" active-class="active">О НАС</nuxt-link>
        <nuxt-link to="contact" active-class="active">КОНТАКТЫ</nuxt-link>
      </nav>
      <div v-if="isLaptoop" class="burger flex-center" @click="showBurgerDrawer = !showBurgerDrawer">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1C5 0.447734 5.44773 0 6 0H19C19.5523 0 20 0.447734 20 1C20 1.55227 19.5523 2 19 2H6C5.44773 2 5 1.55223 5 1V1ZM19 6H1C0.447734 6 0 6.44777 0 7C0 7.55227 0.447734 8 1 8H19C19.5523 8 20 7.55227 20 7C20 6.44777 19.5523 6 19 6ZM19 12H10C9.44777 12 9 12.4477 9 13C9 13.5522 9.44777 14 10 14H19C19.5523 14 20 13.5522 20 13C20 12.4477 19.5523 12 19 12Z" fill="white"/></svg>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "TopMenu",
  data() {
    return {
      isLaptoop: false,
      showBurgerDrawer: false
    }
  },
  mounted() {
    window.innerWidth <= 1024 ? this.isLaptoop = true : this.isLaptoop = false
  },
  watch: {
    '$route.path'() {
      this.showBurgerDrawer = false
    }
  },
  methods: {
    clickByBackdround() {
      if (this.showBurgerDrawer) {
        this.showBurgerDrawer = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.top-menu {
  position: absolute;
  top: 0;
  left: 0;
  height: 84px;
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  z-index: 10;

  &--header {
    width: 100%;
    .contacts {
      justify-content: end;
      margin: 12px 0;
      &__block {
        margin-left: 16px;
        a {
          font-size: 12px;
        }
        &:hover {
          cursor: pointer;
        }
        .icon {
          margin-right: 8px;
          svg {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
    @media (max-width:425px) {
      .contacts {
        flex-direction: column;
        align-items: center;
        > &__block {
          margin: 0 0 8px 0;
        }
      }
    }
  }
  .line {
    position: absolute;
    top: 38px;
    left: 0;
    height: 1px;
    width: 100%;
    background: $light;
  }
  @media (max-width:425px) {
    .line {
      top: 58px;
    }
  }
  &--footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .logo {
      span {
        letter-spacing: 0.1em;
      }
    }

    .navigation {
      a {
        letter-spacing: 0.1em;
        margin-left: 24px;
        padding-bottom: 3px;
        border-bottom: 1px solid transparent;
        &:hover, &.active {
          color: $action;
          border-bottom: 1px solid $action;
        }
      }
      &.burger-status {
        position: absolute;
        top: 100px;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        background: #fff;

        a {
          margin-left: 0px;
          margin-bottom: 20px;
          color: $dark;
        }
      }
    }
    .burger {
      margin-left: auto;
      padding: 10px;
      z-index: 5;
    }
  }
}
.background {
  position: absolute;
  background: $dark;
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
}
</style>
