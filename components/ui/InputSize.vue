<template>
    <div class="d-flex align-center flex-column">
  <span class="title">
    {{ title }}
  </span>
        <input
            type="number"
            :value="value"
            @input="$emit('input', Number($event.target.value || 0))"
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
    font-weight: 400;
    align-items: center;
    font-size: 12px;
    line-height: 2;
    letter-spacing: .05em;
    font-size: 18px;
    margin-bottom: 8px;
}

.input {
    box-sizing: border-box !important;
    width: 80px;
    height: 60px;
    padding: 10px;
    text-align: center;
    background: transparent;
    border: 1px solid $light;
    color: $light;
    cursor: pointer;
    font-size: 20px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>
