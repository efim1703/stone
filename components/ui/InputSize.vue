<template>
<div class="d-flex align-center flex-column">
  <span class="title">
    {{ title }}
  </span>
  <input
      type="number"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="input"
  >

</div>
</template>

<script>

export default {
  name: "CustomButton",
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      required: true
    },
  }
}
</script>

<style scoped lang="scss">
.title {
  font-weight: 800;
  align-items: center;
  font-size: 12px;
  line-height: 2;
  text-transform: uppercase;
  letter-spacing: .05em;
}
.input {
  border-radius: 100px;
  &:hover {
    cursor: pointer;
  }

}

</style>
