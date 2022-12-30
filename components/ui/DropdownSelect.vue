<template>
    <div class="dropdown" @click="isOpen = !isOpen">
        <p :class="{ 'title-active': isTitleChecked }">{{ title }}</p>
        <svg :class="['dropdown-icon',{ rotate:isOpen }]" xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none">
            <path fill="#fff"
                  d="M4.99997 5.85018c-.17922 0-.35842-.06843-.49505-.205L.205141 1.34536c-.2735215-.27352-.2735215-.716988 0-.990399.273412-.2734114.716792-.2734114.990339 0L4.99997 4.15968 8.80449.355094c.27352-.2734116.71686-.2734116.99025 0 .27366.273411.27366.716876 0 .990406L5.49503 5.64531c-.13671.1366-.3159.20487-.49506.20487Z"/>
        </svg>
        <div class="sub-menu" v-if="isOpen">
            <div
                v-for="item in itemsList"
                :key="item.id"
                @click="$emit('item-checked',item.id)"
                :class="['sub-menu-item', { 'item-active': item.checked }]"
            >
                {{ item.name }}
            </div>
        </div>
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
    computed: {
        isTitleChecked: function() {
            return this.title != this.initialTitle;
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
            font-weight: 600;
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
        top: 24px;
        right: 0;
        padding: 4px;
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

    @media (max-width: 768px) {
        .sub-menu {
            font-size: 14px;
        }
    }
</style>
