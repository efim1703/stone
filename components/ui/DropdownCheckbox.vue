<template>
    <div class="dropdown">
        <div class="dropdown-title" @click="isOpen = !isOpen">
            <p>{{ title }}</p>
            <svg :class="['dropdown-icon',{ rotate:isOpen }]" xmlns="http://www.w3.org/2000/svg" width="10" height="6"
                 fill="none">
                <path fill="#fff"
                      d="M4.99997 5.85018c-.17922 0-.35842-.06843-.49505-.205L.205141 1.34536c-.2735215-.27352-.2735215-.716988 0-.990399.273412-.2734114.716792-.2734114.990339 0L4.99997 4.15968 8.80449.355094c.27352-.2734116.71686-.2734116.99025 0 .27366.273411.27366.716876 0 .990406L5.49503 5.64531c-.13671.1366-.3159.20487-.49506.20487Z"/>
            </svg>
        </div>
        <transition name="fade">
            <div class="sub-menu" v-if="isOpen">
                <app-checkbox
                    v-for="item in itemsList"
                    :key="item.id"
                    :item="item"
                    class="sub-menu-item"
                />
            </div>
        </transition>
    </div>
</template>

<script>
    import AppCheckbox from '~/components/ui/AppCheckbox.vue';

    export default {
        name: 'DropdownCheckbox',
        components: { AppCheckbox },
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
                isOpen: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';

    .dropdown {
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        &-title {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

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

        .rotate {
            transform: rotate(180deg);
        }
    }

    .sub-menu {
        &-item:not(:last-child) {
            margin-bottom: 10px;
        }

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    .fade-enter-active {
        transition: opacity .5s;
    }

    .fade-enter {
        opacity: 0;
    }
</style>
