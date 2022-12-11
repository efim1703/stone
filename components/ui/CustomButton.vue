<template>
<button class="button d-flex align-center">
  <span class="title">
    {{ title }}
  </span>
  <span class="icon">
    <slot name="icon"/>
  </span>
</button>
</template>

<script>

export default {
  name: "CustomButton",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  background: $primary;
  border-radius: 100px;
  padding: 10px 30px;

  .title {
    font-weight: 800;
    align-items: center;
    border-radius: 100px;
    font-size: 12px;
    line-height: 2;
    text-transform: uppercase;
    letter-spacing: .05em;

  }
  .icon {
    margin-left: 12px;
    width: 15px;
    height: 15px;
    svg {
      width: 15px;
      height: 15px;
    }
  }

}
</style>
