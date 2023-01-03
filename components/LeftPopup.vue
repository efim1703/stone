<template>
    <div :class="['calculator d-flex align-center', {'animation-exit': isAnimation}]" >
        <div class="calculator-text">
            РАССЧИТАТЬ СТОИМОСТЬ
        </div>
        <div class="flex-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="40" height="40" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g id="Calculator"><path d="M49,62H15a7.008,7.008,0,0,1-7-7V9a7.008,7.008,0,0,1,7-7H49a7.008,7.008,0,0,1,7,7V55A7.008,7.008,0,0,1,49,62ZM15,4a5.006,5.006,0,0,0-5,5V55a5.006,5.006,0,0,0,5,5H49a5.006,5.006,0,0,0,5-5V9a5.006,5.006,0,0,0-5-5Z" fill="currentColor" data-original="currentColor" class=""/><path d="M35,58H29a3,3,0,0,1-3-3V51a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v4A3,3,0,0,1,35,58Zm-6-8a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V51a1,1,0,0,0-1-1Z" fill="currentColor" data-original="currentColor" class=""/><path d="M21,58H15a3,3,0,0,1-3-3V51a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v4A3,3,0,0,1,21,58Zm-6-8a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V51a1,1,0,0,0-1-1Z" fill="currentColor" data-original="currentColor" class=""/><path d="M49,58H43a3,3,0,0,1-3-3V39a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3V55A3,3,0,0,1,49,58ZM43,38a1,1,0,0,0-1,1V55a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V39a1,1,0,0,0-1-1Z" fill="currentColor" data-original="currentColor" class=""/><path d="M35,46H29a3,3,0,0,1-3-3V39a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v4A3,3,0,0,1,35,46Zm-6-8a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V39a1,1,0,0,0-1-1Z" fill="currentColor" data-original="currentColor" class=""/><path d="M21,46H15a3,3,0,0,1-3-3V39a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v4A3,3,0,0,1,21,46Zm-6-8a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V39a1,1,0,0,0-1-1Z" fill="currentColor" data-original="currentColor" class=""/><path d="M35,34H29a3,3,0,0,1-3-3V27a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v4A3,3,0,0,1,35,34Zm-6-8a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V27a1,1,0,0,0-1-1Z" fill="currentColor" data-original="currentColor" class=""/><path d="M21,34H15a3,3,0,0,1-3-3V27a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v4A3,3,0,0,1,21,34Zm-6-8a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V27a1,1,0,0,0-1-1Z" fill="currentColor" data-original="currentColor" class=""/><path d="M49,34H43a3,3,0,0,1-3-3V27a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v4A3,3,0,0,1,49,34Zm-6-8a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V27a1,1,0,0,0-1-1Z" fill="currentColor" data-original="currentColor" class=""/><path d="M49,20H15a3,3,0,0,1-3-3V9a3,3,0,0,1,3-3H49a3,3,0,0,1,3,3v8A3,3,0,0,1,49,20ZM15,8a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H49a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1Z" fill="currentColor" data-original="currentColor" class=""/><path d="M46,17a3,3,0,0,1-3-3V12a3,3,0,0,1,6,0v2A3,3,0,0,1,46,17Zm0-6a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V12A1,1,0,0,0,46,11Z" fill="currentColor" data-original="currentColor" class=""/></g></g></svg>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'LeftPopup',
        data() {
            return {
                isAnimation: false
            }
        },
        computed: {
            ...mapGetters(['getAnimationCalculator'])
        },
        mounted() {
        },
        watch: {
            getAnimationCalculator(val) {
                this.isAnimation = val
            }
        },
        methods: {
            ...mapActions(['addFavoriteMaterial', 'removeFavoriteMaterial']),
        }
    }
</script>

<style lang="scss" scoped>
    .calculator {
        position: fixed;
        top: 70%;
        left: -238px;
        height: 58px;
        width: fit-content;
        padding: 0 16px;
        font-weight: 900;
        z-index: 10;
        border-radius: 0 100px 100px 0;
        background: $action;
        transition: .8s ease-in;
        cursor: pointer;

        &:hover {
            left: 0px;
        }

        &-text {
            color: #fff;
            margin-right: 16px;
        }

        &.animation-exit {
            animation: exit 1.6s ease-in;
        }
    }
    @keyframes exit {
        25% {
            padding-left: 44px;
        }
        50% {
            padding-left: 16px;
        }
        75% {
            padding-left: 44px;
        }
        100% {
            padding-left: 16px;
        }
    }
</style>
