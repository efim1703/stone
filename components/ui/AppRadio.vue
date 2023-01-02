<template>
    <div>
        <div v-for="item in itemList">
            <label class="radio">
                <input type="radio" :value="item" v-model="selectedItem">
                <span>{{ item.name }}</span>
            </label>
        </div>
        <span v-if="selectedItem!==null">Выбрано: {{ selectedItem.name }}</span></div>
</template>

<script>
    export default {
        name: "AppRadio",
        props: {
            itemList: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                selectedItem: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    $radioSize: 16px;
    $radioBorder: #d1d7e3;
    $radioActive: rgb(106, 108, 110);

    .radio {
        margin: 16px 0;
        display: block;
        cursor: pointer;
        input {
            display: none;
            & + span {
                line-height: $radioSize;
                height: $radioSize;
                padding-left: $radioSize;
                display: block;
                position: relative;
                &:not(:empty) {
                    padding-left: $radioSize + 8;
                }
                &:before,
                &:after {
                    content: "";
                    width: $radioSize;
                    height: $radioSize;
                    display: block;
                    border-radius: 50%;
                    left: 0;
                    top: 0;
                    position: absolute;
                }
                &:before {
                    background: $radioBorder;
                    transition: background 0.2s ease,
                    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
                }
                &:after {
                    background: #fff;
                    transform: scale(0.78);
                    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
                }
            }
            &:checked + span {
                &:before {
                    transform: scale(1.04);
                    background: $radioActive;
                }
                &:after {
                    transform: scale(0.4);
                    transition: transform 0.3s ease;
                }
            }
        }
        &:hover {
            input {
                & + span {
                    &:before {
                        transform: scale(0.92);
                    }
                    &:after {
                        transform: scale(0.74);
                    }
                }
                &:checked + span {
                    &:after {
                        transform: scale(0.4);
                    }
                }
            }
        }
    }

    body {
        min-height: 100vh;
        color: #adafb6;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
