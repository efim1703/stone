<template>
 <div class="dropdown" @click="isOpen = !isOpen">
   <p>{{ title }}</p>
     <svg :class="['dropdown-icon',{ rotate:isOpen }]" xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none">
       <path fill="#fff"
             d="M4.99997 5.85018c-.17922 0-.35842-.06843-.49505-.205L.205141 1.34536c-.2735215-.27352-.2735215-.716988 0-.990399.273412-.2734114.716792-.2734114.990339 0L4.99997 4.15968 8.80449.355094c.27352-.2734116.71686-.2734116.99025 0 .27366.273411.27366.716876 0 .990406L5.49503 5.64531c-.13671.1366-.3159.20487-.49506.20487Z"/>
     </svg>
   <div class="sub-menu" v-if="isOpen">
     <div
       v-for="material in materials"
       :key="material.id"
       class="sub-menu-item"
     >
       {{ material.name }}
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'AppDropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      materials: [
        { id:1, name: 'SomethingSomethingSomething' },
        { id:2, name: 'Something' },
        { id:3, name: 'SomethingSomething' },
        { id:4, name: 'Something' },
        { id:5, name: 'SomethingSomething' },
        { id:6, name: 'Something' },
        { id:7, name: 'SomethingSomething' },
      ],
      isOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/variables.scss';

  .dropdown {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    p {
      font-family: 'Plus Jakarta Sans';
      font-weight: 800;
      font-size: 12px;
      line-height: 15px;
      text-transform: uppercase;
    }

    svg {
      transition: transform 0.3s ease;
    }
  }

  .sub-menu {
    position: absolute;
    top: 26px;
    right: 0;
    padding: 5px;
    border: 1px white solid;
    border-radius: 5px;
    background: $primary;
    text-align: center;

    &-item {
      padding: 5px;
      cursor: pointer;

      transition: background 0.15s ease ;

      &:hover {
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.49);
      }
    }
  }

  .rotate {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    .sub-menu {
      font-size: 14px;
    }
  }
</style>
