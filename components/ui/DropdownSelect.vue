<template>
    <div class="dropdown" @click="toggleDropdown">
        <p :class="{ 'title-active': isTitleChecked }"> Сортировка {{ title }}</p>
        <svg :class="[ 'dropdown-icon', { 'icon-active': isTitleChecked }]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 612.021 612.021" style="enable-background:new 0 0 20 20" xml:space="preserve">
            <g id="_x38__37_"><g><path d="M590.927,517.491H337.79c-11.645,0-21.095,9.45-21.095,21.116c0,11.665,9.45,21.115,21.095,21.115l253.137-0.611     c11.645,0,21.095-8.839,21.095-20.504C612.021,526.941,602.592,517.491,590.927,517.491z M295.601,52.88l295.326-0.042     c11.645,0,21.095-9.408,21.095-21.074s-9.45-21.116-21.095-21.116H295.601c-11.645,0-21.095,9.45-21.095,21.116     S283.956,52.88,295.601,52.88z M331.188,396.745c-8.27-8.312-21.686-8.312-29.955,0L190.127,524.6V10.648h-42.189v514.711     L36.156,396.745c-8.269-8.312-21.686-8.312-29.954,0c-8.27,8.312-8.27,21.77,0,30.06l146.439,168.526     c4.409,4.43,10.273,6.307,16.032,6.012c5.779,0.295,11.623-1.582,16.031-6.012l146.44-168.526     C339.457,418.515,339.457,405.057,331.188,396.745z M590.927,137.364H295.601c-11.645,0-21.095,9.451-21.095,21.116     c0,11.666,9.45,20.926,21.095,20.926h295.326c11.645,0,21.095-9.261,21.095-20.926     C612.021,146.815,602.592,137.364,590.927,137.364z M590.927,264.059H295.601c-11.645,0-21.095,9.451-21.095,21.116     c0,11.666,9.45,20.778,21.095,20.778l295.326,0.338c11.645,0,21.095-9.451,21.095-21.116     C612.021,273.531,602.592,264.059,590.927,264.059z M590.927,390.775H422.169c-11.645,0-21.095,9.45-21.095,21.115     c0,11.666,9.45,20.652,21.095,20.652h168.758c11.645,0,21.095-8.986,21.095-20.652     C612.021,400.226,602.592,390.775,590.927,390.775z" fill="currentColor" data-original="#ffffff"/></g></g>
        </svg>
        <svg :class="['dropdown-arrow-icon',{ rotate:isOpen }]" xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none">
            <path fill="#fff"
                  d="M4.99997 5.85018c-.17922 0-.35842-.06843-.49505-.205L.205141 1.34536c-.2735215-.27352-.2735215-.716988 0-.990399.273412-.2734114.716792-.2734114.990339 0L4.99997 4.15968 8.80449.355094c.27352-.2734116.71686-.2734116.99025 0 .27366.273411.27366.716876 0 .990406L5.49503 5.64531c-.13671.1366-.3159.20487-.49506.20487Z"/>
        </svg>
        <transition name="fade">
                <div class="sub-menu" v-if="isOpen">
                    <div class="sub-menu-close-area" />
                    <div
                        v-for="item in itemsList"
                        :key="item.id"
                        @click="$emit('item-checked',item.id)"
                        :class="['sub-menu-item', { 'item-active': item.checked }]"
                    >
                        {{ item.name }}
                    </div>
                </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'DropdownSelect',
    props: {
        title: {
            type: String,
            required: true
        },
        itemsList: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isOpen: false,
            initialTitle: this.title
        }
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen
        },
        close (e) {
            if (!this.$el.contains(e.target)) {
                this.isOpen = false
            }
        }
    },
    computed: {
        isTitleChecked: function() {
            return this.title != this.initialTitle;
        }
    },
    mounted () {
        document.addEventListener('click', this.close)
    },
    beforeDestroy () {
        document.removeEventListener('click', this.close)
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
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            text-transform: uppercase;

            @media (max-width: 768px) {
                display: none;
            }
        }

        &-icon {
            display: none;
            width: 20px;
            color: white;

            @media (max-width: 768px) {
                display: block;
            }
        }

        &-arrow-icon {
            transition: transform 0.3s ease;

            @media (max-width: 768px) {
                display: none;
            }
        }
    }

    .sub-menu-wrapper {
        background: red;
    }

    .sub-menu {
        position: absolute;
        top: 24px;
        right: 0;
        padding: 4px;
        width: 220px;
        border: 1px white solid;
        border-radius: 4px;
        background: $primary;
        text-align: center;

        &-item {
            padding: 4px 12px;
            cursor: pointer;
            border-radius: 4px;
            transition: background 0.15s ease ;

            &:hover {

                background: rgba(255, 255, 255, 0.49);
            }
        }
    }

    .rotate {
        transform: rotate(180deg);
    }

    .item-active {
        background: rgba(255, 255, 255, 0.49);
    }

    .title-active {
        color: $action;
    }

    .icon-active {
        color: $action;
    }

    @media (max-width: 768px) {
        .sub-menu {
            top: 32px;
            font-size: 14px;
        }
    }
</style>
