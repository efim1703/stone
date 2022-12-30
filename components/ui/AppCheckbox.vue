<template>
    <div class="checkbox">
        <input
            name="cssCheckbox"
            :id="item.id"
            type="checkbox"
            :checked="item.checked"
            @change="item.checked = !item.checked"
            class="css-checkbox"
        >
        <label :for="item.id">{{ item.name }}</label>
    </div>
</template>

<script>
export default {
    name: 'AppCheckbox',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.css-checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}

.css-checkbox + label {
    position: relative;
    font-size: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    height: 16px;
    color: rgb(255, 255, 255);
}

.css-checkbox + label::before {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    margin-right: 12px;
    width: 14px;
    height: 14px;
    background-color: rgb(35, 38, 45);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(255, 255, 255);
    border-radius: 0px;
    box-shadow: none;
}

.css-checkbox:checked + label::after {
    content: " ";
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+");
    background-repeat: no-repeat;
    background-size: 10px 10px;
    background-position: center center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    left: 0px;
    top: 0px;
    text-align: center;
    background-color: transparent;
    font-size: 10px;
    height: 16px;
    width: 16px;
}
</style>
